
import React from "react";
import ReactDom from "react-dom/client";
import HeaaderComponent from './components/Header'
import Body from './components/Body';
import Footer from "./components/Footer";



const AppLayout = () => {
          return (
                    <React.Fragment>
                              <HeaaderComponent/>
                              <Body/>
                              <Footer/>
                    </React.Fragment>
          )
}

const render = ReactDom.createRoot(document.getElementById('root'));
render.render(<AppLayout/>);

