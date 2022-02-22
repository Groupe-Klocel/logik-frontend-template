import { LanguageType } from '@helpers';

const isoLangs: Array<LanguageType> = [
    {
        name: 'English',
        code: 'en-US'
    },
    {
        name: 'Français',
        code: 'fr'
    }
];

// PAgination setting
const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_ITEMS_PER_PAGE = 20;

export { isoLangs, DEFAULT_PAGE_NUMBER, DEFAULT_ITEMS_PER_PAGE };

// export const appRoutes: JSON = {
// 	"HOME_PAGE": "/",
// 	"FORGOT_PASSWORD": "/forgot_password",
// }
