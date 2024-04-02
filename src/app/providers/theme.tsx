import { ThemeProvider as MuiThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { PropsWithChildren } from 'react'

const lightTheme = createTheme({
  palette: { mode: 'light' }, typography: {
    fontFamily: ['Verdana'].join(',')
  }
})
// const darkTheme = createTheme({ palette: { mode: 'dark' } })

export function ThemeProvider({ children }: PropsWithChildren) {
  return <MuiThemeProvider children={children} theme={lightTheme} />
}
