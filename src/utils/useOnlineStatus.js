import { useEffect } from "react";
import { useState } from "react";
const useOnlineStatus = () => { 
    //check if oneline
     //we will use event listener
     const [onLineStatus, setonLineStatus] = useState(true);
     useEffect(() => {
        window.addEventListener("online",()=>{
            setonLineStatus(true);
        })
        window.addEventListener("offline",()=>{
          setonLineStatus(false);
        })
     }, []) 
    //boolean value
    return onLineStatus;
}

export default useOnlineStatus;