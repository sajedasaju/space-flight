import {
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    Stack,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface IFilterByWeekOrStatusProps {
    handleOptionClick:(e:SelectChangeEvent)=>void,
    placeholder:string,
    options:Array<string>
    selectedValue:string
}

const LaunchDate=['Last Week','Last Month','Last Year']
const LaunchStatus=[ "Failure", "Success"]
const FilterComponent = () => {
    const [launchStatus, setLaunchStatus] = useState<string>('');
    const [launchDate, setLaunchDate] =useState<string>('');
    const handleLaunchStatusChange = (event: SelectChangeEvent) => {
        setLaunchStatus(event.target.value as string);
    };
  const handleLaunchDateChange = (event: SelectChangeEvent) => {
      setLaunchDate(event.target.value as string);
    };

    const FilterByWeekOrStatus=({handleOptionClick,placeholder,options,selectedValue}:IFilterByWeekOrStatusProps)=>{
        return(
            <FormControl sx={{width:'180px',height:'24px',}}>
                <Select
                    sx={{'& .MuiOutlinedInput-input':{padding:'7px'},}}
                    displayEmpty
                    value={selectedValue}
                    onChange={handleOptionClick}
                    IconComponent={()=> <KeyboardArrowDownIcon sx={{fontSize:'20px',mr:'7px'}} />}
                >
                    <MenuItem disabled value="" sx={{display:'none'}}>
                        <Typography variant={"body1"} color={'#6C757D'} >{placeholder}</Typography>
                    </MenuItem>
                    {options.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}

                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>

            </FormControl>
        )
    }

    return(
        <Stack direction={'row'} spacing={'24px'}>
            <FilterByWeekOrStatus handleOptionClick={handleLaunchStatusChange} placeholder={'By Launch Status'} options={LaunchStatus} selectedValue={launchStatus} />
            <FilterByWeekOrStatus handleOptionClick={handleLaunchDateChange} placeholder={'By Launch Date'} options={LaunchDate} selectedValue={launchDate} />

        </Stack>

    )

}
export default FilterComponent;