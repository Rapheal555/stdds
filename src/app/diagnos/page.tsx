"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Image,
  Input,
  Select,
} from "@mantine/core";
import { useState } from "react";

export default function Page() {
  const Information = () => {
    return (
      <div>
        <Box
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            maw="250"
            size="md"
            // mr={{ md: "lg" }}
            placeholder="First name"
          />

          <Input
            placeholder="Age (eg:25)"
            mt="md"
            size="md"
            maw="250"
            type="number"
          />
          <Button mt="lg" size="lg">
            Continue
          </Button>
        </Box>
      </div>
    );
  };

  const [firstDiagnosis, setFirstDiagnosis] = useState("");
  //first category
  const [firstCat, setFirstCat] = useState<Number>();
  // switch (firstDiagnosis) {
  //   case "YYY":
  //     setFirstCat(1);
  //     break;
  //   case "YYN":
  //     setFirstCat(2);
  //     break;
  //   case "YNY":
  //     setFirstCat(3);
  //     break;
  //   case "YNN":
  //     setFirstCat(4);
  //     break;
  //   case "NYY":
  //     setFirstCat(5);
  //     break;
  //   case "NYN":
  //     setFirstCat(6);
  //     break;
  //   case "NNY":
  //     setFirstCat(7);
  //     break;
  //   case "NNN":
  //     setFirstCat(8);
  //     break;
  //   default:
  //     alert("you have not answered the questions");
  //     break;
  // }
  return (
    <Container mt="xl">
      <Grid>
        <Grid.Col span={6}>
          <Information />
        </Grid.Col>
        <Grid.Col span={6}>
          <Image alt="" src="/images/3.png" />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
