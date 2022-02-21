import { cookie, isoLangs, LanguageType } from '@helpers'
import { Select } from 'antd'
import { useRouter } from "next/router"
import { FC , useCallback} from 'react'
import { useAppDispatch, useAppState } from 'context/AppContext';
import styled from 'styled-components'

const { Option } = Select;

const StyledSelect = styled(Select)`
	width: 120px;
	padding: 0px 5px 0px 5px;
`
const LanguageSelector: FC = () => {
	const router = useRouter()
	const { locale } = router

	const { globalLocale } = useAppState()

	const dispatchLocale = useAppDispatch()

	const changeLanguage = (value: any) => {
		const newLocale: string = value
		selectLocaleSetting(newLocale)
		router.push(router.asPath, router.asPath, { locale: newLocale })
	}

	const selectLocaleSetting = useCallback(
		(newLocale) => dispatchLocale({
			type: 'SWITCH_LOCALE',
			globalLocale: newLocale
		}),
		[dispatchLocale, globalLocale]
	)

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

