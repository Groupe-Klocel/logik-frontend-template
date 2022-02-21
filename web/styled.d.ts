// styled.d.ts
import 'styled-components';
interface IPalette {
    main: string;
    contrastText: string;
}
interface IText {
    fontFamily: string;
    fontWeight: number;
    size: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;
        text: {
            header: IText;
            menu: IText;
        };
        palette: {
            common: {
                black: string;
                white: string;
            };
            primary: IPalette;
            secondary: IPalette;
            darker: IPalette;
        };
    }
}
