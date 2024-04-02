import { ThemeProvider as MuiThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
import { PropsWithChildren } from 'react'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[50]
    }
  },
  typography: {
    fontFamily: ["Roboto Mono", "monospace"].join(',')
  },
})
// const darkTheme = createTheme({ palette: { mode: 'dark' } })

export function ThemeProvider({ children }: PropsWithChildren) {
  return <MuiThemeProvider children={children} theme={lightTheme} />
}
