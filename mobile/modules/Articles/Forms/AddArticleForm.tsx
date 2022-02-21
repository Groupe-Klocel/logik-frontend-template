import { FC, useState } from 'react'
import { Form, Input, Button, Space } from "antd";
import { WrapperForm, StepsPanel, WrapperStepContent  } from '@components'
import { AddArticleStep1 } from './Steps/AddArticleStep1';
import { AddArticleStep2 } from './Steps/AddArticleStep2';
import { AddArticleStep3 } from './Steps/AddArticleStep3';
import useTranslation from 'next-translate/useTranslation';

const { Item } = Form;

export interface IAddArticleFormProps {

}


export const AddArticleForm: FC<IAddArticleFormProps> = ({ }: IAddArticleFormProps) => {
	let { t } = useTranslation()

	// TYPED SAFE ALL 
	const [current, setCurrent] = useState(0);
	const [form] = Form.useForm();

	const handleClickNext = () => {
		form
			.validateFields()
			.then(() => {
				// Here make api call of something else
				setCurrent(current + 1);
			})
			.catch((err) => console.log(err));
	};

	const handleClickBack = () => {
		setCurrent(current - 1);
	};

	const handleSubmit = () => {
		form
			.validateFields()
			.then(() => {
				// Here make api call of something else
				console.log(form.getFieldsValue(true))
				alert(JSON.stringify(form.getFieldsValue(true), null, 4));
			})
			.catch((err) => console.log(err));
	};

	const steps = [
		{
			title: 'Info',
			key: 0,
			content: 'First-content',
		},
		{
			title: 'Info 2',
			key: 1,
			content: 'First-content',
		},
		{
			title: 'Other',
			key: 2,
			content: 'First-content',
		},
	];

	return (
		<WrapperForm>
			<StepsPanel currentStep={current} steps={steps} />
			<WrapperStepContent>
				<Form form={form}>
					{current === 0 && (
						<AddArticleStep1 />
					)}

					{current === 1 && (
						<AddArticleStep2 />
					)}

					{current === 2 && (
						<AddArticleStep3 />
					)}
				</Form>
			</WrapperStepContent>

			{current === 0 ? (
				<div style={{ textAlign: "center" }}>
					<Button onClick={handleClickNext}>Next step</Button>
				</div>
			) : (current > 0 && current < steps.length - 1 ? (
				<div style={{ textAlign: "center" }}>
					<Space>
						<Button onClick={handleClickBack}>Back step</Button>
						<Button onClick={handleClickNext}>Next step</Button>
					</Space>
				</div>
			) : (
				<div style={{ textAlign: "center" }}>
						<Space>
							<Button onClick={handleClickBack}>Back step</Button>
							<Button onClick={handleSubmit}>Submit</Button>
					</Space>
				</div>
			)
			)
			}
		</WrapperForm>
	);
}