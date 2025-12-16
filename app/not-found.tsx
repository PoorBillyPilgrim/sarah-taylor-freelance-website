"use client";
import { Stack, Text, Title } from "@mantine/core";
import Section from "../components/section/Section";

const NotFound = () => {
  return (
    <Section id="not-found" bg="white">
      <Stack justify="center" align="center">
        <Title order={1}>Sorry!</Title>
        <Text>Nothing to see here...</Text>
      </Stack>
    </Section>
  );
};
export default NotFound;
