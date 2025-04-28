import { createBrowserRouter } from 'react-router-dom'
import { DashboardScreen } from '@/pages/app/dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardScreen />,
  },
])
