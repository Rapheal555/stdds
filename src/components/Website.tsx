"use client";
import Link from "next/link";
import styles from "../app/page.module.css";
import {
  Title,
  Text,
  Button,
  Container,
  Grid,
  Image,
  Box,
} from "@mantine/core";
export default function Website() {
  return (
    <div>
      <div className={styles.main}>
        <Container className={styles.wrapper} size={1400}>
          <Grid>
            <Grid.Col span={4}>
              <Box style={{ display: "flex", justifyContent: "end" }}>
                <Image maw="310" h="auto" src={"./images/3.png"} alt="" />
              </Box>
            </Grid.Col>
            <Grid.Col span={8}>
              <div style={{ justifyContent: "start" }} className={styles.inner}>
                <Title className={styles.smart}>SMART </Title>
                <Title className={styles.healthcare}>
                  HEALTHCARE{" "}
                  <Text component="span" className={styles.system} inherit>
                    system
                  </Text>
                </Title>

                <Container p={0} size={600}>
                  <Text size="lg" c="dimmed" className={styles.description}>
                    Our advanced healthcare platform combines cutting-edge
                    technology, data-driven insights, and a dedicated focus on
                    personalized care to revolutionize the way you manage your
                    health and wellness throughout your lifetime.
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
                  <Link href={"/diagnos"} passHref>
                    <Button className={styles.control} size="lg">
                      Diagnose me
                    </Button>
                  </Link>
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
