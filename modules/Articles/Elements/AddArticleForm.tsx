import { FC, useState } from 'react'
import { Form, Input, Button, Row, Col, Checkbox, Select } from 'antd';
import { WrapperForm } from '@components'
import useTranslation from 'next-translate/useTranslation';
import { companiesData } from 'fake-data/companies'
import { featureTypesData } from 'fake-data/features'

const { Option } = Select

export interface IAddArticleFormProps {

}

export const AddArticleForm: FC<IAddArticleFormProps> = ({ }: IAddArticleFormProps) => {
	let { t } = useTranslation()


	// TEXTS TRANSLATION ( REFACTORING POSSIBLE / EXPORT / DON'T KNOW YET )

	const selectCompany =  t('common:company')
	const selectCompanyPlaceholder = t('messages:please-select',{ name: t('common:company') })
	const reference = t('forms:reference')
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
	const selectFeatureType =  t('menu:feature-type')
	const selectFeatureTypePlaceholder = t('messages:please-select', {name: t('menu:feature-type')})
	const permanentProduct = t('forms:permanent-product')
	const submit = t('actions:submit')

	// END TEXTS TRANSLATION

	// TYPED SAFE ALL 
	const [newArticleData, setNewArticleData] = useState('')

	// Call api to create new group 
	const onFinish = (values: any) => {
		console.log('Success:', values);
		setNewArticleData(values)
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<WrapperForm>
			<Form
				name="basic"
				layout="vertical"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				scrollToFirstError

			>
				<Form.Item
					label={selectCompany}
					name="company"
					hasFeedback
				// rules={[{ required: true, message: `${t('error-message-select-1')} ${t('company')}`}]}
				>
					<Select placeholder={selectCompanyPlaceholder}>
						{companiesData.map((company: any) =>
							<Option key={company.id} value={company.name}>{company.name}</Option>
						)}
					</Select>
				</Form.Item>

				<Form.Item
					label={reference}
					name="reference"
					rules={[{ required: true, message: errorMessageEmptyInput }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label={description}
					name="description"
					rules={[{ required: true, message: errorMessageEmptyInput }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label={additionalDescription}
					name="additional-description"
				>
					<Input />
				</Form.Item>


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


				<Row>
					<Col span={24} style={{ textAlign: 'right' }}>
						<Button type="primary" htmlType="submit">
							{submit}
						</Button>
					</Col>
				</Row>
			</Form>
		</WrapperForm>
	);
}