import { Anchor, Group, GroupProps } from "@mantine/core";

const NavLinks = (props: GroupProps) => {
  return (
    <Group {...props}>
      <Anchor href="/#about" c="black">
        About
      </Anchor>
      <Anchor href="/#services" c="black">
        Services
      </Anchor>
      <Anchor href="/#work" c="black">
        Work
      </Anchor>
      <Anchor href="/contact" c="black">
        <strong>Contact</strong>
      </Anchor>
    </Group>
  );
};

export default NavLinks;
