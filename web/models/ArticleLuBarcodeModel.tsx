import { ModelType } from './Models';

export const ArticleLuBarcodeModel: ModelType = {
    tableName: 'barcode',
    resolverName: 'ArticleLuBarcode',
    queryNames: {
        list: 'articleLuBarcodes',
        export: 'exportArticleLuBarcodes',
        detail: 'articleLuBarcode',
        create: 'createArticleLuBarcode',
        update: 'updateArticleLuBarcode',
        delete: 'deleteArticleLuBarcode'
    },
    detailColumns: [],
    listColumns: ['id', 'barcodeId'],
    sortableColumns: [],
    filterColumns: []
};
