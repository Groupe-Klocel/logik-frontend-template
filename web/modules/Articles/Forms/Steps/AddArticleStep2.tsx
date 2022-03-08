import { Form, Input, InputNumber, Row, Col, Checkbox } from 'antd';
import useTranslation from 'next-translate/useTranslation';

const AddArticleStep2 = () => {
    const { t } = useTranslation();

    // TEXTS TRANSLATION ( REFACTORING POSSIBLE / EXPORT / DON'T KNOW YET )

    const errorMessageEmptyInput = t('messages:error-message-empty-input');
    const length = t('d:length');
    const width = t('d:width');
    const height = t('d:height');
    const baseUnitWeight = t('d:baseUnitWeight');
    const boxWeight = t('d:boxWeight');
    const boxQuantity = t('d:boxQuantity');

    const baseUnitPicking = t('d:baseUnitPicking');
    const boxPicking = t('d:boxPicking');
    const cubingType = t('d:cubingType');
    const baseUnitPrice = t('d:baseUnitPrice');
    const baseUnitRotation = t('d:baseUnitRotation');
    const boxRotation = t('d:boxRotation');

    // END TEXTS TRANSLATION

    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} xl={12}>
                <Form.Item
                    label={length}
                    name="length"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <InputNumber style={{ width: '100%' }} precision={2} />
                </Form.Item>

                <Form.Item
                    label={width}
                    name="width"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <InputNumber style={{ width: '100%' }} precision={2} />
                </Form.Item>

                <Form.Item
                    label={height}
                    name="height"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <InputNumber style={{ width: '100%' }} precision={2} />
                </Form.Item>
                <Form.Item
                    label={baseUnitWeight}
                    name="baseUnitWeight"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <InputNumber style={{ width: '100%' }} precision={2} />
                </Form.Item>

                <Form.Item
                    label={boxWeight}
                    name="boxWeight"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <InputNumber style={{ width: '100%' }} precision={2} />
                </Form.Item>

                <Form.Item
                    label={boxQuantity}
                    name="boxQuantity"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
            </Col>
            <Col xs={24} xl={12}>
                <Form.Item name="boxPicking" valuePropName="checked" initialValue={false}>
                    <Checkbox>{boxPicking}</Checkbox>
                </Form.Item>

                <Form.Item name="baseUnitPicking" valuePropName="checked" initialValue={false}>
                    <Checkbox>{baseUnitPicking}</Checkbox>
                </Form.Item>

                <Form.Item
                    label={cubingType}
                    name="cubingType"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item label={baseUnitPrice} name="baseUnitPrice">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item label={baseUnitRotation} name="baseUnitRotation">
                    <Input />
                </Form.Item>

                <Form.Item label={boxRotation} name="boxRotation">
                    <Input />
                </Form.Item>
            </Col>
        </Row>
    );
};

AddArticleStep2.displayName = 'AddArticleStep2';

export { AddArticleStep2 };
