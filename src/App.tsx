import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { PriceRequestProvider } from './contexts/PricesRequestContext'
import { PriceRequestModal } from './components/PriceRequestModal'

export function App() {
  return (
    <BrowserRouter>
      <PriceRequestProvider>
        <Router />
        <PriceRequestModal />
      </PriceRequestProvider>
    </BrowserRouter>
  )
}
