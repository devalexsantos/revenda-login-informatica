import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { PriceRequestProvider } from './contexts/PricesRequestContext'

export function App() {
  return (
    <BrowserRouter>
      <PriceRequestProvider>
        <Router />
      </PriceRequestProvider>
    </BrowserRouter>
  )
}
