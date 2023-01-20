import { Outlet } from 'react-router-dom'
import { Header } from '../../components'

export const DefaultLayout = () => (
  <>
    <Header />

    <main className="container">
      <Outlet />
    </main>
  </>
)
