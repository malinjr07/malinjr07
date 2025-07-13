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

## Migration Notes

5. After each migration step, run `yarn start` to check for runtime errors.
6. Fix TypeScript errors as they appear - don't use `any` type unless absolutely necessary.

7. For each file:
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

## Utility Files

- [x] `src/utils/index.js` → `src/utils/index.ts`
  - Created new file `src/utils/index.ts` with TypeScript types
  - Created `src/types/utils/index.d.ts` with type definitions for:
    - Product, WishListItem, and CartItem interfaces
    - Type-safe function parameters and return types
  - Improved type safety for all utility functions
  - Added JSDoc comments for better code documentation
  - Deleted `src/utils/index.js` after successful migration

## Main Components (src/main-component/)

Components are listed in alphabetical order for better organization and tracking.

### Core Components

- [x] `src/main-component/App/App.js` → `src/main-component/App.tsx`
  - Create new file `src/main-component/App.tsx` and copy content from `App.js`
  - Create `src/types/main-component/App.d.ts` with type definitions
  - Convert all PropTypes to TypeScript interfaces
  - Add proper type annotations for global state and context
  - Delete original `App.js` after successful migration

### Page Components

- [x] `src/main-component/AboutPage/AboutPage.js` → `src/main-component/AboutPage/index.tsx`

  - Create new file `src/main-component/AboutPage/index.tsx` and copy content from `AboutPage.js`
  - Create `src/types/main-component/AboutPage.d.ts` for:
    - Team member types
    - Skill/experience data structures
    - Section component props
  - Update the component to use the new type definitions
  - Add proper TypeScript types for all props and state
  - Update router imports to use new TypeScript file
  - Delete original `AboutPage.js` after successful migration

- [x] `src/main-component/BlogDetails/BlogDetails.js` → `src/main-component/BlogDetails/index.tsx`

  - Create new file `src/main-component/BlogDetails/index.tsx` and copy content from `BlogDetails.js`
  - Create `src/types/main-component/BlogDetails.d.ts` for:
    - Blog post data structure
    - Pagination types
    - Category/tag filter types
  - Update the component to use the new type definitions
  - Type all API responses and state management
  - Update router imports
  - Delete original `BlogDetails.js` after successful migration

- [x] `src/main-component/BlogPage/BlogPage.js` → `src/main-component/BlogPage/index.tsx`

  - Create new file `src/main-component/BlogPage/index.tsx` and copy content from `BlogPage.js`
  - Create `src/types/main-component/BlogPage.d.ts` for:
    - Page props interface
    - Component state types
    - Any custom props for child components
  - Update the component to use the new type definitions
  - Type all component props and state
  - Update router imports to use TypeScript path
  - Ensure proper typing for all imported components (Header6, PageTitle, BlogList, FooterScetion)
  - Delete original `BlogPage.js` after successful migration

- [x] `src/main-component/ContactPage/ContactPage.js` → `src/main-component/ContactPage/index.tsx`

  - Create new file `src/main-component/ContactPage/index.tsx` and copy content from `ContactPage.js`
  - Create `src/types/main-component/ContactPage.d.ts` for:
    - Page props interface
    - Component state types
    - Contact form configuration types
  - Update the component to use the new type definitions
  - Type all component props and state
  - Update router file imports `src/main-component/router/index.tsx` to use TypeScript `src/main-component/ContactPage/index.tsx` path
  - Delete original `ContactPage.js` after successful migration

- [x] `src/main-component/ContactPage/ContactForm.js` → `src/main-component/ContactPage/ContactForm.tsx`

  - Create new file `src/main-component/ContactPage/ContactForm.tsx` and copy content from `ContactForm.js`
  - Extend types in `src/types/main-component/ContactPage.d.ts` with:
    - `ContactFormData` interface for form state
    - `ContactFormProps` for component props
    - Form validation error types
  - Update the component to use the new type definitions
  - Add proper TypeScript types for all form fields and handlers
  - Implement form validation with type safety
  - Add proper event typing for all form interactions
  - Delete original `ContactForm.js` after successful migration

- [x] `src/main-component/HomePage5/HomePage5.js` → `src/main-component/HomePage5/index.tsx`

  - Created new file `src/main-component/HomePage5/index.tsx` and copy content from `HomePage5.js`
  - Copied content from `HomePage5.js` to the new file
  - Created `src/types/main-component/HomePage5.d.ts`
  - Updated the component to use the new type definitions
  - Added TypeScript types for all props and state
  - Updated router file imports `src/main-component/router/index.tsx` to use TypeScript `src/main-component/HomePage5/index.tsx` path
  - Verified component functionality
  - Deleted original `HomePage5.js`

