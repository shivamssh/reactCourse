
import React from "react";
import ReactDom from "react-dom/client";
import HeaaderComponent from './components/Header'
import Body from './components/Body';
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Aboutus from "./components/Aboutus";
import DefaultError from "./components/DefaultError";


const AppLayout = () => {
          return (
                    // or <> </> shorthand for React.Fragment
                    <React.Fragment> 
                              <HeaaderComponent/>
                              <Body/>
                              <Footer/>
                    </React.Fragment>
          )
}

const appRoute = createBrowserRouter([
          {
                    path: '/',
                    element: <AppLayout/>,
                    errorElement: <DefaultError/>
          },
          {
                    path: '/aboutus',
                    element: <Aboutus/>
          }
])
const render = ReactDom.createRoot(document.getElementById('root'));
render.render(<RouterProvider router={appRoute} />);

