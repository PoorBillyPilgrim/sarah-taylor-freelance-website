"use client";
import { AppShell, Container, Title } from "@mantine/core";

import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/hero/Hero";
import Header from "../components/Header";
import Help from "../components/help/Help";
import Services from "../components/services/Services";
import Quote from "../components/Quote";

const quotes = [
  {
    avatar: undefined,
    bg: "white",
    quote: "My website improved so much after Sarah worked her magic",
    by: "Tyler Jones",
    attribution: "Software Engineer, Lyrarsis",
  },
  {
    avatar: undefined,
    bg: "green.9",
    quote: "My website improved so much after Sarah worked her magic",
    by: "Tyler Jones",
    attribution: "Software Engineer, Lyrarsis",
  },
  {
    avatar: undefined,
    bg: "white",
    quote: "My website improved so much after Sarah worked her magic",
    by: "Tyler Jones",
    attribution: "Software Engineer, Lyrarsis",
  },
];

export default function HomePage() {
  return (
    <AppShell>
      <AppShell.Header withBorder px={{ base: 15, lg: 100 }}>
        <Header />
      </AppShell.Header>
      <AppShell.Main pt="var(--header-height)">
        <Hero />
        <Help />
        <Services />
        {quotes.map(quote => (
          <Quote {...quote} />
        ))}
      </AppShell.Main>

      <Footer />
    </AppShell>
  );
}
