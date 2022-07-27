import { LanguageType } from '@helpers';
import Cookies from 'js-cookie';
import { isoLangs } from './constant';
import { message } from 'antd';
import { stringify } from 'querystring';

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
            if (Array.isArray(data.field)) {
                data.field=data.field.slice(-1)[0] }
            newSorter = [data];
        }
    } else {   
        data.map(e => (Array.isArray(e.field) ? e.field=e.field.slice(-1)[0] : e.field));
        newSorter = data;
    }

    newSorter = newSorter.map((value) => ({
        field: value.field,
        ascending: orderBooleanFormater(value.order)
    }));
    return newSorter;
}

const orderByFormater = (sorter: any) => {
    const newSorter = purgeSorter(sorter);
    return newSorter;
};

// Set index to each object in an array
function setIndex(array: Array<any>): Array<any> {
    const arrayWithIndex = array.map((object: any) => ({
        ...object,
        index: array.indexOf(object)
    }));
    return arrayWithIndex;
}

// add key pair value to each object in an array
function addKeyValueToArrayObject(array: Array<any>, key: string, value: any): Array<any> {
    const newarray = array.map((object: any) => addKeyValueToObject(object, key, value));
    return newarray;
}

// add key pair value to an object
function addKeyValueToObject(object: any, key: string, value: any): any {
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

function stringToBoolean(string: string | undefined) {
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
function getMenuState(isSettingMenuCollapsed: boolean) {
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

function isEmpty(object: any) {
    for (const property in object) {
        return false;
    }
    return true;
}

function formatDigits(x: number) {
    return x.toFixed(2);
}

function isFloat(value: any) {
    if (typeof value === 'number' && !Number.isNaN(value) && !Number.isInteger(value)) {
        return true;
    }

    return false;
}

function isNumeric(num: any) {
    return !isNaN(num);
}

function formatDigitsForData(data: any) {
    return data.map((object: any) => {
        Object.keys(object).map((key) => {
            if (isFloat(object[key])) {
                object[key] = formatDigits(object[key]);
            }
        });
    });
}

function decodeJWT(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
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
    isNumeric,
    formatDigitsForData,
    isFloat,
    formatDigits,
    isEmpty,
    orderByFormater,
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
