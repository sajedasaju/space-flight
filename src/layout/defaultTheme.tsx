import {createTheme} from "@mui/material";
import typography from "./typography";

const CustomFontFamily = {
    fontFamily: ['Barlow','sans-serif', ].join(','),
};
const defaultTheme = createTheme({
    breakpoints: {
        values: {
            xs: 360,
            sm: 720,
            md: 900,
            lg: 1250,
            xl: 1320,
        },
    },
    shape: {
        borderRadius: 4,
    },
    direction: 'ltr',
    typography: typography(CustomFontFamily.fontFamily),
});
export default  defaultTheme;