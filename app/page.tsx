"use client";
import { AppShell, Container, Title } from "@mantine/core";

import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/hero/Hero";
import Header from "../components/Header";
import Help from "../components/help/Help";
import Services from "../components/services/Services";

export const HEADER_OFFSET = 100;

export default function HomePage() {
  return (
    <AppShell>
      <AppShell.Header withBorder px={{ base: 15, lg: 100 }}>
        <Header />
      </AppShell.Header>
      <AppShell.Main pt={HEADER_OFFSET}>
        <Hero />
        <Help />
        <Services />
      </AppShell.Main>

      <Footer />
    </AppShell>
  );
}
