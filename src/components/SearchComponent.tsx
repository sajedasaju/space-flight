import {Box, IconButton, InputBase} from "@mui/material";
import React, {useContext} from "react";
import SearchIcon from '@mui/icons-material/Search';
import {AppContext} from "../hooks/AppContextAndProvider";

const SearchComponent = () => {
    const {
        searchParams,
        setSearchParams,
    } = useContext(AppContext) as any;
    const handleSearch=(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        let currentSearchParams = new URLSearchParams(searchParams.toString());
        if (event.target.value === '') {
            currentSearchParams.delete('rocket_name');
        } else {
            currentSearchParams.set('rocket_name', event.target.value);
        }
        setSearchParams(currentSearchParams.toString());

    }

    return(
        <Box
            component="form"
            className={'display-flex'}
            sx={{ py:'7px', width:'424px' ,height:'38px',border:'1px solid #CED4DA',borderRadius:'4px'}}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search...' }}
                onChange={handleSearch}
            />
            <IconButton type="button"  aria-label="search"  sx={{height:'54px',width:'42px',backgroundColor:'#0D6EFD',borderRadius:0,borderTopRightRadius:'4px',borderBottomRightRadius:'4px'}}>
                <SearchIcon sx={{color:'white',fontSize:'16px'}}  />
            </IconButton>
        </Box>

        )

}
export default SearchComponent;