import { FC, useState} from 'react'
import { Form, Input, Button,Row , Col } from 'antd';
import { WrapperForm } from 'components/common/Dumb/Wrappers/Wrappers'
import useTranslation from 'next-translate/useTranslation';
import {groupsData} from 'fake-data/groups'

export interface IAddGroupFormProps {

}

export const AddGroupForm: FC<IAddGroupFormProps> = ({ }: IAddGroupFormProps) => {
	let { t } = useTranslation('common')

	// TYPED SAFE ALL 

	const [newGroupData, setNewGroupData] = useState('')

	// Call api to create new group 
	const onFinish = (values: any) => {
		console.log('Success:', values);
		setNewGroupData(values)
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
					rules={[{ required: true, message: 'Please input a name !' }]}
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