"use client";
import { Box, Button, Container, Input } from "@mantine/core";

export default function Page() {
  return (
    <Container mt="xl">
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          size="lg"
          mr={{ md: "lg" }}
          placeholder="Please nput your first name(Optional)"
        />
        <Button size="lg">Continue</Button>
      </Box>
    </Container>
  );
}
