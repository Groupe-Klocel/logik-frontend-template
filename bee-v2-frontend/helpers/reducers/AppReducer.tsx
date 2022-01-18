// contain an initialState variable and an AppReducer arrow function.
// The initialState variable will be used to store the initial state of the app and
// the arrow function will be used to store the dispatch methods used to modify the state.
import { useRouter } from "next/router"

export const initialState = {
	theme: "dark",
	locale: "fr",
};

// AppReducer has a dispatch method called “switch_theme” which can be called and 
// which change the theme mode in the state by any value dispatched with the method.

export const AppReducer = (state: any, action: { type: any; value: any; }) => {
	switch (action.type) {
		case "switch_theme": {
			return {
				...state,
				theme: action.value,
			};
		}
	}
};