# NameMind

NameMind is an AI-powered domain discovery and management platform. Instantly generate, search, and analyze domain names with smart suggestions, real-time availability.

## Features

- **AI-Powered Domain Generator**: Create unique domain names using advanced algorithms and smart suggestions.
- **Domain Search Center**: Find, check, and secure the perfect domain for your project.
- **Real-Time Availability**: Instantly check domain and subdomain status across popular platforms.
- **Instant Deployment**: Deploy domains instantly to platforms like Vercel and Netlify.


## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend/API**: Next.js API routes
- **Icons & Images**: Custom assets (add your own in `/public/icons` and `/public/images`)

## Getting Started

### Prerequisites

- Node.js 16+
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Thato-t/NameMind.git
cd NameMind
```

Install dependencies:

```bash
npm install
```

### Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  components/
    landingMain.tsx
    modal/
      PopupAdvanced.tsx
      PopupGenerate.tsx
      PopupResult.tsx
    reusable/
      available.tsx
      Loader.tsx
      navbar.tsx
  api/
    check-subdomain/
      landing-page/
        route.ts
    generate/
      route.ts
  landing-result/
    page.tsx
  result/
    generate/
      page.tsx
  sign/
    page.tsx
public/
  icons/
  images/
```

## Contributing

Contributions are welcome! Please fork the repository and open a pull request.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions, suggestions, or collaborations, please open an issue or contact [@Thato-t](https://github.com/Thato-t).
