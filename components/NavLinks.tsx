import {
  Anchor,
  AnchorProps,
  createPolymorphicComponent,
  Group,
  GroupProps,
} from "@mantine/core";
import { forwardRef } from "react";
import NextLink from "next/link";

interface LinkProps extends Omit<AnchorProps, "href"> {
  href: string;
  children?: React.ReactNode;
}

const Link = createPolymorphicComponent<"a", LinkProps>(
  forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
    return (
      <Anchor component={NextLink} c="black" {...props} ref={ref}>
        {props.children}
      </Anchor>
    );
  })
);

const NavLinks = (props: GroupProps) => {
  return (
    <Group {...props}>
      <Link href="/#services">Services</Link>
      <Link href="/#work">Work</Link>
      <Link href="/#about">About</Link>
      <Link href="/contact">
        <strong>Contact</strong>
      </Link>
    </Group>
  );
};

export default NavLinks;
