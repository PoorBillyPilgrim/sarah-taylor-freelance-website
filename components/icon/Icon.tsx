import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import classes from "./Icon.module.css";

type IconProps = {
  icon: IconProp;
} & Omit<FontAwesomeIconProps, "icon">;

const Icon = ({ icon, ...faProps }: IconProps) => {
  return <FontAwesomeIcon className={classes.icon} icon={icon} {...faProps} />;
};

export default Icon;
