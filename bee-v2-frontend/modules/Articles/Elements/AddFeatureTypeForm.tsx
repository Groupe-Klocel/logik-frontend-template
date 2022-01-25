import { FC, useState } from 'react'
import { Form, Input, Button, Row, Col, Checkbox } from 'antd';
import { WrapperForm } from 'components/common/Dumb/Wrappers/Wrappers'
import useTranslation from 'next-translate/useTranslation';
import { groupsData } from 'fake-data/groups'

export interface IAddFeatureTypeFormProps {

}

export const AddFeatureTypeForm: FC<IAddFeatureTypeFormProps> = ({ }: IAddFeatureTypeFormProps) => {
	let { t } = useTranslation('common')

	// TYPED SAFE ALL 

	const [newFeatureTypeData, setNewFeatureTypeData] = useState('')

	// Call api to create new group 
	const onFinish = (values: any) => {
		console.log('Success:', values);
		setNewFeatureTypeData(values)
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
					label={t('name')}
					name="name"
					rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
				>
					<Input />
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