import { CDN_URL } from "../utils/constants";
//whenever we have named export we need to use curly braces if we export defaule then we dont need to use curly braces
const RestaurantCard = (props) => {
  const { resData } = props;
  // {console.log(props)}
  // console.log(resData);
  return (
    <div data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-200 bg-gray-50" 
     
    >
      <img
        className="rounded-lg"
        src={CDN_URL + resData?.info?.cloudinaryImageId}
        alt=""
      />
      
      <h1 className="font-bold py-4 text-lg">{resData?.info?.name}</h1>
      <h4>{resData?.info?.cuisines.join(", ")}</h4>
      <h4>{resData?.info?.avgRating}</h4>
      <h4>{resData?.info?.costForTwo}</h4>
      <h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};


//Higher order component

//input = RestaurantCard output- RestaurantCard promoted
export const withPromotedLabel = (RestaurantCard)=>{
  //it is a higher order component
  //RestaurantCard is a component it is taking as a input
  return (props)=>{ // it is returning a component or a function
     return ( // it is a component
       <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
        <RestaurantCard {...props}/>
       </div>
     )
  }

}
export default RestaurantCard;
 