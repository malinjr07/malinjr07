import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllRoute from '../router';

const App: React.FC = () => {
  // Toast container configuration
  const toastConfig = {
    position: 'top-right' as const,
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: 'light' as const,
  };

  return (
    <div className="App" id="scrool" data-testid="app">
      <AllRoute />
      <ToastContainer {...toastConfig} />
    </div>
  );
};

export default App;
