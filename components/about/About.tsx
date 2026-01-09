import { Fragment } from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import Section from "../section/Section";
import SectionImage from "../images/SectionImage";
import Button from "../buttons/Button";
import Icon from "../images/Icon";

const basePath: string =
  process.env.NEXT_PUBLIC_SITE_ENV === "staging"
    ? "/sarah-taylor-freelance-website"
    : "";

const About = () => {
  return (
    <Fragment>
      <Section id="reel-em-in" bg="pink.1">
        <Container>
          <Flex
            direction={{ base: "column", md: "row-reverse" }}
            justify="space-between"
            align="center"
          >
            <SectionImage
              alt="woman fishing"
              src="/images/cta.png"
              mb={{ base: 25, md: 0 }}
            />
            <Stack>
              <Title c="orange.5" order={2}>
                Let&apos;s reel &apos;em in
              </Title>
              <Text>
                Ready to catch new customers? I can help you hook their
                attention and reel in the sale with the right content.
              </Text>
              <Button
                color="green.9"
                w={{ base: "inherit", sm: "fit-content" }}
                component="a"
                href="/contact"
              >
                Let&apos;s dive in
              </Button>
            </Stack>
          </Flex>
        </Container>
      </Section>

      <Section id="about" bg="white">
        <Container>
          <Grid justify="center">
            <Grid.Col pos="relative" span={{ base: "auto" }}>
              <SectionImage
                variant="md"
                src="/images/about.png"
                alt="Sarah Taylor"
              />
              <Image
                visibleFrom="md"
                h={200}
                w={200}
                pos="absolute"
                bottom={20}
                right={0}
                src={`${basePath}/icons/squiggly_arrow.png`}
                alt=""
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack>
                <Box>
                  <Title order={2} lh="1">
                    More about me
                  </Title>
                  <Icon
                    variant="about"
                    src="/icons/underline.png"
                    w={{ base: 250, sm: 320 }}
                  />
                </Box>

                <Text>
                  I can help guide your customers through the sales funnel with
                  useful, artistic, and empathetic content. With close to a
                  decade of marketing experience, I’ve held titles like Director
                  of Communications and Senior Content Writer for brands with
                  big missions in industries like climate tech, nonprofit, and
                  education.
                </Text>

                <Text>
                  I pride myself on my professionalism, personalization, and
                  perfectionist standards that ensure I consistently deliver
                  excellence for my clients. If you’re ready to reclaim some
                  time and see bigger marketing results, I’d love to take some
                  tasks off your plate.
                </Text>
                <Button
                  component="a"
                  href="mailto:hello@sarahmtaylor.com"
                  w={{ base: "inherit", sm: "fit-content" }}
                >
                  Let&apos;s chat
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Section>
    </Fragment>
  );
};

export default About;
