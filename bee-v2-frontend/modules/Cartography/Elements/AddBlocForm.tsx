import { FC, useState} from 'react'
import { Form, Input, Button,Row , Col, Checkbox } from 'antd';
import { WrapperForm } from 'components/common/Dumb/Wrappers/Wrappers'
import useTranslation from 'next-translate/useTranslation';
import {groupsData} from 'fake-data/groups'

export interface IAddBlocFormProps {

}

export const AddBlocForm: FC<IAddBlocFormProps> = ({ }: IAddBlocFormProps) => {
	let { t } = useTranslation('common')

	// TYPED SAFE ALL 

	const [newBlocData, setNewBlocData] = useState('')

	// Call api to create new group 
	const onFinish = (values: any) => {
		console.log('Success:', values);
		setNewBlocData(values)
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

				<Form.Item name="moveable" >
        <Checkbox>{t('moveable')}</Checkbox>
      </Form.Item>

				<Form.Item name="masse" >
        <Checkbox>{t('masse')}</Checkbox>
      </Form.Item>
			
			<Form.Item
					label={t('comment')}
					name="comment"
					rules={[{ required: true, message: 'Please enter a comment !' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label={t('wharehouse-code')}
					name="wharehouse-code"
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