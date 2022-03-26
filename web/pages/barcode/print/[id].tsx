import { AppHead, ContentSpin } from '@components';
// import { PrintBarcode } from 'modules/Barcodes/PagesContainer/PrintBarcode';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import {
    RenderBarcodeMutation,
    RenderBarcodeMutationVariables,
    useRenderBarcodeMutation
} from 'generated/graphql';
import { useAuth } from 'context/AuthContext';

type PageComponent = FC & any;

const BarcodePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    const { graphqlRequestClient } = useAuth();
    const [pdfPath, setPdfPath] = useState<string>();

    const { mutate, isLoading, data } = useRenderBarcodeMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: RenderBarcodeMutation,
            _variables: RenderBarcodeMutationVariables,
            _context: any
        ) => {
            console.log('onSuccess');
            if (data.renderBarcode.__typename == 'RenderedDocument') {
                console.log(data.renderBarcode.url);
                setPdfPath(data.renderBarcode.url);
            }
        },
        onError: () => {}
    });

    useEffect(() => {
        mutate({ code: id!.toString() });
    }, []);

    return (
        <>
            <style global jsx>{`
                html,
                body,
                body > div:first-child,
                div#__next,
                div#__next > div {
                    height: 100%;
                }
            `}</style>
            {isLoading ? (
                <ContentSpin />
            ) : (
                <div style={{ width: '100%', height: '100%' }}>
                    <object data={pdfPath} type="application/pdf" width="100%" height="100%">
                        <iframe src={pdfPath} />
                    </object>
                </div>
            )}
        </>
    );
};

export default BarcodePage;
