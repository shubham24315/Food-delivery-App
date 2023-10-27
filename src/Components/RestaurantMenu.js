import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaruantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  
  


    const  {resid}=useParams();
    const resInfo = useRestaurantMenu(resid);// making custom hook
    // console.log(resid,"resId")
   const [showIndex,setShowIndex]=useState(-1);
    if(resInfo===null) return(<Shimmer/>);

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    //  console.log(categories,"categories")
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
            {/* categories accordion */}
            {
                categories.map((category,index)=>{
                  return (<RestaruantCategory key={category?.card?.card?.title} category={category?.card?.card}
                  showItems={index===showIndex?true:false}
                  setShowIndex={()=> setShowIndex(index)}
                  AllIndex={()=>setShowIndex(-1)}
                  />
                    
                 )
                })
            }
           
        </div>
    )
}
export default RestaurantMenu;