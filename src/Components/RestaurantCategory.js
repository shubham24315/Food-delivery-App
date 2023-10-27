import ItemList from "./ItemList";
import { useState } from "react";
const RestaruantCategory = (props)=>{
 const title=props.category.title;
 const {showItems} =props;
let click=0;
 const handleClick= ()=>{
    click++;
    if(click===1){
        props.setShowIndex();
    }
     else if(click===2){
        click=0;
        props.AllIndex();
        // console.log("hi")
     }   
 }
    return(
        <div>
            {/*  Header*/}
            <div className="w-6/12 mx-auto bg-gray-50 shadow-lg p-4 my-4" >
                <div cl assName=" flex justify-between cursor-pointer" 
                onClick={handleClick}>
                <span className="font-bold text-lg cursor-pointer">{title} ({props.category.itemCards.length})</span>
                <span>⬇️</span>
                </div>

                {showItems && <ItemList items={props.category.itemCards}/>}
            </div>
            {/* Accordion Body */}

        </div>
    )
}
export default RestaruantCategory;