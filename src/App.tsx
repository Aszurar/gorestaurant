import './styles/global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './services/react-query'
import { Toaster } from 'sonner'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position="top-right" closeButton />
    </QueryClientProvider>
  )
}

export default App
