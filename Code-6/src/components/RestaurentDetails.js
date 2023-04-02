import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, restaurentDetailsGet } from './../constant';
import Shimmer from './../components/Shimmer';

const RestaurentDetails = () => {
          const [restaurentDetails, setRestaurentDetails ] = useState(null);
          const {id}  = useParams();

          async function getDetailsOfRestaurent() {
                    let details = await fetch(restaurentDetailsGet+id)
                    let detailsData = await details.json();
                    setRestaurentDetails(detailsData.data.cards)
          }

          useEffect(() => {
                    getDetailsOfRestaurent();
          },[]);

          
          return !restaurentDetails? <Shimmer/> : (
                     <div className="card">
                              <img src={IMG_CDN_URL+restaurentDetails[0]?.card?.card?.info.cloudinaryImageId}/>
                              <h2>{restaurentDetails[0]?.card?.card?.info.name}</h2>
                              <h3>{restaurentDetails[0]?.card?.card.info.areaName}</h3>
                              <h3>{restaurentDetails[0].card?.card.info.city.toUpperCase()}</h3>
                              <h3>{restaurentDetails[0].card?.card.info.avgRatingString}</h3>
                              <div>
                                <h1>Menu</h1> 
                                <div>
                                    {
                                        Object.values(restaurentDetails[2].groupedCard?.cardGroupMap?.REGULAR?.cards).map((_menuItem) => (
                                            _menuItem?.card?.card['@type'] ===  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ?   ( 
                                                <div> 
                                                    <h3>{_menuItem?.card?.card?.title}</h3> 
                                            
                                                    <ul key={_menuItem?.card?.card?.title}>
                                                        {
                                                            Object.values(_menuItem?.card?.card?.itemCards).map((_menuItems) => (
                                                                <li key={_menuItems?.card?.info?.id}>{_menuItems?.card?.info?.name}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            ) : null
                                            
                                        ))
                                    }
                                </div>
                              </div>

                    </div>
          );
}
// type.googleapis.com/swiggy.presentation.food.v2.ItemCategory
export default RestaurentDetails;