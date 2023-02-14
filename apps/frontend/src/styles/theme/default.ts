// export const defaultTheme = {
//     white: '#FFF',
  
//     'gray-100': '#E1E1E6',
//     'gray-300': '#C4C4CC',
//     'gray-400': '#8D8D99',
//     'gray-500': '#7C7C8A',
//     'gray-600': '#323238',
//     'gray-700': '#29292E',
//     'gray-800': '#202024',
//     'gray-900': '#121214',
  
//     'green-300': '#00B37E',
//     'green-500': '#00875F',
//     'green-700': '#015F43',
  
//     'red-500': '#AB222E',
//     'red-700': '#7A1921',
  
//     'yellow-500': '#FBA94C',
//   }



import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default defaultTheme;