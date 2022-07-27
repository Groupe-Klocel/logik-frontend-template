import { ModelType } from './Models';

export const ArticleLuBarcodeModel: ModelType = {
    tableName: 'barcode',
    resolverName: 'ArticleLuBarcode',
    queryNames: {
        list: 'articleLuBarcodes',
        export: 'exportArticleLuBarcodes',
        detail: 'barcode',
        create: 'createBarcode',
        update: 'updateBarcode'
    },
    detailColumns: [],
    listColumns: ['id', 'barcodeId'],
    sortableColumns: [],
    filterColumns: []
};
