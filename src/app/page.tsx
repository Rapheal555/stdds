import styles from "./page.module.css";
import { Title, Text, Button, Container } from "@mantine/core";

export default function Home() {
  return (
    <Container className={styles.wrapper} size={1400}>
      {/* <Dots className={styles.dots} style={{ left: 0, top: 0 }} />
      <Dots className={styles.dots} style={{ left: 60, top: 0 }} />
      <Dots className={styles.dots} style={{ left: 0, top: 140 }} />
      <Dots className={styles.dots} style={{ right: 0, top: 60 }} /> */}

      <div className={styles.inner}>
        <Title className={styles.title}>
          Automated{" "}
          <Text component="span" className={styles.highlight} inherit>
            Diagnostic System
          </Text>{" "}
          for any ailment
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={styles.description}>
            Build more reliable software with AI companion. AI is also trained
            to detect lazy developers who do nothing and just complain on
            Twitter.
          </Text>
        </Container>

        <div className={styles.controls}>
          <Button
            className={styles.control}
            size="lg"
            variant="default"
            color="gray"
          >
            How it works
          </Button>
          <Button className={styles.control} size="lg">
            Diagnose me
          </Button>
        </div>
      </div>
    </Container>
  );
}
