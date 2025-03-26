import { useState } from 'react'
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './styles/App.css'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  )
};

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
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
