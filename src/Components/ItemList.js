import { CDN_URL } from "../utils/constants";
import {addItem} from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({items}) =>{
    const dispatch=useDispatch();

    const handleaddItem=(item)=>{
        //dispatch and action
        console.log(item)
        dispatch(addItem(item));

        //redux will create a object and create a payload
        // {
        //     payload:"pizza"
        // }
    }
    // console.log(items,"items")
   return (<div>
    <div>
        {
            items.map((item)=>{
                return <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
 
                    <div className="w-9/12">
                          <div className="py-2"> 
                         <span>{item.card.info.name}</span> 
                         <span> - ₹ {item.card.info.price/100}</span>               
                          </div>
                          <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4 ">
                        <div className="absolute">
                    <button className="p-2    rounded mx-16 bg-black text-white"    
                    onClick={()=>handleaddItem(item)}
                    
                    > Add +</button>
                    </div>
                    <img src={CDN_URL+item.card.info.imageId} alt="" />
                    </div>

                </div>
            })
        }
    </div>
   </div>)
}

export default ItemList;