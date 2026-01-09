import { Container, Grid, Stack, Text, Title } from "@mantine/core";
import { ReactNode } from "react";
import Icon from "../images/Icon";

const cards = [
  {
    id: 1,
    icon: "/icons/find_your_edge.png",
    title: "Find your edge",
    text: "Stand out in your industry with insight-rich content that inspires trust and shows off your expertise.",
  },
  {
    id: 2,
    icon: "/icons/move_faster.png",
    title: "Move faster",
    text: "Save time with a specialist that sticks the landing every time (no in-house hiring or agency fees required).",
  },
  {
    id: 3,
    icon: "/icons/go_bigger.png",
    title: "Go bigger",
    text: "Sell more and scale your business with crystal clear messaging that attracts the right buyers.",
  },
];

const Card = ({
  icon,
  text,
  title,
}: {
  icon: string;
  text: ReactNode;
  title: string;
}) => {
  return (
    <Stack gap={0}>
      <Icon variant="help" src={icon} />
      <Title order={3}>{title}</Title>
      <Text pt={{ base: "lg" }}>{text}</Text>
    </Stack>
  );
};

const Help = () => {
  return (
    <Container
      component="section"
      size="xl"
      px={{ base: 50, lg: 100 }}
      pt={{ base: 50, md: 0 }}
      pb={{ base: 50 }}
    >
      <Title order={2}>I can help you...</Title>
      <Container size="md">
        <Grid pt={{ base: 25 }} justify="space-between">
          {cards.map(card => (
            <Grid.Col key={card.id} span={{ base: 12, sm: 4, md: 3 }}>
              <Card icon={card.icon} title={card.title} text={card.text} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Help;
