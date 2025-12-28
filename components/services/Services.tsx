import { Center, Container, Grid, Stack, Text, Title } from "@mantine/core";
import Section from "../section/Section";
import Icon from "../images/Icon";
import Button from "../buttons/Button";

const cards = [
  {
    id: 1,
    icon: "/icons/copywriting.png",
    title: "Copywriting",
    text: "Get noticed and grow your bottom line with action-inspiring web copy, objection-busting email sequences, and expert-level marketing literature.",
  },
  {
    id: 2,
    icon: "/icons/content_writing.png",
    title: "Content Writing",
    text: "Build brand awareness and authority with SEO-friendly blog posts, attention-grabbing newsletters, and proof-packed case studies.",
  },
  {
    id: 3,
    icon: "/icons/content_strategy.png",
    title: "Content Strategy + Consulting",
    text: "Tired of wasting time and resources on content that doesn’t grow your business? Get the results you’re after with strategy custom fit to your brand and business goals.",
  },
];

const Card = ({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) => {
  return (
    <Grid h={{ base: "auto", sm: 175 }}>
      <Grid.Col span={{ base: 12, sm: 2 }}>
        <Icon variant="services" src={icon} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: "auto" }}>
        <Stack>
          <Title order={3} c="white">
            {title}
          </Title>
          <Text c="white">{text}</Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

const Services = () => {
  return (
    <Section id="services" bg="green.9">
      <Title order={2} c="white" pb={{ base: 40 }}>
        Services
      </Title>

      <Container size="md">
        {cards.map(card => (
          <Card
            key={card.id}
            icon={card.icon}
            title={card.title}
            text={card.text}
          />
        ))}
      </Container>

      <Center mt={50}>
        <Button component="a" href="/contact">
          Get a custom quote
        </Button>
      </Center>
    </Section>
  );
};

export default Services;
