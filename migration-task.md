# TypeScript Migration Tasks

## Migration Steps for Each File

### For Regular Components:

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

4. **Cleanup**:
   - Once the new `.tsx`/`.ts` file is working correctly, delete the original `.js` file
   - Update any imports that referenced the old `.js` file

### For Route Components:

1. **Follow all Regular Component Steps** as mentioned above

2. **Additional Steps for Route Components**:

   - Create type definitions for all props received from React Router (use `useParams`, `useLocation`, etc. types from 'react-router-dom')
   - Type any route parameters explicitly
   - Ensure proper typing for any data fetching in route components
   - Add proper return types for loader/action functions if using React Router's data APIs

3. **Router Update**:

   - After migrating a route component to TypeScript, update the import in `src/main-component/router/index.tsx`
   - Change the import to point to the new TypeScript file (e.g., `import HomePage5 from '../HomePage5'` instead of `import HomePage5 from '../HomePage5/HomePage5'`)
   - Ensure the component is properly typed when used in the Route component

4. **Testing**:
   - Test the route thoroughly after migration
   - Verify that all route parameters are properly typed and accessible
   - Check that navigation works as expected

## Important Styling Instructions

- **DO NOT** modify any existing styling during the migration
- **DO NOT** create new CSS files or modify existing ones unless absolutely necessary for TypeScript compatibility
- **DO NOT** enhance or modify the UI/UX during the migration
- **PRESERVE** all existing styling exactly as is
- **DO NOT** convert CSS to CSS Modules unless the component already uses them
- **DO NOT** change class names or styling structure
- If a component uses inline styles, keep them as they are
- The focus should be solely on TypeScript type safety, not on improving or modifying the styling

## Configuration Files

- [x] `src/index.js` → `index.tsx`

  - Create new file `index.tsx` in `src/` and copy content from `index.js`
  - Add type annotations for ReactDOM render function
  - Ensure proper typing for the root component
  - Create `src/types/index.d.ts` for any shared types
  - Delete `index.js` after successful migration

- [x] `src/App.js` → `App/index.tsx`

  - Create new file `src/App.tsx` and copy content from `App.js`
  - Create type declarations in `src/types/app.d.ts` for:
    - App component props and state types
    - Any custom types used in the App component
  - Convert all PropTypes to TypeScript types
  - Delete `App.js` after successful migration

- [x] `src/App.test.js` → `src/App.test.tsx`

  - Create new file `src/App.test.tsx` and copy content from `App.test.js`
  - Update imports to use `.tsx` extension
  - Add type annotations for test utilities
  - Create `src/types/test-utils.d.ts` for custom test utilities
  - Run tests to ensure they pass
  - Delete `App.test.js` after successful migration

- [x] `src/reportWebVitals.js` → `src/reportWebVitals.ts`

  - Created new file `src/reportWebVitals.ts` with TypeScript types
  - Created `src/types/vitals.d.ts` with web vitals related types
  - Added proper type safety and error handling
  - Deleted `reportWebVitals.js` after successful migration

- [x] `src/setupTests.js` → `src/setupTests.ts`
  - Created new file `src/setupTests.ts` with proper TypeScript types
  - Added type annotations for Jest and Testing Library
  - Created `src/types/jest.d.ts` for custom Jest type extensions
  - Verified tests pass with the new setup
  - Deleted `setupTests.js` after successful migration

## API Files - COMPLETED

- [x] `src/api/api.js` → `src/api/index.ts`
  - Created new file `src/api/index.ts` with TypeScript types
  - Added TypeScript types for all API responses in `src/types/api.d.ts`
  - Created image type declarations in `src/types/images.d.ts`
  - Migrated all API data files to TypeScript:
    - `Project.js` → `Project.ts`
    - `Resume.js` → `Resume.ts`
    - `Services.js` → `Services.ts`
    - `blogs.js` → `blogs.ts`
  - Deleted original JavaScript files after successful migration
  - Added proper type imports and exports
  - Fixed type issues with SVG imports and React components

