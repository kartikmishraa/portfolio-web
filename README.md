# Portfolio Website - Kartik Mishra

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark/light theme toggle, and a functional contact form.

## Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Dark/Light Theme**: Toggle between themes with smooth animations and localStorage persistence
- **Smooth Animations**: Framer Motion powered animations for smooth user experience
- **Contact Form**: Integrated with EmailJS for seamless email functionality
- **Single Page Application**: Smooth scrolling navigation between sections
- **Modern UI**: Clean, professional design with Tailwind CSS
- **TypeScript**: Type-safe code for better development experience
- **Configuration-Driven**: Easy to update content through a single config file

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3+
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Icons**: Lucide React
- **State Management**: React Context API (for theme)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-web
```

2. Install dependencies
```bash
npm install
```

3. Set up EmailJS (for contact form)
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template with these variables:
     - `{{from_name}}` - User's name
     - `{{from_email}}` - User's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
   - Copy your Service ID, Template ID, and Public Key

4. Configure environment variables
   - Copy `.env.example` to `.env`
   - Add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## Updating Content

All portfolio content is centralized in `src/data/portfolio.config.ts`. Update this file to modify:

- Personal information (name, role, email, location, social links)
- Education details
- Technical skills
- Work experience
- Projects
- Certificates

### Example: Adding a New Project

Edit `src/data/portfolio.config.ts`:

```typescript
projects: [
  {
    title: "Your Project Name",
    description: "Short description",
    fullDescription: "Detailed description",
    technologies: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/youruser/yourproject",
    demo: "https://your-demo-url.com", // optional
    date: "Month Year"
  }
]
```

### Example: Adding a New Skill

Edit `src/data/portfolio.config.ts`:

```typescript
skills: {
  languages: ["Java", "C/C++", "JavaScript/TypeScript", "HTML/CSS", "Python"], // Add here
  backend: ["Spring Boot", "Core Java", "Node.js", "MongoDB"],
  frontend: ["Angular", "React"], // Or add here
  tools: ["Claude", "Gen AI", "Git", "Linux", "JIRA", "Jenkins", "Kubernetes"]
}
```

## Adding Your Assets

1. **Profile Photo**: Add your photo to `public/images/profile.jpg`
2. **Resume**: Add your resume PDF to `public/resume.pdf`

## Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio-web/
├── public/              # Static assets
│   └── images/         # Images
├── src/
│   ├── components/     # React components
│   │   ├── animations/ # Animation wrappers
│   │   ├── layout/     # Header, Footer
│   │   ├── sections/   # Page sections
│   │   └── ui/         # Reusable UI components
│   ├── context/        # React Context (Theme)
│   ├── data/           # Configuration files
│   ├── hooks/          # Custom React hooks
│   ├── types/          # TypeScript types
│   ├── utils/          # Utility functions
│   ├── styles/         # Global styles
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── .env                # Environment variables (gitignored)
├── .env.example        # Environment variables template
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Changing Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Customize these values
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        // ...
      }
    }
  }
}
```

### Modifying Animations

Animation components are in `src/components/animations/`. You can adjust:
- Animation duration
- Animation direction
- Delay timing
- Easing functions

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables (EmailJS credentials)
5. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add environment variables (EmailJS credentials)
7. Deploy

## Troubleshooting

### Images not loading
- Make sure images are in the `public/images/` directory
- Use absolute paths starting with `/` (e.g., `/images/profile.jpg`)

### Contact form not sending emails
- Verify EmailJS credentials in `.env`
- Check EmailJS dashboard for service status
- Ensure email template variables match the form data structure

### Dark mode not persisting
- Check browser localStorage permissions
- Clear browser cache and try again

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Kartik Mishra - [Update with your actual email]

Project Link: [Your GitHub Repository]

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
- [Lucide Icons](https://lucide.dev/)
