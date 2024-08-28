import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // Optional Chaining
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus == false){
    return (
      <h1>Looks like you're offline!! Please check your internet connection.</h1>
    )
  }


  return listOfRestaurants.length == 0 ?  <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
          <button onClick={() => {
            // Filter the restraunt cards and update the UI
            // SearchText
            const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
