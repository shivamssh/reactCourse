const RestaurentCard = ({ 
          name,
          cuisines,
          cloudinaryImageId,
          lastMileTravelString,
}) => {
          return (
                    <div className="card">
                              <img src={IMG_CDN_URL+restaurantList[0].data.cloudinaryImageId}/>
                              <h2>{restaurantList[0].data.name}</h2>
                              <h3>{restaurantList[0].data.cuisines.join(',')}</h3>
                              <h4>{restaurantList[0].data.lastMileTravelString}</h4>
                    </div>
          );
}

export default RestaurentCard;