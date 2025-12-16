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
      <Container>
        <Flex
          px={{ base: 50, lg: 100 }}
          className={classes.inner}
          direction={{ base: "column", md: "row-reverse" }}
          justify={{ base: "space-between" }}
          align="center"
        >
          <Image
            alt="Woman rock climbing"
            src="/climbing.jpg"
            className={classes.image}
            mt={{ base: 50 }}
            style={{ zIndex: 1 }}
          />

          <Box className={classes.content} pt={{ base: 50, md: 0 }}>
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
                component="a"
                href="/contact"
              >
                Let&apos;s Go
              </Button>
            </Group>
          </Box>
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
