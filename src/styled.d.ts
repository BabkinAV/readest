import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string,
      secondary: string
    },
    colors: {
      green: string,
      gold: string,
      grey: string,
      white: string,
      goldDarker: string
    },

  }
}