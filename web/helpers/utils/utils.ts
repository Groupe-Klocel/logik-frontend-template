import { LanguageType } from '@helpers';
import Cookies from 'js-cookie';
import { isoLangs } from './constant';
import { message } from 'antd';

export const cookie = Cookies.withAttributes({ path: '/', secure: true, sameSite: 'strict' });

// description et autre
function getLanguageNameFromISOCode(ISOCode: string): LanguageType | undefined {
    const languageName: LanguageType | undefined = isoLangs.find((lang) => {
        return lang.code === ISOCode;
    });
    return languageName;
}

// Get an array of keys from array object
function getKeys(data: Array<any>): React.Key[] {
    const keys = data.map(({ key }) => key);
    return keys;
}

function orderBooleanFormater(order: string) {
    if (order === 'ascend') {
        return true;
    } else if (order === 'descend') {
        return false;
    } else return order;
}

// Purge sort array/object
function purgeSorter(data: Array<any> | any): Array<any> | null {
    let newSorter;
    if (!Array.isArray(data)) {
        if (data.order === undefined) {
            return null;
        } else {
            newSorter = [data];
        }
    } else {
        newSorter = data;
    }

    newSorter = newSorter.map((value) => ({
        field: value.field,
        ascending: orderBooleanFormater(value.order)
    }));
    return newSorter;
}

const orberByFormater = (sorter: any) => {
    let newSorter = purgeSorter(sorter);
    return newSorter;
};

// Set index to each object in an array
function setIndex(array: Array<any>): Array<any> {
    const arrayWithIndex = array.map((object: Object) => ({
        ...object,
        index: array.indexOf(object)
    }));
    return arrayWithIndex;
}

// add key pair value to each object in an array
function addKeyValueToArrayObject(array: Array<any>, key: string, value: any): Array<any> {
    const newarray = array.map((object: Object) => addKeyValueToObject(object, key, value));
    return newarray;
}

// add key pair value to an object
function addKeyValueToObject(object: Object, key: string, value: any): Object {
    return Object.defineProperty(object, key, {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
    });
}

// First if statement disable fixed columns except the 2 first and last columns
function setCustomColumnsProps(columnsToInitialize: any): any {
    let temp = setIndex(columnsToInitialize);
    temp = temp.map((object) => {
        if (
            object.index === 0 ||
            object.index === 1 ||
            object.index === columnsToInitialize.length - 1 ||
            object.index === columnsToInitialize.length - 2
        ) {
            return addKeyValueToObject(object, 'disabled', false);
        } else return addKeyValueToObject(object, 'disabled', true);
    });
    const finalColumns = addKeyValueToArrayObject(temp, 'fixed', false);
    return finalColumns;
}

// Check if value is inside a list
function isVisible(value: React.Key, list: Array<any>) {
    return list.includes(value);
}

// need to set Domain for safety

function stringToBoolean(string: String | undefined) {
    switch (string?.toLowerCase()) {
        case 'false':
        case 'no':
        case '0':
        case '':
            return false;
        default:
            return true;
    }
}

function isCookieSet(cookieName: string) {
    switch (cookie.get(cookieName)) {
        case 'undefined':
        case '':
            return false;
        default:
            return true;
    }
}

function getDefaultTheme() {
    switch (cookie.get('theme')) {
        case 'dark':
            return 'dark';
        default:
            return 'light';
    }
}

// handle mismatch when menu is open by the user but not set as default and user settings menu is set to true
function getMenuState(isSettingMenuCollapsed: Boolean) {
    let menuState;
    if (
        isSettingMenuCollapsed === false &&
        stringToBoolean(cookie.get('isSettingMenuCollapsed')) === true
    ) {
        menuState = false;
    } else if (
        isSettingMenuCollapsed === true &&
        stringToBoolean(cookie.get('isSettingMenuCollapsed')) === false
    ) {
        menuState = !isSettingMenuCollapsed;
    } else {
        menuState = !isSettingMenuCollapsed;
    }

    return menuState;
}

function isEmpty(object: Object) {
    for (const property in object) {
        return false;
    }
    return true;
}

function decodeJWT(token: String) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
    );

    return JSON.parse(jsonPayload);
}

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

const pathParams = (pathname: string, id: string) => {
    return { pathname: pathname, query: { id: id } };
};

const checkKeyPresenceInArray = (key: any, array: any[]) =>
    array.filter((o) => o.hasOwnProperty(key));

const checkValuePresenceInArray = (value: any, array: any[]) =>
    array.some((obj) => obj.field === value);

export {
    isEmpty,
    orberByFormater,
    purgeSorter,
    checkValuePresenceInArray,
    pathParams,
    setCustomColumnsProps,
    checkKeyPresenceInArray,
    setIndex,
    addKeyValueToArrayObject,
    addKeyValueToObject,
    showSuccess,
    showWarning,
    showInfo,
    showError,
    decodeJWT,
    getMenuState,
    getDefaultTheme,
    isCookieSet,
    stringToBoolean,
    isVisible,
    getLanguageNameFromISOCode,
    getKeys
};
