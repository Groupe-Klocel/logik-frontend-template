import { DetailsList } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Input, Modal, Typography } from 'antd';
import { useState } from 'react';
import {
    RenderBarcodeMutation,
    RenderBarcodeMutationVariables,
    useRenderBarcodeMutation
} from 'generated/graphql';
import { showError } from '@helpers';
import { useAuth } from 'context/AuthContext';

export interface IBarcodeRenderModalProps {
    visible: boolean;
    code: string;
    showhideModal: () => void;
}

const BarcodeRenderModal = ({ visible, showhideModal, code }: IBarcodeRenderModalProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();

    const [pageNumber, setPageNumber] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(visible);

    const { mutate } = useRenderBarcodeMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: RenderBarcodeMutation,
            _variables: RenderBarcodeMutationVariables,
            _context: any
        ) => {
            if (data.renderBarcode.__typename == 'RenderedDocument') {
                window.open(data.renderBarcode.url, '_blank');
            }
        },
        onError: () => {
            showError(t('messages:error-barcode-not-render'));
        }
    });

    const handleCancel = () => {
        setIsModalVisible(false);
        showhideModal();
    };

    const onClickOk = () => {
        mutate({
            code: code,
            pages: pageNumber
        });
        showhideModal();
    };
    return (
        <Modal title="Input Page Number" visible={visible} onOk={onClickOk} onCancel={handleCancel}>
            <p>{t('actions:enter-page-number')}</p>
            <Input
                name="pages"
                type="number"
                min={0}
                max={100}
                value={pageNumber}
                onChange={(e) => {
                    setPageNumber(parseInt(e.target.value));
                }}
            />
        </Modal>
    );
};

export { BarcodeRenderModal };
