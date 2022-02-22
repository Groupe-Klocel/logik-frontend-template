import { stringToBoolean } from '@helpers';
import { cookie } from 'helpers/utils/utils';
import { createCtx } from './create-context';
import { useRouter } from 'next/router';

// init from cookies
const menuInitialState = cookie.get('isSettingMenuCollapsed')
    ? stringToBoolean(cookie.get('isSettingMenuCollapsed'))
    : true;
const themeInitialState = cookie.get('theme') ? cookie.get('theme') : 'light';

const initialState = {
    theme: themeInitialState,
    isSettingMenuCollapsed: menuInitialState,
    isSessionMenuCollapsed: menuInitialState,
    globalLocale: 'fr',
    finish: false
};

type State = typeof initialState;
type Action = any;

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'SWITCH_THEME':
            return {
                ...state,
                theme: action.theme
            };
        case 'SWITCH_LOCALE':
            return {
                ...state,
                globalLocale: action.globalLocale
            };
        case 'SWITCH_MENU_SESSION':
            return {
                ...state,
                isSessionMenuCollapsed: action.isSessionMenuCollapsed
            };
        case 'SWITCH_MENU_SETTING':
            return {
                ...state,
                isSettingMenuCollapsed: action.isSettingMenuCollapsed,
                isSessionMenuCollapsed: action.isSettingMenuCollapsed
            };
        case 'SAVE_SETTINGS':
            saveUserSettings(state.isSettingMenuCollapsed, state.theme!, state.globalLocale);
        default:
            return state;
    }
}

const saveUserSettings = (menu: boolean, theme: string, locale: string) => {
    cookie.set('isSettingMenuCollapsed', menu.toString());
    cookie.set('theme', theme);
    cookie.set('NEXT_LOCALE', locale);
};

const [useAppState, useAppDispatch, AppProvider] = createCtx(initialState, reducer);

export { useAppState, useAppDispatch, AppProvider };
