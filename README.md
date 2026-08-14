# Remix Omni Product Studio 🎬

Turn product photos into cinematic vibe reels using the power of Gemini Omni Flash and Gemini Flash Lite.

## Features

- **Product Integration**: Upload product photos or select from curated suggestions.
- **Atmosphere Generation**: Choose a vibe from the gallery or generate a custom atmosphere on the fly using Gemini Flash Lite.
- **Duration Control**: Select the perfect length for your reel (5s, 10s, or 15s).
- **Cinematic AI Directing**: Automatically writes a professional, timestamped director's prompt based on your product and atmosphere.
- **Omni Rendering**: Renders a premium, short-form video showcase using Gemini Omni Flash.
- **Cross-Platform**: Works as a web application, an installable Progressive Web App (PWA), and a native Android app via Capacitor.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, Motion
- **Backend**: Express (Node.js) server running Gemini API integrations
- **Mobile**: Capacitor (Android Native Wrapper), Vite PWA
- **AI Models**: `gemini-3.1-flash-lite-image`, `gemini-2.5-flash`, `gemini-3.1-omni` (Depending on API availability)

## Getting Started

### Prerequisites
- Node.js (v18+)
- A valid Gemini API Key

### Installation

1. Clone or export the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables by creating a `.env` file based on `.env.example`:
   ```env
   GEMINI_API_KEY="your_api_key_here"
   APP_URL="http://localhost:3000"
   ```

### Running Locally (Web)

Start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

### Building for Android

This project includes a native Android wrapper using Capacitor.

1. Build the web project:
   ```bash
   npm run build
   ```
2. Sync the built files to the Android project:
   ```bash
   npx cap sync
   ```
3. Open the Android project in Android Studio to build the APK:
   ```bash
   npx cap open android
   ```
   *(Or open the `android` folder directly in Android Studio).*
