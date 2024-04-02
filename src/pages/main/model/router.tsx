import { RouteObject } from 'react-router-dom'

import { routerPaths } from '@shared/constants'
import { MainPage } from '../ui'

export const mainPageRouter: RouteObject = {
  path: routerPaths.main,
  element: <MainPage />,
}
