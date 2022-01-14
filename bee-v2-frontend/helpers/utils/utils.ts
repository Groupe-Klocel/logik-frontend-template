import { LanguageType, ColumnType } from 'helpers/types/types'
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
export function isVisible(value: React.Key , list: Array<any>) {
	return list.includes(value);
}