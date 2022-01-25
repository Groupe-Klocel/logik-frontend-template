import { LanguageType } from 'helpers/types/types'
import Cookies from 'js-cookie'
import { isoLangs } from './constant'

// description et autre 
export function getLanguageNameFromISOCode(ISOCode: string): LanguageType | undefined {
	const languageName: LanguageType | undefined = isoLangs.find(lang => {
		return lang.code === ISOCode
	})
	return languageName
}

// Get an array of keys from array object
export function getKeys(data: Array<any>): React.Key[] {
	const keys = data.map(({ key }) => key)
	return keys
}

// Check if value is inside a list 
export function isVisible(value: React.Key, list: Array<any>) {
	return list.includes(value);
}

export const isServer = () => typeof window === 'undefined';

// set Domain 
export const cookie = Cookies.withAttributes({ path: '/', secure: true, sameSite: 'strict' })

export const stringToBoolean = (string: String | undefined) => {
	switch (string?.toLowerCase()) {
		case "false": case "no": case "0": case "": return false;
		default: return true;
	}
}

export const isCookieSet = (cookieName: string) => {
	switch (cookie.get(cookieName)) {
		case "undefined": case "": return false;
		default: return true;
	}
}

export const getDefaultTheme = () => {
	switch (cookie.get('darkMode')) {
		case "true": return "dark";
		default: return "light";
	}
}

// handle mismatch when menu is open by the user but not set as default and user settings menu is set to true
export const getMenuState = (isMenuCollapsed: Boolean) => {
	let menuState
	if (isMenuCollapsed === false && stringToBoolean(cookie.get('isMenuCollapsed')) === true) {
		menuState = false
	} else if (isMenuCollapsed === true && stringToBoolean(cookie.get('isMenuCollapsed')) === false) {
		menuState = true
	} else {
		menuState = !isMenuCollapsed
	}
	return menuState
}

export const decodeJWT = (token: String) => {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));

	return JSON.parse(jsonPayload);
};