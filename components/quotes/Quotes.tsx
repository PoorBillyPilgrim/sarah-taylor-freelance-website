import { Carousel } from "@mantine/carousel";
import Quote from "./Quote";
import { Box } from "@mantine/core";
import classes from "./Quotes.module.css";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const quotes = [
  {
    id: 1,
    avatar: "/images/kristi-gaffney_headshot.jpg",
    alt: "",
    bg: "white",
    quote:
      '"Sarah is a rare mix of strategic thinker, strong writer and thoughtful collaborator who makes every project better. She helped shape our school’s social media into a true marketing channel and played a key role in the editorial planning, writing and production of our school magazine, always keeping brand, audience and goals in view. What makes Sarah stand out is her ability to see the big picture while still delivering excellent content. She brings insight, strategic thinking and creativity to every project, making her far more than a writer. She is a true content and marketing partner, and any business would be lucky to have her on their team."',
    author: "Kristi Gaffney",
    title:
      "Director of Marketing & Communications, St. Martin’s Episcopal School",
  },
  {
    id: 2,
    avatar: "/images/marla.jpg",
    alt: "",
    bg: "green.9",
    quote:
      '"Sarah quickly learned our brand voice and became a trusted partner on donor communications, including impact report articles, fundraising appeals, and speeches. She had a real gift for interviewing staff and community members—asking thoughtful questions and turning those conversations into compelling, authentic content. Smart, fast, creative, and highly adaptable, she consistently delivered strong work."',
    author: "Marla Goldberg",
    title: "Director of Annual Giving, Stroum JCC",
  },
  {
    id: 3,
    avatar: "/images/andrea-white_headshot.jpg",
    alt: "",
    bg: "white",
    quote:
      'Sarah made a huge difference in the impact and consistency of Georgia Rivers branding and communication. Prior to her arrival, individual programs often developed their own independent branding and marketing plans and did not coordinate across the organization very well. Sarah streamlined, prioritized and managed overlapping and sometimes conflicting internal brands to develop a unified messaging approach across multiple programs and initiatives. She developed a system for content management and regional marketing that supported multiple programs, a variety of advocacy initiatives, and a plethora of overlapping events with consistent branding and strategic message management. Sarah is a gifted marketing and content strategist and a wonderful co-worker. Any company will be lucky to have her on their team!"',
    author: "Andrea White",
    title: "Founder, Cross Currents Leadership",
  },
  {
    id: 4,
    avatar: "/images/dana.jpeg",
    alt: "",
    bg: "green.9",
    quote:
      '"Sarah provides quality work with attention to detail and creativity to match project goals. She is also a joy to work with!"',
    author: "Dana Skelton",
    title: "Director of Operations, Georgia Rivers",
  },
];

const Quotes = () => {
  const autoplay = useRef(Autoplay({ delay: 15000 }));
  return (
    <Box component="section" id="testimonials">
      <Carousel
        classNames={classes}
        withIndicators
        style={{ minHeight: 400 }}
        emblaOptions={{
          loop: true,
        }}
        slideSize={{ base: "100%" }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
      >
        {quotes.map(quote => (
          <Carousel.Slide key={quote.id} bg={quote.bg}>
            <Quote {...quote} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};

export default Quotes;
