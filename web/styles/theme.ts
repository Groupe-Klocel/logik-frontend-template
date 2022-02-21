import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
    borderRadius: '4px',
    text: {
        header: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            size: '14px'
        },
        menu: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            size: '16px'
        }
    },
    palette: {
        common: {
            black: '#222831',
            white: '#ffffff'
        },
        primary: {
            main: '#FADB14',
            contrastText: '#262630'
        },
        secondary: {
            main: '#262630',
            contrastText: '#ffffff'
        },
        darker: {
            main: '#000C17',
            contrastText: '#ffffff'
        }
    }
};
