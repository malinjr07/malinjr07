import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './index';

// Mock the router component
jest.mock('../router', () => ({
  __esModule: true,
  default: () => <div data-testid="mock-router">Mock Router</div>,
}));

// Mock the ToastContainer
jest.mock('react-toastify', () => ({
  ToastContainer: () => <div data-testid="toast-container">Toast Container</div>,
}));

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    
    // Check if the main app container is rendered
    const appElement = screen.getByTestId('app');
    expect(appElement).toBeInTheDocument();
    
    // Check if the router is rendered
    const routerElement = screen.getByTestId('mock-router');
    expect(routerElement).toBeInTheDocument();
    
    // Check if the toast container is rendered
    const toastElement = screen.getByTestId('toast-container');
    expect(toastElement).toBeInTheDocument();
  });
});
