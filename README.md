# 🚀 Next Hire - Smart Job Portal

A modern, responsive job search application built with Next.js 15, TypeScript, and Tailwind CSS. Find your next career opportunity with an intuitive and professional interface.

![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-blue?style=flat-square&logo=tailwindcss)

## ✨ Features

- **🔍 Real-time Job Search** - Search jobs by title, company, or keywords
- **🏷️ Smart Filtering** - Filter by employment type (Full-time, Part-time, Contractor)
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI** - Beautiful gradients, glassmorphism effects, and professional styling
- **📋 Detailed Job Views** - Comprehensive job information in elegant modals
- **🔗 Direct Applications** - Apply directly through external job boards
- **♿ Accessibility** - Full keyboard navigation and screen reader support
- **⚡ Performance Optimized** - Fast loading with Next.js optimizations

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.4.5](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5.x](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.x](https://tailwindcss.com/)
- **UI Components**: [Radix UI Themes 3.2.1](https://www.radix-ui.com/themes)
- **Icons**: [Lucide React 0.536.0](https://lucide.dev/)
- **Runtime**: [React 19.1.0](https://react.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shubhagrawal0903/NextHire-Smart-Job-Portal.git
   cd NextHire-Smart-Job-Portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Main job listings page
│   ├── globals.css        # Global styles
│   └── search/            # Search route
├── components/            # Reusable components
│   ├── header.tsx         # Navigation header
│   ├── search-input.tsx   # Search functionality
│   ├── filter-side-bar.tsx # Employment type filters
│   ├── job-modal.tsx      # Job details modal
│   ├── cards/
│   │   └── job-card.tsx   # Individual job display
│   └── context/
│       └── theme-context.tsx # Theme provider
└── data.js               # Static job data
```

## 🎯 Key Features

### Job Search & Discovery
- **Real-time Search**: Instant filtering as you type
- **Employment Type Filters**: Full-time, Part-time, Contractor options
- **Professional Job Cards**: Clean, informative job previews
- **Responsive Grid Layout**: Adapts to any screen size

### Job Details & Applications
- **Comprehensive Modals**: Detailed job information display
- **Company Branding**: Employer logos and information
- **Multiple Apply Options**: Various job board integrations
- **Direct Application Links**: One-click apply functionality

### User Experience
- **Modern Design**: Gradient backgrounds and glassmorphism
- **Smooth Interactions**: Optimized for performance
- **Accessibility First**: ARIA labels and keyboard navigation
- **Loading States**: Visual feedback for better UX

## 🎨 Design System

### Color Palette
- **Primary**: Purple (#8b5cf6), Blue (#06b6d4)
- **Accent**: Cyan (#22d3ee), Pink (#ec4899)
- **Neutrals**: Gray shades with transparency effects

### Typography
- **Primary**: Geist Sans
- **Monospace**: Geist Mono
- **Weights**: Bold, Medium, Normal

## 📊 Performance

- **Build Time**: ~11 seconds
- **Bundle Size**: Optimized with Next.js
- **Core Web Vitals**: Excellent performance scores
- **Accessibility**: WCAG 2.1 compliant

## 🔧 Development

### Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality enforcement
- **Prettier**: Code formatting (recommended)
- **Husky**: Git hooks for quality gates (optional)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Manual Deployment

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shubh Agrawal**
- GitHub: [@shubhagrawal0903](https://github.com/shubhagrawal0903)
- LinkedIn: [Shubh Agrawal](https://linkedin.com/in/shubhagrawal0903)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Job bookmarking and favorites
- [ ] Advanced filtering (location, salary, company)
- [ ] Application tracking system
- [ ] Employer dashboard for job posting
- [ ] AI-powered job recommendations
- [ ] Mobile app (React Native)
- [ ] Real-time notifications

---

Made with ❤️ by [Shubh Agrawal](https://github.com/shubhagrawal0903)
"# NextHire-Smart-Job-Portal" 
