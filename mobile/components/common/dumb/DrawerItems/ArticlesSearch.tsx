import { Button, Form, Input, Select, Space } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export interface IArticlesSearchProps {
	form: any
}

const ArticlesSearch: FC<IArticlesSearchProps> = ({ form }: IArticlesSearchProps) => {
	let { t } = useTranslation()

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


	const onReset = () => {
		form.resetFields();
	};

	function handleCompaniesSelect(value: string[]) {
		alert(`selected ${value}`);
	}

	function handleStatusSelect(value: string[]) {
		alert(`selected ${value}`);
	}

	return (
		<>
			<Form {...layout} form={form} name="control-hooks">
				<Form.Item {...tailLayout}>
					<Space>
						<Button htmlType="button" onClick={onReset}>
							Reset
						</Button>
					</Space>
				</Form.Item>
				<Form.Item name="companyId" label={t('common:company')} >
					<Select
						mode="multiple"
						allowClear
						style={{ width: '100%' }}
						placeholder={t('actions:select')}
						onChange={handleCompaniesSelect}
						options={companies}
					/>

				</Form.Item>
				<Form.Item name="name" label={t('d:name')} >
					<Input />
				</Form.Item>
				<Form.Item name="additionalDescription" label={t('common:additionalDescription')} >
					<Input />
				</Form.Item>
				<Form.Item name="code" label={t('d:code')} >
					<Input />
				</Form.Item>
				<Form.Item name="status" label={t('d:status')} >
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

ArticlesSearch.displayName = "ArticlesSearch"

export { ArticlesSearch };
