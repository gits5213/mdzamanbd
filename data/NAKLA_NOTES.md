# Nakla Upazila - Polling Center Data Notes

## Source
6th Upazila Parishad Election 2024 - Nakla Upazila, Sherpur District
**Gazette:** Bangladesh Gazette (Extraordinary Issue), April 28, 2024
**Memo No:** 17.00.0000.025.44.041.24-310

## Overview
Nakla Upazila is one of the two upazilas in Sherpur-2 constituency along with Nalitabari Upazila.

## Key Information from PDF Document

### Administrative Structure
- **1 Municipality (পৌরসভা):** Nakla Municipality (নকলা পৌরসভা)
- **9 Unions:** Total of 9 unions in Nakla Upazila

### Polling Centers Summary
- **Total Polling Centers:** 79
- **Total Polling Booths:** 464 (411 permanent + 53 temporary)
- **Total Voters:** 179,606
  - **Male Voters:** 88,376
  - **Female Voters:** 91,230
  - **Hijra/Third Gender:** 0

### Sample Polling Centers from Document
From the visible data in the PDF:

1. **Janakipur Government Primary School** (জানকীপুর সরকারি প্রাথমিক বিদ্যালয়)
   - Location: Janakipur (জানকীপুর)
   - Booths: 7
   - Type: Combined (Male & Female)
   - Voters: 2,204 (1,077 male + 1,127 female)

2. **Baliyadi Government Primary School** (বালিয়াদি সরকারি প্রাথমিক বিদ্যালয়)
   - Location: Baliyadi (বালিয়াদি)
   - Booths: 4 (including 1 temporary booth)
   - Type: Combined (Male & Female)
   - Voters: 1,622 (811 male + 811 female)
   - Areas: Baliyadi, Chok Raghunathpur

3. **Charmadhuya Government Primary School** (চরমধুয়া সরকারি প্রাথমিক বিদ্যালয়)
   - Location: Charmadhuya (চরমধুয়া)
   - Booths: 7 (including 1 temporary booth)
   - Type: Male Polling Center
   - Voters: 2,615 (male only)
   - Areas: Charmadhuya, Charmadhuya Namapara, Hajurikanda

4. **Charmadhuya Dakhil Madrasa** (চরমধুয়া দাখিল মাদ্রাসা)
   - Location: Charmadhuya (চরমধুয়া)
   - Booths: 7
   - Type: Female Polling Center
   - Voters: 2,681 (female only)
   - Areas: Charmadhuya, Charmadhuya Namapara, Hajurikanda

## Polling Center Types
1. **Male Polling Center** (পুরুষ ভোটকেন্দ্র) - Only male voters
2. **Female Polling Center** (মহিলা ভোটকেন্দ্র) - Only female voters
3. **Combined Polling Center** (পুরুষ ও মহিলা ভোটকেন্দ্র) - Both male and female voters

## Data Structure
The polling center data includes:
- Serial number
- Polling center name and location
- Number of polling booths (permanent and temporary)
- Assigned areas/villages (with voter serial numbers)
- Male voter count
- Female voter count
- Total voter count
- Polling center type

## Official Summary (From Page 7)
- **Upazila Name:** Nakla (নকলা)
- **Municipalities:** 1
- **Unions:** 9
- **Polling Centers:** 79 (all permanent)
- **Polling Booths:** 464 (411 permanent + 53 temporary)
- **Total Voters:** 179,606
  - Male: 88,376
  - Female: 91,230
  - Hijra: 0

## Next Steps
To complete the Nakla data:
1. Extract all polling centers from the full PDF document
2. Identify all 9 union names
3. Map schools to their respective unions
4. Calculate total voters per union
5. Update `naklaUnions.ts` with complete data

## Current Status
- Basic structure created in `data/naklaUnions.ts`
- Sample data from visible polling centers included
- Main constituency info updated with accurate voter totals
- Components updated to display both Nakla and Nalitabari data
- Union & School directory page supports filtering by upazila

