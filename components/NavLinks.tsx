import {
  Anchor,
  AnchorProps,
  createPolymorphicComponent,
  Group,
  GroupProps,
} from "@mantine/core";
import { forwardRef } from "react";

interface LinkProps extends AnchorProps {
  children?: React.ReactNode;
}

const Link = createPolymorphicComponent<"a", LinkProps>(
  forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
    return (
      <Anchor c="black" {...props} ref={ref}>
        {props.children}
      </Anchor>
    );
  })
);

const NavLinks = (props: GroupProps) => {
  return (
    <Group {...props}>
      <Link href="/#services">SERVICES</Link>
      <Link href="/#work">WORK</Link>
      <Link href="/#about">ABOUT</Link>
      <Link href="/contact">
        <strong>CONTACT</strong>
      </Link>
    </Group>
  );
};

export default NavLinks;
