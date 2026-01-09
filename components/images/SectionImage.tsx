import { Image, ImageProps } from "@mantine/core";
import classes from "./SectionImage.module.css";
import NextImage from "next/image";
import { getSrc } from "../../app/utils";

type Variant = "md" | "lg" | "xl";
interface SectionImageProps extends ImageProps {
  variant?: Variant;
  alt: string;
  src: string;
}

const SectionImage = ({
  variant = "lg",
  alt,
  src,
  ...otherProps
}: SectionImageProps) => {
  return (
    <Image
      variant={variant}
      className={classes.image}
      alt={alt}
      src={getSrc(src)}
      {...otherProps}
      width={500}
      height={500}
      component={NextImage}
    />
  );
};

export default SectionImage;
