# Fresh Vite Migration Plan

This document provides a step-by-step guide to create a new Vite + React + TypeScript project and migrate the existing codebase into it. This approach ensures a clean setup with the latest configurations.

## Prerequisites

- [x] Ensure you have Node.js (v18 or later) installed
- [x] Install Yarn (v1.22+ or v3.x)
- [x] Backup your entire project before starting the migration
- [x] Close any running development servers

## Migration Strategy

1. Create a new Vite project in a temporary directory
2. Set up the project with required configurations
3. Migrate components and assets incrementally
4. Install and configure necessary dependencies
5. Test and validate the new setup

## Migration Steps

### 1. Create a New Vite Project

- [ ] Initialize a new Vite project with React and TypeScript:
  ```bash
  yarn create vite vite-app --template react-ts
  ```
- [ ] Install initial dependencies:
  ```bash
  cd vite-app
  yarn set version stable
  yarn
  ```

### 2. Set Up Project Structure

- [ ] Create the following directory structure:
  ```
  src/
  ├── assets/           # Static assets (images, fonts, etc.)
  ├── components/       # Reusable components
  ├── main-component/   # Main page components
  ├── types/           # TypeScript type definitions
  ├── utils/           # Utility functions
  ├── App.tsx          # Main App component
  └── main.tsx         # Application entry point
  ```
- [ ] Set up Vite configuration:
      Create `vite.config.ts` with:

  ```typescript
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import tsconfigPaths from 'vite-tsconfig-paths';
  import path from 'path';

  export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
    },
  });
  ```

### 4. Configure TypeScript

- [ ] Update `tsconfig.json`:
  ```json
  {
    "compilerOptions": {
      "target": "ESNext",
      "useDefineForClassFields": true,
      "lib": ["DOM", "DOM.Iterable", "ESNext"],
      "allowJs": true,
      "skipLibCheck": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "module": "ESNext",
      "moduleResolution": "Node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx",
      "baseUrl": ".",
      "paths": {
        "@/*": ["./src/*"]
      }
    },
    "include": ["src"],
    "references": [{ "path": "./tsconfig.node.json" }]
  }
  ```
- [ ] Create `tsconfig.node.json`:
  ```json
  {
    "compilerOptions": {
      "composite": true,
      "skipLibCheck": true,
      "module": "ESNext",
      "moduleResolution": "bundler",
      "allowSyntheticDefaultImports": true
    },
    "include": ["vite.config.ts"]
  }
  ```

### 5. Migrate Source Code

- [ ] Move components from the old project to the new structure
  ```bash
  # Example: Copy components
  cp -r ../src/components ./src/
  cp -r ../src/main-component ./src/
  ```
- [ ] Move assets:
  ```bash
  cp -r ../public/* ./public/
  cp -r ../src/assets/* ./src/assets/
  ```
- [ ] Update `index.html` in the project root:
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Your App Title</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.tsx"></script>
    </body>
  </html>
  ```

### 6. Install Dependencies

- [ ] Install required dependencies from your old project:

  ```bash
  # Core dependencies
  yarn add @emotion/react @emotion/styled @mui/material @popperjs/core bootstrap gsap jquery react-countup react-modal-video react-responsive-masonry react-router-dom react-scroll react-slick react-toastify sass simple-parallax-js simple-react-validator slick-carousel swiper yet-another-react-lightbox

  # TypeScript types
  yarn add -D @types/jquery @types/node @types/react @types/react-dom @types/react-modal-video @types/react-router-dom @types/react-scroll @types/react-slick @types/slick-carousel
  ```

### 7. Update Component Imports

- [ ] Update import paths to use the new alias:
  - Change relative paths (e.g., `'../../components/Button'`) to use `@/` alias (e.g., `'@/components/Button'`)
  - Ensure all file extensions are correct (`.tsx` for React components)

### 8. Set Up Environment Variables

- [ ] Create `.env` files:
  - `.env.development`
  - `.env.production`
- [ ] Update environment variable references in code:
  - Change `process.env.REACT_APP_*` to `import.meta.env.VITE_*`

### 9. Configure CSS and Styling

- [ ] Set up global styles in `src/index.css`
- [ ] Configure PostCSS if needed (create `postcss.config.js`)
- [ ] Update any build-related configurations in `vite.config.ts`

### 10. Testing Setup (Optional)

- [ ] Install testing dependencies:
  ```bash
  yarn add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitest/ui
  ```
- [ ] Create `vitest.config.ts`:

  ```typescript
  import { defineConfig } from 'vitest/config';
  import react from '@vitejs/plugin-react';
  import tsconfigPaths from 'vite-tsconfig-paths';

  export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
    },
  });
  ```

### 11. Update package.json Scripts

- [ ] Update scripts in `package.json`:
  ```json
  {
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview",
      "test": "vitest",
      "test:ui": "vitest --ui",
      "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
      "type-check": "tsc --noEmit"
    }
  }
  ```

### 12. Final Steps

- [ ] Run the development server to test:
  ```bash
  yarn dev
  ```
- [ ] Test all major functionality
- [ ] Build for production:
  ```bash
  yarn build
  yarn preview
  ```
- [ ] Once verified, you can remove the old project files and rename the temp directory

## Post-Migration Tasks

- [ ] Update documentation
- [ ] Update CI/CD pipelines
- [ ] Add any Vite-specific optimizations

## Troubleshooting

- For build errors, check the Vite documentation
- For TypeScript errors, ensure all types are properly defined
- For styling issues, verify PostCSS and CSS module configurations

### 1. Install Vite and Required Dependencies

- [ ] Create a backup of your current project
- [ ] Install Vite and required plugins:
  ```bash
  yarn add -D vite @vitejs/plugin-react vite-tsconfig-paths
  ```

### 2. Create Vite Configuration

- [ ] Create `vite.config.ts` in the project root with the following content:

  ```typescript
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import tsconfigPaths from 'vite-tsconfig-paths';

  export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'build',
      sourcemap: true,
    },
  });
  ```

### 3. Update package.json

- [ ] Update scripts section in `package.json`:
  ```json
  {
    "scripts": {
      "start": "vite",
      "dev": "vite",
      "build": "tsc && vite build",
      "serve": "vite preview",
      "test": "vitest",
      "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
    }
  }
  ```
- [ ] Remove react-app-rewired and other CRA-specific dependencies:
  ```bash
  yarn remove react-scripts react-app-rewired @testing-library/jest-dom @testing-library/react @testing-library/user-event web-vitals
  ```

### 4. Move and Update index.html

- [ ] Move `public/index.html` to the project root
- [ ] Update the HTML file to include the entry point:
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Your App Title</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/src/index.tsx"></script>
    </body>
  </html>
  ```

