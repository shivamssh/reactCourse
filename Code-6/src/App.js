
import React from "react";
import ReactDom from "react-dom/client";
import HeaaderComponent from './components/Header'
import Body from './components/Body';
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Aboutus from "./components/Aboutus";
import DefaultError from "./components/DefaultError";
import RestaurentDetails from "./components/RestaurentDetails";

const AppLayout = () => {
          return (
                    // or <> </> shorthand for React.Fragment
                    <React.Fragment> 
                              <HeaaderComponent/>
                              <Outlet/>
                              <Footer/>
                    </React.Fragment>
          )
}

const appRoute = createBrowserRouter([
          {
                    path: '/',
                    element: <AppLayout/>,
                    errorElement: <DefaultError/>,
                    children:[
                        {
                            path: '/',
                            element: <Body/>
                        },
                        {
                            path: '/aboutus',
                            element: <Aboutus/>
                        },
                        {
                            path: '/restaurentDetails/:id',
                            element: <RestaurentDetails/>
                        }
                    ]
          }
          
])
const render = ReactDom.createRoot(document.getElementById('root'));
render.render(<RouterProvider router={appRoute} />);

