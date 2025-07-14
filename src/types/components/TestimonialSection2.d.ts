declare module 'TestimonialSection2' {
  import { FC } from 'react';
  
  interface Testimonial {
    id: string;
    tImg: string;
    Des: string;
    Title: string;
    Sub: string;
  }

  interface TestimonialSection2Props {
    hclass?: string;
  }
  
  const TestimonialSection2: FC<TestimonialSection2Props>;
  
  export default TestimonialSection2;
}
