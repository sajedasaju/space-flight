import {TypographyOptions} from '@mui/material/styles/createTypography';
import {Fonts} from "./enums";


export default function typography(CustomFontFamily: string) {
    const customTypography: TypographyOptions = {
        fontFamily: CustomFontFamily,
        htmlFontSize: 16,
        fontSize: 16,
        fontWeightLight: Fonts.LIGHT,
        fontWeightRegular: Fonts.REGULAR,
        fontWeightMedium: Fonts.MEDIUM,
        fontWeightBold: Fonts.BOLD,
        h1: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.BOLD,
            fontSize: '2.5rem',
            color:'#212529'
        },
        h2: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.BOLD,
            fontSize: '1.5rem',
            color:'#212529'
        },
        h3: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.BOLD,
            fontSize: '1.25rem',
        },
        h4: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.BOLD,
            fontSize: '1.125rem',
        },
        h5: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.SEMI_BOLD,
            fontSize: '0.875rem',
        },
        h6: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.MEDIUM,
            fontSize: '.25rem',
        },
        subtitle1: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.REGULAR,
            fontSize: '1.25rem',
        },
        subtitle2: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.MEDIUM,
            fontSize: '1rem',
        },
        body1: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.REGULAR,
            fontSize: '1rem',
            color:'#495057',
        },
        body2: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.REGULAR,
            fontSize: '16rem',
            color:"#343A40"
        },
        caption: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.REGULAR,
            fontSize: '0.75rem',
        },
        button: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.MEDIUM,
            fontSize: '1.25rem',
        },

    };

    return customTypography;
}
