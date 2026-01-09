import { Image, ImageProps } from "@mantine/core";
import classes from "./SectionImage.module.css";
import NextImage from "next/image";

type Variant = "md" | "lg";
interface SectionImageProps extends ImageProps {
  variant?: Variant;
  alt: string;
  src: string;
}

const basePath: string =
  process.env.NEXT_PUBLIC_SITE_ENV === "staging"
    ? "/sarah-taylor-freelance-website"
    : "";

console.log("ENV: ", process.env.NEXT_PUBLIC_SITE_ENV);

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
      src={`${basePath}${src}`}
      {...otherProps}
      width={500}
      height={500}
      component={NextImage}
    />
  );
};

export default SectionImage;
