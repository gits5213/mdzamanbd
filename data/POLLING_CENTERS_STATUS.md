# Polling Centers Data Status

## Summary

### Nakla Upazila
- **Total Centers:** 79 (from official summary)
- **Extracted:** 4 centers (from visible PDF content)
- **Status:** Structure ready, needs complete data extraction

**Extracted Centers:**
1. Center 76: Janakipur Government Primary School (2,204 voters)
2. Center 77: Baliyadi Government Primary School (1,622 voters)
3. Center 78: Charmadhuya Government Primary School (2,615 voters - male only)
4. Center 79: Charmadhuya Dakhil Madrasa (2,681 voters - female only)

**Unions with Data:**
- Janakipur ✅
- Baliyadi ✅
- Charmadhuya ✅

**Unions Needing Data:**
- Nakla Municipality
- 6 other unions (names to be confirmed from PDF)

### Nalitabari Upazila
- **Total Centers:** 81 (from official summary)
- **Extracted:** 5 centers (from Poragaon Union)
- **Status:** Structure ready, needs complete data extraction

**Extracted Centers (Poragaon Union):**
1. Center 1: Samsura Government Primary School (2,304 voters - male only)
2. Center 2: Samsura High School (2,474 voters - female only)
3. Center 3: Poragaon Dakhil Madrasa (4,361 voters - combined)
4. Center 4: Palashikura Janata High School (3,806 voters - combined)
5. Center 5: Palashikura Government Primary School (3,806 voters - combined)

**Unions with Data:**
- Poragaon ✅ (5 schools)

**Unions Needing Data:**
- Nayabil
- Tattor
- Ramchandrakura
- Shalmara
- Jaynuddinpara
- Gojakura
- Fakirpara
- Sannyasibita

## Next Steps

To complete the data extraction:

1. **Open both PDF files** (Nakla.pdf and Nalitabari.pdf)
2. **Extract all polling centers** systematically:
   - Note serial number
   - Extract school/institution name (English and Bangla)
   - Note location/village
   - Count polling booths
   - Extract voter counts (male, female, total)
   - Identify polling center type (male/female/combined)
   - Map to correct union

3. **Update data files:**
   - `data/naklaUnions.ts` for Nakla centers
   - `data/unions.ts` for Nalitabari centers

4. **Verify totals:**
   - Nakla should have 79 centers total
   - Nalitabari should have 81 centers total
   - Voter totals should match official summaries

## Data Files Location

- Nakla: `/data/naklaUnions.ts`
- Nalitabari: `/data/unions.ts`
- Guide: `/data/DATA_EXTRACTION_GUIDE.md`

