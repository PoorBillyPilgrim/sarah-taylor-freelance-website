import {
  Avatar,
  Box,
  Center,
  Container,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import classes from "./Quote.module.css";

const Quote = ({
  avatar,
  alt,
  bg,
  quote,
  author,
  title,
}: {
  avatar?: string;
  alt?: string;
  bg: string;
  quote: string;
  author: string;
  title: string;
}) => {
  const textColor = bg === "green.9" ? "white" : "black";
  return (
    <Box component="section" bg={bg}>
      <Container size="sm">
        <Center h="500">
          <Stack justify="center" align="center">
            <Text className={classes.quote} c={textColor}>
              {quote}
            </Text>
            <Group>
              <Avatar size="lg" src={avatar} alt={alt} />
              <Stack gap={0}>
                <Text c={textColor} className={classes.author}>
                  {author}
                </Text>
                <Text c={textColor} className={classes.title}>
                  {title}
                </Text>
              </Stack>
            </Group>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
};

export default Quote;
