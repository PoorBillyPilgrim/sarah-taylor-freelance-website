import { forwardRef } from "react";
import {
  ButtonProps as MantineButtonProps,
  Button as MantineButton,
  createPolymorphicComponent,
} from "@mantine/core";
import classes from "./Button.module.css";

const Button = createPolymorphicComponent<"button", MantineButtonProps>(
  forwardRef<HTMLButtonElement, MantineButtonProps>(function Button(
    props,
    ref
  ) {
    return (
      <MantineButton
        ref={ref}
        className={classes.button}
        fz="var(--mantine-font-size-lg)"
        h="auto"
        size="md"
        radius="md"
        py={10}
        {...props}
      >
        {props.children}
      </MantineButton>
    );
  })
);

export default Button;
