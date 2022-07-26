export enum FilterTypeEnum {
    Number,
    String,
    Boolean
}
export type FilterColumn = {
    name: string;
    type: FilterTypeEnum;
};
export type ModelType = {
    tableName: string;
    detailQueryName: string;
    detailColumns: Array<string>;
    listColumns: Array<string>;
    sortableColumns: Array<string>;
    filterColumns: Array<FilterColumn>;

    listQueryName: string;
    exportQueryName: string;
    resolverName: string;
};

var articleLuBarcodeModel: ModelType = {
    tableName: 'barcode',
    detailQueryName: 'barcode',
    listQueryName: 'articleLuBarcodes',
    resolverName: 'ArticleLuBarcode',
    exportQueryName: 'exportArticleLuBarcodes',
    detailColumns: [],
    listColumns: ['id', 'barcodeId'],
    sortableColumns: [],
    filterColumns: []
};

var articleModel: ModelType = {
    tableName: 'ARTICLE',
    detailQueryName: 'article',
    listQueryName: 'articles',
    resolverName: 'Article',
    exportQueryName: 'exportArticles',

    detailColumns: [
        'id',
        'extras',
        'created',
        'createdBy',
        'modified',
        'modifiedBy',
        'status',
        'code',
        'name',
        'additionalDescription',
        'supplierName',
        'translation',
        'length',
        'width',
        'height',
        'baseUnitPrice',
        'baseUnitWeight',
        'baseUnitPicking',
        'baseUnitRotation',
        'cubingType',
        'featureType',
        'permanentProduct',
        'tariffClassification',
        'family',
        'subfamily',
        'groupingId',
        'countryOfOrigin',
        'newProduct',
        'endOfLife',
        'supportQuantity',
        'stockOwnerId',
        'statusText',
        'cubingTypeText',
        'baseUnitRotationText',
        'featureTypeText'
    ],
    listColumns: [
        'id',
        'extras',
        'created',
        'createdBy',
        'modified',
        'modifiedBy',
        'status',
        'code',
        'name'
    ],
    sortableColumns: ['name', 'code'],
    filterColumns: [
        { name: 'name', type: FilterTypeEnum.String },
        { name: 'code', type: FilterTypeEnum.String },
        { name: 'status', type: FilterTypeEnum.Number },
        { name: 'length', type: FilterTypeEnum.Number },
        { name: 'width', type: FilterTypeEnum.Number },
        { name: 'height', type: FilterTypeEnum.Number },
        { name: 'baseUnitWeight', type: FilterTypeEnum.Number },
        { name: 'boxWeight', type: FilterTypeEnum.Number },
        { name: 'permanentProduct', type: FilterTypeEnum.Boolean }
    ]
};

export { articleLuBarcodeModel, articleModel };
