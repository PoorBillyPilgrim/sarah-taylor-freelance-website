"use client";
import {
  Button,
  Container,
  Group,
  SimpleGrid,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Contact() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      company: "", // honeypot
    },
    validate: {
      name: value => (value.trim().length < 2 ? "Please provide a name" : null),
      email: value =>
        !/^\S+@\S+$/.test(value) ? "Please provide a valid email" : null,
      subject: value => value.trim().length === 0,
    },
  });

  return (
    <Container size="sm" pt={{ base: 50 }}>
      <form
        onSubmit={form.onSubmit(values => {
          console.log(values);
        })}
      >
        <Title
          order={2}
          size="h1"
          style={{ fontFamily: "var(--mantine-font-family)" }}
          fw={900}
          ta="center"
        >
          Get in touch
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps("email")}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps("subject")}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps("message")}
        />

        {/**
         * honeypot
         */}
        <TextInput
          name="company"
          tabIndex={-1}
          autoComplete="off"
          style={{ display: "none" }}
          {...form.getInputProps("company")}
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md">
            Send message
          </Button>
        </Group>
      </form>
    </Container>
  );
}