- [x] `src/main-component/ProjectPage/ProjectPage.js` → `src/main-component/ProjectPage/index.tsx`

  - Create new file `src/main-component/ProjectPage/index.tsx` and copy content from `ProjectPage.js`
  - Create `src/types/main-component/ProjectPage.d.ts` for:
    - Project data structure
    - Filter/sort option types
    - Modal/lightbox state types
  - Update the component to use the new type definitions
  - Type all props and state variables
  - Add proper types for event handlers
  - Update router file imports `src/main-component/router/index.tsx` to use TypeScript `src/main-component/ProjectPage/index.tsx` path
  - Delete original `ProjectPage.js` after successful migration

- [x] `src/main-component/ProjectSinglePage/ProjectSinglePage.js` → `src/main-component/ProjectSinglePage/index.tsx`

  - Create new file `src/main-component/ProjectSinglePage/index.tsx` and copy content from `ProjectSinglePage.js`
  - Create `src/types/main-component/ProjectSinglePage.d.ts` for:
    - Project detail types
    - Related projects data structure
    - Page component props and state
  - Update the component to use the new type definitions
  - Type all component props and API responses
  - Update router file imports `src/main-component/router/index.tsx` to use TypeScript `src/main-component/ProjectSinglePage/index.tsx` path
  - Delete original `ProjectSinglePage.js` after successful migration

- [x] `src/main-component/ProjectSinglePage/ProjectSingleSlider.js` → `src/main-component/ProjectSinglePage/ProjectSingleSlider.tsx`

  - Create new file `src/main-component/ProjectSinglePage/ProjectSingleSlider.tsx` and copy content from `ProjectSingleSlider.js`
  - Extend `src/types/main-component/ProjectSinglePage.d.ts` with:
    - `ProjectImage` type for slider images
    - `ProjectSingleSliderProps` interface
    - Swiper/thumbs state types
  - Update the component to use the new type definitions
  - Add proper TypeScript types for all props and state
  - Type all event handlers and Swiper configurations
  - Add proper type imports from 'swiper' package
  - Delete original `ProjectSingleSlider.js` after successful migration

- [x] `src/main-component/ServicePage/ServicePage.js` → `src/main-component/ServicePage/index.tsx`

  - Create new file `src/main-component/ServicePage/index.tsx` and copy content from `ServicePage.js`
  - Create `src/types/main-component/ServicePage.d.ts` for:
    - Service data structure
    - Tab/accordion state types
    - Service category types
  - Type all interactive elements and state
  - Add proper types for service filtering
  - Update router file imports `src/main-component/router/index.tsx` to use TypeScript `src/main-component/ServicePage/index.tsx` path
  - Delete original `ServicePage.js` after successful migration

- [x] `src/main-component/ServiceSinglePage/ServiceSinglePage.js` → `src/main-component/ServiceSinglePage/index.tsx`

  - Create new file `src/main-component/ServiceSinglePage/index.tsx` and copy content from `ServiceSinglePage.js`
  - Migrate `ServiceWidget.js` to TypeScript
  - Create `src/main-component/ServiceSinglePage/ServiceWidget.tsx` and copy content from `ServiceWidget.js`
  - Create `src/types/main-component/ServiceSinglePage.d.ts` for:
    - Service detail types
    - Widget/feature types
    - Related services data
  - Update the components to use the new type definitions
  - Type all component props and API responses
  - Update router file imports `src/main-component/router/index.tsx` to use TypeScript `src/main-component/ServiceSinglePage/index.tsx` path
  - Delete original `ServiceSinglePage.js` and `ServiceWidget.js` after successful migration

- [x] `src/main-component/TestimonialPage/TestimonialPage.js` → `src/main-component/TestimonialPage/index.tsx`
  - Create new file `src/main-component/TestimonialPage/index.tsx` and copy content from `TestimonialPage.js`
  - Create `src/types/main-component/TestimonialPage.d.ts` for:
    - Testimonial data structure
    - Filter/sort option types
    - Rating component props
  - Update the component to use the new type definitions
  - Type all component props and state
  - Add proper types for testimonial filtering
  - Update router file imports `src/main-component/router/index.tsx` to use TypeScript `src/main-component/TestimonialPage/index.tsx` path
  - Delete original `TestimonialPage.js` after successful migration

### Router and Navigation

- [x] `src/main-component/router/index.js` → `src/main-component/router/index.tsx`
  - Created new file `src/main-component/router/index.tsx`
  - Copied content from `index.js` to the new file
  - Created `src/types/router.d.ts` with:
    - Route configuration types
    - Route parameter types
    - Navigation function types
  - Updated the router to use the new type definitions
  - Updated all route imports to use TypeScript paths
  - Added proper type safety for route parameters
  - Deleted original `index.js` after successful migration

## Components (src/components/)

Components are listed in alphabetical order for better organization and tracking.

