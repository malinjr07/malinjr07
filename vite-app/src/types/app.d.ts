// App component props type
type AppProps = {
  // Add any props here if needed
};

// Toast notification types
type ToastType = 'info' | 'success' | 'warning' | 'error' | 'default';

type ToastPosition = 
  | 'top-right'
  | 'top-center'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left';

// Toast container props
type ToastContainerProps = {
  position?: ToastPosition;
  autoClose?: number | false;
  hideProgressBar?: boolean;
  newestOnTop?: boolean;
  closeOnClick?: boolean;
  rtl?: boolean;
  pauseOnFocusLoss?: boolean;
  draggable?: boolean;
  pauseOnHover?: boolean;
  theme?: 'light' | 'dark' | 'colored';
};
