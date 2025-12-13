"use client";
import {
  AppShell,
  Burger,
  Collapse,
  Container,
  Flex,
  Group,
  NavLink,
} from "@mantine/core";
import NavLinks from "../components/NavLinks";
import { useDisclosure } from "@mantine/hooks";
import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/hero/Hero";
import Header from "../components/Header";

export const HEADER_OFFSET = 100;

export default function HomePage() {
  return (
    <AppShell>
      <AppShell.Header withBorder={false} px={{ base: 50, lg: 100 }}>
        <Header />
      </AppShell.Header>
      <AppShell.Main pt={HEADER_OFFSET} px={{ base: 50, lg: 100 }}>
        <Hero />

        <Container size="xl">
          <div>I CAN HELP YOU</div>
        </Container>
      </AppShell.Main>

      <Footer />
    </AppShell>
  );
}
