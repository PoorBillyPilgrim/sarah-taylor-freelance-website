"use client";
import {
  Anchor,
  AppShell,
  Burger,
  Collapse,
  Container,
  Group,
  NavLink,
} from "@mantine/core";
import NavLinks from "../components/NavLinks";
import { useDisclosure } from "@mantine/hooks";

const Header = () => {
  const [opened, handlers] = useDisclosure(false);
  return (
    <AppShell.Header withBorder px={{ base: 15, lg: 100 }}>
      <Container size="xl">
        <Group mih="var(--header-height)" justify="space-between">
          <Anchor href="/" c="black">
            Sarah M. Taylor
          </Anchor>
          <Burger hiddenFrom="sm" opened={opened} onClick={handlers.toggle} />
          <NavLinks visibleFrom="sm" />
        </Group>
        <Collapse in={opened} hiddenFrom="sm" pb={{ base: 20 }}>
          <NavLink label="About" href="/#about" />
          <NavLink label="Services" href="/#services" />
          <NavLink label="Work" href="/#work" />
          <NavLink label="Contact" href="/contact" />
        </Collapse>
      </Container>
    </AppShell.Header>
  );
};

export default Header;
