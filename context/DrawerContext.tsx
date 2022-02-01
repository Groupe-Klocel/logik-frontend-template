import { createCtx } from './create-context';

const initialState = {
	isOpen: false,
	data: null,
	content: null,
	title: "",
	cancelButton:false,
	comfirmButton: true,
	cancelButtonTitle: "",
	comfirmButtonTitle: "",
	onComfirm: undefined,
	onCancel: undefined,
	onClose: undefined,
};

type State = typeof initialState;
type Action = any;
function reducer(state: State, action: Action) {
	switch (action.type) {
		case 'OPEN_DRAWER':
			return {
				...state,
				isOpen: true,
				content: action.content,
				data: action.data,
				title: action.title,
				cancelButton: action.cancelButton,
				comfirmButton: action.comfirmButton,
				cancelButtonTitle: action.cancelButtonTitle,
				comfirmButtonTitle: action.comfirmButtonTitle,
				onComfirm: action.onComfirm,
				onCancel: action.onCancel,
			};
		case 'CLOSE_DRAWER':
			return {
				...state,
				isOpen: false,
				data: null,
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

