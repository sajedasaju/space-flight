export const fetData=async ( setProducts,
                             setIsLoadingProducts)=>{
    try {
        setIsLoadingProducts(true)
        const response =  await fetch('https://api.spacexdata.com/v3/launches')
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