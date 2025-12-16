// Complete Union List for Nalitabari Upazila
// Source: 12th National Parliament Election - Sherpur-2 Constituency
// Total: 81 Polling Centers across 9 Unions

export interface School {
  serialNo: number;
  name: string;
  nameBangla?: string;
  location: string;
  type: "primary" | "high" | "madrasa" | "college" | "other";
  booths?: number;
  voters?: number;
  maleVoters?: number;
  femaleVoters?: number;
}

export interface Union {
  name: string;
  nameBangla?: string;
  totalSchools: number;
  schools: School[];
  totalVoters?: number;
  maleVoters?: number;
  femaleVoters?: number;
}

// All 9 Unions of Nalitabari Upazila
// Note: Complete polling center data needs to be extracted from the full PDF
export const nalitabariUnionsList: Union[] = [
  {
    name: "Poragaon",
    nameBangla: "পোড়াগাঁও",
    totalSchools: 5,
    totalVoters: 16811,
    maleVoters: 8209,
    femaleVoters: 8602,
    schools: [
      {
        serialNo: 1,
        name: "Samsura Government Primary School",
        nameBangla: "সমশূড়া সরকারী প্রাথমিক বিদ্যালয়",
        location: "Samsura West",
        type: "primary",
        booths: 4,
        voters: 2304,
        maleVoters: 2304,
        femaleVoters: 0,
      },
      {
        serialNo: 2,
        name: "Samsura High School",
        nameBangla: "সমশূড়া উচ্চ বিদ্যালয়",
        location: "Samsura West",
        type: "high",
        booths: 5,
        voters: 2474,
        maleVoters: 0,
        femaleVoters: 2474,
      },
      {
        serialNo: 3,
        name: "Poragaon Dakhil Madrasa",
        nameBangla: "পোড়াগাঁও দাখিল মাদ্রাসা",
        location: "Poragaon",
        type: "madrasa",
        booths: 9,
        voters: 4361,
        maleVoters: 2173,
        femaleVoters: 2188,
      },
      {
        serialNo: 4,
        name: "Palashikura Janata High School",
        nameBangla: "পলাশীকুড়া জনতা উচ্চ বিদ্যালয়",
        location: "Palashikura",
        type: "high",
        booths: 9,
        voters: 3806,
        maleVoters: 1866,
        femaleVoters: 1940,
      },
      {
        serialNo: 5,
        name: "Palashikura Government Primary School",
        nameBangla: "পলাশীকুড়া সরকারী প্রাথমিক বিদ্যালয়",
        location: "Palashikura",
        type: "primary",
        booths: 4,
        voters: 3806,
        maleVoters: 1866,
        femaleVoters: 1940,
      },
    ],
  },
  {
    name: "Nayabil",
    nameBangla: "নয়াবিল",
    totalSchools: 0, // To be updated with actual data from PDF
    schools: [],
  },
  {
    name: "Tattor",
    nameBangla: "তত্তর",
    totalSchools: 0, // To be updated with actual data from PDF
    schools: [],
  },
  {
    name: "Ramchandrakura",
    nameBangla: "রামচন্দ্রকুড়া",
    totalSchools: 0, // To be updated with actual data from PDF
    schools: [],
  },
  {
    name: "Shalmara",
    nameBangla: "শালমারা",
    totalSchools: 0, // To be updated with actual data from PDF
    schools: [],
  },
  {
    name: "Jaynuddinpara",
    nameBangla: "জয়নুদ্দিনপাড়া",
    totalSchools: 0, // To be updated with actual data from PDF
    schools: [],
  },
  {
    name: "Gojakura",
    nameBangla: "গোজাকুড়া",
    totalSchools: 0, // To be updated with actual data from PDF
    schools: [],
  },
  {
    name: "Fakirpara",
    nameBangla: "ফকিরপাড়া",
    totalSchools: 0, // To be updated with actual data from PDF
    schools: [],
  },
  {
    name: "Sannyasibita",
    nameBangla: "সন্যাসীভিটা",
    totalSchools: 0, // To be updated with actual data from PDF
    schools: [],
  },
];

// Get all schools across all unions
export const getAllSchools = (): School[] => {
  const allSchools: School[] = [];
  nalitabariUnionsList.forEach((union) => {
    union.schools.forEach((school) => {
      allSchools.push({
        ...school,
        name: school.name,
      });
    });
  });
  return allSchools;
};

// Get schools by type
export const getSchoolsByType = (type: School["type"]): School[] => {
  return getAllSchools().filter((school) => school.type === type);
};

// Get union by name
export const getUnionByName = (name: string): Union | undefined => {
  return nalitabariUnionsList.find((union) => union.name === name);
};
