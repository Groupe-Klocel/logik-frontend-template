import { stringToBoolean, cookie } from '@helpers';
import { PermissionType } from 'generated/graphql';
import { createCtx } from './create-context';

// init from cookies
const menuInitialState = cookie.get('isSettingMenuCollapsed')
    ? stringToBoolean(cookie.get('isSettingMenuCollapsed'))
    : true;
const themeInitialState = cookie.get('theme') ? cookie.get('theme') : 'light';

const userInfoStr = cookie.get('user') !== undefined ? cookie.get('user') : '{}';
const userInitData = JSON.parse(userInfoStr!);

type State  = {
    theme: string | undefined,
    isSettingMenuCollapsed: boolean,
    isSessionMenuCollapsed: boolean,
    globalLocale: string,
    finish: boolean,
    user: any,
    permissions: Array<PermissionType> | undefined
};

const initialState: State = {
    theme: themeInitialState,
    isSettingMenuCollapsed: menuInitialState,
    isSessionMenuCollapsed: menuInitialState,
    globalLocale: 'fr',
    finish: false,
    user: userInitData,
    permissions: undefined
};

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
            return {
                ...state
            };
        case 'SET_USER_INFO': {
            saveUserInfo(action.user);
            const userWithoutRole = JSON.parse(JSON.stringify(action.user));
            delete userWithoutRole['role'];
            return {
                ...state,
                user: userWithoutRole,
                permissions: action.user.role?.permissions
            };
        }
        default:
            return state;
    }
}

const saveUserSettings = (menu: boolean, theme: string, locale: string) => {
    cookie.set('isSettingMenuCollapsed', menu.toString());
    cookie.set('theme', theme);
    cookie.set('NEXT_LOCALE', locale);
};

const saveUserInfo = (user: any) => {
    const tmpUser = JSON.parse(JSON.stringify(user));
    delete tmpUser['role'];
    cookie.set('user', JSON.stringify(tmpUser));
};

const [useAppState, useAppDispatch, AppProvider] = createCtx(initialState, reducer);

export { useAppState, useAppDispatch, AppProvider };
