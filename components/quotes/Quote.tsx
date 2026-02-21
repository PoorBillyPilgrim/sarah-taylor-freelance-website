import {
  Avatar,
  Center,
  Container,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import classes from "./Quote.module.css";
import Icon from "../images/Icon";
import { getSrc } from "../../app/utils";

const Quote = ({
  avatar,
  alt,
  bg,
  quote,
  author,
  title,
}: {
  avatar: string;
  alt?: string;
  bg: string;
  quote: string;
  author: string;
  title: string;
}) => {
  const textColor = bg === "green.9" ? "white" : "black";
  return (
    <Container size="lg" bg={bg} h="100%">
      <Stack justify="center" h="100%">
        <Icon variant="quotes" src="/icons/top_quote.png" />

        <Container size="md" flex={1}>
          <Center h={"100%"}>
            <Stack justify="center" align="center" px={{ base: 16, sm: 32, md: 60 }}>
              <Text className={classes.quote} c={textColor}>
                {quote}
              </Text>
              <Group>
                <Avatar size="lg" src={getSrc(avatar)} alt={alt} />
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

        <Icon
          variant="quotes"
          ml="auto"
          mt="auto"
          src="/icons/bottom_quote.png"
        />
      </Stack>
    </Container>
  );
};

export default Quote;
