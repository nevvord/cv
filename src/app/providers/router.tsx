import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom'


import { mainPageRouter } from '@pages/main'
import { MainLayout } from './layouts'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [mainPageRouter],
  },
])

export function RouterProvider() {
  return <ReactRouterProvider router={router} />
}
