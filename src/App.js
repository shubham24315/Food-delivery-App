        // this is the first raeact code
import React, { Suspense } from "react";
// react is coming from node modules
import {lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import Contact from "./Components/Contact";
import Grocery from "./Components/Grocery";
import UserContext from "./utils/UserContext";
import {useState,useEffect} from "react";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";



//chunking is a process of splitting the code into smaller chunks chunking is also called lazy loading
// import Header from "./Components/Header.js"; can also be written like this react will treat both as javascript file
 //jSx takes care of injection attacks jsx will escape the malicious code jsx will sanitize the code it prevents cross site scripting attacks - read about it.
/*
structure of our app
Header
- Logo
- Nav items
Body
- Search
- RestaurantContainer
- Restaurant Card
  - Img
  - Name of Res,Star Rating,cuisine,delivery time
Footer
- Copyright
-Links
-Address
-Contact
*/ 



// styles take an javascipt object the first parenthesis is for writng javascript inside react and second parenthesis is for object
const Grocery= lazy(()=>import("./Components/Grocery.js"));

const About = lazy(()=>import("./Components/About.js"));
//upper and lower import are diifferent this import in Grocery is a function
//as soon as we click on the link which loads grocery grocery will take some time to load into our browser and react is very fast it will try to render .so before it loads react will try to render and we will be thrown error

const AppLayout =()=>{
  const [userName,setUserName]=useState("hello");
  useEffect(() => {
   const data ={
    name:"Shubham",
   }
   setUserName(data.name);
  }, [])
  
  //authentication 

    return(
     
      <Provider store={appStore}>
         {/* //react redux provider takes store as prop */}
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        {/* in rest of components except header our value will be shubham this is example of nested context api*/}
        <div className="app">
          {/* <UserContext.Provider value={{loggedInUser:"Elon Musk"}}> */}
            {/* in header our value will be elon musk */}
          <Header/>
          {/* </UserContext.Provider> */}
          <Outlet/>
          {/* outlet will be replaced wtih children according to the path */}
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[{
      path:"/about",
      element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense> 
    },{
      path:"/contact",
      element:<Contact/>
    },{
      path:"/",
      element:<Body/>
    },{
      path:"/restaurant/:resid",
      element:<RestaurantMenu/>
    },{
      path:"/grocery",
      element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense> 
      //when you are on your home page react trys to render the grocery component and it will throw an error because grocery is not loaded yet
      //so we need to lazy load the grocery component
      // fallback is a component which will be shown until the component is loaded

    },{
      path:"/cart",
      element:<Cart/>,
    }],
    errorElement:<Error/>
  }
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)