import React from 'react';

// Mock BrowserRouter
export const BrowserRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div data-testid="browser-router">{children}</div>
);

// Mock Routes
export const Routes: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div data-testid="routes">{children}</div>
);

// Mock Route
export const Route: React.FC<{ path: string; element: React.ReactNode }> = ({ element }) => (
  <div data-testid="route">{element}</div>
);

// Mock Link
export const Link: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <a href={to} data-testid="link">{children}</a>
);

// Mock useNavigate
const mockNavigate = jest.fn();
export const useNavigate = () => mockNavigate;

// Mock useLocation
export const useLocation = () => ({
  pathname: '/',
  search: '',
  hash: '',
  state: null,
  key: 'default',
});

// Mock useParams
export const useParams = <T extends Record<string, string>>() => ({} as T);
