import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primaryDark: '#897143',  // --primary-color-dark, greenish brown
    primaryLight: '#f5f5dc',  // --primary-color-light, almost white
    workCardDarkText: '#343A40',  // Dark text color for WorkCard component
    secondary: '#f5f5dc',  // --secondary_color, almost white
    highlight: '#ff7f50',  // --highlight-coral
    border: '#E0E0E0',  // Light border color (from previous theme)
  },
  fonts: {
    primary: '"Work Sans", "Segoe UI", "Helvetica Neue", "Roboto", sans-serif',
    secondary: '"Fraunces", serif',  // Custom font defined in App.css
  },
};

export default theme;