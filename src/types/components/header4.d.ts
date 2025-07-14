declare module 'header4' {
  import { ReactNode } from 'react';
  
  interface Header4Props {
    /** Additional class name for the menu button */
    mClass?: string;
    /** Additional class name for the header */
    hclass?: string;
    /** Content to be rendered inside the header */
    children?: ReactNode;
  }

  const Header4: React.FC<Header4Props>;
  
  export default Header4;
}
