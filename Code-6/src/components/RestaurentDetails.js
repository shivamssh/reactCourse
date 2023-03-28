import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { restaurentDetailsGet } from './../constant';

const RestaurentDetails = () => {
          const {id}  = useParams();

          async function getDetailsOfRestaurent() {
                    console.log("restaurentDetailsGet+id => ",restaurentDetailsGet+id)

                    let details = await fetch(restaurentDetailsGet+id)
                    let detailsData = await details.json();
                    console.log("detailsData => ",detailsData.data)
          }

          useEffect(() => {
                    getDetailsOfRestaurent();
          },[]);

          
          return (
                    <div>Restaurent Id : {id}</div>
          );
}

export default RestaurentDetails;