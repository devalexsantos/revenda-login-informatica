import { Route, Routes } from 'react-router'
import { DefaultLayout } from './layout/default'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<SignUp />} />
      </Route>
    </Routes>
  )
}
