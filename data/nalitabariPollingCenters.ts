// Nalitabari Upazila Polling Centers Data
// Source: 12th National Parliament Election - Sherpur-2 Constituency

export interface PollingCenter {
  serialNo: number;
  name: string;
  location: string;
  booths: number;
  areas: string[];
  maleVoters: number;
  femaleVoters: number;
  totalVoters: number;
  type: "male" | "female" | "combined";
  union: string;
}

export interface UnionInfo {
  name: string;
  pollingCenters: PollingCenter[];
  totalMaleVoters: number;
  totalFemaleVoters: number;
  totalVoters: number;
  totalCenters: number;
}

// Sample polling centers from Poragaon Union (visible in PDF)
export const nalitabariUnions: UnionInfo[] = [
  {
    name: "Poragaon",
    pollingCenters: [
      {
        serialNo: 1,
        name: "Samsura Government Primary School",
        location: "Samsura West",
        booths: 4,
        areas: [
          "Samsura West-891",
          "Samsura East-608",
          "Mopakura-636",
          "Lakshikura-169"
        ],
        maleVoters: 2304,
        femaleVoters: 0,
        totalVoters: 2304,
        type: "male",
        union: "Poragaon"
      },
      {
        serialNo: 2,
        name: "Samsura High School",
        location: "Samsura West",
        booths: 5,
        areas: [
          "Samsura West-929",
          "Samsura East-646",
          "Mopakura-721",
          "Lakshikura-178"
        ],
        maleVoters: 0,
        femaleVoters: 2474,
        totalVoters: 2474,
        type: "female",
        union: "Poragaon"
      },
      {
        serialNo: 3,
        name: "Poragaon Dakhil Madrasa",
        location: "Poragaon",
        booths: 9,
        areas: [
          "Batkuchi-2269",
          "Poragaon-1692",
          "Toyalkuchi-400"
        ],
        maleVoters: 2173,
        femaleVoters: 2188,
        totalVoters: 4361,
        type: "combined",
        union: "Poragaon"
      },
      {
        serialNo: 4,
        name: "Palashikura Janata High School",
        location: "Palashikura",
        booths: 9,
        areas: [
          "Palashikura-1272",
          "Andharpara North-2394",
          "Khalchanda-140"
        ],
        maleVoters: 1866,
        femaleVoters: 1940,
        totalVoters: 3806,
        type: "combined",
        union: "Poragaon"
      },
      {
        serialNo: 5,
        name: "Palashikura Government Primary School",
        location: "Palashikura",
        booths: 4,
        areas: [
          "Palashikura-1272",
          "Andharpara North-2394",
          "Khalchanda-140"
        ],
        maleVoters: 1866,
        femaleVoters: 1940,
        totalVoters: 3806,
        type: "combined",
        union: "Poragaon"
      }
    ],
    totalMaleVoters: 8209,
    totalFemaleVoters: 8602,
    totalVoters: 16811,
    totalCenters: 5
  }
];

// Calculate totals for Nalitabari Upazila
export const calculateNalitabariTotals = () => {
  let totalMale = 0;
  let totalFemale = 0;
  let totalVoters = 0;
  let totalCenters = 0;
  let totalUnions = nalitabariUnions.length;

  nalitabariUnions.forEach(union => {
    totalMale += union.totalMaleVoters;
    totalFemale += union.totalFemaleVoters;
    totalVoters += union.totalVoters;
    totalCenters += union.totalCenters;
  });

  return {
    totalUnions,
    totalPollingCenters: totalCenters,
    totalMaleVoters: totalMale,
    totalFemaleVoters: totalFemale,
    totalVoters
  };
};

