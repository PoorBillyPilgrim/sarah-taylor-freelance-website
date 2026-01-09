import { Image, ImageProps } from "@mantine/core";
import classes from "./Icon.module.css";

interface IconProps extends ImageProps {
  variant?: "default" | "about" | "help" | "services";
  src: string;
}

const basePath: string =
  process.env.NEXT_PUBLIC_SITE_ENV === "staging"
    ? "/sarah-taylor-freelance-website"
    : "";

const Icon = ({ src, variant = "default", ...other }: IconProps) => {
  return (
    <Image
      variant={variant}
      className={classes.icon}
      src={`${basePath}${src}`}
      alt=""
      {...other}
    />
  );
};

export default Icon;
