import { Form, Input, InputNumber, Checkbox } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export interface IArticlesSearchProps {
    form: any;
}

const ArticlesSearch: FC<IArticlesSearchProps> = ({ form }: IArticlesSearchProps) => {
    const { t } = useTranslation();

    // For multi selection field
    // const companies = [];
    // for (let i = 0; i < 10; i++) {
    //     const value = `${i.toString(36)}${i}`;
    //     companies.push({
    //         value,
    //         disabled: i === 10
    //     });
    // }
    // function handleCompaniesSelect(value: string[]) {
    //     console.log(`selected ${value}`);
    // }

    return (
        <>
            <Form form={form} name="control-hooks">
                {/* <Form.Item name="companyId" label={t('common:company')}>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder={t('actions:select')}
                        onChange={handleCompaniesSelect}
                        options={companies}
                    />
                </Form.Item> */}
                <Form.Item name="name" label={t('common:name')}>
                    <Input />
                </Form.Item>
                <Form.Item name="code" label={t('d:code')}>
                    <Input />
                </Form.Item>
                <Form.Item name="status" label={t('d:status')}>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="length" label={t('d:length')}>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="width" label={t('d:width')}>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="height" label={t('d:height')}>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="baseUnitWeight" label={t('d:baseUnitWeight')}>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="boxWeight" label={t('d:boxWeight')}>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="permanentProduct" valuePropName="checked" initialValue={false}>
                    <Checkbox>{t('d:permanentProduct')}</Checkbox>
                </Form.Item>
            </Form>
        </>
    );
};

ArticlesSearch.displayName = 'ArticlesSearch';

export { ArticlesSearch };