- [x] `src/components/404/404.js` → `src/components/404/index.tsx`

  - Create new file `src/components/404/index.tsx` and copy content from `404.js`
  - Create `src/types/components/404.d.ts` for component props
  - Add proper props typing using TypeScript types
  - Ensure style imports use `import './404.css'`
  - Update router file imports `src/main-component/router/index.tsx` to use TypeScript `src/components/404/index.tsx` path
  - Delete `404.js` after successful migration

- [ ] `src/components/about2/about2.js` → `src/components/about2/index.tsx`

  - Create new file `src/components/about2/index.tsx` and copy content from `about2.js`
  - Create `src/types/components/about2.d.ts` for:
    - About content data types
    - Component props types
  - Type all props and state
  - Add proper types for any animations or effects
  - Delete `about2.js` after successful migration

- [ ] `src/components/about4/about4.js` → `src/components/about4/index.tsx`

  - Create new file `src/components/about4/index.tsx` and copy content from `about4.js`
  - Create `src/types/components/about4.d.ts` for:
    - About content data types
    - Component props types
  - Type all props and state
  - Add proper types for any animations or effects
  - Delete `about4.js` after successful migration

- [x] `src/components/BlogDetails/BlogSingle.js` → `src/components/BlogDetails/index.tsx`

  - Created new file `src/components/BlogDetails/index.tsx` with TypeScript types
  - Created `src/types/components/BlogDetails.d.ts` with proper type definitions
  - Added TypeScript types for all props and state
  - Typed all event handlers with proper event types
  - Implemented proper error handling for missing blog posts
  - Added proper type imports and exports
  - Created `index.ts` for cleaner imports
  - Deleted original `BlogSingle.js` after successful migration

- [x] `src/components/BlogDetails/CommentForm.js` → `src/components/BlogDetails/CommentForm/index.tsx`

  - Create new file `src/components/BlogDetails/CommentForm/index.tsx` and copy content from `CommentForm.js`
  - Create `src/types/components/CommentForm.d.ts` for:
    - Form data type
    - Validation error types
    - Submit handler types
  - Type form state and handlers
  - Add proper validation types
  - Update router file imports `src/main-component/router/index.tsx` to use TypeScript `src/components/BlogDetails/CommentForm/index.tsx` path
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

- [ ] `src/components/BlogSection/BlogSection.js` → `src/components/BlogSection/index.tsx`

  - Create new file `src/components/BlogSection/index.tsx` and copy content from `BlogSection.js`
  - Create `src/types/components/BlogSection.d.ts` for:
    - Blog section data types
    - Component props types
  - Type all props and state
  - Delete `BlogSection.js` after successful migration

- [ ] `src/components/BlogSidebar/BlogSidebar.js` → `src/components/BlogSidebar/index.tsx`

  - Create new file `src/components/BlogSidebar/index.tsx` and copy content from `BlogSidebar.js`
  - Create `src/types/components/BlogSidebar.d.ts` for:
    - Sidebar widget data types
    - Search/filter types
  - Type all props and state
  - Delete `BlogSidebar.js` after successful migration

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

- [ ] `src/components/ContactSection2/ContactSection2.js` → `src/components/ContactSection2/index.tsx`

  - Create new file `src/components/ContactSection2/index.tsx` and copy content from `ContactSection2.js`
  - Create `src/types/components/ContactSection2.d.ts` for:
    - Contact info data types
    - Component props types
  - Type all props and state
  - Delete `ContactSection2.js` after successful migration

- [ ] `src/components/FeatureSection/FeatureSection.js` → `src/components/FeatureSection/index.tsx`

  - Create new file `src/components/FeatureSection/index.tsx` and copy content from `FeatureSection.js`
  - Create `src/types/components/FeatureSection.d.ts` for:
    - Feature item data types
    - Component props types
  - Type all props and state
  - Delete `FeatureSection.js` after successful migration

- [ ] `src/components/FooterScetion/FooterScetion.js` → `src/components/FooterScetion/index.tsx`

  - Create new file `src/components/FooterScetion/index.tsx` and copy content from `FooterScetion.js`
  - Create `src/types/components/FooterScetion.d.ts` for:
    - Footer content data types
    - Social link types
  - Type all props and state
  - Delete `FooterScetion.js` after successful migration

- [ ] `src/components/header4/header4.js` → `src/components/header4/index.tsx`

  - Create new file `src/components/header4/index.tsx` and copy content from `header4.js`
  - Create `src/types/components/header4.d.ts` for:
    - Navigation data types
    - Component props and state types
  - Type all props and state
  - Add proper types for menu interactions
  - Delete `header4.js` after successful migration

