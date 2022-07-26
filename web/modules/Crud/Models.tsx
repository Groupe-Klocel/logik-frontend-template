export enum FormDataType {
    Number,
    String,
    Boolean,
    TextArea
}

export type FormRuleType = {
    required: boolean;
    message: string;
};

export type FilterColumn = {
    name: string;
    type: FormDataType;
    numberPrecision?: number;
    rules?: Array<FormRuleType>;
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
    updateQueryName: string;
    resolverName: string;
};

var articleLuBarcodeModel: ModelType = {
    tableName: 'barcode',
    updateQueryName: 'updateBarcode',
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
    updateQueryName: 'updateArticle',

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
        { name: 'name', type: FormDataType.String },
        { name: 'code', type: FormDataType.String },
        { name: 'status', type: FormDataType.Number },
        { name: 'length', type: FormDataType.Number },
        { name: 'width', type: FormDataType.Number },
        { name: 'height', type: FormDataType.Number },
        { name: 'baseUnitWeight', type: FormDataType.Number },
        { name: 'boxWeight', type: FormDataType.Number },
        { name: 'permanentProduct', type: FormDataType.Boolean }
    ]
};

export { articleLuBarcodeModel, articleModel };
