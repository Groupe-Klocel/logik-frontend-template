import { cookie, isoLangs, LanguageType } from '@helpers'
import { Select } from 'antd'
import { useRouter } from "next/router"
import { FC } from 'react'
import styled from 'styled-components'

const { Option } = Select;

const StyledSelect = styled(Select)`
	width: 120px;
	padding: 0px 5px 0px 5px;
`
const LanguageSelector: FC = () => {
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

LanguageSelector.displayName = 'LanguageSelector';

export { LanguageSelector }

