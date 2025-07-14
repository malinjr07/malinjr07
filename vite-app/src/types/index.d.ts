// Root state type
type RootState = {
  // Add global state types here as needed
};

// Theme type
type Theme = 'light' | 'dark';

// Global window type extensions
declare global {
  interface Window {
    // Add any global window properties here
    __REDUX_DEVTOOLS_EXTENSION__?: () => void;
  }
}
