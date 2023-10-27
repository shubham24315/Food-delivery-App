import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
    //this in reducer not reducers becuse this one reducer for our whole app and it can contain multiple strong reducers
    reducer:{//this reducer is our app big reducer it consists of small reducer like cartReducer
      cart:cartReducer,//small reducer
    }
});


export default appStore;