import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { restaurentListGet, LABELS } from '../constant';
import { filterData } from '../utils/helper'
import RestaurentList from './RestaurantCard';
import Shimmer from './Shimmer';
import useInternetState from './../hooks/useInternetState';

const Body = () => {
          let [searchTxt,setSearchTxt] = useState('');// return = [state variable name, function to update the state varible];
          let [restaurentList, setRestaurent] = useState([]);
          let [restaurentFilter, setRestaurentFilter] = useState([]);
          const internetStatus = useInternetState();

          async function getRestaurentList() {
                    const list = await fetch(restaurentListGet);
                    const json = await list.json();
                    setRestaurent(json?.data?.cards[5]?.card?.card.gridElements.infoWithStyle.restaurants);
                    setRestaurentFilter(json?.data?.cards[5]?.card.card.gridElements.infoWithStyle.restaurants);
          }

          useEffect(() =>{
                    getRestaurentList();
          }, [])

          return internetStatus ? <span>{LABELS.NO_INTERNET}</span> : (
                    <>
                              <div className='search-container'>
                                        <input 
                                                  type='text'
                                                  className='search-input'
                                                  placeholder='Search'
                                                  value={searchTxt}
                                                  onChange={(e) => {
                                                            setSearchTxt(e.target.value)}}
                                        />
                                        <button className='search-btn'
                                        onClick={() =>{
                                                  console.log("searchTxt => ",searchTxt);
                                                  const dataFiltered =filterData(searchTxt, restaurentList);
                                                  console.log("dataFiltered => ",dataFiltered);

                                                  setRestaurentFilter(dataFiltered);
                                        }}>Search</button>

                              </div>
                              <div className="restaurent-list">
                                        { restaurentList.length > 0 ?
                                                  restaurentFilter.map((restaurantListData) =>{
                                                            return ( 
                                                            <Link to={"/restaurentDetails/"+ restaurantListData?.info.id} key={restaurantListData.info.id}>
                                                                      <RestaurentList {...restaurantListData.info} key={restaurantListData.info.id} />
                                                            </Link>
                                                            )
                                                  }) :  
                                                  <Shimmer/>
                                        }
                              </div>
                    </>
                    
          ) 
}

export default Body;