# TypeScript Migration Tasks

## Migration Steps for Each File

For each file, follow these steps:

1. **Create TypeScript Version**:

   - Create a new `index.tsx` (for React components) or `index.ts` (for non-React files) in the same directory
   - Copy all content from the original `.js` file
   - Keep the original `.js` file until the new TypeScript version is fully working

2. **Add Type Annotations**:

   - Add proper type annotations to function parameters and return types
   - Create type declarations in the `src/types` directory for shared types
   - Use `type` (not `interface`) for all type declarations
   - Keep type definitions in separate `.d.ts` files in the `types` directory

3. **Update Imports**:

   - Update relative imports to include the new file extension
   - Import types from the `types` directory as needed
   - Ensure all type imports use the `type` keyword

4. **Test**:

   - Run the application to ensure the component works as expected
   - Fix any TypeScript errors that appear

5. **Cleanup**:

   - Once the new `.tsx`/`.ts` file is working correctly, delete the original `.js` file
   - Update any imports that referenced the old `.js` file

## Configuration Files

- [ ] `src/index.js` → `index.tsx`

  - Create new file `index.tsx` in `src/` and copy content from `index.js`
  - Add type annotations for ReactDOM render function
  - Ensure proper typing for the root component
  - Create `src/types/index.d.ts` for any shared types
  - Test the application
  - Delete `index.js` after successful migration

- [ ] `src/App.js` → `App/index.tsx`

  - Create new file `src/App.tsx` and copy content from `App.js`
  - Create type declarations in `src/types/app.d.ts` for:
    - App component props and state types
    - Any custom types used in the App component
  - Convert all PropTypes to TypeScript types
  - Test the application
  - Delete `App.js` after successful migration

- [ ] `src/App.test.js` → `src/App.test.tsx`

  - Create new file `src/App.test.tsx` and copy content from `App.test.js`
  - Update imports to use `.tsx` extension
  - Add type annotations for test utilities
  - Create `src/types/test-utils.d.ts` for custom test utilities
  - Run tests to ensure they pass
  - Delete `App.test.js` after successful migration

- [ ] `src/reportWebVitals.js` → `src/reportWebVitals.ts`

  - Create new file `src/reportWebVitals.ts` and copy content from `reportWebVitals.js`
  - Create `src/types/vitals.d.ts` for web vitals related types
  - Test the application
  - Delete `reportWebVitals.js` after successful migration

- [ ] `src/setupTests.js` → `src/setupTests.ts`
  - Create new file `src/setupTests.ts` and copy content from `setupTests.js`
  - Add types for testing libraries (Jest, React Testing Library)
  - Move any global test types to `src/types/global.d.ts`
  - Run tests to ensure they work with TypeScript
  - Delete `setupTests.js` after successful migration

## API Files

- [ ] `src/api/Project.js` → `src/api/Project.ts`

  - Create new file `src/api/Project.ts` and copy content from `Project.js`
  - Create `src/types/api/project.d.ts` for:
    - Project-related request/response types
    - Filter/sort parameter types
  - Convert any JSDoc types to TypeScript types
  - Test all project-related API calls
  - Delete `Project.js` after successful migration

- [ ] `src/api/Resume.js` → `src/api/Resume.ts`

  - Create new file `src/api/Resume.ts` and copy content from `Resume.js`
  - Create `src/types/api/resume.d.ts` for:
    - Resume data structure types
    - Experience/education item types
  - Add proper error handling with typed errors
  - Test resume data fetching functionality
  - Delete `Resume.js` after successful migration

- [ ] `src/api/Services.js` → `src/api/Services.ts`

  - Create new file `src/api/Services.ts` and copy content from `Services.js`
  - Create `src/types/api/services.d.ts` for:
    - Service-related types
    - Category/tag types
  - Document expected response types using JSDoc
  - Test all service endpoints
  - Delete `Services.js` after successful migration

- [ ] `src/api/blogs.js` → `src/api/blogs.ts`

  - Create new file `src/api/blogs.ts` and copy content from `blogs.js`
  - Create `src/types/api/blogs.d.ts` for:
    - Blog post types (full and summary views)
    - Comment/author types
  - Add proper error typing and handling
  - Test all blog-related functionality
  - Delete `blogs.js` after successful migration

