import { createCtx } from './create-context';
import { cookie, stringToBoolean } from 'helpers/utils/utils';

const menuState = cookie.get('isMenuCollapsed') ? stringToBoolean(cookie.get('isMenuCollapsed')) : true
// init from cookies 
const initialState = {
	theme:"light",
	isMenuCollapsed: menuState,
	locale: 'fr',
}

type State = typeof initialState;
type Action = any;
function reducer(state: State, action: Action) {
	switch (action.type) {
		case 'SWITCH_THEME':
			return {
				...state,
				theme: action.theme,
			};
		case 'SWITCH_MENU':
			return {
				...state,
				isMenuCollapsed: action.isMenuCollapsed,
			};
		default:
			return state;
	}
}
const [useAppState, useAppDispatch, AppProvider] = createCtx(
	initialState,
	reducer
);

export { useAppState, useAppDispatch, AppProvider };

