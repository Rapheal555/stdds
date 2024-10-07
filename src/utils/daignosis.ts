const sicknesses = {
  "Covid-19": {
    symptoms: [
      "Fever",
      "Cough",
      "Shortness of breath",
      "Fatigue",
      "Loss of taste",
      "Muscle aches",
    ],
    prescription:
      "Rest, hydration, and antiviral medications (if necessary). Monitor symptoms closely.",
  },
  "Yellow Fever": {
    symptoms: [
      "Fever",
      "Chills",
      "Loss of appetite",
      "Muscle pain",
      "Headache",
      "Nausea",
    ],
    prescription: "Supportive care and vaccination for prevention.",
  },
  "Typhoid Fever": {
    symptoms: [
      "Fever",
      "Weakness",
      "Stomach pain",
      "Headache",
      "Loss of appetite",
      "Diarrhea",
    ],
    prescription: "Antibiotics (e.g., Ciprofloxacin) and hydration.",
  },
  "Small Pox": {
    symptoms: ["Fever", "Headache", "Backache", "Rash", "Fatigue"],
    prescription: "Supportive care and vaccination for prevention.",
  },
  Malaria: {
    symptoms: ["Fever", "Chills", "Sweats", "Headache", "Nausea", "Vomiting"],
    prescription: "Antimalarial medications (e.g., Artemisinin-based therapy).",
  },
  "Hiv/Aids": {
    symptoms: [
      "Fever",
      "Fatigue",
      "Swollen lymph nodes",
      "Weight loss",
      "Diarrhea",
    ],
    prescription: "Antiretroviral therapy (ART) and regular medical check-ups.",
  },
  "Hepatitis A": {
    symptoms: [
      "Fatigue",
      "Nausea",
      "Abdominal pain",
      "Loss of appetite",
      "Fever",
    ],
    prescription: "Supportive care; vaccination for prevention.",
  },
  "Hepatitis B": {
    symptoms: [
      "Fatigue",
      "Abdominal pain",
      "Loss of appetite",
      "Nausea",
      "Dark urine",
    ],
    prescription: "Antiviral medications (e.g., Tenofovir) may be needed.",
  },
  "Hepatitis C": {
    symptoms: [
      "Fatigue",
      "Abdominal pain",
      "Loss of appetite",
      "Nausea",
      "Jaundice",
    ],
    prescription: "Direct-acting antiviral agents (e.g., Sofosbuvir).",
  },
  Measles: {
    symptoms: ["Fever", "Cough", "Runny nose", "Red eyes", "Rash"],
    prescription: "Supportive care and vaccination for prevention.",
  },
  Migraine: {
    symptoms: ["Severe headache", "Nausea", "Sensitivity to light"],
    prescription: "Pain relief medications (e.g., Ibuprofen) and triptans.",
  },
  "Chronic Kidney Disease": {
    symptoms: [
      "Fatigue",
      "Swelling",
      "Shortness of breath",
      "Nausea",
      "Confusion",
    ],
    prescription:
      "Dietary changes, medications to manage symptoms, and possibly dialysis.",
  },
  Asthma: {
    symptoms: [
      "Shortness of breath",
      "Chest tightness",
      "Coughing",
      "Wheezing",
    ],
    prescription: "Inhalers (bronchodilators) and corticosteroids.",
  },
  "Coronary Artery Disease": {
    symptoms: [
      "Chest pain",
      "Shortness of breath",
      "Fatigue",
      "Heart palpitations",
    ],
    prescription:
      "Cardiac medications (e.g., beta-blockers), lifestyle changes, and possibly surgery.",
  },
  "Lung Cancer": {
    symptoms: [
      "Coughing",
      "Weight loss",
      "Chest pain",
      "Shortness of breath",
      "Wheezing",
    ],
    prescription:
      "Chemotherapy, radiation, and surgical options depending on the stage.",
  },
  Stroke: {
    symptoms: [
      "Sudden numbness",
      "Confusion",
      "Difficulty speaking",
      "Vision problems",
    ],
    prescription: "Immediate medical attention; medications to dissolve clots.",
  },
  Diabetes: {
    symptoms: [
      "Increased thirst",
      "Frequent urination",
      "Fatigue",
      "Blurred vision",
    ],
    prescription: "Insulin or oral hypoglycemic agents; dietary management.",
  },
  Cholera: {
    symptoms: [
      "Fever",
      "Diarrhea",
      "Abdominal cramps",
      "Nausea",
      "Dehydration",
    ],
    prescription: "Rehydration therapy and antibiotics (e.g., Doxycycline).",
  },
  "Chronic Obstructive Pulmonary Disease": {
    symptoms: ["Shortness of breath", "Chronic cough", "Sputum production"],
    prescription: "Bronchodilators, steroids, and lifestyle changes.",
  },
};

export const diagnose = (selectedSymptoms: any) => {
  let bestMatches: any = [];
  let maxMatchCount = 0;

  Object.entries(sicknesses).forEach(
    ([sickness, { symptoms, prescription }]) => {
      const matchingSymptoms = symptoms?.filter((symptom: any) =>
        selectedSymptoms.includes(symptom)
      );
      const matchCount = matchingSymptoms.length;

      if (matchCount > 0) {
        if (matchCount > maxMatchCount) {
          // Found a new best match
          bestMatches = [
            {
              sickness,
              matchingSymptoms,
              matchCount,
              totalSymptoms: symptoms.length,
              prescription,
            },
          ];
          maxMatchCount = matchCount;
        } else if (matchCount === maxMatchCount) {
          // Another sickness with the same max match count
          bestMatches.push({
            sickness,
            matchingSymptoms,
            matchCount,
            totalSymptoms: symptoms.length,
            prescription,
          });
        }
      }
    }
  );

  return bestMatches; // Returns an array of best matches or an empty array if none
};

// utils/diagnosis.js
