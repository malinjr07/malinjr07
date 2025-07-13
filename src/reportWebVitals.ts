// Check if the code is running in a browser environment
const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

// Type for the metric callback function
type ReportHandler = (metric: {
  name: string;
  value: number;
  id: string;
  delta: number;
  entries: PerformanceEntry[];
  navigationType?: 'navigate' | 'reload' | 'back_forward' | 'back-forward' | 'prerender' | 'restore' | 'back-forward-cache';
  rating?: 'good' | 'needs-improvement' | 'poor';
}) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  // Only run in browser environment
  if (!isBrowser) {
    return;
  }

  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Use dynamic import to avoid TypeScript errors with web-vitals v5
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      // Call each web-vitals function with the provided callback
      // Using the actual function names from web-vitals v5
      if (onCLS) onCLS(onPerfEntry);
      if (onFCP) onFCP(onPerfEntry);
      if (onLCP) onLCP(onPerfEntry);
      if (onTTFB) onTTFB(onPerfEntry);
      // Note: onFID is deprecated in web-vitals v3+, using onINP instead
      if (onINP) onINP(onPerfEntry);
    }).catch((error: Error) => {
      // Only log in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Error loading web-vitals', error);
      }
    });
  }
};

export default reportWebVitals;
