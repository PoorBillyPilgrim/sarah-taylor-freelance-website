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
import Icon from "../images/Icon";

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
      <Container size="md">
        <Icon variant="quotes" src="/icons/top_quote.png" />
        <Center>
          <Stack justify="center" align="center">
            <Text className={classes.quote} c={textColor}>
              {quote}
            </Text>
            <Group wrap="nowrap">
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

        <Icon variant="quotes" ml="auto" src="/icons/bottom_quote.png" />
      </Container>
    </Box>
  );
};

export default Quote;
