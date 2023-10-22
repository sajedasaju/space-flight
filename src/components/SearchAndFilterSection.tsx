
import React from "react";
import SearchComponent from "./SearchComponent";
import UpcomingCheckBox from "./UpcomingCheckBox";
import FilterComponent from "./FilterComponent";
import {Box, Stack} from "@mui/material";

const SearchAndFilterSection = () => {
    return(
        <Stack direction={{sm:'column',md:'row'}} justifyContent={'space-between'}>
            <SearchComponent />
            <Box textAlign={{sm: 'start', md: 'end'}}>
                <UpcomingCheckBox />
                <FilterComponent />
            </Box>
        </Stack>
    )

}
export default SearchAndFilterSection;