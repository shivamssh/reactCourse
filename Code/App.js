
import React from "react";
import ReactDom from "react-dom/client";
import logo from './public/img/logo.png';
import { restaurantList, IMG_CDN_URL } from "./constant";
// A React element
const Title = () => (
          <a id="title" key="title" href="/">
                    <img src={logo} className="logo" alt="Logo"  />
          </a>
);


// React components
// - functional Component - NEW

const HeaaderComponent = () => {
          return (
                    <div className="header">
                              <Title />
                              <div className="nav-items">
                                        <ul>
                                                  <li>Home</li>
                                                  <li>About</li>
                                                  <li>Contact</li>
                                                  <li>Cart</li>
                                        </ul>
                              </div>
                    </div>
          );
};

const burgerKing = {
          name: "Burger King",
          image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zg5wf1kmlqccfcat1bht",
          cusines: ["Burger", "American"],
          rating: "4.2"
}
// --------------------------------Way 1 to display data with props ----------------------//
// const RestaurentList = (props) => {
//           console.log('props -> ', props)
//           return (
//                     <div className="card">
//                               <img src={IMG_CDN_URL+props.restaurent.data?.cloudinaryImageId}/>
//                               <h2>{props.restaurent.data.name}</h2>
//                               <h3>{props.restaurent.data.cuisines.join(',')}</h3>
//                               <h4>{props.restaurent.data.lastMileTravelString}</h4>
//                     </div>
//           )
// }

// --------------------------------Way 2 to display data with props ----------------------//
// const RestaurentList = ({restaurent}) => {
//           return (
//                     <div className="card">
//                               <img src={IMG_CDN_URL+restaurent.data?.cloudinaryImageId}/>
//                               <h2>{restaurent.data.name}</h2>
//                               <h3>{restaurent.data.cuisines.join(',')}</h3>
//                               <h4>{restaurent.data.lastMileTravelString}</h4>
//                     </div>
//           )
// }

// --------------------------------Way 3 to display data with props ----------------------//
// const RestaurentList = ({restaurent}) => {
//           const {cloudinaryImageId, name, cuisines, lastMileTravelString} = restaurent.data;

//           return (
//                     <div className="card">
//                               <img src={IMG_CDN_URL+cloudinaryImageId}/>
//                               <h2>{name}</h2>
//                               <h3>{cuisines.join(',')}</h3>
//                               <h4>{lastMileTravelString}</h4>
//                     </div>
//           )
// }

// --------------------------------Way 4 to display data with props ----------------------//

const RestaurentList = ({
          cloudinaryImageId, 
          name, 
          cuisines, 
          lastMileTravelString
}) => {

          return (
                    <div className="card">
                              <img src={IMG_CDN_URL+cloudinaryImageId}/>
                              <h2>{name}</h2>
                              <h3>{cuisines.join(', ')}</h3>
                              <h4>{lastMileTravelString}</h4>
                    </div>
          )
}


const Body = () => {
          return (
                    <div className="restaurent-list">
                              {/* Way 1 to pass prop - RestaurentList(restaurantList[0]) */}
                              {/* Way 2 to pass prop - <RestaurentList restaurent={restaurantList[0]} */}
                              {/* Way 3 to pass prop - {...restaurantList[0].data}/> */}
                              {/* key = use unique key (i.e. "AA11SSS"), if not then use index ( i.e. 0,1,2...} */}
                              {
                                        restaurantList.map((restaurantListData, index) =>{
                                                  return <RestaurentList {...restaurantListData.data} key={restaurantListData.data.id} />
                                        })
                              }
                              


                    </div>
          )
}

const Footer = () => {
          return (
                    <h4>Footer</h4>
          )
}


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

