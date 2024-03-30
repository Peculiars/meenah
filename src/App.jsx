import React from 'react'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollRestoration, createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, useLocation } from "react-router-dom";
import { Cart } from './pages/Cart';
import { Product } from './components/Product';

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

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {path: '/', element: <Home/>},
        {path: '/product/:id', element: <Product/>},
        {path: '/cart', element: <Cart/>},
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
