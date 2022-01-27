import { LanguageType } from 'helpers/types/types';
import Cookies from 'js-cookie';
import { isoLangs } from './constant';

export const cookie = Cookies.withAttributes({ path: '/', secure: true, sameSite: 'strict' })

// description et autre 
function getLanguageNameFromISOCode(ISOCode: string): LanguageType | undefined {
	const languageName: LanguageType | undefined = isoLangs.find(lang => {
		return lang.code === ISOCode
	})
	return languageName
}

// Get an array of keys from array object
function getKeys(data: Array<any>): React.Key[] {
	const keys = data.map(({ key }) => key)
	return keys
}

// Check if value is inside a list 
function isVisible(value: React.Key, list: Array<any>) {
	return list.includes(value);
}

const isServer = () => typeof window === 'undefined';

// need to set Domain for safety 

function stringToBoolean(string: String | undefined) {
	switch (string?.toLowerCase()) {
		case "false": case "no": case "0": case "": return false;
		default: return true;
	}
}

function isCookieSet(cookieName: string) {
	switch (cookie.get(cookieName)) {
		case "undefined": case "": return false;
		default: return true;
	}
}

function getDefaultTheme() {
	switch (cookie.get('darkMode')) {
		case "true": return "dark";
		default: return "light";
	}
}

// handle mismatch when menu is open by the user but not set as default and user settings menu is set to true
function getMenuState(isSettingMenuCollapsed: Boolean) {
	let menuState
	console.log("iscollapse",isSettingMenuCollapsed)
	if (isSettingMenuCollapsed === false && stringToBoolean(cookie.get('isSettingMenuCollapsed')) === true) {
		console.log("CHOICE 1")
		menuState = false
	} else if (isSettingMenuCollapsed === true && stringToBoolean(cookie.get('isSettingMenuCollapsed')) === false) {
		console.log("CHOICE 2")
		menuState = !isSettingMenuCollapsed
	} else {
		console.log("CHOICE 3")
		menuState = !isSettingMenuCollapsed
	}
	console.log("CHOICE",menuState)

	return menuState
}

function decodeJWT(token: String) {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));

	return JSON.parse(jsonPayload);
};

// export const openDrawer = useCallback(
//   (variables) => dispatchDrawer({
//     type: 'OPEN_DRAWER',
//     title: variables.title,
//     cancelButtonTitle: variables.cancelButtonTitle,
//     cancelButton: variables.cancelButton,
//     content: variables.content,
//     onCancel: variables.onCancel,
//   }),
//   [dispatchDrawer]
// )

export { decodeJWT, getMenuState, getDefaultTheme, isCookieSet, stringToBoolean, isServer, isVisible, getLanguageNameFromISOCode, getKeys };

