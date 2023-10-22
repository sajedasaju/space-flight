import {createContext, useCallback, useEffect, useState} from "react";



export const AppContext = createContext({});

/*const AppContextProvider = (children) => {
    const [products, setProducts] = useState([]);
    useEffect(async ()=>{
        try {
            const response = await fetch('https://api.spacexdata.com/v3/launches');
            if (response) {
                const data = await response.json();
                setProducts(data);
            }
        } catch (e) {
            console.log('Error:', e);
        }
    },[])
    /!*const fetchData= useCallback(async ()=>{
        try {
            const response = await fetch('https://api.spacexdata.com/v3/launches');
            if (response) {
                const data = await response.json();
                setProducts(data);
            }
        } catch (e) {
            console.log('Error:', e);
        }
    },[])*!/

    return (
        <AppContext.Provider value={{
            products,
            setProducts
        }}>{children}</AppContext.Provider>
    );
};*/

// export default AppContextProvider;
