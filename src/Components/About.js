import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";

export default function About(){
    const contextData = useContext(AppContext);
    console.log(contextData);
    useEffect(()=>{
        contextData.setData({...contextData.data, lastName:"Kumar"});
    },[])
    console.log("path->",window.location.pathname);
    return (
        <div className="about">
            <p>this is about page</p>
        </div>
    )
}