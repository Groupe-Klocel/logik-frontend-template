import { createCtx } from './create-context';

const initialState = {
	isOpen: false,
	drawerComponent: null,
	data: null,
	title: "",
	placement: "right",
	cancelButton: false,
	comfirmButton: true,
	cancelButtonTitle: "",
	comfirmButtonTitle: ""
};

type State = typeof initialState;
type Action = any;
function reducer(state: State, action: Action) {

	switch (action.type) {
		case 'OPEN_DRAWER':
			return {
				...state,
				isOpen: true,
				drawerComponent: action.drawerComponent,
				data: action.data,
				title: action.title,
				cancelButton: action.cancelButton,
				comfirmButton: action.comfirmButton,
				cancelButtonTitle: action.cancelButtonTitle,
				comfirmButtonTitle: action.comfirmButtonTitle
			};
		case 'CLOSE_DRAWER':
			return {
				...state,
				isOpen: false,
				drawerComponent: null,
				data: null,
			};
		case 'ON_CANCEL':
			return {
				...state,
				isOpen: false,
				drawerComponent: null,
				data: null,
			};
		case 'ON_COMFIRM':
			return {
				...state,
				isOpen: false,
				drawerComponent: null,
				data: action.data,
			};
		default:
			return state;
	}
}
const [useDrawerState, useDrawerDispatch, DrawerProvider] = createCtx(
	initialState,
	reducer
);

export { useDrawerState, useDrawerDispatch, DrawerProvider };

