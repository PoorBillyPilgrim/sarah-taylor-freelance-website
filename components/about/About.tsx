import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Section from "../section/Section";
import classes from "./About.module.css";

const About = () => {
  return (
    <Section id="about" bg="white">
      <Container size="md">
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            {/* <Center> */}
            <Image
              className={classes.image}
              src="/grand-canyon.jpg"
              alt="Woman fishing"
              radius="100%"
            />
            {/* </Center> */}
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack align="flex-start">
              <Title order={2}>About Me</Title>
              <Text>This is all about me</Text>
            </Stack>
          </Grid.Col>
        </Grid>
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack>
              <Title order={2} c="orange.5" fs="4rem">
                Let's dive in
              </Title>
              <Text>This is all about me</Text>
              <Button
                component="a"
                href="mailto:hello@sarahmtaylor.com"
                color="green.9"
                w="fit-content"
              >
                Email me
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Center>
              <Image
                className={classes.image}
                src="/profile.jpg"
                alt="Woman headshot"
                radius="100%"
              />
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
    </Section>
  );
};

export default About;
