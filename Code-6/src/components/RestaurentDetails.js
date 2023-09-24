import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./../constant";
import Shimmer from "./../components/Shimmer";
import ResaurentDeatilsHook from "./../hooks/RestaurentDetailsHook";
import useInternetState from './../hooks/useInternetState';
import { LABELS } from "./../constant";

const RestaurentDetails = () => {
  const { id } = useParams();
  const restaurentDetails = ResaurentDeatilsHook(id);
  const internetStatus = useInternetState();

  if( internetStatus) {
    return <span>{LABELS.NO_INTERNET} </span>;
  }

  return !restaurentDetails ? (
    <Shimmer />
  ) : (
    <div className="card-col">
      <div className="card card-float-l">
        <img
          src={
            IMG_CDN_URL +
            restaurentDetails?.cards[0]?.card?.card?.info.cloudinaryImageId
          }
        />
        <h2>{restaurentDetails?.cards[0]?.card?.card?.info.name}</h2>
        <h3>{restaurentDetails?.cards[0]?.card?.card.info.areaName}</h3>
        <h3>
          {restaurentDetails?.cards[0]?.card?.card.info.city.toUpperCase()}
        </h3>
        <h3>{restaurentDetails?.cards[0]?.card?.card.info.avgRatingString}</h3>
      </div>
      <div className="card card-float-l">
        <h1>Menu</h1>
        <div>
          {Object.values(
            restaurentDetails?.cards[2].groupedCard?.cardGroupMap?.REGULAR
              ?.cards
          ).map((_menuItem, index) =>
            _menuItem?.card?.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? (
              <div key={_menuItem.card.card.title}>
                <h3>{_menuItem?.card?.card?.title}</h3>

                <ul key={index}>
                  {Object.values(_menuItem?.card?.card?.itemCards).map(
                    (_menuItems) => (
                      <li key={_menuItems?.card?.info?.id}>
                        {_menuItems?.card?.info?.name}
                      </li>
                    )
                  )}
                </ul>
              </div>
            ) : null
          )}
        </div>
      </div>
      </div>
  );
};
// type.googleapis.com/swiggy.presentation.food.v2.ItemCategory
export default RestaurentDetails;
