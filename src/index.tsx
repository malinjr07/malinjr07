import { createRoot } from 'react-dom/client';
import App from './main-component/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/themify-icons.css';
import './css/animate.css';
import './css/animate.min.css';
import './sass/style.scss';

// Get the root element with type assertion
const rootElement = document.getElementById('root');

// Ensure the root element exists
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

// Create a root and render the app
const root = createRoot(rootElement);
root.render(<App />);

// Web Vitals reporting
reportWebVitals();

