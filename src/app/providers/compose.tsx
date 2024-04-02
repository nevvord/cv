
import { CssBaseline } from '@mui/material'
import { QueryProvider } from './query'
import { RouterProvider } from './router'
import { ThemeProvider } from './theme'

export function ComposeProviders() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <RouterProvider />
        <CssBaseline />
      </QueryProvider>
    </ThemeProvider>
  )
}
