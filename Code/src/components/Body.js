import { restaurantList } from '../constant';
import RestaurentList from './RestaurantCard';

const Body = () => {
          return (
                    <div className="restaurent-list">
                              {
                                        restaurantList.map((restaurantListData) =>{
                                                  return <RestaurentList {...restaurantListData.data} key={restaurantListData.data.id} />
                                        })
                              }
                    </div>
          ) 
}

export default Body;