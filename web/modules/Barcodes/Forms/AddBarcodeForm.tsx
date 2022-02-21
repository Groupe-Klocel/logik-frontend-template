import { WrapperForm } from '@components';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { articlesData } from 'fake-data/articles';
import { companiesData } from 'fake-data/companies';
import { featureTypesData } from 'fake-data/features';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

const { Option } = Select
export interface IAddBarcodeFormProps {

}

export const AddBarcodeForm: FC<IAddBarcodeFormProps> = ({ }: IAddBarcodeFormProps) => {
	let { t } = useTranslation('common')

	// TYPED SAFE ALL 

	const [newBarcodeData, setNewBarcodeData] = useState('')

	// Call api to create new group 
	const onFinish = (values: any) => {
		console.log('Success:', values);
		setNewBarcodeData(values)
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
					label={t('select-company')}
					name="company"
					hasFeedback
					rules={[{ required: true, message: `${t('error-message-select-1')} ${t('company')}` }]}
				>
					<Select placeholder={`${t('error-message-select-1')} ${t('company')}`}>
						{companiesData.map((company: any) =>
							<Option key={company.id} value={company.name}>{company.name}</Option>
						)}
					</Select>
				</Form.Item>

				<Form.Item
					label={t('select-article')}
					name="select-article"
					hasFeedback
					rules={[{ required: true, message: `${t('error-message-select-1')} ${t('article')}` }]}
				>
					<Select placeholder={`${t('error-message-select-1')} ${t('article')}`}>
						{articlesData.map((article: any) =>
							<Option key={article.id} value={article.name}>{article.name}</Option>
						)}
					</Select>
				</Form.Item>

				<Form.Item
					label={t('barcode')}
					name="barcode"
					rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label={t('supplier')}
					name="supplier"
				>
					<Input />
				</Form.Item>

				<Form.Item
					label={t('supplier-article-code')}
					name="supplier-article-code"
				>
					<Input />
				</Form.Item>


				<Form.Item
					label={t('quantity')}
					name="quantity"
				>
					<Input type='number' />
				</Form.Item>

				<Form.Item
					label={t('select-rotation')}
					name="select-rotation"
					hasFeedback
				>
					<Select placeholder={`${t('error-message-select-1')} ${t('rotation')}`}>
						{featureTypesData.map((feature: any) =>
							<Option key={feature.id} value={feature.name}>{feature.name}</Option>
						)}
					</Select>
				</Form.Item>

				<Form.Item
					label={t('select-preparation-mode')}
					name="select-preparation-mode"
					hasFeedback
				>
					<Select placeholder={`${t('error-message-select-1')} ${t('preparation-mode')}`}>
						{featureTypesData.map((feature: any) =>
							<Option key={feature.id} value={feature.name}>{feature.name}</Option>
						)}
					</Select>
				</Form.Item>


				<Row>
					<Col span={24} style={{ textAlign: 'right' }}>
						<Button type="primary" htmlType="submit">
							{t('submit')}
						</Button>
					</Col>
				</Row>
			</Form>
		</WrapperForm>
	);
}