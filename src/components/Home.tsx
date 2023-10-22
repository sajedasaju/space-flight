import {Container, Grid, Pagination, Stack, Typography} from "@mui/material";
import ProductCard from "./ProductCard";
import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../hooks/AppContextAndProvider";
import {fetData} from "../services";
import SearchAndFilterSection from "./SearchAndFilterSection";

const Home = () => {
    const {
        searchParams,
        setSearchParams,
        setProducts,
        products,
        setIsLoadingProducts,
    } = useContext(AppContext) as any;
    const [page,setPage]=useState<number>(Number(searchParams.get('offset')) || 1)


    const handlePageChange = (
        event: React.ChangeEvent<unknown>, value: number
    ) => {
        let currentSearchParams = new URLSearchParams(searchParams.toString());
            currentSearchParams.set('offset',`${value}`)
        setSearchParams(currentSearchParams.toString());
        setPage(value);
    };

    useEffect( () => {

        fetData(setProducts,setIsLoadingProducts,searchParams)
    }, [searchParams]);

    /*const pageCount =
       products.length > 0
            ? Math.ceil(products.length / 9)
            : 0;*/



    return(
        <Container  sx={{padding:'0px !important',width:{xs:'360px',sm:'834px',md:'834px',lg:'1320px'}}}>
            <Grid container rowSpacing={'64px'} pt={'120px'} pb={'128px'} >
                <Grid item xs={12} sx={{maxWidth:'270px',textAlign:'center'}}>
                    <Stack><Typography variant={'h1'}>Spaceflight details</Typography>
                        <Typography variant={"body1"}>Find out the elaborate features of all the past big spaceflights.</Typography> </Stack>
                </Grid>

                <Grid item xs={12}>
                    <SearchAndFilterSection />
                </Grid>

                <Grid item xs={12}>
                    <ProductCard />

                </Grid>

                {
                    products &&  products.length>0 &&   <Grid item xs={12} className={'display-flex'}  >
                        <Pagination
                            onChange={handlePageChange}
                            count={products.length}
                            defaultPage={page}
                            variant="outlined" shape="rounded"
                            className="my-pagination-style"/>
                    </Grid>
                }

            </Grid>
        </Container>
    )

}
export default Home;