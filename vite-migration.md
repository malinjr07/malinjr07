# Vite Migration Plan

This document outlines the steps to migrate the project from Create React App (using react-app-rewired) to Vite with React TypeScript template.

## Prerequisites
- [x] Ensure you have Node.js (v16 or later) installed
- [x] Ensure you have Yarn installed (v1.22+)
- [x] Backup your project before starting the migration

## Migration Steps

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
