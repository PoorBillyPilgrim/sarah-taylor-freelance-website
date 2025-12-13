import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import classes from "./Hero.module.css";

export function Hero() {
  return (
    <Box component="section" bg="green.9" pos="relative">
      <Container size="xl">
        <Flex
          px={{ base: 50, lg: 100 }}
          className={classes.inner}
          direction={{ base: "column", md: "row-reverse" }}
          justify={{ base: "space-between" }}
          align="center"
        >
          <Image
            src="/climbing.jpg"
            className={classes.image}
            radius="100%"
            pt={{ base: 30 }}
            style={{ zIndex: 1 }}
          />

          <div className={classes.content}>
            <Title className={classes.title} c="white">
              Copywriter for <em>adventurous</em> brands
            </Title>
            <Text c="white" mt="md">
              Get noticed and grow your business wth copy that converts, content
              that builds credibility, and strategy that scales
            </Text>

            <Group mt={30}>
              <Button
                color="orange.5"
                radius="md"
                size="md"
                className={classes.control}
              >
                Let's Go
              </Button>
            </Group>
          </div>
        </Flex>
      </Container>
      <Box
        visibleFrom="md"
        w="100%"
        bg="white"
        h="100"
        px="0"
        pos="absolute"
        bottom="0"
        left="0"
      />
    </Box>
  );
}