### 5. Update Environment Variables

- [ ] Rename `.env` files to use Vite's naming convention:
  - `.env` → `.env`
  - `.env.development` → `.env.development`
  - `.env.production` → `.env.production`
- [ ] Update environment variable references in code from `process.env.REACT_APP_*` to `import.meta.env.VITE_*`

### 6. Update Imports and Code

- [ ] Update any absolute imports to use the `@/` alias (already configured in tsconfig.json)
- [ ] Update any dynamic imports to use Vite's `import.meta.glob` if needed
- [ ] Update any usage of `process.env.NODE_ENV` to `import.meta.env.MODE`

### 7. Update Testing Setup

- [ ] Install testing dependencies:
  ```bash
  yarn add -D vitest @testing-library/react @testing-library/jest-dom jsdom @vitest/ui
  ```
- [ ] Create `vitest.config.ts`:

  ```typescript
  import { defineConfig } from 'vitest/config';
  import react from '@vitejs/plugin-react';
  import tsconfigPaths from 'vite-tsconfig-paths';

  export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
    },
  });
  ```

### 8. Handle Static Assets

- [ ] Move all static assets from `public/` to `public/assets/` (except `index.html` which is now in the root)
- [ ] Update any asset references in your code to use the new paths

### 9. Update TypeScript Configuration

- [ ] Update `tsconfig.json` to include Vite's client types:
  ```json
  {
    "compilerOptions": {
      "target": "ESNext",
      "lib": ["DOM", "DOM.Iterable", "ESNext"],
      "module": "ESNext",
      "skipLibCheck": true,
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx",
      "strict": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noFallthroughCasesInSwitch": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "forceConsistentCasingInFileNames": true,
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    },
    "include": ["src"],
    "references": [{ "path": "./tsconfig.node.json" }]
  }
  ```
- [ ] Create `tsconfig.node.json`:
  ```json
  {
    "compilerOptions": {
      "composite": true,
      "skipLibCheck": true,
      "module": "ESNext",
      "moduleResolution": "bundler",
      "allowSyntheticDefaultImports": true
    },
    "include": ["vite.config.ts"]
  }
  ```

### 10. Update Dependencies

- [ ] Update React and related dependencies to their latest versions:
  ```bash
  yarn add react@latest react-dom@latest @types/react@latest @types/react-dom@latest
  ```

### 11. Test the Migration

- [ ] Start the development server:
  ```bash
  yarn dev
  ```
- [ ] Test all major functionality
- [ ] Run tests:
  ```bash
  yarn test
  ```
- [ ] Build for production:
  ```bash
  yarn build
  yarn serve
  ```

### 12. Clean Up

- [ ] Remove any remaining CRA files:
  - `config-overrides.js`
  - `src/setupTests.js` (if not using)
  - `public/manifest.json` (if not using PWA)
  - Any other CRA-specific files

## Post-Migration

- [ ] Update documentation to reflect the new build system
- [ ] Update CI/CD pipelines to use the new build commands
- [ ] Consider adding Vite-specific optimizations

## Troubleshooting

- If you encounter any issues with environment variables, ensure they're prefixed with `VITE_`
- For path resolution issues, check your `tsconfig.json` and `vite.config.ts`
- For styling issues, ensure your CSS imports are correct and consider using CSS modules or a CSS-in-JS solution

## Additional Resources

- [Vite Documentation](https://vitejs.dev/guide/)
- [Vite Migration Guide](https://vitejs.dev/guide/migration.html)
- [Vite + React + TypeScript Guide](https://vitejs.dev/guide/#trying-vite-online)

