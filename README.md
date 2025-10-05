# Anker Freiburg Website

This is the official repository for the Anker Freiburg website, a modern, performant web application built with Next.js and TypeScript.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Modern Frontend:** Built with Next.js 15 and React 19 for a fast, server-rendered user experience.
- **Internationalization:** Supports multiple languages using `next-intl`.
- **Rich Animations:** Smooth animations and transitions powered by GSAP and Lenis.
- **Optimized Media:** Efficiently handles images and videos with Cloudinary and Next-Cloudinary.
- **Backend Services:** Integrates with Supabase for backend-as-a-service features and AWS S3 for file storage.
- **Transactional Emails:** Sends emails using the Resend API.
- **Secure Forms:** Protects forms from spam with Google ReCAPTCHA.
- **Performance Monitoring:** Tracks web vitals and performance with Vercel Speed Insights.

## Tech Stack

### Frontend

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Library:** [React](https://react.dev/)
- **Animations:** [GSAP (GreenSock Animation Platform)](https://gsap.com/)
- **Smooth Scrolling:** [Lenis](https://lenis.studio/)

### Backend & Services

- **BaaS:** [Supabase](https://supabase.io/)
- **File Storage:** [AWS S3](https://aws.amazon.com/s3/)
- **Media Management:** [Cloudinary](https://cloudinary.com/)
- **Email Service:** [Resend](https://resend.com/)
- **Analytics:** [Vercel Speed Insights](https://vercel.com/analytics)

## Project Structure

```
anker-freiburg/
├── .next/              # Next.js build output
├── node_modules/       # Project dependencies
├── public/             # Static assets (images, fonts, etc.)
├── src/                # Main source code
│   ├── app/            # Next.js App Router pages and layouts
│   ├── components/     # Reusable React components
│   ├── lib/            # Helper functions and utilities
│   └── ...             # Other source directories
├── .gitignore          # Files to be ignored by Git
├── next.config.ts      # Next.js configuration
├── package.json        # Project metadata and dependencies
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

Follow these instructions to set up a local development environment.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20.x or later recommended)
- [npm](https://www.npmjs.com/) or another package manager like [Yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/anker-freiburg.git
    cd anker-freiburg
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

This project requires several environment variables to connect to external services. Create a `.env.local` file in the root of the project and add the following variables.

```sh
# .env.example

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# AWS S3
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
AWS_S3_BUCKET_NAME=your_s3_bucket_name

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name

# Resend
RESEND_API_KEY=your_resend_api_key

# Google ReCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
```

## Available Scripts

In the project directory, you can run the following commands:

-   `npm run dev`: Starts the development server with Turbopack.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts a production server.
-   `npm run lint`: Runs the ESLint linter to check for code quality issues.

## Deployment

The easiest way to deploy this Next.js application is to use the [Vercel Platform](https://vercel.com/new). The project is pre-configured for Vercel deployment, including Vercel Speed Insights.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.