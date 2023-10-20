import {Box, Chip, Stack, Typography} from "@mui/material";
import img1 from '../Images/Property 1=1.png'
const ProductCard = () => {
    return (
        // <Stack alignItems={"center"} sx={{border: '1px solid #CED4DA',borderRadius:'8px',height:'394px',width:'424px'}}>
            <Box textAlign={'center'} sx={{border: '1px solid #CED4DA',borderRadius:'8px',width:'360px',p:'32px'}}>
                <Box
                    component="img"
                    sx={{
                        height: 124,
                        width: 124,
                        mb:'40px'
                    }}
                    alt="image1"
                    src={img1}
                />
                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}><Typography variant={'body2'} >
                    Launch Date:
                </Typography>
                    <Typography variant={'subtitle2'}>25 Feb, 2006</Typography>
                </Stack>

                <Typography variant={'h5'} mb={'4px'}>FalconSat</Typography>
                <Typography variant={'h6'} mb={'32px'}>Falcon 1</Typography>
                <Typography variant={'subtitle1'} mb={'8px'}>Launch Status:</Typography>
                <Chip label={"Failed"} />

            </Box>

        // </Stack>
    )

}
export default ProductCard;