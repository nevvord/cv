import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <Container>

      <Outlet />
    </Container>

  )
}
