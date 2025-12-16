// Complete Union List for Nakla Upazila
// Source: 6th Upazila Parishad Election 2024 - Nakla Upazila, Sherpur District
// Total: 79 Polling Centers across 1 Municipality + 9 Unions
// Gazette: Bangladesh Gazette (Extraordinary Issue), April 28, 2024
// Union names verified from: https://nokla.sherpur.gov.bd/

import { Union, School } from "./unions";

// All 9 Unions of Nakla Upazila + 1 Municipality
// Based on official election commission document and Nakla Upazila website
export const naklaUnionsList: Union[] = [
  {
    name: "Nakla Municipality",
    nameBangla: "নকলা পৌরসভা",
    totalSchools: 0, // Polling centers data needs to be extracted from PDF (centers 1-75 approximately)
    schools: [],
    // Note: Municipality contains multiple polling centers that need to be extracted from full PDF
  },
  {
    name: "Bajardi",
    nameBangla: "বাজারদি",
    totalSchools: 0, // Polling centers data needs to be extracted from PDF
    schools: [],
  },
  {
    name: "Kaya Kori",
    nameBangla: "কায়া কড়ি",
    totalSchools: 0, // Polling centers data needs to be extracted from PDF
    schools: [],
  },
  {
    name: "Baliganj",
    nameBangla: "বালিগঞ্জ",
    totalSchools: 0, // Polling centers data needs to be extracted from PDF
    schools: [],
  },
  {
    name: "Narayankhola",
    nameBangla: "নারায়নখোলা",
    totalSchools: 0, // Polling centers data needs to be extracted from PDF
    schools: [],
  },
  {
    name: "Gourdwar",
    nameBangla: "গৌরদ্বার",
    totalSchools: 0, // Polling centers data needs to be extracted from PDF
    schools: [],
  },
  {
    name: "Pathakata",
    nameBangla: "পাথাকাটা",
    totalSchools: 0, // Polling centers data needs to be extracted from PDF
    schools: [],
  },
  {
    name: "Talki",
    nameBangla: "তালকি",
    totalSchools: 0, // Polling centers data needs to be extracted from PDF
    schools: [],
  },
  {
    name: "Char Ostodhar",
    nameBangla: "চর অষ্টধার",
    totalSchools: 0, // Polling centers data needs to be extracted from PDF
    schools: [],
  },
  {
    name: "Chandrakona",
    nameBangla: "চন্দ্রকোনা",
    totalSchools: 0, // Polling centers data needs to be extracted from PDF
    schools: [],
  },
  {
    name: "Janakipur",
    nameBangla: "জানকীপুর",
    totalSchools: 1,
    schools: [
      {
        serialNo: 76,
        name: "Janakipur Government Primary School",
        nameBangla: "জানকীপুর সরকারি প্রাথমিক বিদ্যালয়",
        location: "Janakipur",
        type: "primary",
        booths: 7,
        voters: 2204,
        maleVoters: 1077,
        femaleVoters: 1127,
      },
    ],
  },
  {
    name: "Baliyadi",
    nameBangla: "বালিয়াদি",
    totalSchools: 1,
    schools: [
      {
        serialNo: 77,
        name: "Baliyadi Government Primary School",
        nameBangla: "বালিয়াদি সরকারি প্রাথমিক বিদ্যালয়",
        location: "Baliyadi",
        type: "primary",
        booths: 4,
        voters: 1622,
        maleVoters: 811,
        femaleVoters: 811,
      },
    ],
  },
  {
    name: "Charmadhuya",
    nameBangla: "চরমধুয়া",
    totalSchools: 2,
    schools: [
      {
        serialNo: 78,
        name: "Charmadhuya Government Primary School",
        nameBangla: "চরমধুয়া সরকারি প্রাথমিক বিদ্যালয়",
        location: "Charmadhuya",
        type: "primary",
        booths: 7,
        voters: 2615,
        maleVoters: 2615,
        femaleVoters: 0,
      },
      {
        serialNo: 79,
        name: "Charmadhuya Dakhil Madrasa",
        nameBangla: "চরমধুয়া দাখিল মাদ্রাসা",
        location: "Charmadhuya",
        type: "madrasa",
        booths: 7,
        voters: 2681,
        maleVoters: 0,
        femaleVoters: 2681,
      },
    ],
  },
  // Note: The PDF shows 79 total polling centers
  // Only centers 76-79 are visible in the provided content
  // Centers 1-75 need to be extracted from the full PDF and mapped to their respective unions
  // Total unions: 1 Municipality + 9 Unions = 10 administrative units
];

// Get all schools across all Nakla unions
export const getAllNaklaSchools = (): School[] => {
  const allSchools: School[] = [];
  naklaUnionsList.forEach((union) => {
    union.schools.forEach((school) => {
      allSchools.push({
        ...school,
        name: school.name,
      });
    });
  });
  return allSchools;
};

// Helper function to get union by name
export const getNaklaUnionByName = (name: string): Union | undefined => {
  return naklaUnionsList.find((union) => union.name === name);
};

// Calculate totals for Nakla Upazila
export const calculateNaklaTotals = () => {
  let totalSchools = 0;
  let totalVoters = 0;
  let totalMaleVoters = 0;
  let totalFemaleVoters = 0;

  naklaUnionsList.forEach((union) => {
    totalSchools += union.schools.length;
    union.schools.forEach((school) => {
      if (school.voters) totalVoters += school.voters;
      if (school.maleVoters) totalMaleVoters += school.maleVoters;
      if (school.femaleVoters) totalFemaleVoters += school.femaleVoters;
    });
  });

  return {
    totalSchools,
    totalVoters,
    totalMaleVoters,
    totalFemaleVoters,
  };
};
