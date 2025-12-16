import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import classes from "./Projects.module.css";

const projects = [
  {
    id: 1,
    src: "/climbing.jpg",
    alt: "Woman rock climbing",
    title: "Website Copy",
    text: "Service page for Solterra Solar",
  },
  {
    id: 2,
    src: "/climbing.jpg",
    alt: "Woman rock climbing",
    title: "Blob",
    text: "Case study-style content for Sun Path Electric",
  },
  {
    id: 3,
    src: "/climbing.jpg",
    alt: "Woman rock climbing",
    title: "UX Copy",
    text: "Onboarding slide + in-app content for Georgia River Guide",
  },
  {
    id: 4,
    src: "/climbing.jpg",
    alt: "Woman rock climbing",
    title: "Article",
    text: "St. Martin's Episcopal School Magazine",
  },
  {
    id: 5,
    src: "/climbing.jpg",
    alt: "Woman rock climbing",
    title: "Press Release",
    text: "Georgia River Guide app launch announcement (X media hits)",
  },
  {
    id: 6,
    src: "/climbing.jpg",
    alt: "Woman rock climbing",
    title: "Marketing Literature",
    text: "Summer J Camp Brochure for Stroum Jewish Community Center",
  },
];

const Project = ({
  src,
  alt,
  title,
  text,
}: {
  src: string;
  alt: string;
  title: string;
  text: string;
}) => {
  return (
    <Stack align="center">
      <Box h={300} w={300} bd="solid 10px orange.5" bdrs="100%">
        <Image
          className={classes.image}
          height="280px"
          width="280px"
          radius="100%"
          src={src}
          alt={alt}
        />
      </Box>

      <Title order={3} c="orange.5">
        {title}
      </Title>
      <Text c="white">{text}</Text>
    </Stack>
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
