# Nalitabari Upazila - Polling Center Data Notes

## Source
12th National Parliament Election - Polling Center Location Policy
**Election Area:** Seat Number-144, Sherpur-02, Nalitabari, Sherpur

## Overview
Nalitabari Upazila is part of Sherpur-2 constituency along with Nakla Upazila.

## Key Information from PDF Document

### Unions
The document lists multiple unions in Nalitabari Upazila. Based on the structure, there are **9 unions** total.

### Polling Centers
- **Total Polling Centers:** 81 (based on document structure)
- Polling centers include:
  - Government Primary Schools
  - High Schools
  - Madrasas (Dakhil Madrasas)
  - Community Schools

### Sample Union Data (Poragaon Union)
From the visible data in the PDF:

1. **Samsura Government Primary School** (Samsura West)
   - Booths: 4
   - Type: Male Polling Center
   - Voters: 2,304 (male only)
   - Areas: Samsura West, Samsura East, Mopakura, Lakshikura

2. **Samsura High School** (Samsura West)
   - Booths: 5
   - Type: Female Polling Center
   - Voters: 2,474 (female only)
   - Areas: Samsura West, Samsura East, Mopakura, Lakshikura

3. **Poragaon Dakhil Madrasa** (Poragaon)
   - Booths: 9
   - Type: Combined (Male & Female)
   - Voters: 4,361 (2,173 male + 2,188 female)
   - Areas: Batkuchi, Poragaon, Toyalkuchi

4. **Palashikura Janata High School** (Palashikura)
   - Booths: 9
   - Type: Combined (Male & Female)
   - Voters: 3,806 (1,866 male + 1,940 female)
   - Areas: Palashikura, Andharpara North, Khalchanda

5. **Palashikura Government Primary School** (Palashikura)
   - Booths: 4
   - Type: Combined (Male & Female)
   - Voters: 3,806 (1,866 male + 1,940 female)
   - Areas: Palashikura, Andharpara North, Khalchanda

### Polling Centers Increased
The document notes several polling centers that were increased due to voter population growth, including:
- Nayabil Government Primary School
- Tattor Government Primary School
- Ramchandrakura High School
- Shalmara Government Primary School
- Jaynuddinpara Government Primary School
- Gojakura Hatemia Government Primary School
- Fakirpara Government Primary School
- Sannyasibita Government Primary School
- Taraganj Pilot High School

## Polling Center Types
1. **Male Polling Center** (পুরুষ ভোটকেন্দ্র) - Only male voters
2. **Female Polling Center** (মহিলা ভোটকেন্দ্র) - Only female voters
3. **Combined Polling Center** (পুরুষ ও মহিলা ভোটকেন্দ্র) - Both male and female voters

## Data Structure
The polling center data includes:
- Serial number
- Polling center name and location
- Number of polling booths
- Assigned areas/villages (with voter serial numbers)
- Male voter count
- Female voter count
- Total voter count
- Polling center type

## Next Steps
To complete the Nalitabari data:
1. Extract all polling centers from the full PDF document
2. Calculate total voters per union
3. Calculate total voters for Nalitabari Upazila
4. Update `nalitabariInfo` in `data/constituency.ts` with accurate totals
5. Optionally create a detailed polling center list component

## Current Status
- Basic structure created in `data/nalitabariPollingCenters.ts`
- Sample data from Poragaon Union included
- Main constituency info updated with union and polling center counts
- Components updated to display available information

