export const fetData=async ( setProducts,
                             setIsLoadingProducts,searchParams)=>{


    try {
        setIsLoadingProducts(true)
        let queryList =[...searchParams];
        const query = queryList?.map(pair => pair.join('=')).join('&');

        let url="https://api.spacexdata.com/v3/launches?limit=9";
        if(query){
            url=`https://api.spacexdata.com/v3/launches?limit=9&${query}`
        }

        const response =  await fetch(url)
            // ?rocket_name=Falcon%201&limit=2&offset=2
        console.log('response',response)
        if (response) {
            console.log('res',response)
            const data =  await response.json();
            setProducts(data);
            setIsLoadingProducts(false)
        }
    } catch (e) {
        console.log('Error:', e);
        setIsLoadingProducts(false)

    }finally {
        setIsLoadingProducts(false)
    }

}