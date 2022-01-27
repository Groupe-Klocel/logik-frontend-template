
// TO REFACTOR
// TO REFACTOR
// TO REFACTOR

import { AppHead } from '@components';
import { Input, Layout, Select } from 'antd';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';


const StyledPageContent = styled(Layout.Content)`
	margin: 15px 0 ;
	max-height: 75vh;
`
const StyledActionHeader = styled(Layout.Header)`
  background-color: white;
	height:10vh;
  padding: 0 5px;
`
const StyledInputGroup = styled(Input.Group)`
  vertical-align: middle;
`
const StyledSelect = styled(Select)`
 width: 50%;
`

export interface IEquipmentsPageProps { }

export const EquipmentsPage: NextPage<IEquipmentsPageProps> = () => {
	let { t } = useTranslation('common')


	const optionsStatus = [{
		"label": "IN PROGRESS",
		"value": "in-progress"
	}, {
		"label": "CLOSED",
		"value": "closed"
	}]


	return (
		<>
			<AppHead title="Bee V2" />
			<div>EQUIPEMENT PAGE</div>
		</>
	)
}

EquipmentsPage.displayName = 'EquipmentsPage'

export default EquipmentsPage