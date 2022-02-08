import { LanguageType } from 'helpers/types/types';
import Cookies from 'js-cookie';
import { isoLangs } from './constant';
import { message } from 'antd';

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


// Set index to each object in an array
function setIndex(array: Array<any>): Array<any> {
	const arrayWithIndex = array.map((object: Object) => (
		{ ...object, index: array.indexOf(object) }
	)
	)
	return arrayWithIndex
}

// add key pair value to each object in an array
function addKeyValueToArrayObject(array: Array<any>, key: string, value: any): Array<any> {
	const newarray = array.map((object: Object) => (
		addKeyValueToObject(object, key, value)
	)
	)
	return newarray
}
// add key pair value to an object 
function addKeyValueToObject(object: Object, key: string, value: any): Object {
	return Object.defineProperty(object, key, {
		value: value,
		writable: true,
		enumerable: true,
		configurable: true
	})
}

function setCustomColumnsProps(columnsToInitialize: any): any {
	let temp = setIndex(columnsToInitialize)
	temp = temp.map((object) => {
		if (object.index === 0 || object.index === 1 || object.index === columnsToInitialize.length - 1 || object.index === columnsToInitialize.length - 2) {
			return addKeyValueToObject(object, "disabled", false)
		} else return addKeyValueToObject(object, "disabled", true)
	})
	const finalColumns = addKeyValueToArrayObject(temp, "fixed", false)
	return finalColumns
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
	switch (cookie.get('theme')) {
		case "dark": return "dark";
		default: return "light";
	}
}

// handle mismatch when menu is open by the user but not set as default and user settings menu is set to true
function getMenuState(isSettingMenuCollapsed: Boolean) {
	let menuState
	if (isSettingMenuCollapsed === false && stringToBoolean(cookie.get('isSettingMenuCollapsed')) === true) {
		menuState = false
	} else if (isSettingMenuCollapsed === true && stringToBoolean(cookie.get('isSettingMenuCollapsed')) === false) {
		menuState = !isSettingMenuCollapsed
	} else {
		menuState = !isSettingMenuCollapsed
	}

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

const showSuccess = (messageText: string) => {
	message.success(messageText);
};

const showInfo = (messageText: string) => {
	message.info(messageText);
};

const showError = (messageText: string) => {
	message.error(messageText);
};

const showWarning = (messageText: string) => {
	message.warning(messageText);
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

// /**
//  * @desc get table data as json
//  * @param data
//  * @param columns
//  */
// const getDataForExport = (data: any[], columns: any[]) => data?.map((record: any) => columns
// 	.reduce((recordToDownload, column) => (
// 		{ ...recordToDownload, [column.Header]: record[column.dataIndex] }
// 	), {}));

// /**
//  * @desc make csv from given data
//  * @param rows
//  * @param filename
//  */
//  const createCsv = async (rows: any[], filename: string) => {
//   const separator: string = ';';
//   const keys: string[] = Object.keys(rows[0]);

// const csvContent = `${keys.join(separator)}\n${
//   rows.map((row) => keys.map((k) => {
//     let cell = row[k] === null || row[k] === undefined ? '' : row[k];

//     cell = cell instanceof Date
//       ? cell.toLocaleString()
//       : cell.toString().replace(/"/g, '""');

//     if (cell.search(/("|,|\n)/g) >= 0) {
//       cell = `"${cell}"`;
//     }
//     return cell;
//   }).join(separator)).join('\n')}`;

// const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//   if (navigator.msSaveBlob) { // In case of IE 10+
//     navigator.msSaveBlob(blob, filename);
//   } else {
//     const link = document.createElement('a');
//     if (link.download !== undefined) {
//       // Browsers that support HTML5 download attribute
//       const url = URL.createObjectURL(blob);
//       link.setAttribute('href', url);
//       link.setAttribute('download', filename);
//       link.style.visibility = 'hidden';
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//   }
// };
const checkKeyPresenceInArray = (key:any,array:any[]) => array.filter((o) => o.hasOwnProperty(key));

export { setCustomColumnsProps, checkKeyPresenceInArray, setIndex, addKeyValueToArrayObject, addKeyValueToObject, showSuccess, showWarning, showInfo, showError, decodeJWT, getMenuState, getDefaultTheme, isCookieSet, stringToBoolean, isServer, isVisible, getLanguageNameFromISOCode, getKeys };

