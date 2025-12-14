import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faChartBar,
  faClock,
  faComments,
} from "@fortawesome/free-regular-svg-icons";
import { Container, Grid, Stack, Text, Title } from "@mantine/core";
import { ReactNode } from "react";
import Icon from "../icon/Icon";

const cards = [
  {
    id: 1,
    icon: faComments,
    title: "Find your edge",
    text: (
      <Text>
        Stand out as an industry expert with insight-rich content that inspires
        trust and fits your brand like a glove.
      </Text>
    ),
  },
  {
    id: 2,
    icon: faClock,
    title: "Move faster",
    text: (
      <Text>
        Save time (and resources and money) by hiring a specialist that sticks
        the landing every <em>time</em> no in-house hiring or training required.
      </Text>
    ),
  },
  {
    id: 3,
    icon: faChartBar,
    title: "Go bigger",
    text: (
      <Text>
        Sell more and scale your business with messaging that clearly explains
        benefits and leaves doubts in the dust.
      </Text>
    ),
  },
];

const Card = ({
  icon,
  text,
  title,
}: {
  icon: IconProp;
  text: ReactNode;
  title: string;
}) => {
  return (
    <Stack gap="md">
      <Icon icon={icon} size="6x" />
      <Title order={3}>{title}</Title>
      {text}
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
        <Grid pt={{ base: 100 }} justify="space-between">
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
