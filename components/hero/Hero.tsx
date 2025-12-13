import { Button, Container, Group, Image, Text, Title } from "@mantine/core";
import classes from "./Hero.module.css";

export function Hero() {
  console.log(classes);
  return (
    <Container size="xl">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Copywriter for adventurous brands
          </Title>
          <Text c="dimmed" mt="md">
            Get noticed and grow your business wth copy that converts, content
            that builds credibility, and strategy that scales
          </Text>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Let's Go
            </Button>
          </Group>
        </div>
        <Image src="/hero.svg" className={classes.image} />
      </div>
    </Container>
  );
}
