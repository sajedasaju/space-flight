


export default function typography(CustomFontFamily:any) {

    const Fonts= {
        LIGHT :300,
        REGULAR : 400,
        MEDIUM : 500,
        SEMI_BOLD : 600,
        BOLD : 700,
    }
    const customTypography = {
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
            fontWeight: Fonts.MEDIUM,
            fontSize: '1.5rem',
            color:'#212529'
        },
        h6: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.REGULAR,
            fontSize: '0.875rem',
            color:'#495057'
        },
        subtitle1: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.MEDIUM,
            fontSize: '1rem',
            color:'#6C757D'
        },
        subtitle2: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.REGULAR,
            fontSize: '1rem',
            color:'#343A40'
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
            fontSize: '1rem',
            color:"#6C757D"
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
