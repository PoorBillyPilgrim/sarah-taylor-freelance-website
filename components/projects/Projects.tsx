import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import classes from "./Projects.module.css";
import Link from "next/link";
import { getSrc } from "../../app/utils";

const projects = [
  {
    id: 1,
    src: "/images/website_copy.png",
    href: "https://solar.solterra.com/backup-battery/",
    target: "_blank",
    alt: "laptop displaying a website",
    title: "Website Copy",
    text: "Service page for Solterra Solar",
  },
  {
    id: 2,
    src: "/images/blog.png",
    href: "https://sunpathelectric.com/blogs/sun-path/celebrating-temple-beth-hatfiloh-s-solar-story",
    alt: "A blog post",
    title: "Blog",
    text: "Case study-style content for Sun Path Electric",
  },
  {
    id: 3,
    src: "/images/marketing_lit.png",
    href: "/marketing-literature.pdf",
    alt: "brochures arranged in a fan",
    title: "Marketing Literature",
    text: "Summer J Camp Brochure for Stroum Jewish Community Center",
  },
  {
    id: 4,
    src: "/images/article.png",
    href: "https://issuu.com/st.martinsepiscopalschool/docs/smes_patterns_summer_2021/37",
    alt: "screenshot of an article",
    title: "Article",
    text: "St. Martin's Episcopal School Magazine",
  },
  {
    id: 5,
    src: "/images/presser.png",
    href: "/press-release.pdf",
    alt: "laptop displaying an article",
    title: "Press Release",
    text: "Georgia River Guide app launch announcement (X media hits)",
  },
  {
    id: 6,
    src: "/images/ux_copy.png",
    href: "/ux-copy.pdf",
    alt: "a cell phone displaying an app",
    title: "UX Copy",
    text: "Onboarding slide + in-app content for Georgia River Guide",
  },
];

const Project = ({
  src,
  alt,
  title,
  text,
  href,
  target,
}: {
  src: string;
  alt: string;
  title: string;
  text: string;
  href: string;
  target?: string;
}) => {
  return (
    <UnstyledButton
      component={Link}
      href={href}
      target={target ?? "_self"}
      mt={{ base: "md", sm: 0 }}
    >
      <Stack align="center">
        <Image
          className={classes.image}
          height="280px"
          width="280px"
          src={getSrc(src)}
          alt={alt}
        />

        <Title order={3} c="orange.5">
          {title}
        </Title>
        <Text c="white" ta="center">
          {text}
        </Text>
      </Stack>
    </UnstyledButton>
  );
};

const Projects = () => {
  return (
    <Box id="work" component="section" bg="green.9">
      <Container px={{ base: 50, lg: 100 }} py={{ base: 50 }}>
        <Title order={2} c="white" pb={{ base: 50 }}>
          Explore my latest project wins
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
          {projects.map(project => (
            <Project key={project.id} {...project} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Projects;
