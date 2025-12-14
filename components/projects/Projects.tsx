import { Box, Container, Title } from "@mantine/core";

const Projects = () => {
  return (
    <Box id="work" component="section" bg="green.9">
      <Container size="xl" px={{ base: 50, lg: 100 }} py={{ base: 50 }}>
        <Title order={2} c="white" pb={{ base: 50 }}>
          Explore my latest project wins
        </Title>
      </Container>
    </Box>
  );
};

export default Projects;
