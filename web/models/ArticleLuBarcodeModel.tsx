import { ModelType } from './Models';

export const ArticleLuBarcodeModel: ModelType = {
    tableName: 'barcode',
    resolverName: 'ArticleLuBarcode',
    endpoints: {
        list: 'articleLuBarcodes',
        export: 'exportArticleLuBarcodes',
        detail: 'articleLuBarcode',
        create: 'createArticleLuBarcode',
        update: 'updateArticleLuBarcode',
        delete: 'deleteArticleLuBarcode'
    },
    detailFields: ['id','barcodeId'],
    listFields: ['id', 'barcodeId']
};
