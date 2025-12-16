# Project Summary - Md. Shahnewaz Zaman Political Website

## Overview
A modern, responsive political campaign website built with Next.js 14, TypeScript, and Tailwind CSS for Md. Shahnewaz Zaman (Shanto), candidate for Sherpur-2 constituency (Nakla-Nalitabari), Bangladesh Parliament Election - Upcoming..

## Technology Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons (Feather Icons)
- **Font:** Inter (Google Fonts)

## Project Structure

```
mdzamanbd/
├── app/                    # Next.js app directory
│   ├── about/             # About/Biography page
│   ├── constituency/      # Constituency information page
│   ├── contact/           # Contact page
│   ├── vision/            # Political vision page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section
│   ├── AboutPreview.tsx  # About preview on homepage
│   ├── VisionSection.tsx # Vision section on homepage
│   ├── SocialActivities.tsx # Social activities section
│   ├── ConstituencyInfo.tsx # Constituency info on homepage
│   ├── CallToAction.tsx  # Call to action section
│   ├── Biography.tsx     # Full biography component
│   ├── Education.tsx     # Education qualifications
│   ├── PersonalInfo.tsx  # Personal information
│   ├── VisionContent.tsx # Full vision content
│   ├── ConstituencyDetails.tsx # Detailed constituency info
│   ├── ContactInfo.tsx   # Contact information display
│   └── ContactForm.tsx   # Contact form
├── data/                 # Data files
│   ├── personalInfo.ts   # Personal information data
│   ├── education.ts      # Education data
│   ├── politicalPositions.ts # Political positions
│   ├── socialPositions.ts # Social positions
│   ├── constituency.ts   # Constituency data
│   └── vision.ts         # Vision and objectives data
└── public/              # Static assets
```

## Pages

### 1. Homepage (`/`)
- Hero section with candidate introduction
- About preview
- Political vision overview
- Social activities showcase
- Constituency information
- Call to action

### 2. About Page (`/about`)
- Full biography
- Educational qualifications
- Personal and professional information

### 3. Vision Page (`/vision`)
- Complete political vision statement
- Three foundations (Truth, Morality, Service to Humanity)
- Key objectives list

### 4. Constituency Page (`/constituency`)
- Sherpur-2 constituency overview
- Nakla Upazila details (voters, polling centers, unions)
- Nalitabari Upazila information
- Links to official government websites

### 5. Contact Page (`/contact`)
- Contact information display
- Contact form for inquiries

## Key Features

### Design
- Modern, clean, and professional design
- Responsive layout for all devices (mobile, tablet, desktop)
- Smooth scrolling and transitions
- Accessible color contrast and typography
- Gradient backgrounds and modern UI elements

### Functionality
- Client-side navigation with Next.js
- Responsive navigation menu (mobile hamburger menu)
- Contact form with validation
- External links to official government websites
- Phone and email links

### Content
- Complete political resume integration
- Constituency data from official sources
- Social activities and leadership positions
- Educational background
- Professional career information

## Data Sources

The website integrates information from:
- Personal political resume
- Nakla Upazila official website (https://nokla.sherpur.gov.bd/)
- Nalitabari Upazila official website (https://nalitabari.sherpur.gov.bd/)
- Bangladesh Election Commission polling center data

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
- Primary colors: Used for main branding
- Accent colors: Used for secondary elements

### Content
Update data files in the `data/` directory:
- `personalInfo.ts` - Personal information
- `education.ts` - Education details
- `vision.ts` - Vision and objectives
- `constituency.ts` - Constituency information

### Styling
- Global styles: `app/globals.css`
- Component-specific styles: Inline Tailwind classes
- Custom utilities: Defined in `globals.css` under `@layer components`

## Next Steps

1. **Add Images:** Place candidate photos and constituency images in `/public` folder
2. **Configure Contact Form:** Connect the contact form to an email service or backend API
3. **Add News/Updates Section:** Create a blog or news section for campaign updates
4. **Social Media Integration:** Add social media links and feeds
5. **Analytics:** Add Google Analytics or similar tracking
6. **SEO Optimization:** Add meta tags, Open Graph tags, and structured data
7. **Multi-language Support:** Add Bangla language support if needed

## Notes

- The website follows modern web standards and best practices
- All components are reusable and maintainable
- TypeScript ensures type safety
- Tailwind CSS provides utility-first styling
- The design is mobile-first and responsive
- No external design patterns or templates were used (as requested)

## Support

For questions or issues, please refer to the Next.js documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

