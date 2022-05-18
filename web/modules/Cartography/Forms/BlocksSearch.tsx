import { Form, Input, InputNumber, Checkbox } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export type BlocksSearchTypeProps = {
    form: any;
};

const BlocksSearch: FC<BlocksSearchTypeProps> = ({ form }: BlocksSearchTypeProps) => {
    const { t } = useTranslation();

    return (
        <>
            <Form form={form} name="control-hooks">
                <Form.Item name="name" label={t('common:name')}>
                    <Input />
                </Form.Item>
                <Form.Item name="level" label={t('d:level')}>
                    <Input />
                </Form.Item>
                <Form.Item name="moveable" valuePropName="checked" initialValue={false}>
                    <Checkbox>{t('d:moveable')}</Checkbox>
                </Form.Item>
            </Form>
        </>
    );
};

BlocksSearch.displayName = 'BlocksSearch';

export { BlocksSearch };
