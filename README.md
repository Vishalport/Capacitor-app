# Capacitor-app || NEXT.JS

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
### Prerequisites:
1. Node.js installed on your machine
2. npm or yarn package manager installed
3. Basic understanding of Next.js and Node.js
4. Mobile development environment set up (Android Studio for Android or Xcode for iOS)

3. **Add Platforms**:
   Decide which platforms you want to target (iOS, Android, or both) and add them to your project. For example, to add Android:

   ```bash
   npx cap add android
   ```

   Similarly, for iOS:

   ```bash
   npx cap add ios
   ```

4. **Export your Next.js project**:
   Next.js projects compile down to static HTML, CSS, and JavaScript files. You'll need to build your Next.js project and then copy the output to Capacitor's www directory:

   ```bash
   npm run build
   cp -r .next/static .next/server .next/main.js public/
   ```

5. **Sync the Capacitor Project**:
   Sync the Capacitor project with the latest changes from the Next.js project:

   ```bash
   npx cap copy
   ```

6. **Open the Native IDE**:
   Open the native IDE (Android Studio for Android, Xcode for iOS) to work on your native project:

   ```bash
   npx cap open android
   ```
