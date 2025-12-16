# Data Extraction Guide for Polling Centers

## Overview
This guide explains how to extract and add polling center data from the PDF documents for both Nakla and Nalitabari Upazilas.

## Current Status

### Nakla Upazila
- **Total Polling Centers:** 79
- **Extracted:** 4 centers (centers 76-79)
- **Remaining:** 75 centers need to be extracted from PDF

### Nalitabari Upazila  
- **Total Polling Centers:** 81
- **Extracted:** 5 centers (from Poragaon Union)
- **Remaining:** 76 centers need to be extracted from PDF

## Data Structure

Each polling center should include:
```typescript
{
  serialNo: number,           // Serial number from PDF
  name: string,               // School/institution name in English
  nameBangla?: string,        // School name in Bangla (optional)
  location: string,           // Location/village name
  type: "primary" | "high" | "madrasa" | "college" | "other",
  booths: number,             // Number of polling booths
  voters?: number,            // Total voters
  maleVoters?: number,        // Male voters
  femaleVoters?: number,      // Female voters
}
```

## How to Add Data

### For Nakla Upazila:
1. Open `data/naklaUnions.ts`
2. Find the appropriate union
3. Add schools to the `schools` array
4. Update `totalSchools` count
5. Update union-level voter totals if available

### For Nalitabari Upazila:
1. Open `data/unions.ts`
2. Find the appropriate union in `nalitabariUnionsList`
3. Add schools to the `schools` array
4. Update `totalSchools` count
5. Update union-level voter totals if available

## Union Names Reference

### Nakla Upazila (9 Unions + 1 Municipality):
1. Nakla Municipality (নকলা পৌরসভা)
2. Janakipur (জানকীপুর) - ✅ Has data
3. Baliyadi (বালিয়াদি) - ✅ Has data
4. Charmadhuya (চরমধুয়া) - ✅ Has data
5. Bajardi (বাজারদি) - Needs data
6. Kaya Kori (কায়া কড়ি) - Needs data
7. Baliganj (বালিগঞ্জ) - Needs data
8. Narayankhola (নারায়নখোলা) - Needs data
9. Union 5-9 - Names need to be confirmed from PDF

### Nalitabari Upazila (9 Unions):
1. Poragaon (পোড়াগাঁও) - ✅ Has data (5 schools)
2. Nayabil (নয়াবিল) - Needs data
3. Tattor (তত্তর) - Needs data
4. Ramchandrakura (রামচন্দ্রকুড়া) - Needs data
5. Shalmara (শালমারা) - Needs data
6. Jaynuddinpara (জয়নুদ্দিনপাড়া) - Needs data
7. Gojakura (গোজাকুড়া) - Needs data
8. Fakirpara (ফকিরপাড়া) - Needs data
9. Sannyasibita (সন্যাসীভিটা) - Needs data

## Example Entry

```typescript
{
  serialNo: 1,
  name: "School Name Government Primary School",
  nameBangla: "স্কুল নাম সরকারি প্রাথমিক বিদ্যালয়",
  location: "Village Name",
  type: "primary",
  booths: 4,
  voters: 2204,
  maleVoters: 1077,
  femaleVoters: 1127,
}
```

## Notes
- Serial numbers should match the PDF document
- School types: "primary", "high", "madrasa", "college", or "other"
- Location should be the village/area name
- Voter counts should match the official PDF totals

