declare module 'pagetitle' {
  import { FC } from 'react';
  
  interface PageTitleProps {
    pageTitle: string;
    pagesub: string;
  }

  const PageTitle: FC<PageTitleProps>;
  
  export default PageTitle;
}
