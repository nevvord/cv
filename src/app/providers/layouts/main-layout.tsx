import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Outlet />
    </Container>

  )
}
