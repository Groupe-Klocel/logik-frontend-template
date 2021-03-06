import { Form, Input, Checkbox, Select, InputNumber } from 'antd';
import useTranslation from 'next-translate/useTranslation';

const { Option } = Select;

const AddArticleStep3 = () => {
    const { t } = useTranslation();

    // TEXTS TRANSLATION ( REFACTORING POSSIBLE / EXPORT / DON'T KNOW YET )
    const family = t('d:family');
    const subfamily = t('d:subfamily');
    const groupingId = t('d:groupingId');
    const featureTypeId = t('d:featureTypeId');
    const permanentProduct = t('d:permanentProduct');
    const tariffClassification = t('d:tariffClassification');

    // END TEXTS TRANSLATION

    return (
        <>
            <Form.Item label={family} name="family">
                <Input />
            </Form.Item>
            <Form.Item label={subfamily} name="subfamily">
                <Input />
            </Form.Item>
            <Form.Item label={tariffClassification} name="tariffClassification">
                <Input />
            </Form.Item>
            <Form.Item label={groupingId} name="groupingId">
                <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label={featureTypeId} name="featureTypeId">
                <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="permanentProduct" valuePropName="checked" initialValue={false}>
                <Checkbox>{permanentProduct}</Checkbox>
            </Form.Item>
        </>
    );
};

AddArticleStep3.displayName = 'AddArticleStep3';
export { AddArticleStep3 };
