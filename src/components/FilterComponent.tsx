import {FormControl, MenuItem, Select, SelectChangeEvent, Stack, Typography} from "@mui/material";
import React, {useContext, useState} from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {AppContext} from "../hooks/AppContextAndProvider";

interface IOptions {unique:string,name:string}
interface IFilterByWeekOrStatusProps {
    handleOptionClick:(e:SelectChangeEvent)=>void,
    placeholder:string,
    options:Array<IOptions>
    selectedValue:string
}

const LaunchDate=[
    {unique:'Last Week',name:'Last Week'},  {unique:'Last Month',name:'Last Month'},  {unique:'Last Year',name:'Last Year'}
]
const LaunchStatus=[{ unique:'false',name:"Failure"},{unique:'true',name: "Success"}]
const FilterComponent = () => {
    const {
        searchParams,
        setSearchParams,
    } = useContext(AppContext) as any;
    const [launchStatus, setLaunchStatus] = useState<string>('');
    const [launchDate, setLaunchDate] =useState<string>('');
    const handleLaunchStatusChange = (event: SelectChangeEvent) => {
        setLaunchStatus(event.target.value as string);

        let currentSearchParams = new URLSearchParams(searchParams.toString());
        if (!event.target.value) {
            currentSearchParams.delete('launch_success');
        } else {
            currentSearchParams.set('launch_success', event.target.value);
        }
        setSearchParams(currentSearchParams.toString());

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
                    {options.map((item:IOptions,index:number) => (
                        <MenuItem
                            key={index}
                            value={item.unique}

                        >
                            {item.name}
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