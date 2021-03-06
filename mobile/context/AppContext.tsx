import { stringToBoolean } from '@helpers';
import { cookie } from 'helpers/utils/utils';
import { createCtx } from './create-context';

// init from cookies
const menuInitialState = cookie.get('isSettingMenuCollapsed')
    ? stringToBoolean(cookie.get('isSettingMenuCollapsed'))
    : true;
const themeInitialState = cookie.get('theme') ? cookie.get('theme') : 'light';

const initialState = {
    theme: themeInitialState,
    isSettingMenuCollapsed: menuInitialState,
    isSessionMenuCollapsed: menuInitialState,
    locale: 'fr',
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
            saveUserSettings(state.isSettingMenuCollapsed, state.theme!);
        default:
            return state;
    }
}

const saveUserSettings = (menu: boolean, theme: string) => {
    cookie.set('isSettingMenuCollapsed', menu.toString());
    cookie.set('theme', theme);
};

const [useAppState, useAppDispatch, AppProvider] = createCtx(initialState, reducer);

export { useAppState, useAppDispatch, AppProvider };
