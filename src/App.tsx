import { useRoutes } from 'react-router-dom'

import routesConfig from '@/router/index'
import NavBar from '@/pages/nav-bar'

export default function App() {
  const routes = useRoutes(routesConfig)
  return (
    <div>
      {routes}
      <NavBar />
    </div>
  )
}