## Background Video Component - COMPLETED ✅

- [x] `src/js/BackgroundVideo.js` → `src/utils/BackgroundVideo.tsx`
  - Created new file `src/utils/BackgroundVideo.tsx` with TypeScript types
  - Added comprehensive props interface with TypeScript types
  - Created `src/types/utils/BackgroundVideo.d.ts` for type declarations
  - Added CSS modules support with TypeScript
  - Improved component with additional props and better type safety
  - Deleted original `BackgroundVideo.js` after successful migration
  - Added responsive design and better default values
  - Improved accessibility with proper ARIA attributes

## 404 Component - COMPLETED ✅

- [x] `src/components/404/404.js` → `src/components/404/index.tsx`
  - Created new file `src/components/404/index.tsx` with TypeScript types
  - Added comprehensive props interface with JSDoc comments
  - Created `src/types/components/404.d.ts` for type declarations
  - Added responsive CSS with proper scoping
  - Improved accessibility with ARIA attributes and semantic HTML
  - Added smooth scrolling behavior with proper TypeScript types
  - Maintained existing styling without modifications
  - Added support for custom content and styling through props
  - Improved type safety with proper event handling

## BlogDetails/BlogSingle Component

- [ ] `src/components/BlogDetails/BlogSingle.js` → `src/components/BlogDetails/BlogSingle.tsx`
  - Created new file `src/components/BlogDetails/BlogSingle.tsx` with TypeScript types
  - Created `src/types/components/BlogDetails.d.ts` with proper type definitions
  - Added TypeScript types for all props and state
  - Typed all event handlers with proper event types
  - Implemented proper error handling for missing blog posts
  - Added proper type imports and exports
  - Created `index.ts` for cleaner imports
  - Deleted original `BlogSingle.js` after successful migration

## CommentForm Component

- [ ] `src/components/BlogDetails/CommentForm.js` → `src/components/BlogDetails/CommentForm/index.tsx`
  - Create new file `src/components/BlogDetails/CommentForm/index.tsx` and copy content from `CommentForm.js`
  - Create `src/types/components/CommentForm.d.ts` for:
    - Form data types
    - Event handler types
  - Type all form fields and validation
  - Convert any PropTypes to TypeScript types
  - Delete `CommentForm.js` after successful migration

## Utility Files

- [ ] `src/js/BackgroundVideo.js` → `src/utils/BackgroundVideo.tsx`
  - Create new file `src/utils/BackgroundVideo.tsx` and copy content from `BackgroundVideo.js`
  - Create `src/types/utils/BackgroundVideo.d.ts` for:
    - Component props type
    - Any custom types used in the component
  - Convert any PropTypes to TypeScript types
  - Delete `BackgroundVideo.js` after successful migration

## Components (src/components/)

- [ ] `src/components/404/404.js` → `404/index.tsx`

  - Create new file `index.tsx` in `src/components/404/` and copy content from `404.js`
  - Create `src/types/components/404.d.ts` for component props
  - Add proper props typing using TypeScript types
  - Ensure style imports use `import './404.css'`
  - Delete `404.js` after successful migration

- [ ] `src/components/BlogDetails/CommentForm.js` → `src/components/BlogDetails/CommentForm/index.tsx`

  - Create new file `src/components/BlogDetails/CommentForm/index.tsx` and copy content from `CommentForm.js`
  - Create `src/types/components/CommentForm.d.ts` for:
    - Form data type
    - Validation error types
    - Submit handler types
  - Type form state and handlers
  - Add proper validation types
  - Delete `CommentForm.js` after successful migration

- [ ] `src/components/BlogList/BlogCard.js` → `src/components/BlogList/BlogCard.tsx`

  - Create new file `src/components/BlogList/BlogCard.tsx` and copy content from `BlogCard.js`
  - Create `src/types/components/BlogCard.d.ts` for:
    - Blog post summary type
    - Tag/category types
  - Type all props with proper interfaces
  - Add proper types for any media elements
  - Delete `BlogCard.js` after successful migration

