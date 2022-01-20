import { LanguageType, ColumnType } from 'helpers/types/types'
import { isoLangs } from './constant'
import Cookies from 'js-cookie'

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