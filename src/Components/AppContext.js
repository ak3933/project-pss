import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = (props) =>{
    const [data, setData] = useState({});
    return (
        <AppContext.Provider value={{data, setData}}>
            {props.children}
        </AppContext.Provider>
    )
}