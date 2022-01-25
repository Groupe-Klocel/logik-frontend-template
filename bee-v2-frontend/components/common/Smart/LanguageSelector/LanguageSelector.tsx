import { FC } from 'react'
import { Select } from 'antd'
import { LanguageType } from 'helpers/types/types'
import { isoLangs } from 'helpers/utils/constant'
import { useRouter } from "next/router"
import styled from 'styled-components';
import { cookie } from 'helpers/utils/utils';

const { Option } = Select;

const StyledSelect = styled(Select)`
	width: 120px;
	padding: 0px 5px 0px 5px;
`

export interface ILanguageSelectorProps {

}

export const LanguageSelector: FC<ILanguageSelectorProps> = ({ }: ILanguageSelectorProps) => {
	const router = useRouter()
	const { locale } = router

	const changeLanguage = (value: any) => {
		const newLocale: string = value
		cookie.set('NEXT_LOCALE', newLocale)
		router.push(router.asPath, router.asPath, { locale: newLocale })
	}

	return (
		<StyledSelect defaultValue={locale}
		 bordered={false} 
		 onChange={changeLanguage}>
			{isoLangs.map((language: LanguageType) =>
				<Option key={language.code} value={language.code}>{language.name}</Option>
			)}
		</StyledSelect>
	);
}