- [ ] `src/api/index.js` → `src/api/index.ts`
  - Create new file `src/api/index.ts` and copy content from `index.js`
  - Create `src/types/api/index.d.ts` for:
    - API response/request types
    - Common parameter types
  - Ensure consistent typing across all API functions
  - Test all API imports and exports
  - Delete `index.js` after successful migration

## Utility Files

- [ ] `src/js/BackgroundVideo.js` → `src/utils/BackgroundVideo.tsx`
  - Create new file `src/utils/BackgroundVideo.tsx` and copy content from `BackgroundVideo.js`
  - Create `src/types/utils/BackgroundVideo.d.ts` for:
    - Component props type
    - Any custom types used in the component
  - Convert any PropTypes to TypeScript types
  - Test the component in the application
  - Delete `BackgroundVideo.js` after successful migration

## Components (src/components/)

- [ ] `src/components/404/404.js` → `404/index.tsx`

  - Create new file `index.tsx` in `src/components/404/` and copy content from `404.js`
  - Create `src/types/components/404.d.ts` for component props
  - Add proper props typing using TypeScript types
  - Ensure style imports use `import './404.css'`
  - Test the 404 page
  - Delete `404.js` after successful migration

- [ ] `src/components/BlogDetails/BlogSingle.js` → `src/components/BlogDetails/index.tsx`

  - Create new file `src/components/BlogDetails/index.tsx` and copy content from `BlogSingle.js`
  - Create `src/types/components/BlogSingle.d.ts` for:
    - Blog post data type
    - Comment related types
  - Type all event handlers with proper event types
  - Test the component with different blog post data
  - Delete `BlogSingle.js` after successful migration

- [ ] `src/components/BlogDetails/CommentForm.js` → `src/components/BlogDetails/CommentForm/index.tsx`

  - Create new file `src/components/BlogDetails/CommentForm/index.tsx` and copy content from `CommentForm.js`
  - Create `src/types/components/CommentForm.d.ts` for:
    - Form data type
    - Validation error types
    - Submit handler types
  - Type form state and handlers
  - Add proper validation types
  - Test form submission and validation
  - Delete `CommentForm.js` after successful migration

- [ ] `src/components/BlogList/BlogCard.js` → `src/components/BlogList/BlogCard.tsx`

  - Create new file `src/components/BlogList/BlogCard.tsx` and copy content from `BlogCard.js`
  - Create `src/types/components/BlogCard.d.ts` for:
    - Blog post summary type
    - Tag/category types
  - Type all props with proper interfaces
  - Add proper types for any media elements
  - Test the component with different blog post data
  - Delete `BlogCard.js` after successful migration

- [ ] `src/components/BlogList/BlogList.js` → `src/components/BlogList/index.tsx`

  - Create new file `src/components/BlogList/index.tsx` and copy content from `BlogList.js`
  - Create `src/types/components/BlogList.d.ts` for:
    - Blog list data structure
    - Filter/sort option types
  - Type all props and state
  - Test the component with different data sets
  - Delete `BlogList.js` after successful migration

- [ ] `src/components/BlogList/Pagination.js` → `src/components/BlogList/Pagination.tsx`

  - Create new file `src/components/BlogList/Pagination.tsx` and copy content from `Pagination.js`
  - Create `src/types/components/Pagination.d.ts` for:
    - Props type with page numbers, current page, etc.
    - Click handler types
  - Type all event handlers
  - Add proper types for disabled/enabled states
  - Test pagination functionality
  - Delete `Pagination.js` after successful migration

- [ ] `src/components/ContactFrom/ContactForm.js` → `src/components/ContactFrom/ContactForm/index.tsx`

  - Create new file `src/components/ContactFrom/ContactForm/index.tsx` and copy content from `ContactForm.js`
  - Create `src/types/components/ContactForm.d.ts` for:
    - Form data type
    - Validation error types
    - API call types
    - Validation rules
  - Type form state and handlers
  - Add proper types for submission handling
  - Test form submission and validation
  - Delete `ContactForm.js` after successful migration

