import { Image, ImageProps } from "@mantine/core";
import classes from "./Icon.module.css";

interface IconProps extends ImageProps {
  variant?: "default" | "about" | "help" | "services";
  src: string;
}

const Icon = ({ src, variant = "default", ...other }: IconProps) => {
  return (
    <Image
      variant={variant}
      className={classes.icon}
      src={src}
      alt=""
      {...other}
    />
  );
};

export default Icon;
