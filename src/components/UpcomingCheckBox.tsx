import {Checkbox, FormControlLabel, Typography} from "@mui/material";
import React, {useContext} from "react";
import {AppContext} from "../hooksAndContext/AppContextAndProvider";

const UpcomingCheckBox = () => {
    const {
        searchParams,
        setSearchParams,
    } = useContext(AppContext) as any;
    const handleChange = (event: React.ChangeEvent<any>) => {
        let currentSearchParams = new URLSearchParams(searchParams.toString());
        if (!event.target.checked) {
            currentSearchParams.delete('upcoming');
        } else {
            currentSearchParams.set('upcoming', '1');
        }
        setSearchParams(currentSearchParams.toString());

    }
    return (
        <FormControlLabel
            control={
                <Checkbox size={"small"}  onChange={handleChange} name="Show upcoming" />
            }

            label={<Typography variant={"body1"}>Show upcoming only</Typography>}
        />
    )

}
export default UpcomingCheckBox;