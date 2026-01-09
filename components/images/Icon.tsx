import { Image, ImageProps } from "@mantine/core";
import classes from "./Icon.module.css";
import { getSrc } from "../../app/utils";

interface IconProps extends ImageProps {
  variant?: "default" | "about" | "help" | "services" | "quotes";
  src: string;
}

const Icon = ({ src, variant = "default", ...other }: IconProps) => {
  return (
    <Image
      variant={variant}
      className={classes.icon}
      src={getSrc(src)}
      alt=""
      {...other}
    />
  );
};

export default Icon;
