"use client";
import { AppShell, Container, Image, Text } from "@mantine/core";
import classes from "./Footer.module.css";
import { Link } from "../NavLinks";
import { getSrc } from "../../app/utils";

const data = [
  {
    title: "Explore",
    links: [
      { label: "About", link: "/#about" },
      { label: "Services", link: "/#services" },
      { label: "Work", link: "/#work" },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        label: "hello@sarahmtaylor.com",
        link: "mailto:hello@sarahmtaylor.com",
      },
      {
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/sarah-mackenzie-taylor/",
        target: "_blank",
      },
    ],
  },
];

const Footer = () => {
  const groups = data.map(group => {
    const links = group.links.map((link, index) => (
      <Link
        key={index}
        className={classes.link}
        c="white"
        href={link.link}
        target={link?.target ?? "_self"}
      >
        {link.label}
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <AppShell.Footer
      id="footer"
      className={classes.footer}
      px={{ base: 50, lg: 100 }}
    >
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image
            className={classes.description}
            w={200}
            alt="logo"
            src={getSrc("/images/logo_white.png")}
          />
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text size="sm">
          © {new Date().getFullYear()} Sarah M. Taylor. All rights reserved.
        </Text>

        {/* <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          Terms and Conditions
        </Group> */}
      </Container>
    </AppShell.Footer>
  );
};

export default Footer;
