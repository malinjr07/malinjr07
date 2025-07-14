/**
 * Props for the Error component
 */
export interface ErrorProps {
  /**
   * Custom class name for the error container
   */
  className?: string;
  
  /**
   * Custom title for the error page
   * @default "404 - Page Not Found"
   */
  title?: string;
  
  /**
   * Custom error message
   * @default "It looks like nothing was found at this location. Click the button below to return home."
   */
  message?: string;
  
  /**
   * Custom button text
   * @default "Back To Home"
   */
  buttonText?: string;
  
  /**
   * Callback function when the back button is clicked
   */
  onBackClick?: () => void;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
