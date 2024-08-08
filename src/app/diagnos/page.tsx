"use client";
import Diagnose from "@/utils/diagnose";
import {
  Box,
  Button,
  Container,
  Grid,
  Image,
  Input,
  MultiSelect,
} from "@mantine/core";
import { useEffect, useState } from "react";

export default function Page() {
  // const [value, setValue] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string[]>([]);
  const [next, setNext] = useState(false);

  const Information = () => {
    return (
      <div>
        <Box
          style={{
            display: "grid",
            justifyContent: "center",
            position: "relative",
            bottom: "40%",
            alignItems: "center",
          }}
        >
          <Input
            maw="50vw"
            size="md"
            // mr={{ md: "lg" }}
            placeholder="First name"
          />

          <Input
            placeholder="Age (eg:25)"
            mt="md"
            size="md"
            w="40vw"
            type="number"
          />
          <Button onClick={() => setNext(true)} mt="lg" size="lg">
            Continue
          </Button>
        </Box>
      </div>
    );
  };

  const [firstDiagnosis, setFirstDiagnosis] = useState<any>();
  //first category
  // useEffect(() => {
  //   const { result, diagnosis } = Diagnose({ firstDiagnosis });
  // }, [firstDiagnosis]);

  // if (next) {
  //   return (
  //     <MultiSelect
  //       // value={}
  //       data={[
  //         "High Temperature (Fever)",
  //         "Headache",
  //         "Fatigue",
  //         "Cough",
  //         "Nausea",
  //       ]}
  //       searchable
  //     ></MultiSelect>
  //   );
  // }

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        placeItems: "center",
      }}
      mt="xl"
    >
      {next ? (
        <>
          <MultiSelect
            size="md"
            fz="h1"
            placeholder="Click to select"
            // onChange={(e) => setselectedValue(e.values)}
            // value={selectedValue}
            data={[
              { label: "High Temperature (Fever)", value: "A" },
              { label: "Headache", value: "B" },
              { label: "Fatigue", value: "C" },
              { label: "Cough", value: "D" },
              { label: "Nausea", value: "E" },
            ]}
            value={selectedValue}
            onChange={setSelectedValue}
            searchable
          ></MultiSelect>
          <Button
            onClick={() => {
              alert(selectedValue);
              Diagnose({ selectedValue });
            }}
          >
            Next
          </Button>
          <h2>
            {selectedValue!.sort().map((val: any) => {
              /*  (
              <span key={val}>{val}</span>
            ) */
              return val;
            })}
          </h2>
          <h1>{selectedValue}</h1>
        </>
      ) : (
        <Grid>
          <Grid.Col span={6}>
            <Information />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image alt="" maw={"50vw"} h="auto" src="/images/3.png" />
          </Grid.Col>
        </Grid>
      )}
    </Container>
  );
}
