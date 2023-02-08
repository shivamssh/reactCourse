import React, {useState} from 'react';
import { restaurantList } from '../constant';
import RestaurentList from './RestaurantCard';

function filterData(searchText) {
           
          let filteredData = restaurantList.filter((filteredList) => filteredList.data.name.indexOf(searchText) !== -1);
          return filteredData;
}

const Body = () => {
          let [searchTxt,setSearchTxt] = useState('');// return = [state variable name, function to update the state varible];
          let [restaurent, setRestaurent] = useState(restaurantList);
          return (
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
                                                  const dataFiltered =filterData(searchTxt);
                                                  console.log("dataFiltered => ",dataFiltered);

                                                  setRestaurent(dataFiltered);
                                        }}>Search</button>

                              </div>
                              <div className="restaurent-list">
                                        {
                                                  restaurent.map((restaurantListData) =>{
                                                            return <RestaurentList {...restaurantListData.data} key={restaurantListData.data.id} />
                                                  })
                                        }
                              </div>
                    </>
                    
          ) 
}

export default Body;