- [ ] `src/components/Header6/Header6.js` → `src/components/Header6/index.tsx`
  - Create new file `src/components/Header6/index.tsx` and copy content from `Header6.js`
  - Create `src/types/components/Header6.d.ts` for:
    - Navigation item types
    - Mobile menu state types
    - Scroll position types
  - Type all props and state
  - Type all event handlers and refs
  - Test all header functionality
  - Delete `Header6.js` after successful migration

## Main Components (src/main-component/)

- [ ] `src/main-component/App/App.js` → `src/main-component/App.tsx`

  - Create new file `src/main-component/App.tsx` and copy content from `App.js`
  - Create `src/types/main-component/App.d.ts` for:
    - Global state types
    - Context types
    - Theme types
  - Convert all PropTypes to TypeScript types
  - Type context providers if used
  - Test all application routes and features
  - Delete `App.js` after successful migration

- [ ] `src/main-component/HomePage5/HomePage5.js` → `src/main-component/HomePage5/index.tsx`

  - Create new file `src/main-component/HomePage5/index.tsx` and copy content from `HomePage5.js`
  - Create `src/types/main-component/HomePage5.d.ts` for:
    - Section component props
    - Animation state types
    - Data structure types
  - Type all props and state
  - Define interfaces for data passed to child components
  - Test all interactive elements
  - Delete `HomePage5.js` after successful migration

- [ ] `src/main-component/ContactPage/ContactPage.js` → `src/main-component/ContactPage/index.tsx`

  - Create new file `src/main-component/ContactPage/index.tsx` and copy content from `ContactPage.js`
  - Create `src/types/main-component/ContactPage.d.ts` for:
    - Form state type
    - Validation error types
    - API call types
    - Validation rules
  - Type form state and handlers
  - Test form submission and validation
  - Delete `ContactPage.js` after successful migration

- [ ] `src/main-component/ProjectPage/ProjectPage.js` → `src/main-component/ProjectPage/index.tsx`

  - Create new file `src/main-component/ProjectPage/index.tsx` and copy content from `ProjectPage.js`
  - Create `src/types/main-component/ProjectPage.d.ts` for:
    - Project data structure
    - Filter/sort option types
    - Modal state types
  - Type project data structure
  - Add proper types for filtering/sorting
  - Test all project page functionality
  - Delete `ProjectPage.js` after successful migration

- [ ] `src/main-component/ServicePage/ServicePage.js` → `src/main-component/ServicePage/index.tsx`

  - Create new file `src/main-component/ServicePage/index.tsx` and copy content from `ServicePage.js`
  - Create `src/types/main-component/ServicePage.d.ts` for:
    - Service data structure
    - Tab/accordion state types
    - Interactive element types
  - Type service data structure
  - Add proper types for interactive elements
  - Test all service page functionality
  - Delete `ServicePage.js` after successful migration

- [ ] `src/main-component/router/index.js` → `src/main-component/router/index.tsx`
  - Create new file `src/main-component/router/index.tsx` and copy content from `index.js`
  - Create `src/types/router.d.ts` for:
    - Route configuration types
    - Route guard types
    - Navigation function types
  - Define proper route types
  - Type all route guards and middleware
  - Test all navigation functionality
  - Delete `index.js` after successful migration

## Migration Notes

1. After each migration step, run `yarn start` to check for runtime errors.
2. Fix TypeScript errors as they appear - don't use `any` type unless absolutely necessary.

3. For each file:
   - Rename the file to .tsx (for React components) or .ts (for non-React files)
   - Add proper TypeScript types
   - Fix any type errors
   - Test the component/functionality
   - Commit the changes

## TypeScript Configuration

Current TypeScript version: 5.8.3
Configuration file: `tsconfig.json` (already exists and properly configured)

## Type Dependencies

Make sure these type definitions are installed:

- @types/node
- @types/react
- @types/react-dom
- @types/react-router-dom
- @types/react-slick
- @types/react-scroll
- @types/slick-carousel

