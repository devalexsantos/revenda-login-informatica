import { Route, Routes } from 'react-router'
import { DefaultLayout } from './layout/default'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { Documents } from './pages/Documents'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/documentos" element={<Documents />} />
      </Route>
    </Routes>
  )
}
