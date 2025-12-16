import { Box, Container } from "@mantine/core";

const SectionContainer = Container.withProps({
  px: { base: 50, lg: 100 },
  py: { base: 50 },
});

interface SectionProps {
  id: string;
  bg: string;
}
const Section = ({
  id,
  bg,
  children,
}: React.PropsWithChildren<SectionProps>) => {
  return (
    <Box id={id} component="section" bg={bg}>
      <SectionContainer>{children}</SectionContainer>
    </Box>
  );
};

export default Section;