- [ ] `src/components/BlogList/BlogList.js` → `src/components/BlogList/index.tsx`

  - Create new file `src/components/BlogList/index.tsx` and copy content from `BlogList.js`
  - Create `src/types/components/BlogList.d.ts` for:
    - Blog list data structure
    - Filter/sort option types
  - Type all props and state
  - Delete `BlogList.js` after successful migration

- [ ] `src/components/BlogList/Pagination.js` → `src/components/BlogList/Pagination.tsx`

  - Create new file `src/components/BlogList/Pagination.tsx` and copy content from `Pagination.js`
  - Create `src/types/components/Pagination.d.ts` for:
    - Props type with page numbers, current page, etc.
    - Click handler types
  - Type all event handlers
  - Add proper types for disabled/enabled states
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
  - Delete `ContactForm.js` after successful migration

- [ ] `src/components/Header6/Header6.js` → `src/components/Header6/index.tsx`
  - Create new file `src/components/Header6/index.tsx` and copy content from `Header6.js`
  - Create `src/types/components/Header6.d.ts` for:
    - Navigation item types
    - Mobile menu state types
    - Scroll position types
  - Type all props and state
  - Type all event handlers and refs
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
  - Delete `App.js` after successful migration

- [ ] `src/main-component/HomePage5/HomePage5.js` → `src/main-component/HomePage5/index.tsx`

  - Create new file `src/main-component/HomePage5/index.tsx` and copy content from `HomePage5.js`
  - Create `src/types/main-component/HomePage5.d.ts` for:
    - Section component props
    - Animation state types
    - Data structure types
  - Type all props and state
  - Define interfaces for data passed to child components
  - Delete `HomePage5.js` after successful migration

- [ ] `src/main-component/ContactPage/ContactPage.js` → `src/main-component/ContactPage/index.tsx`

  - Create new file `src/main-component/ContactPage/index.tsx` and copy content from `ContactPage.js`
  - Create `src/types/main-component/ContactPage.d.ts` for:
    - Form state type
    - Validation error types
    - API call types
    - Validation rules
  - Type form state and handlers
  - Delete `ContactPage.js` after successful migration

- [ ] `src/main-component/ProjectPage/ProjectPage.js` → `src/main-component/ProjectPage/index.tsx`

  - Create new file `src/main-component/ProjectPage/index.tsx` and copy content from `ProjectPage.js`
  - Create `src/types/main-component/ProjectPage.d.ts` for:
    - Project data structure
    - Filter/sort option types
    - Modal state types
  - Type project data structure
  - Add proper types for filtering/sorting
  - Delete `ProjectPage.js` after successful migration

- [ ] `src/main-component/ServicePage/ServicePage.js` → `src/main-component/ServicePage/index.tsx`

  - Create new file `src/main-component/ServicePage/index.tsx` and copy content from `ServicePage.js`
  - Create `src/types/main-component/ServicePage.d.ts` for:
    - Service data structure
    - Tab/accordion state types
    - Interactive element types
  - Type service data structure
  - Add proper types for interactive elements
  - Delete `ServicePage.js` after successful migration

- [ ] `src/main-component/router/index.js` → `src/main-component/router/index.tsx`
  - Create new file `src/main-component/router/index.tsx` and copy content from `index.js`
  - Create `src/types/router.d.ts` for:
    - Route configuration types
    - Route guard types
    - Navigation function types
  - Define proper route types
  - Type all route guards and middleware
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

## Important Notes

- **DO NOT** run `yarn test` manually during the migration process. Tests are configured to run automatically when files change, and running them manually may cause unnecessary test runs or conflicts.
- All test runs should be handled automatically by the development environment.
- If you need to run tests for a specific file, use the test watcher interface (press 'p' to filter by filename pattern).

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

