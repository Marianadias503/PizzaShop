// App.js
import { RouterProvider } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './index.css';
import { router } from './Router';
import { Toaster } from 'sonner';
import { ThemeProvider } from './components/theme/theme-provider';



export function App() {
  return (
    <div className="flex h-screen">
      <HelmetProvider>
        <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
          <Helmet titleTemplate='%s | pizza.shop' />
          <Toaster richColors />
          <RouterProvider router={router} />
        </ThemeProvider>
      </HelmetProvider>
    </div>
  );
}
