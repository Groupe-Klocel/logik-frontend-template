import { LinkButton } from '@components';
import { EyeTwoTone, PrinterOutlined } from '@ant-design/icons';
import { pathParams, getModesFromPermissions } from '@helpers';
import useTranslation from 'next-translate/useTranslation';
import { Button, Divider, Space, Typography } from 'antd';
import { useState } from 'react';
import { BarcodeRenderModal } from 'modules/Barcodes/Elements/BarcodeRenderModal';
import { useAppState } from 'context/AppContext';
import { ModeEnum, Table } from 'generated/graphql';
import { ListTableComponent } from './Components/ListTableComponent';
import { articleLuBarcodeModel } from './Models';

const { Title } = Typography;

export interface IItemDetailsProps {
    articleId?: string | any;
}

const ArticleDetailsExtra = ({ articleId }: IItemDetailsProps) => {
    const { t } = useTranslation();

    const [showModal, setShowModal] = useState(false);
    const [barcodeName, setBarcodeName] = useState('');
    const { permissions } = useAppState();
    const modes = getModesFromPermissions(permissions, Table.Barcode);

    return (
        <>
            <Divider />
            <Title level={4}>{t('common:associated', { name: t('common:barcodes') })}</Title>
            <ListTableComponent
                searchCriteria={{ articleId: articleId }}
                dataModel={articleLuBarcodeModel}
                actionColumns={[
                    {
                        title: 'actions:actions',
                        key: 'actions',
                        render: (record: { id: string; name: string; barcodeId: string }) => (
                            <Space>
                                {modes.length == 0 || !modes.includes(ModeEnum.Read) ? (
                                    <></>
                                ) : (
                                    <>
                                        <LinkButton
                                            icon={<EyeTwoTone />}
                                            path={pathParams('/barcode/[id]', record.barcodeId)}
                                        />
                                        <Button
                                            icon={<PrinterOutlined />}
                                            onClick={() => {
                                                setBarcodeName(record.name);
                                                setShowModal(true);
                                            }}
                                        />
                                    </>
                                )}
                            </Space>
                        )
                    }
                ]}
                disableFilters={true}
            />
            <BarcodeRenderModal
                visible={showModal}
                code={barcodeName}
                showhideModal={() => {
                    setShowModal(!showModal);
                }}
            />
        </>
    );
};

export { ArticleDetailsExtra };
