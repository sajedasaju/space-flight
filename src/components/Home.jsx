import {Container, Grid, Pagination, Stack, Typography} from "@mui/material";
import ProductCard from "./ProductCard";

const Home = () => {
    return(
        <Container  sx={{padding:'0px !important',width:{xs:'360px',sm:'834px',md:'834px',lg:'1320px'}}}>
            <Grid container rowSpacing={'64px'} pt={'120px'} pb={'128px'} >
                <Grid item xs={12} sx={{maxWidth:'270px',textAlign:'center'}}>
                    <Stack><Typography variant={'h1'}>Spaceflight details</Typography> <Typography variant={"body1"}>Find out the elaborate features of all the past big spaceflights.</Typography> </Stack>
                </Grid>

                <Grid item xs={12}>
                    <ProductCard />

                </Grid>

                <Grid item xs={12} sx={{display:'flex',justifyContent:'center'}} >
                        <Pagination count={10} variant="outlined" shape="rounded" sx={{
                            '& .MuiPaginationItem-root': {
                                backgroundColor: '#FFFFFF',
                                color: '#0d6efd',
                                border: ' 1px solid #DEE2E6',
                                borderRadius:'0px',
                                height: '31px',
                                width: '26px',
                                margin: '0px',

                                '&.Mui-selected': {
                                    backgroundColor: '#0d6efd',
                                    color: '#FFFFFF',
                                },
                                '& .MuiPaginationItem-root.Mui-selected:hover': {
                                    backgroundColor: 'transparent',
                                },


                            },

                            '& [aria-label^="Go to previous page"]': {
                                borderTopLeftRadius: '6px',
                                borderBottomLeftRadius: '6px',
                            },
                            '& [aria-label^="Go to next page"]': {
                                borderTopRightRadius: '6px',
                                borderBottomRightRadius: '6px',
                            },

                        }} />
                </Grid>
            </Grid>
        </Container>
    )

}
export default Home;