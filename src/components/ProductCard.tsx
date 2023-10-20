import {Box, Chip, CircularProgress, Grid, Skeleton, Stack, Typography} from "@mui/material";
import React, {useContext} from "react";
import {AppContext} from "../hooks/AppContextAndProvider";

const ProductCard = () => {

    const {
        products,
        isLoadingProducts,
    } = useContext(AppContext) as any;



    return (
        <Grid container spacing={'20px'} >
            {
                isLoadingProducts ?  <CircularProgress />
                    : (!isLoadingProducts && products &&  products.length ==0) ? <>
                        {[...Array(4)].map((_, index) => (
                            <Grid item xs={12}  sm={6} md={6} lg={4} key={index} >
                                <Skeleton variant='rectangular' width={'360px'} height={'329px'} />

                            </Grid>
                        ))}
                    </> : <>
                        {products?.map((product:any, index:number) => (
                            <Grid item xs={12}  sm={6} md={6} lg={4} key={index} >
                                <Box textAlign={'center'} sx={{border: '1px solid #CED4DA',borderRadius:'8px',maxWidth:{sx:'314px',
                                        sm:'348px',
                                        md: '348px',
                                        lg: "360px"},p:'32px'}}>
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 124,
                                            width: 124,
                                            mb:'40px'
                                        }}
                                        alt="image1"
                                        src={product?.links?.mission_patch_small}
                                    />
                                    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}><Typography variant={'body2'} >
                                        Launch Date:
                                    </Typography>
                                        <Typography variant={'subtitle2'}>25 Feb, 2006</Typography>
                                    </Stack>

                                    <Typography variant={'h5'} mb={'4px'}>{product?.mission_name}</Typography>
                                    <Typography variant={'h6'} mb={'32px'}>{product?.rocket?.rocket_name}</Typography>
                                    <Typography variant={'subtitle1'} mb={'8px'}>Launch Status:</Typography>
                                    <Chip label={product?.launch_success? "success":"failed"} color={product?.launch_success? "success":"error"} />

                                </Box>
                            </Grid>
                        ))}
                    </>

            }

        </Grid>
    )

}
export default ProductCard;