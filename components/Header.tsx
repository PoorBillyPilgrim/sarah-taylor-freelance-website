"use client";
import {
  AppShell,
  Burger,
  Collapse,
  Container,
  Group,
  Image,
  NavLink,
} from "@mantine/core";
import NavLinks, { Link } from "../components/NavLinks";
import { useDisclosure, useFocusTrap, useMediaQuery } from "@mantine/hooks";
import { getSrc } from "../app/utils";

const Header = () => {
  const isSm = useMediaQuery("(max-width: 48em)");
  const [opened, handlers] = useDisclosure(false);
  const focusTrapRef = useFocusTrap(isSm);

  const handleClick = () => {
    handlers.close();
  };

  return (
    <AppShell.Header withBorder px={{ base: 15, lg: 100 }}>
      <Container ref={focusTrapRef}>
        <Group
          mih="var(--header-height)"
          justify="space-between"
          align="center"
        >
          <Link href="/">
            <Image w={200} alt="logo" src={getSrc("/images/logo.png")} />
          </Link>
          <Burger hiddenFrom="sm" opened={opened} onClick={handlers.toggle} />
          <NavLinks visibleFrom="sm" />
        </Group>
        <Collapse in={opened} hiddenFrom="sm" pb={{ base: 20 }}>
          <NavLink
            onClick={handleClick}
            label="About"
            href={getSrc("/#about")}
          />
          <NavLink
            onClick={handleClick}
            label="Services"
            href={getSrc("/#services")}
          />
          <NavLink onClick={handleClick} label="Work" href={getSrc("/#work")} />
          <NavLink
            onClick={handleClick}
            label="Contact"
            href={getSrc("/contact")}
          />
        </Collapse>
      </Container>
    </AppShell.Header>
  );
};

export default Header;
