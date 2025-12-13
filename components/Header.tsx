import { Burger, Collapse, Container, Group, NavLink } from "@mantine/core";
import NavLinks from "../components/NavLinks";
import { useDisclosure } from "@mantine/hooks";
import { HEADER_OFFSET } from "../app/page";

const Header = () => {
  const [opened, handlers] = useDisclosure(false);
  return (
    <Container size="xl">
      <Group mih={HEADER_OFFSET} justify="space-between">
        <div>Sarah M. Taylor</div>
        <Burger hiddenFrom="sm" opened={opened} onClick={handlers.toggle} />
        <NavLinks visibleFrom="sm" />
      </Group>
      <Collapse in={opened} hiddenFrom="sm">
        <NavLink label="About" href="#about" />
        <NavLink label="Services" href="#services" />
        <NavLink label="Work" href="#work" />
        <NavLink label="Contact" href="#contact" />
      </Collapse>
    </Container>
  );
};

export default Header;
