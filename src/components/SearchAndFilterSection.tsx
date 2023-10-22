
import React from "react";
import SearchComponent from "./SearchComponent";
import UpcomingCheckBox from "./UpcomingCheckBox";
import FilterComponent from "./FilterComponent";
import {Box, Stack} from "@mui/material";

const SearchAndFilterSection = () => {
    return(
        <Stack direction={{xs:'column',sm:'row'}} justifyContent={'space-between'}>
            <SearchComponent />
            <Box textAlign={{xs: 'start', sm: 'end'}}>
                <UpcomingCheckBox />
                <FilterComponent />
            </Box>
        </Stack>
    )

}
export default SearchAndFilterSection;