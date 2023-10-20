import styled from "@emotion/styled";
import {alpha, Box, Button, IconButton, InputBase, Paper} from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchComponent = () => {

    return(
        <Box
            component="form"
            sx={{ display: 'flex',py:'7px', alignItems: 'center', width:'424px' ,height:'38px',border:'1px solid #CED4DA',borderRadius:'4px'}}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search...' }}
            />
            <IconButton type="button"  aria-label="search"  sx={{height:'54px',width:'42px',backgroundColor:'#0D6EFD',borderRadius:0,borderTopRightRadius:'4px',borderBottomRightRadius:'4px'}}>
                <SearchIcon sx={{color:'white',fontSize:'16px'}}  />
            </IconButton>
        </Box>

        )

}
export default SearchComponent;