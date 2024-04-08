import React from 'react'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollRestoration, createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, useLocation } from "react-router-dom";
import { Cart } from './pages/Cart';
import { Product } from './components/Product';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Sneakers } from './pages/Sneakers';
import { Boots } from './pages/Boots';
import { FlatSlippers } from './pages/FlatSlippers';
import { Sandals } from './pages/Sandals';
import { PaystackCheckout } from './components/PaystackCheckout';

function App() {

  const Layout=()=>{
    return (
      <div>
        <Header/>
        <ScrollRestoration/>
        <Outlet/>
        <Footer/>
    </div>
    );
  };

  const SignUpLayout = () => {
    return (
      <div>
        <Registration/>
      </div>
    );
  };

  const SignInLayout = () => {
    return (
      <div>
        <Login/>
      </div>
    );
  };

  const PaystackcheckoutLayout = () => {
    return (
      <div>
        <PaystackCheckout/>
      </div>
    );
  };


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {path: '/', element: <Home/>},
        {path: '/product/:id', element: <Product/>},
        {path: '/cart', element: <Cart/>},
        {path: '/sneakers', element: <Sneakers/>},
        {path: '/boots', element: <Boots/>},
        {path: '/slippers', element: <FlatSlippers/>},
        {path: '/sandals', element: <Sandals/>}

      ]
    },

    {
      path: '/',
      element: <SignUpLayout />,
      children: [
        {path: '/registration', element: <Registration/>},
      ]
    },

    {
      path: '/',
      element: <SignInLayout />,
      children: [
        {path: '/login', element: <Login/>}
      ]
    },

    {
      path: '/',
      element: <PaystackcheckoutLayout />,
      children: [
        {path: '/paystack-checkout', element: <PaystackCheckout/>}
      ]
    }
  ])

  return (
      <div className='font-bodyFont'>
        <RouterProvider router={router}/>
      </div>
      
  )
}

export default App
