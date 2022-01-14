import useTranslation from 'next-translate/useTranslation';
import { FC, useState, useEffect, Key } from 'react'
import { Form, Input, Button, Select, Space } from 'antd';

export interface IArticlesSearchProps {
	onSearch: Function
}

export const ArticlesSearch: FC<IArticlesSearchProps> = ({ onSearch }: IArticlesSearchProps) => {
	let { t } = useTranslation()

	const [form] = Form.useForm();

	const companies = [];
	const status = [];
	for (let i = 0; i < 10; i++) {
		const value = `${i.toString(36)}${i}`;
		companies.push({
			value,
			disabled: i === 10,
		});
	}
	for (let i = 0; i < 10; i++) {
		const value = `${i.toString(36)}${i}`;
		status.push({
			value,
			disabled: i === 10,
		});
	}

	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	};

	const tailLayout = {
		wrapperCol: { offset: 8, span: 16 },
	};


	const onFinish = (values: any) => {
		console.log("searchValue", values);
		onSearch(values)
	};

	const onReset = () => {
		form.resetFields();
	};

	function handleCompaniesSelect(value: string[]) {
		console.log(`selected ${value}`);
	}

	function handleStatusSelect(value: string[]) {
		console.log(`selected ${value}`);
	}

	return (
		<>
			<Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
				<Form.Item {...tailLayout}>
					<Space>
						<Button htmlType="button" onClick={onReset}>
							Reset
						</Button>
					</Space>
				</Form.Item>
				<Form.Item name="company" label={t('common:company')} >
					<Select
						mode="multiple"
						allowClear
						style={{ width: '100%' }}
						placeholder={t('actions:select')}
						onChange={handleCompaniesSelect}
						options={companies}
					/>

				</Form.Item>
				<Form.Item name="reference" label={t('forms:reference')} >
					<Input />
				</Form.Item>
				<Form.Item name="description" label={t('common:description')} >
					<Input />
				</Form.Item>
				<Form.Item name="supplier" label={t('forms:supplier')} >
					<Input />
				</Form.Item>
				<Form.Item name="supplier-articles" label={t('forms:supplier-article')} >
					<Input />
				</Form.Item>

				<Form.Item name="status" label={t('common:status')} >
					<Select
						mode="multiple"
						allowClear
						style={{ width: '100%' }}
						placeholder={t('actions:select')}
						onChange={handleStatusSelect}
						options={status}
					/>
				</Form.Item>
			</Form>
		</>
	);
}