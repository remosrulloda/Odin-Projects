import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { CartProvider } from './CartContext'
import NavBar from './NavBar'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart';
import './styles/App.css'

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App;
