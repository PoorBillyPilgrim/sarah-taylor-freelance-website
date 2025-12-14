"use client";

import { Hero } from "../components/hero/Hero";
import Help from "../components/help/Help";
import Services from "../components/services/Services";
import Quotes from "../components/quotes/Quotes";
import { Fragment } from "react";
import Projects from "../components/projects/Projects";

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Help />
      <Services />
      <Quotes />
      <Projects />
    </Fragment>
  );
}
