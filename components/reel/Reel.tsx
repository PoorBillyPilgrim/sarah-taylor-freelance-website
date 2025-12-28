import { Button, Container, Flex, Stack, Text, Title } from "@mantine/core";
import Section from "../section/Section";
import SectionImage from "../images/SectionImage";

const Reel = () => {
  return (
    <Section id="reel-em-in" bg="pink.1">
      <Container>
        <Flex
          direction={{ base: "column", md: "row-reverse" }}
          justify="space-between"
          align="center"
        >
          <SectionImage
            variant="md"
            alt="woman fishing"
            src="/images/cta.png"
          />
          <Stack>
            <Title c="orange.5" order={2}>
              Let&apos;s reel &apos;em in
            </Title>
            <Text>
              Ready to catch new customers? I can help you hook their attention
              and reel in the sale with the right content.
            </Text>
            <Button
              color="green.9"
              style={{ width: "fit-content" }}
              radius="md"
              size="md"
              component="a"
              href="/contact"
            >
              Let&apos;s dive in
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Section>
  );
};

export default Reel;
