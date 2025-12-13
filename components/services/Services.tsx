import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Container, Title } from "@mantine/core";

const Card = ({
  icon,
  title,
  text,
}: {
  icon: IconProp;
  title: string;
  text: string;
}) => {
  return <div></div>;
};

const Services = () => {
  return (
    <Container
      id="services"
      component="section"
      size="xl"
      bg="green.9"
      px={{ base: 50, lg: 100 }}
      py={{ base: 50 }}
    >
      <Title order={2} c="white">
        Services
      </Title>
    </Container>
  );
};

export default Services;
