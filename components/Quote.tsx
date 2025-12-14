import {
  Avatar,
  Box,
  Center,
  Container,
  Group,
  Stack,
  Text,
} from "@mantine/core";

const Quote = ({
  avatar,
  bg,
  quote,
  by,
  attribution,
}: {
  avatar?: string;
  bg: string;
  quote: string;
  by: string;
  attribution: string;
}) => {
  const textColor = bg === "green.9" ? "white" : "black";
  return (
    <Box component="section" bg={bg}>
      <Container size="md">
        <Center h="500">
          <Stack justify="center" align="center">
            <Text c={textColor}>{quote}</Text>
            <Group>
              <Avatar src={avatar} />
              <Stack>
                <Text c={textColor}>{by}</Text>
                <Text c={textColor}>{attribution}</Text>
              </Stack>
            </Group>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
};

export default Quote;
