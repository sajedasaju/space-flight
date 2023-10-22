import {useCallback, useEffect, useState} from "react";

const useFetchData =  () => {
    const [products, setProducts] = useState([]);


    const fetchData= useCallback(async ()=>{
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

    if (products.length == 0 ) {
        fetchData();
    }

    return {products}
}
export default useFetchData;
