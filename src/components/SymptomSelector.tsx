// components/SymptomSelector.tsx
"use client";

import { useState } from "react";
import { MultiSelect, Button, Group, Title } from "@mantine/core";
import { useRouter } from "next/navigation";

const symptomsList = [
  "Fever",
  "Cough",
  "Shortness of breath",
  "Fatigue",
  "Loss of taste",
  "Muscle aches",
  "Chills",
  "Weakness",
  "Stomach pain",
  "Headache",
  "Nausea",
  "Vomiting",
  "Diarrhea",
  "Rash",
  "Sweats",
  "Swollen lymph nodes",
  "Weight loss",
  "Dark urine",
  "Abdominal pain",
  "Jaundice",
  "Red eyes",
  "Chest tightness",
  "Wheezing",
  "Confusion",
  "Blurred vision",
  "Chest pain",
  "Swelling",
  "Sputum production",
  "Dehydration", // Specific to Cholera
  "Dizziness", // General symptom
];

interface SymptomSelectorProps {
  onSelect: (selectedSymptoms: string[]) => void;
}

const SymptomSelector: React.FC<SymptomSelectorProps> = ({ onSelect }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSelect(selectedSymptoms);
  };
  const router = useRouter();

  return (
    <form onSubmit={handleSubmit}>
      <Title my={"lg"} style={{ textAlign: "center" }} order={2}>
        Select Symptoms
      </Title>
      <MultiSelect
        data={symptomsList}
        value={selectedSymptoms}
        onChange={setSelectedSymptoms}
        placeholder="Select symptoms"
        label="Select all the Symptoms you are having and click on diagnose"
        clearable
        searchable
        // nothingFound="No options"
      />
      <Group mt="md">
        <Button
          style={{ position: "fixed", right: "5%", bottom: "5%" }}
          type="submit"
        >
          Diagnose
        </Button>
        <Button
          onClick={() => router.push("/")}
          type="button"
          style={{ position: "fixed", left: "5%", bottom: "5%" }}
          variant="gradient"
          gradient={{ from: "green", to: "blue" }}
        >
          Done
        </Button>
      </Group>
    </form>
  );
};

export default SymptomSelector;
