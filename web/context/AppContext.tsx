import { stringToBoolean, cookie } from '@helpers';
import { createCtx } from './create-context';

// init from cookies
const menuInitialState = cookie.get('isSettingMenuCollapsed')
    ? stringToBoolean(cookie.get('isSettingMenuCollapsed'))
    : true;
const themeInitialState = cookie.get('theme') ? cookie.get('theme') : 'light';

const userInfoStr = cookie.get('user') !== undefined ? cookie.get('user') : '{}';
const userInitData = JSON.parse(userInfoStr!);
// const permissions = userInitData.role?.permissions;
const permissionsStr = cookie.get('permissions') !== undefined ? cookie.get('permissions') : '[]';
const permissions = JSON.parse(permissionsStr!);

const initialState = {
    theme: themeInitialState,
    isSettingMenuCollapsed: menuInitialState,
    isSessionMenuCollapsed: menuInitialState,
    globalLocale: 'fr',
    finish: false,
    user: userInitData,
    permissions: permissions
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
    console.log('tmpuser',tmpUser)
    cookie.set('user', JSON.stringify(tmpUser));
    cookie.set('permissions', JSON.stringify(user.role?.permissions))
};

const [useAppState, useAppDispatch, AppProvider] = createCtx(initialState, reducer);

export { useAppState, useAppDispatch, AppProvider };
