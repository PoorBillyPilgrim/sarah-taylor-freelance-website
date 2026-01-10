import Quote from "./Quote";

const quotes = [
  {
    id: 1,
    avatar: "/images/dana.jpeg",
    alt: "",
    bg: "white",
    quote:
      '"Sarah provides quality work with attention to detail and creativity to match project goals. She is also a joy to work with!"',
    author: "Dana Skelton",
    title: "Director of Operations, Georgia Rivers",
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
  // {
  //   id: 3,
  //   avatar: "/images/about.png",
  //   alt: "",
  //   bg: "white",
  //   quote: '"My website improved so much after Sarah worked her magic"',
  //   author: "Tyler Jones",
  //   title: "Software Engineer, Lyrarsis",
  // },
];

const Quotes = () => {
  return quotes.map(quote => <Quote key={quote.id} {...quote} />);
};

export default Quotes;
