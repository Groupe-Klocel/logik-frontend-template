import { Form, Input, Button, Row, Col, Checkbox, Select } from 'antd';
import { FC } from "react";
import useTranslation from 'next-translate/useTranslation';
import { companiesData } from 'fake-data/companies'
import { featureTypesData } from 'fake-data/features'

const { Option } = Select
interface IAddArticleStep2Props {

}

const AddArticleStep2: FC<IAddArticleStep2Props> = () => {
	let { t } = useTranslation()


	// TEXTS TRANSLATION ( REFACTORING POSSIBLE / EXPORT / DON'T KNOW YET )

	const selectCompany = t('common:company')
	const selectCompanyPlaceholder = t('messages:please-select', { name: t('common:company') })
	const status = t('forms:status')
	const errorMessageEmptyInput = t('messages:error-message-empty-input')
	const description = t('common:description')
	const additionalDescription = t('common:additional-description')
	const length = t('common:length')
	const width = t('common:width')
	const height = t('common:height')
	const baseUnitWeight = t('forms:base-unit-weight')
	const baseWeight = t('forms:base-weight')
	const boxQuantity = t('forms:box-quantity')
	const family = t('forms:family')
	const subFamily = t('forms:sub-family')
	const groupingId = t('forms:grouping-id')
	const pieceToBeReplenish = t('forms:piece-to-be-replenish')
	const boxToBeReplenish = t('forms:box-to-be-replenish')
	const selectFeatureType = t('menu:feature-type')
	const selectFeatureTypePlaceholder = t('messages:please-select', { name: t('menu:feature-type') })
	const permanentProduct = t('forms:permanent-product')
	const submit = t('actions:submit')
	const next = t('actions:next')

	// END TEXTS TRANSLATION

	return (
	<>
		<Form.Item
			label={length}
			name="length"
			rules={[{ required: true, message: errorMessageEmptyInput }]}
		>
			<Input type='number' />
		</Form.Item>

		<Form.Item
			label={width}
			name="width"
			rules={[{ required: true, message: errorMessageEmptyInput }]}
		>
			<Input type='number' />
		</Form.Item>

		<Form.Item
			label={height}
			name="height"
			rules={[{ required: true, message: errorMessageEmptyInput }]}
		>
			<Input type='number' />
		</Form.Item>
		<Form.Item
			label={baseUnitWeight}
			name="base-unit-weight"
			rules={[{ required: true, message: errorMessageEmptyInput }]}
		>
			<Input type='number' />
		</Form.Item>

		<Form.Item
			label={baseWeight}
			name="base-weight"
			rules={[{ required: true, message: errorMessageEmptyInput }]}
		>
			<Input type='number' />
		</Form.Item>

		<Form.Item
			label={boxQuantity}
			name="box-quantity"
			rules={[{ required: true, message: errorMessageEmptyInput }]}
		>
			<Input type='number' />
		</Form.Item>

	</>
	)

}

AddArticleStep2.displayName = 'AddArticleStep2';
export { AddArticleStep2 };
