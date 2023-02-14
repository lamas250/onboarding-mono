import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import defaultTheme from './styles/theme/default';
import 'react-toastify/dist/ReactToastify.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material';
import { TagProvider } from './context/tag';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <TagProvider>
          <Router />
        </TagProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
