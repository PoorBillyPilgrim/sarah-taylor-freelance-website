import { Anchor, Group, GroupProps } from "@mantine/core";

const NavLinks = (props: GroupProps) => {
  return (
    <Group {...props}>
      <Anchor href="#about">About</Anchor>
      <Anchor href="#services">Services</Anchor>
      <Anchor href="#work">Work</Anchor>
      <Anchor href="#contact">Contact</Anchor>
    </Group>
  );
};

export default NavLinks;
