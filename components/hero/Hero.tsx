import { Box, Container, Flex, Group, Text, Title } from "@mantine/core";
import classes from "./Hero.module.css";

import Button from "../buttons/Button";
import SectionImage from "../images/SectionImage";

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
          <SectionImage
            alt="Woman rock climbing"
            src="/images/hero.png"
            mt={{ base: 50 }}
            style={{ zIndex: 1 }}
          />

          <Box className={classes.content} pt={{ base: 50, md: 0 }}>
            <Title className={classes.title} c="white">
              Copywriter for <em>adventurous</em> brands
            </Title>
            <Text c="white" mt="md">
              Get noticed and grow your business wth action-igniting copy,
              cred-building content, and scale-ready strategy.
            </Text>

            <Group mt={30}>
              <Button
                color="orange.5"
                radius="md"
                size="md"
                component="a"
                href="/contact"
              >
                Let&apos;s go
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
