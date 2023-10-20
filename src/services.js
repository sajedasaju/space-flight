export const fetData=async ( setProducts,
                             setIsLoadingProducts,searchParams)=>{


    try {
        setIsLoadingProducts(true)
        let queryList =[...searchParams];

        console.log('from service',searchParams,queryList)
        const query = queryList?.map(pair => pair.join('=')).join('&');

        let url="https://api.spacexdata.com/v3/launches?limit=9";
        if(query){
            url=`https://api.spacexdata.com/v3/launches?limit=9&${query}`
        }

        const response =  await fetch(url)

        if (response) {
            const data =  await response.json();
            setProducts(data);
        }
    } catch (e) {
        console.log('Error:', e);

    }finally {
        setIsLoadingProducts(false)
    }

}