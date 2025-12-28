import { Image } from "@mantine/core";
import classes from "./Icon.module.css";

type Icon = {
  variant: "about" | "help" | "services";
  src: string;
};

const Icon = ({ src, variant }: Icon) => {
  return <Image variant={variant} className={classes.icon} src={src} alt="" />;
};

export default Icon;
