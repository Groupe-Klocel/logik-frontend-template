import { Form, Input, Button, Row, Col, Checkbox, Select } from 'antd';
import { FC } from "react";
import useTranslation from 'next-translate/useTranslation';
import { companiesData } from 'fake-data/companies'
import { featureTypesData } from 'fake-data/features'

const { Option } = Select
interface IAddArticleStep3Props {

}

const AddArticleStep3: FC<IAddArticleStep3Props> = () => {
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
						label={family}
						name="family"
					>
						<Input />
					</Form.Item>

					<Form.Item
						label={subFamily}
						name="subfamily"
					>
						<Input />
					</Form.Item>
					<Form.Item
						label={groupingId}
						name="grouping-id"
					>
						<Input />
					</Form.Item>

					<Form.Item name="piece-to-be-replenish" >
						<Checkbox>{pieceToBeReplenish}</Checkbox>
					</Form.Item>

					<Form.Item name="box-to-be-replenish" >
						<Checkbox>{boxToBeReplenish}</Checkbox>
					</Form.Item>

					<Form.Item
						label={selectFeatureType}
						name="select-feature-type"
						hasFeedback
					// rules={[{ required: true, message: `${t('error-message-select-1')} ${t('company')}`}]}
					>
						<Select placeholder={selectFeatureTypePlaceholder}>
							{featureTypesData.map((feature: any) =>
								<Option key={feature.id} value={feature.name}>{feature.name}</Option>
							)}
						</Select>
					</Form.Item>
							
					<Form.Item name="permanent-product" >
						<Checkbox>{permanentProduct}</Checkbox>
					</Form.Item>
	</>
	)

}

AddArticleStep3.displayName = 'AddArticleStep3';
export { AddArticleStep3 };
