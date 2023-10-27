import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const dispatch=useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    const cardItems=useSelector((store)=>store.cart.items);
    //if insted we do this
    /*
    const store=useSelector((store)=>store);
    const cardItems=store.cart.items;
    it will be very less effiecent because we don't want to subscribe to updates of whole store we don't want information of another slice. we should only subscribe to the updates of the slice we are interested in. it will be very much efficient
    */ 
    return (<div className="text-center m-4 p-4">
     <h1 className="text-2xl font-bold">Cart</h1>
     <div className="m-auto w-6/12">
        <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear cart</button>
        {cardItems.length===0?<h1>Cart is empty. Add the items</h1>:""}
      <ItemList items={cardItems}/>
     </div>
    </div>)
}

export default Cart;