import { Form, Input, Select, InputNumber } from 'antd';
import useTranslation from 'next-translate/useTranslation';

const { Option } = Select;

const AddArticleStep1 = () => {
    const { t } = useTranslation();

    // TEXTS TRANSLATION ( REFACTORING POSSIBLE / EXPORT / DON'T KNOW YET )

    // const selectCompany = t('common:company');
    // const selectCompanyPlaceholder = t('messages:please-select', { name: t('d:company') });

    const status = t('d:status');
    const name = t('common:name');
    const supplierName = t('d:supplierName');
    const code = t('d:code');
    const stockOwnerId = t('d:stockOwnerId');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');
    const additionalDescription = t('d:additionalDescription');

    // END TEXTS TRANSLATION

    return (
        <>
            {/* <Form.Item
                label={selectCompany}
                name="company"
                hasFeedback
            // rules={[{ required: true, message: `${t('error-message-select-1')} ${t('company')}`}]}
            >
                <Select placeholder={selectCompanyPlaceholder}>
                    {companiesData.map((company: any) => (
                        <Option key={company.id} value={company.name}>
                            {company.name}
                        </Option>
                    ))}
                </Select>
            </Form.Item> */}

            <Form.Item
                label={name}
                name="name"
                rules={[{ required: true, message: errorMessageEmptyInput }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label={additionalDescription} name="additionalDescription">
                <Input.TextArea />
            </Form.Item>

            <Form.Item label={supplierName} name="supplierName">
                <Input />
            </Form.Item>

            <Form.Item
                label={status}
                name="status"
                rules={[{ required: true, message: errorMessageEmptyInput }]}
            >
                <InputNumber style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                label={code}
                name="code"
                rules={[{ required: true, message: errorMessageEmptyInput }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label={stockOwnerId}
                name="stockOwnerId"
                rules={[{ required: true, message: errorMessageEmptyInput }]}
            >
                <Input />
            </Form.Item>
        </>
    );
};

AddArticleStep1.displayName = 'AddArticleStep1';

export { AddArticleStep1 };
