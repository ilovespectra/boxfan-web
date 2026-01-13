# BoxFan Download Website

A modern, sleek Next.js website for downloading the BoxFan Android app.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-friendly interface
- ⚡ Fast APK download with direct GitHub integration
- 🎯 Clear installation instructions
- 🔗 GitHub repository link
- ✨ Smooth animations and hover effects

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main landing page
│   ├── globals.css        # Global styles
│   └── api/
│       └── download/
│           └── route.ts   # APK download endpoint
```

## How It Works

1. **Landing Page** - Beautiful hero section with download button, features, and installation guide
2. **Download Route** - API endpoint (`/api/download`) that fetches the APK from GitHub and returns it as a downloadable file
3. **Installation Instructions** - Step-by-step guide for users to install the APK on their Android devices
4. **GitHub Link** - Direct link to the BoxFan repository

## Download Mechanism

The download button triggers a client-side fetch to `/api/download`, which:
1. Fetches the APK from GitHub raw content
2. Returns it with proper headers for download
3. Browser automatically saves it as `BoxFan.apk`

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Beautiful icon library
- **ESLint** - Code linting

## Deployment

The site can be deployed to any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Docker containers

## License

This project is open source and available under the same license as BoxFan.

## Links

- [BoxFan GitHub Repository](https://github.com/ilovespectra/BoxFan)
