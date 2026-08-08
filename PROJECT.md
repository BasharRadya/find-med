# FindMed — Project Brief

## The problem

Finding the right doctor or dentist is often a slow, stressful, word-of-mouth process. A person with a specific health concern usually asks friends, family, and contacts for recommendations, then separately researches each doctor’s specialty, reputation, clinic location, services, languages, and availability. Information is fragmented, inconsistent, and difficult to compare—especially when the person does not know the exact medical specialty they need.

## The solution

FindMed (`find-med.com`) is a city-based healthcare discovery platform. It helps people describe what they need, explore relevant medical specialties, view trusted professionals on a local map, compare clear profiles, and contact a suitable clinic with confidence.

Each doctor or clinic profile is intended to include:

- Doctor name, photo, credentials, and verified status
- Medical specialty and areas of expertise
- Treatments and services offered
- Clinic address and precise map location
- Phone, website, messaging, and appointment options
- Languages spoken and accessibility information
- Opening hours, availability, and accepted insurance
- Patient ratings and moderated reviews
- Clinic photos and practical arrival details

Profiles open in a consistent order: overview, education and training, verified specialty and credentials, clinic services, practical information, and contact actions. Website and booking links appear only when supplied by the clinic. Missing fields are shown transparently as not yet provided rather than inferred from directory listings.

## Product principles

1. **Local first:** Discovery begins with the user’s city and distance.
2. **Plain language:** People may search by symptoms or concerns, not only medical terminology.
3. **Trust before promotion:** Verification, transparent profile data, and authentic reviews must be clearly separated from paid placement.
4. **Easy comparison:** Consistent profile fields make doctors and services easier to compare.
5. **Direct connection:** FindMed shortens the path from searching to calling, messaging, or booking.
6. **Privacy by design:** Collect only necessary personal information and treat health-related searches as sensitive data.

## Initial website scope

The first prototype includes a responsive landing page, a four-step city and care hierarchy, pressable clinic rows with expandable details, multilingual search, a simple explanation of the journey, and an onboarding call-to-action for healthcare professionals.

The first launch area is intentionally focused on Tira and Tayibe. The main directory begins with two top-level fields—Dentistry and General Medicine—then guides the user into a more specific branch before showing matching professionals. Most current professionals are fictional and are for interface demonstration only.

The first public-data example is Dr. Karam Samara under Tira → Dentistry → General dentist. The prototype lists only details corroborated by public directory pages: name, general field, Tira/Al Zahra location, and public contact number. The profile links back to its source and deliberately shows “No reviews yet” rather than inferring a rating. Clinic owners must confirm and claim all details before production publication.

## Discovery hierarchy

The interface separates patient navigation from professional verification:

1. City: Tira or Tayibe
2. Healthcare field: Dentistry or General Medicine
3. Patient-friendly category: for example Orthodontics, Gum Health, Primary Care, or Heart and Lungs

The directory normally ends at the category level. A conditional fourth step appears only when the category requires a meaningful split: Neurology separates adult from pediatric neurology and child development, while Psychiatry separates adult from child and adolescent psychiatry. Dentistry and the other current medical categories do not show a fourth step. Services remain inside each clinic profile.

For dentistry, FindMed exposes the specialist areas that patients commonly seek—general dentistry, oral and maxillofacial surgery, orthodontics, prosthodontics, periodontics, endodontics, pediatric dentistry, and oral medicine—then provides understandable treatments beneath each. Oral pathology and dental public health remain part of the professional taxonomy but are not promoted as primary patient-search routes because they are generally referral, laboratory, population, or institutional fields.

For the initial medicine launch, the public-facing categories use familiar patient language: Eye Care, Dermatology, Women's Health, Aesthetic Medicine, Neurology, and Psychiatry. Formal Ministry of Health specialist titles are stored and displayed separately inside verified doctor profiles. Aesthetic Medicine is a field-of-practice category and must not be presented as a recognized specialist title. More categories can be added as real local clinic data becomes available.

Physiotherapy and rehabilitation, and massage and bodywork, are separate top-level categories inside Medicine. They do not use subcategories; specific massage methods appear as services inside each profile. Physiotherapy profiles must belong to practitioners with a valid Ministry of Health professional certificate. Massage and bodywork profiles must use their actual training title and must not be presented as physiotherapists.

## Suggested product roadmap

### Phase 1 — Validated directory

- Choose one launch city and 3–5 specialties
- Define a standard clinic-data collection form
- Personally verify the first 30–50 professional profiles
- Add profile pages, filters, phone/WhatsApp contact, and basic analytics
- Test the search experience with real patients

### Phase 2 — Trust and conversion

- Add identity/license verification workflows
- Add moderated patient reviews and review fraud controls
- Support Arabic, Hebrew, and English, including right-to-left layouts
- Add opening hours, insurance filters, accessibility, and languages
- Add booking requests and clinic lead management

### Phase 3 — Platform growth

- Expand to more cities and specialties
- Add symptom-to-specialty guidance with strong medical disclaimers
- Offer claimed clinic profiles and professional dashboards
- Add carefully labeled sponsored visibility options
- Develop partnerships with clinics, insurers, and healthcare organizations

## Important operational considerations

- Confirm local rules governing medical advertising, professional licensing, patient reviews, privacy, and health data before launch.
- Do not present FindMed as diagnosing conditions or replacing professional medical advice.
- Create a clear profile-verification standard and a correction/removal process.
- Obtain permission before publishing doctor photos, clinic information, or patient testimonials.
- Keep paid placement visibly labeled and separate from organic ranking.

## Current technology

The prototype is intentionally dependency-free: semantic HTML, responsive CSS, and vanilla JavaScript. This makes it quick to review locally. A production version can later move to a framework and database once the workflows, data model, and launch market are validated.

## Run locally

From the `find_med` directory:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
