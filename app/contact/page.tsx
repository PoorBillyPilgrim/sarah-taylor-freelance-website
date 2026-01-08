"use client";
import { useState } from "react";
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
import { notifications } from "@mantine/notifications";

const LAMBDA_URL =
  "https://twi5bhfyoxlfbaqpgfi5zbwnza0fiuel.lambda-url.us-east-1.on.aws/";

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
      // super basic email validation; just looking for non-white space values with "@" in the middle
      email: value =>
        !/^\S+@\S+$/.test(value) ? "Please provide a valid email" : null,
      subject: value =>
        value.trim().length === 0 ? "Please provide a subject line" : null,
      message: value =>
        value.trim().length === 0 ? "Message must not be blank" : null,
    },
  });

  const [loading, setLoading] = useState(false);

  return (
    <Container size="sm" pt={{ base: 50 }}>
      <form
        onSubmit={form.onSubmit(async values => {
          setLoading(true);
          try {
            await fetch(LAMBDA_URL, {
              method: "POST",
              body: JSON.stringify(values),
              headers: {
                "Content-Type": "application/json",
              },
            });

            notifications.show({
              title: "Thanks for your message!",
              message: "I'll respond to your inquiry as soon as possible",
              position: "top-center",
            });
          } catch (_err) {
            notifications.show({
              title: "Sorry, an error has occurred",
              message: "Please try resending your message",
              position: "top-center",
              color: "red",
            });
          } finally {
            setLoading(false);
          }
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
          <Button type="submit" size="md" loading={loading}>
            Send message
          </Button>
        </Group>
      </form>
    </Container>
  );
}
