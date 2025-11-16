# Mustafa Hasanain Portfolio

A modern, multilingual portfolio website showcasing full-stack development expertise, built with Next.js 16, React 19, and TypeScript.

**Live Site:** [mustafahasanain.com](https://mustafahasanain.com)

## Features

### Core Functionality

- **Multi-language Support** - English, Arabic, and Turkish with RTL support
- **Dark/Light Theme** - Persistent theme toggle with system preference detection
- **Responsive Design** - Mobile-first approach optimized for all devices
- **Interactive Animations** - Smooth transitions using Framer Motion and GSAP
- **3D Graphics** - Interactive elements powered by Three.js and React Three Fiber
- **Contact Form** - Validated form with Web3Forms integration
- **Analytics** - Privacy-focused tracking with Umami Analytics

### Key Sections

- **Hero Section** - Dynamic grid background with call-to-action
- **About** - Bento grid layout showcasing profile and mission
- **Tech Stack** - Comprehensive skill showcase across multiple categories
- **Projects** - Paginated portfolio with 9 featured projects
- **Work Experience** - Interactive cards highlighting expertise areas
- **Development Process** - Visual representation of workflow phases
- **Contact** - Form with validation and FAQ section

## Tech Stack

### Frontend

- **Framework:** Next.js 16.0.0 with App Router
- **UI Library:** React 19.2.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 with PostCSS
- **Animations:** Framer Motion, GSAP 3.13.0
- **3D Graphics:** Three.js 0.180.0, React Three Fiber 9.4.0

### Forms & Validation

- **react-hook-form** 7.65.0 - Form state management
- **Zod** 4.1.12 - Runtime type validation
- **react-phone-number-input** - International phone input

### UI Components

- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon system
- **Sonner** - Toast notifications
- **Class Variance Authority** - Component variants

### Internationalization

- **next-intl** 4.4.0 - Multi-language routing and translations
- **Custom Fonts:** Jost (Latin), Cairo (Arabic)

### Analytics & Integrations

- **Umami Analytics** - Privacy-focused website analytics
- **Web3Forms** - Serverless contact form handling
- **next-themes** - Theme management

### Development Tools

- **ESLint 9** - Code linting
- **TypeScript** - Static type checking

## Project Structure

```
mustafahasanain-portfolio/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # i18n dynamic routes
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page
│   │   ├── projects/             # Projects listing
│   │   └── contact/              # Contact page
│   └── globals.css               # Global styles
│
├── components/                   # React components
│   ├── sections/                 # Page sections
│   │   ├── hero.tsx
│   │   ├── About.tsx
│   │   ├── techStack.tsx
│   │   ├── latestProjects.tsx
│   │   ├── workExperience.tsx
│   │   ├── developmentProcess.tsx
│   │   └── Contact.tsx
│   ├── ui/                       # Reusable UI components
│   │   ├── 3dCard.tsx
│   │   ├── Accordion.tsx
│   │   ├── CanvasRevealEffect.tsx
│   │   ├── DotGrid.tsx
│   │   └── form/                 # Form components
│   ├── analytics/                # Analytics integration
│   ├── providers/                # Context providers
│   ├── Navbar.tsx
│   └── Footer.tsx
│
├── data/                         # Static data & content
│   ├── projects.ts               # Portfolio projects
│   ├── skills.ts                 # Tech stack categories
│   ├── experience.ts             # Work experience
│   ├── social.ts                 # Social links
│   ├── faq.ts                    # FAQ items
│   └── menu.ts                   # Navigation menu
│
├── messages/                     # i18n translations
│   ├── en.json                   # English
│   ├── ar.json                   # Arabic
│   └── tr.json                   # Turkish
│
├── lib/                          # Utilities
│   ├── utils.ts
│   └── validations/              # Zod schemas
│
├── types/                        # TypeScript definitions
│   └── index.ts
│
├── public/                       # Static assets
│   ├── projects/                 # Project images
│   ├── techStack/                # Technology logos
│   ├── Mustafa_Hasanain_CV.pdf
│   └── *.svg                     # Icons
│
└── scripts/                      # Build scripts
    └── postbuild.js              # Post-build processing
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mustafahasanain/mustafahasanain-portfolio.git
cd mustafahasanain-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your_umami_website_id
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Build & Deployment

This project is configured for static export and can be deployed to any static hosting service.

### Build Configuration

- Static export enabled (`output: "export"`)
- Post-build script copies default locale to root
- Images configured for unoptimized static export

### Deployment Platforms

- **Vercel** (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

### Build Command

```bash
npm run build
```

The build process:

1. Generates static HTML/CSS/JS
2. Runs post-build script to handle locale routing
3. Outputs to `out/` directory

## Environment Variables

| Variable                           | Description                        | Required |
| ---------------------------------- | ---------------------------------- | -------- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms API key for contact form | Yes      |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID`     | Umami Analytics website ID         | No       |

## Internationalization

The portfolio supports three languages with automatic locale detection:

- **English (en)** - Default locale
- **Arabic (ar)** - RTL support enabled
- **Turkish (tr)**

Translation files are located in `messages/` directory. To add a new language:

1. Create a new JSON file in `messages/`
2. Add locale to `i18n.ts` configuration
3. Update routing in `src/routing.ts`

## Features in Detail

### Contact Form

- Form validation using Zod schemas
- International phone number input
- Toast notifications for user feedback
- Web3Forms serverless integration
- GDPR-compliant consent checkbox

### Projects Showcase

- 9 featured projects with pagination
- Live demo and GitHub links
- Technology stack tags
- Responsive card grid layout

### Analytics

- Privacy-focused Umami integration
- No cookies or personal data collection
- Real-time visitor tracking
- Page view analytics

### Theme System

- Light and dark mode toggle
- System preference detection
- Persistent storage
- Smooth transitions

## Performance Optimizations

- Static site generation for fast loading
- Lazy loading of components
- Image optimization
- Minimal JavaScript bundle
- Efficient animation rendering
- CSS-in-JS with Tailwind

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/mustafahasanain/mustafahasanain-portfolio/issues).

## Contact

**Mustafa Hasanain**

- Website: [mustafahasanain.com](https://mustafahasanain.com)
- Email: contact@mustafahasanain.com
- GitHub: [@mustafahasanain](https://github.com/mustafahasanain)
- LinkedIn: [mustafahasanain](https://linkedin.com/in/mustafahasanain)
- Twitter: [@MustafaHDev](https://twitter.com/MustafaHDev)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)
- Analytics by [Umami](https://umami.is/)
- Forms powered by [Web3Forms](https://web3forms.com/)
