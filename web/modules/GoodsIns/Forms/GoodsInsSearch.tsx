import { Form, Input, InputNumber, Checkbox } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export interface IGoodsInsSearchProps {
    form: any;
}

const GoodsInsSearch: FC<IGoodsInsSearchProps> = ({ form }: IGoodsInsSearchProps) => {
    const { t } = useTranslation();

    return (
        <>
            <Form form={form} name="control-hooks">
                <Form.Item name="name" label={t('common:name')}>
                    <Input />
                </Form.Item>
                <Form.Item name="comment" label={t('d:comment')}>
                    <Input />
                </Form.Item>
            </Form>
        </>
    );
};

GoodsInsSearch.displayName = 'GoodsInsSearch';

export { GoodsInsSearch };
