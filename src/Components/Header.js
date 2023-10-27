import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useConext } from "react";
import { useSelector } from "react-redux";
const Header = () => {
 
  const [btnNameReact,setbtnNameReact]=useState("Login");
  const onlinestatus=useOnlineStatus();
  // const {loggedInUser}=useConext(UserContext);
  // console.log(loggedInUser,"data")
  //when we use setbtnNameReact react will re render the component and change the value of btnNameReact

  // useEffect(() => {
    
  // }, )
  // if no dependency array the useEffect will run on every render
  // useEffect(() => {
   
  // }, [])
  // if empty dependency array the useEffect will run only once after the first render
  // useEffect(() => {
  //   console.log("useEffect")
  // }, [btnNameReact])
  // if dependency array contains any value the useEffect will run on every render if the value of the dependency array changes
  console.log("header render")
  
  const cartItems=useSelector((store)=>store.cart.items)
  //subscribing to the store using selector
  // console.log(cartItems,"cartItems")
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            online Status :{onlinestatus? "🟢":"🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
            </li>
          <li className="px-4">
           <Link to="/contact">Contact us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4 font-bold text-xl">
              <Link to="/cart">Cart-({cartItems.length} items)</Link>
            </li>
          <button className="login  mx-3" onClick={()=>{btnNameReact==="Login"?setbtnNameReact("Logout"):setbtnNameReact("Login")}}>{btnNameReact}</button>
          <UserContext.Consumer>
             {(data)=><h1>{data.loggedInUser} </h1>}
            </UserContext.Consumer>

        </ul>
      </div>
    </div>
  );
};

export default Header;
