
import '../styles/global.scss';
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
            color:'var(--gray-900)'
        },
        h2: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.BOLD,
            fontSize: '1.5rem',
            color:'var(--gray-900)'
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
            color:'var(--gray-900)'
        },
        h6: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.REGULAR,
            fontSize: '0.875rem',
            color:'var(--gray-700)'
        },
        subtitle1: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.MEDIUM,
            fontSize: '1rem',
            color:'var(--gray-600)'
        },
        subtitle2: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.REGULAR,
            fontSize: '1rem',
            color:'var(--gray-800)'
        },
        body1: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.REGULAR,
            fontSize: '1rem',
            color:'var(--gray-700)',
        },
        body2: {
            fontFamily: CustomFontFamily,
            fontWeight: Fonts.REGULAR,
            fontSize: '1rem',
            color:'var(--gray-600)'
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
