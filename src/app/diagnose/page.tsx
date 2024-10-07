"use client";
import { useState } from "react";
import { Container, Title, List, Text } from "@mantine/core";
import SymptomSelector from "@/components/SymptomSelector";
import { diagnose } from "../../utils/daignosis"; // Make sure to import your diagnosis function

export default function Home() {
  const [results, setResults] = useState<any>();

  const handleDiagnosis = (selectedSymptoms: any) => {
    const diagnosisResults = diagnose(selectedSymptoms);
    setResults(diagnosisResults);
  };

  return (
    <Container>
      {/* <Title order={1}>Symptom Diagnosis System</Title> */}
      <SymptomSelector onSelect={handleDiagnosis} />

      {results?.length > 0 && (
        <>
          <Title order={2} mt="xl">
            Possible Diagnoses:
          </Title>
          <List spacing="xs" size="sm" center>
            {results?.map(
              (
                { sickness, matchingSymptoms, prescription }: any,
                index: number
              ) => (
                <List.Item key={index}>
                  <strong>{sickness}</strong>: {matchingSymptoms?.join(", ")}
                  <Text
                    mt="xs"
                    c="blue"
                  >{`Prescription: ${prescription}`}</Text>
                </List.Item>
              )
            )}
          </List>
        </>
      )}
    </Container>
  );
}
