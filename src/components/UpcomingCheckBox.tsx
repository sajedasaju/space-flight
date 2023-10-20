import {Checkbox, FormControlLabel, Typography} from "@mui/material";
import React from "react";

const UpcomingCheckBox = () => {
    const handleChange = () => {
        console.log('clicked')

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