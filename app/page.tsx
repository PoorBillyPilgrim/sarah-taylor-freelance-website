"use client";

import { Fragment } from "react";
import { Hero } from "../components/hero/Hero";
import Help from "../components/help/Help";
import Services from "../components/services/Services";
import Quotes from "../components/quotes/Quotes";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Help />
      <Services />
      <Quotes />
      <Projects />
      <About />
    </Fragment>
  );
}
