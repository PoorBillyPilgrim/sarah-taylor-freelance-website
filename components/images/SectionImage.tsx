import { Image, ImageProps } from "@mantine/core";
import classes from "./SectionImage.module.css";

type Variant = "md" | "lg";
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
      src={`${process.env.PUBLIC_PATH}${src}`}
      {...otherProps}
    />
  );
};

export default SectionImage;
