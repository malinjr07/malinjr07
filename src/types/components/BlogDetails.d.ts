import { BlogPost as ApiBlogPost } from '../api';

/**
 * Extends the base BlogPost type from the API with additional properties
 * used in the BlogSingle component
 */
export interface BlogPost extends Omit<ApiBlogPost, 'date'> {
  /** Creation date in a display format */
  create_at: string;
  
  /** URL of the image for the blog single view */
  blogSingleImg: string;
  
  /** Number of comments as a string or number */
  comment: string | number;
  
  /** Day of the month for display */
  day: string;
  
  /** Month for display */
  month: string;
  
  /** Main image or video URL for the blog post */
  screens: string;
  
  /** Short description of the blog post */
  description: string;
  
  /** CSS class for styling */
  blClass: string;
  
  /** Animation delay or duration */
  animation: string | number;
}

/**
 * Props for the BlogSingle component
 */
export interface BlogSingleProps {
  // Add any additional props here if needed
}
