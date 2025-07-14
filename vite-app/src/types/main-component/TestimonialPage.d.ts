import { Testimonial } from '../api';

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

type TestimonialFilter = 'all' | 'design' | 'development' | 'marketing';

interface TestimonialProps {
  // Add any props if the component accepts any
}

interface TestimonialState {
  activeFilter: TestimonialFilter;
  // Add any other state properties here
}

// Export the main component type
declare const TestimonialPage: React.FC<TestimonialProps>;

export default TestimonialPage;

// Export types for reuse
export type { TestimonialFilter, TestimonialProps, TestimonialState };
