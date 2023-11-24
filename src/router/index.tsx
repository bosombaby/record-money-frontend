import { RouteObject } from '@/types/route'
import HomePage from '@/pages/home-page'
import BillPage from '@/pages/bill-page'
import UserPage from '@/pages/user-page'

const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/bill',
    element: <BillPage />,
  },
  {
    path: '/user',
    element: <UserPage />,
  },
]

export default routesConfig
