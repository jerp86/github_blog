import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

export const Router = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />} />
  </Routes>
)
