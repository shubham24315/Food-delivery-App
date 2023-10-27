import RestarantCard from "./RestaurantCard";
import resList from "../utils/mockData.js";
import { useState } from "react";
import { useEffect  } from "react";
import { swiggy_api_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Body = () => {
//state variable - super powerful variable

//state variable is a variable which can be changed and react will take care of re rendering the component
    //useEffect take two arguments
    //first is call back function and second is dependency array
    //useEffect will be called when our component renders
    const [listofRestaurants,setlistofRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");
    const [filteredList,setFilteredList]=useState([]);
    const RestaurantCardPromoted = withPromotedLabel(RestarantCard);
    useEffect(()=>{
      fetchData();
    },[]);
    const fetchData = async()=>{
        //fetch is given by browser
        const data=await fetch(swiggy_api_URL);
        const json=await data.json();
        let restaurants = json["data"]["cards"][5]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"]
 
        setlistofRestaurants(restaurants);
        setFilteredList(restaurants);
    }
    const {setUserName,loggedInUser}=useContext(UserContext);
    const onlinestatus=useOnlineStatus();
    if(onlinestatus===false) return <h1>Looks    like you;re offline !! Please check  your intenet connection</h1>;
    if(listofRestaurants.length===0){
         return <Shimmer/>;//this is conditional rendering conditional rendering is basically rendering on the basis of condition
    }
    
    return(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" placeholder="Search for restaurants" 
                    data-testid="searchInput"
                    className="border border-solid border-black"
                    value={searchText}
                    onChange={(e)=>{ setSearchText(e.target.value) }}/>
                    <button 
                    className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={()=>{
                        //filter the cards
                        // console.log(searchText,"searchText");
                        const filterRestaurant=listofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        // console.log(filterRestaurant)
                        setFilteredList(filterRestaurant);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>Username</label>
              <input type="text" className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
                </div>

            </div>
            <div className="flex flex-wrap">
                {
                    // index will be index of array
                    //index should not be used as key because order of items might change
                    filteredList.map((item,index)=>{
                        return (<Link key={item?.info?.id} to={"/restaurant/"+item?.info?.id}>   
                        {/* {console.log(item,"item")} */}
                        {item.info.isOpen ?( <RestaurantCardPromoted resData={item}/>) : (<RestarantCard resData={item}/>)}                     
                        

                        </Link>)

                    })
                }
 
            </div>
        </div>
    )
}
export default Body;