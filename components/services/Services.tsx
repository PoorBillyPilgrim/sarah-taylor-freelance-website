import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faClipboardCheck,
  faDesktop,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Icon from "../icon/Icon";

const cards = [
  {
    id: 1,
    icon: faDesktop,
    title: "Copywriting",
    text: "Stand out and sell more with action-inspiring web copy, objection-busting email sequences, and expert-level marketing literature.",
  },
  {
    id: 2,
    icon: faPencil,
    title: "Content Writing",
    text: "Build brand awareness and authority with SEO-friendly blog posts, attention-grabbing newsletters, and proof-packed case studies.",
  },
  {
    id: 3,
    icon: faClipboardCheck,
    title: "Content Strategy + Consulting",
    text: "Ensure every piece of content is empowered by purpose and delivers the desired results.",
  },
];

const Card = ({
  icon,
  title,
  text,
}: {
  icon: IconProp;
  title: string;
  text: string;
}) => {
  return (
    <Grid gutter={{ base: 60 }}>
      <Grid.Col span={{ base: 12, sm: "auto" }}>
        <Icon icon={icon} size="5x" />
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 10 }}>
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
    <Box id="services" component="section" bg="green.9">
      <Container size="xl" px={{ base: 50, lg: 100 }} py={{ base: 50 }}>
        <Title order={2} c="white" pb={{ base: 50 }}>
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

        <Center pt={{ base: 50 }}>
          <Button component="a" href="/contact">
            Get a custom quote
          </Button>
        </Center>
      </Container>
    </Box>
  );
};

export default Services;
