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

### 2. Install Dependencies

- [ ] Install required dependencies from your old project:

  ```bash
  # Core dependencies
  yarn add @emotion/react @emotion/styled @mui/material @popperjs/core bootstrap gsap jquery react-countup react-modal-video react-responsive-masonry react-router-dom react-scroll react-slick react-toastify sass simple-parallax-js simple-react-validator slick-carousel swiper yet-another-react-lightbox

  # TypeScript types
  yarn add -D @types/jquery @types/node @types/react @types/react-dom @types/react-modal-video @types/react-router-dom @types/react-scroll @types/react-slick @types/slick-carousel
  ```

### 3. Copy Source Code

- [ ] Copy the source code from your old project to the new Vite project:
  ```bash
  cd vite-app
  cp -r ../src/* ./src/
  cp -r ../public/* ./public/
  ```

### 4. Delete Old Project

- [ ] Delete the old project:
  ```bash
  rm -rf ./src
  rm -rf ./public
  rm -rf package.json
  rm -rf yarn.lock
  rm -rf node_modules
  rm -rf config-overrides.js
  rm -rf tsconfig.json
  ```

## 5. Move everything to the root directory

- [ ] Move everything to the root directory:
  ```bash
  mv vite-app/* .
  mv vite-app/.* .
  rm -rf vite-app
  ```

