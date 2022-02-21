import { Form, Input, Checkbox, Select } from 'antd';
import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';

const { Option } = Select;
interface IAddArticleStep3Props {}

const AddArticleStep3: FC<IAddArticleStep3Props> = () => {
    let { t } = useTranslation();

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
                <Input type="number" />
            </Form.Item>
            <Form.Item label={featureTypeId} name="featureTypeId">
                <Input type="number" />
            </Form.Item>
            <Form.Item name="permanentProduct">
                <Checkbox>{permanentProduct}</Checkbox>
            </Form.Item>
        </>
    );
};

AddArticleStep3.displayName = 'AddArticleStep3';
export { AddArticleStep3 };
