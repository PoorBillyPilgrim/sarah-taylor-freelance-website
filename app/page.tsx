"use client";
import {
  AppShell,
  Burger,
  Collapse,
  Flex,
  Group,
  NavLink,
} from "@mantine/core";
import NavLinks from "../components/NavLinks";
import { useDisclosure } from "@mantine/hooks";

export default function HomePage() {
  const [opened, handlers] = useDisclosure(false);
  return (
    <AppShell>
      <AppShell.Header>
        <Group mih="100" justify="space-between">
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
      </AppShell.Header>
    </AppShell>
  );
}
