import { Form, Input, Button, Row, Col, Select } from 'antd';
import { FC } from "react";
import useTranslation from 'next-translate/useTranslation';
import { companiesData } from 'fake-data/companies'

const { Option } = Select

interface IAddArticleStep1Props {

}

const AddArticleStep1: FC<IAddArticleStep1Props> = ({ }: IAddArticleStep1Props) => {
	let { t } = useTranslation()

	// TEXTS TRANSLATION ( REFACTORING POSSIBLE / EXPORT / DON'T KNOW YET )

	const selectCompany = t('common:company')
	const selectCompanyPlaceholder = t('messages:please-select', { name: t('common:company') })
	const status = t('forms:status')
	const errorMessageEmptyInput = t('messages:error-message-empty-input')
	const description = t('common:description')
	const additionalDescription = t('common:additional-description')

	// END TEXTS TRANSLATION

	return (
		<>
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
				label={status}
				name="status"
				rules={[{ required: true, message: errorMessageEmptyInput }]}
			>
				<Input />
			</Form.Item>
		</>
	)

}

AddArticleStep1.displayName = 'AddArticleStep1';

export { AddArticleStep1 };