- [ ] `src/components/Header6/Header6.js` → `src/components/Header6/index.tsx`

  - Create new file `src/components/Header6/index.tsx` and copy content from `Header6.js`
  - Create `src/types/components/Header6.d.ts` for:
    - Navigation item types
    - Mobile menu state types
    - Scroll position types
  - Type all props and state
  - Type all event handlers and refs
  - Delete `Header6.js` after successful migration

- [ ] `src/components/hero5/hero5.js` → `src/components/hero5/index.tsx`

  - Create new file `src/components/hero5/index.tsx` and copy content from `hero5.js`
  - Create `src/types/components/hero5.d.ts` for:
    - Hero content data types
    - Component props types
  - Type all props and state
  - Add proper types for any animations or effects
  - Delete `hero5.js` after successful migration

- [ ] `src/components/ModalVideo/ModalVideo.js` → `src/components/ModalVideo/index.tsx`

  - Create new file `src/components/ModalVideo/index.tsx` and copy content from `ModalVideo.js`
  - Create `src/types/components/ModalVideo.d.ts` for:
    - Video data types
    - Modal state types
  - Type all props and state
  - Add proper types for video player integration
  - Delete `ModalVideo.js` after successful migration

- [ ] `src/components/pagetitle/pagetitle.js` → `src/components/pagetitle/index.tsx`

  - Create new file `src/components/pagetitle/index.tsx` and copy content from `pagetitle.js`
  - Create `src/types/components/pagetitle.d.ts` for:
    - Page title data types
    - Component props types
  - Type all props
  - Delete `pagetitle.js` after successful migration

- [ ] `src/components/ProjectSection2/ProjectSection2.js` → `src/components/ProjectSection2/index.tsx`

  - Create new file `src/components/ProjectSection2/index.tsx` and copy content from `ProjectSection2.js`
  - Create `src/types/components/ProjectSection2.d.ts` for:
    - Project data types
    - Component props types
  - Type all props and state
  - Delete `ProjectSection2.js` after successful migration

- [ ] `src/components/ProjectSection3/ProjectSection3.js` → `src/components/ProjectSection3/index.tsx`

  - Create new file `src/components/ProjectSection3/index.tsx` and copy content from `ProjectSection3.js`
  - Create `src/types/components/ProjectSection3.d.ts` for:
    - Project data types
    - Component props types
  - Type all props and state
  - Delete `ProjectSection3.js` after successful migration

- [ ] `src/components/ServiceSectionS2/ServiceSectionS2.js` → `src/components/ServiceSectionS2/index.tsx`

  - Create new file `src/components/ServiceSectionS2/index.tsx` and copy content from `ServiceSectionS2.js`
  - Create `src/types/components/ServiceSectionS2.d.ts` for:
    - Service data types
    - Component props types
  - Type all props and state
  - Delete `ServiceSectionS2.js` after successful migration

- [ ] `src/components/ServiceSectionS4/ServiceSectionS4.js` → `src/components/ServiceSectionS4/index.tsx`

  - Create new file `src/components/ServiceSectionS4/index.tsx` and copy content from `ServiceSectionS4.js`
  - Create `src/types/components/ServiceSectionS4.d.ts` for:
    - Service data types
    - Component props types
  - Type all props and state
  - Delete `ServiceSectionS4.js` after successful migration

- [ ] `src/components/ServiceSectionS6/ServiceSectionS6.js` → `src/components/ServiceSectionS6/index.tsx`

  - Create new file `src/components/ServiceSectionS6/index.tsx` and copy content from `ServiceSectionS6.js`
  - Create `src/types/components/ServiceSectionS6.d.ts` for:
    - Service data types
    - Component props types
  - Type all props and state
  - Delete `ServiceSectionS6.js` after successful migration

- [ ] `src/components/TestimonialSection2/TestimonialSection2.js` → `src/components/TestimonialSection2/index.tsx`

  - Create new file `src/components/TestimonialSection2/index.tsx` and copy content from `TestimonialSection2.js`
  - Create `src/types/components/TestimonialSection2.d.ts` for:
    - Testimonial data types
    - Component props types
  - Type all props and state
  - Add proper types for slider/carousel if applicable
  - Delete `TestimonialSection2.js` after successful migration

- [ ] `src/components/TestimonialSection3/TestimonialSection3.js` → `src/components/TestimonialSection3/index.tsx`
  - Create new file `src/components/TestimonialSection3/index.tsx` and copy content from `TestimonialSection3.js`
  - Create `src/types/components/TestimonialSection3.d.ts` for:
    - Testimonial data types
    - Component props types
  - Type all props and state
  - Add proper types for slider/carousel if applicable
  - Delete `TestimonialSection3.js` after successful migration

## Type Dependencies

Make sure these type definitions are installed:

- @types/node
- @types/react
- @types/react-dom
- @types/react-router-dom
- @types/react-slick
- @types/react-scroll
- @types/slick-carousel

