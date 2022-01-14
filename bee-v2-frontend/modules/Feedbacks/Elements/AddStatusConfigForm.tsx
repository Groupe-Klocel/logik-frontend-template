import { FC, useState} from 'react'
import { Form, InputNumber, Checkbox,Button, Select, Row , Col } from 'antd';
import { WrapperForm } from 'components/common/Dumb/Wrappers/Wrappers'
import useTranslation from 'next-translate/useTranslation';
import {groupsData} from 'fake-data/groups'

const {Option} = Select

export interface IAddStatusConfigFormProps {

}

export const AddStatusConfigForm: FC<IAddStatusConfigFormProps> = ({ }: IAddStatusConfigFormProps) => {
	let { t } = useTranslation('common')

	//TODO FETCH GROUP'S NAME
	// TYPED SAFE ALL 

	const [newStatusConfigData, setNewStatusConfigData] = useState('')

	// Call api to create new user 
	const onFinish = (values: any) => {
		console.log('Success:', values);
		setNewStatusConfigData(values)
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
					rules={[{ required: true, message: `${t('error-message-select-1')} ${t('company')}`}]}
				>
					<Select placeholder={`${t('error-message-select-1')} ${t('company')}`}>
						{groupsData.map((group: GroupType) =>
							<Option key={group.id} value={group.name}>{group.name}</Option>
						)}
					</Select>
				</Form.Item>

				<Form.Item
					label={t('select-object-type')}
					name="object-type" 
					hasFeedback
					rules={[{ required: true, message: `${t('error-message-select-1')} ${t('object-type')}`}]}
				>
					<Select placeholder={`${t('error-message-select-1')} ${t('object-type')}`}>
						{groupsData.map((group: GroupType) =>
							<Option key={group.id} value={group.name}>{group.name}</Option>
						)}
					</Select>
				</Form.Item>

				<Form.Item
					label={t('select-status-code')}
					name="status-code" 
					hasFeedback
					rules={[{ required: true, message: `${t('error-message-select-1')} ${t('status-code')}`}]}
				>
					<Select placeholder={`${t('error-message-select-1')} ${t('status-code')}`}>
						{groupsData.map((group: GroupType) =>
							<Option key={group.id} value={group.name}>{group.name}</Option>
						)}
					</Select>
				</Form.Item>

				<Form.Item name="feedback" >
        <Checkbox>{t('feedback')}</Checkbox>
      </Form.Item>

				<Form.Item
					label={t('custom-value')}
					name="custom-value"
				>
					<InputNumber />
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