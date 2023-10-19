import logo from './logo.svg';
import './App.css';
import {Container, Grid, Stack, Typography} from "@mui/material";

function App() {
  return (
   <Container maxWidth={'1320px'}>
<Grid container>
    <Grid item xs={12} sx={{maxWidth:'270px'}}>
        <Stack><Typography variant={'h1'}>Spaceflight details</Typography> <Typography variant={"body1"}>Find out the elaborate features of all the past big spaceflights.</Typography> </Stack>
    </Grid>
</Grid>
   </Container>
  );
}

export default App;
