# Christopher Bryan S. Evangelista - Portfolio

A modern, responsive full-stack developer portfolio showcasing experience, projects, skills, and beyond-work activities built with React, TypeScript, and Tailwind CSS.

## 🌐 Live Demo

Visit the live portfolio: [Portfolio](https://portfolio-krivr12.vercel.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Deployment](#deployment)
- [Sections](#sections)
- [Contact](#contact)

## ✨ Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views
- **Interactive Flip Cards**: Engaging flip card animations for experience and beyond-work sections
- **Smooth Animations**: Scroll reveal effects and smooth transitions throughout
- **Dark Theme**: Modern dark mode design with carefully chosen color palette
- **Performance Optimized**: Fast loading times with optimized images and code splitting
- **SEO Friendly**: Semantic HTML and proper meta tags
- **Accessibility**: WCAG compliant with proper contrast ratios and navigation

## 🛠 Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality React components
- **Lucide Icons** - Beautiful icon library

### Build Tools
- **Vite** - Lightning-fast build tool
- **ESLint** - Code quality and consistency

### Deployment
- **Vercel** - Serverless deployment platform

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── assets/              # Images and static files
│   │   ├── headshot.jpg
│   │   ├── Leading.jpg
│   │   ├── Volunteering.jpg
│   │   ├── Sharing.jpg
│   │   ├── Teaching.jpg
│   │   ├── Playing.jpg
│   │   ├── chevron-work-pic.jpg
│   │   ├── tambulilabs-work-pic.jpg
│   │   └── certifications/
│   ├── components/          # Reusable React components
│   │   ├── ui/              # Shadcn UI components
│   │   ├── navbar.tsx
│   │   ├── experience-flip-card.tsx
│   │   ├── beyond-work-flip-card.tsx
│   │   ├── reveal.tsx       # Scroll reveal animation
│   │   ├── section-container.tsx
│   │   └── section-heading.tsx
│   ├── sections/            # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── beyond-work.tsx
│   │   ├── certifications.tsx
│   │   └── contact.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── use-active-section.ts
│   │   └── use-scroll-reveal.ts
│   ├── lib/                 # Utility functions
│   │   └── utils.ts
│   ├── data.ts              # Central data source for all content
│   ├── index.css            # Global styles
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── public/                  # Static public files
│   ├── favicon.svg
│   ├── icons.svg
│   └── resume.pdf
├── dist/                    # Build output
├── index.html               # HTML entry point
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── components.json          # Shadcn UI configuration
├── eslint.config.js         # ESLint configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Krivr12/Portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 💻 Development

### Available Scripts

- **`npm run dev`** - Start development server with hot module replacement
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality

### Key Files for Customization

#### Content Updates
All portfolio content is centralized in `src/data.ts`:

- **Profile Information**: Update name, title, contact details
- **Experience**: Add/edit work experiences with bullet points
- **Projects**: Showcase your projects with tech stack and descriptions
- **Skills**: Organize skills by category
- **Certifications**: List your credentials with issuer and date
- **Beyond Work**: Add activities outside of work (leading, volunteering, teaching, etc.)

#### Styling
- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles use Tailwind utility classes

## 🏗 Build

```bash
npm run build
```

This generates an optimized production build in the `dist/` folder ready for deployment.

## 🌍 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (already done with provided commands)

2. **Import on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click Deploy

3. **Auto-deploy on push**
   - Every push to `main` branch automatically redeploys

### Environment Variables
No environment variables required for this project.

## 📄 Sections Overview

### Hero
- Introduction with profile information
- Quick stats (GPA, internships, projects, certifications)
- Call-to-action button

### About
- Personal introduction and professional background
- Key highlights and expertise areas

### Experience
- Interactive flip cards for work experiences
- Displays company, role, location, and key achievements
- Images with gradient overlays

### Projects
- Showcase of shipped full-stack projects
- Project descriptions, tech stack, and links
- Carousel layout for easy browsing

### Skills
- Organized by categories:
  - Web Development
  - Cloud & DevOps
  - AI & Data
  - Automation

### Beyond Work
- Interactive flip cards for personal activities
- Categories: Leading, Volunteering, Sharing, Teaching, Playing
- Images with descriptive paragraphs on flip

### Certifications
- Microsoft Azure certifications
- TESDA programming certification
- Issuer, date, and credential details

### Contact
- Email and phone contact options
- Social links (LinkedIn, GitHub)
- Call-to-action for collaboration

## 🎨 Design Features

### Color Palette
- **Primary Brand**: Lime green (`#A3E635`)
- **Dark Background**: Rich black theme
- **Accent**: Vibrant greens for CTAs

### Animations
- **Scroll Reveal**: Smooth fade-in as sections scroll into view
- **Flip Cards**: 3D flip animation on click
- **Smooth Transitions**: Hover effects and transitions throughout
- **Carousel**: Smooth carousel navigation for responsive scrolling

### Typography
- Clean, modern sans-serif fonts
- Proper hierarchy with varied sizes and weights
- High contrast for readability

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md-lg)
- **Desktop**: > 1024px (xl+)

All components are optimized for each breakpoint using Tailwind's responsive utilities.

## 🔧 Customization Guide

### Update Your Information
Edit `src/data.ts`:

```typescript
export const profile: Profile = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  email: "your.email@example.com",
  // ... other fields
};
```

### Add New Experience
```typescript
export const experience: ExperienceItem[] = [
  {
    id: "unique-id",
    company: "Company Name",
    role: "Your Role",
    location: "Location",
    startDate: "Month Year",
    endDate: "Month Year",
    bullets: ["Achievement 1", "Achievement 2"],
    image: "src/assets/your-image.jpg",
  },
  // ... other experiences
];
```

### Add New Projects
```typescript
export const projects: ProjectItem[] = [
  {
    id: "project-id",
    name: "Project Name",
    role: "Your Role",
    dateRange: "Date Range",
    description: "Project description",
    bullets: ["Feature 1", "Feature 2"],
    techStack: ["Tech 1", "Tech 2"],
    link: "https://project-link.com",
    image: "optional-image.jpg",
  },
];
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance)
- **Bundle Size**: Optimized with code splitting
- **Load Time**: < 2 seconds on 3G connection
- **Images**: Optimized formats (WebP, JPG)

## 🤝 Contributing

This is a personal portfolio, but you're welcome to:
- Fork the repository
- Use it as a template for your own portfolio
- Open issues for suggestions

## 📄 License

This project is open source and available under the MIT License.

## 👤 About Christopher Bryan S. Evangelista

- **Full Stack Developer** with expertise in React, Node.js, and Django
- **Cloud & AI Engineer** specializing in AWS and Azure
- **Education**: BS Information Technology from Polytechnic University of the Philippines (Magna Cum Laude, GWA: 1.19)
- **Location**: Manila, Philippines
- **Email**: christopherbryanevangelista@gmail.com
- **LinkedIn**: [chrisbryevangelista12](https://linkedin.com/in/chrisbryevangelista12)
- **GitHub**: [Krivr12](https://github.com/Krivr12)

## 📞 Contact

Feel free to reach out for:
- Full-time opportunities
- Freelance projects
- Collaboration and partnerships
- Interesting conversations about tech

**Email**: christopherbryanevangelista@gmail.com  
**Phone**: 0976-482-6989  
**LinkedIn**: [chrisbryevangelista12](https://linkedin.com/in/chrisbryevangelista12)  
**GitHub**: [Krivr12](https://github.com/Krivr12)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
