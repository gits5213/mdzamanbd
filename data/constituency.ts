export const constituencyInfo = {
  name: "Sherpur-2",
  upazilas: ["Nakla", "Nalitabari"],
  district: "Sherpur",
  division: "Mymensingh",
  targetYear: "Upcoming..",
};

export const naklaInfo = {
  name: "Nakla Upazila",
  totalUnions: 9,
  totalPollingCenters: 79,
  totalVoters: 179606,
  maleVoters: 88376,
  femaleVoters: 91230,
  officialWebsite: "https://nokla.sherpur.gov.bd/",
  description: "Nakla is one of the two upazilas in Sherpur-2 constituency. It consists of 9 unions with 79 polling centers serving over 179,000 voters.",
};

export const nalitabariInfo = {
  name: "Nalitabari Upazila",
  totalUnions: 9, // Based on 12th National Parliament Election data
  totalPollingCenters: 81, // Based on polling center list from election commission
  totalVoters: 233838, // Official total from Bangladesh Election Commission (Page 7 Summary)
  maleVoters: 113307, // Official male voters from Bangladesh Election Commission
  femaleVoters: 120531, // Official female voters from Bangladesh Election Commission
  officialWebsite: "https://nalitabari.sherpur.gov.bd/",
  description: "Nalitabari is one of the two upazilas in Sherpur-2 constituency (Seat Number-144), working together with Nakla to serve the people of Sherpur district. According to the official summary published by the Bangladesh Election Commission, Nalitabari Upazila has a total of 233,838 registered voters, including 113,307 male voters and 120,531 female voters across 9 unions with 81 polling centers.",
  electionArea: "Seat Number-144, Sherpur-02",
  source: "12th National Parliament Election - Polling Center Location Policy (Official Summary - Page 7)",
};

// Calculate combined totals for Sherpur-2 constituency
export const getConstituencyTotals = () => {
  return {
    totalVoters: naklaInfo.totalVoters + nalitabariInfo.totalVoters,
    totalMaleVoters: naklaInfo.maleVoters + nalitabariInfo.maleVoters,
    totalFemaleVoters: naklaInfo.femaleVoters + nalitabariInfo.femaleVoters,
    totalUnions: naklaInfo.totalUnions + nalitabariInfo.totalUnions,
    totalPollingCenters: naklaInfo.totalPollingCenters + nalitabariInfo.totalPollingCenters,
  };
};

// Combined constituency totals (calculated values)
export const constituencyTotals = {
  totalVoters: 179606 + 233838, // Nakla + Nalitabari = 413,444
  totalMaleVoters: 88376 + 113307, // Nakla + Nalitabari = 201,683
  totalFemaleVoters: 91230 + 120531, // Nakla + Nalitabari = 211,761
  totalUnions: 9 + 9, // Nakla + Nalitabari = 18
  totalPollingCenters: 79 + 81, // Nakla + Nalitabari = 160
};
