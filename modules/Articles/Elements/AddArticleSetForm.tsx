import { WrapperForm } from '@components';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { articlesData } from 'fake-data/articles';
import { companiesData } from 'fake-data/companies';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

const { Option } = Select
export interface IAddArticleSetFormProps {

}

export const AddArticleSetForm: FC<IAddArticleSetFormProps> = ({ }: IAddArticleSetFormProps) => {
	let { t } = useTranslation()

	// TYPED SAFE ALL 

	const [newArticleSetData, setNewArticleSetData] = useState('')

	// Call api to create new group 
	const onFinish = (values: any) => {
		console.log('Success:', values);
		setNewArticleSetData(values)
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
					label={t('actions:select-a', { name: 'company' })}
					name="company"
					hasFeedback
					rules={[{ required: true, message: t('messages:please-select', { name: 'company' }) }]}
				>
					<Select placeholder={t('messages:please-select', { name: 'company' })}>
						{companiesData.map((company: any) =>
							<Option key={company.id} value={company.name}>{company.name}</Option>
						)}
					</Select>
				</Form.Item>


				<Form.Item
					label={t('common:name')}
					name="name"
					rules={[{ required: true, message: t('messages:error-message-empty-input') }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label={t('actions:select-a', { name: 'article' })}
					name="select-article"
					hasFeedback
					rules={[{ required: true, message: t('messages:please-select', { name: 'article' }) }]}
				>
					<Select placeholder={t('messages:please-select', { name: 'article' })}>
						{articlesData.map((article: any) =>
							<Option key={article.id} value={article.name}>{article.name}</Option>
						)}
					</Select>
				</Form.Item>

				<Form.Item
					label={t('common:comment')}
					name="comment"
				>
					<Input />
				</Form.Item>

				<Row>
					<Col span={24} style={{ textAlign: 'right' }}>
						<Button type="primary" htmlType="submit">
							{t('actions:submit')}
						</Button>
					</Col>
				</Row>
			</Form>
		</WrapperForm>
	);
}