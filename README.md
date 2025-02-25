# AI-code-assistant

This repository contains the codebase for the **bolt-new-clone** project. The code is written using **Next.js** and utilizes standard open-source libraries.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setting Up the Environment](#setting-up-the-environment)
- [Running the Code](#running-the-code)
- [Building for Production](#building-for-production)
- [Additional Information](#additional-information)

---

## Prerequisites

Before running the project, ensure that the following are installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **pnpm**: Install globally using:
  ```bash
  npm install -g pnpm
  ```

---

## Setting Up the Environment

1. **Clone the repository**:


2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Configure environment variables**:

   - Create a `.env.local` file in the root directory:
     ```env
     # .env.local
     API_KEY=your_api_key_here
     OTHER_ENV_VAR=your_value_here
     ```
   - Replace placeholder values with actual credentials.

---

## Running the Code

To start the development server:

```bash
pnpm run dev
```

- The application will be available at: `http://localhost:3000/`

---

## Building for Production

1. **Build the project**:

   ```bash
   pnpm run build
   ```

2. **Start the production server**:

   ```bash
   pnpm run start
   ```

---

## Additional Information

- **Scripts**: Available in `package.json` under the `scripts` section.
- **Configuration Files**: Includes `next.config.mjs`, `tailwind.config.mjs`, and `postcss.config.mjs`.
- **Components**: Located in the `components` directory.
- **Pages**: Found in the `app` directory (follows Next.js App Router structure).

For more information, refer to the [Next.js documentation](https://nextjs.org/docs).
