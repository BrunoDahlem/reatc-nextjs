import { theme } from "../src/styles/theme"
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "../src/styles/globalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values:[
      {
        name:'light',
        value: theme.colors.white,
      },
      {
        name:'dark',
        value: theme.colors.black,
      },
    ]
  }
}

export const decorators = [
  (Story)=>(
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles/>
    </ThemeProvider>
  )
]
