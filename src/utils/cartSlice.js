import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    //there are multiple reducers in a slice
    reducers :{
        //addItem is a action ans it has reducer function
        //in second argument we will have our payload
        // {
        //     payload:"pizza"
        // }
        addItem : (state,action)=>{
            //vinalla(older) don't mutate state
            //we need to something like this in vanilla
            //const newState = [...state];we create a copy of state variable as we can not mutate state directly
            //newState.push(action.payload);
            //return newState;



            //redux toolkit (newer) mutate state
            //we can mutate state directly
            //but behind the scene redux is using immer library which will create a copy of state and then mutate it similar to valina
             //modify state based on action we are mutating the state
                state.items.push(action.payload);
        },
        removeItem : (state,action)=>{
            //modify state based on action
            state.items.pop();
        },
        clearCart: (state,action)=>{
/*
state=[] this will not work because we are mutating the state directly and redux toolkit will not be able to create a copy of state and mutate it
*/ 

            state.items.length=0;
 /*
redux tool kit says either mutate the state or return a new state for example we can return here (return items:[])
 */            
        }
    }
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;

//we are exporting one reducer from it
export default cartSlice.reducer;