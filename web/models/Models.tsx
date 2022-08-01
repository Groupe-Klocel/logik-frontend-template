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

export type FilterColumnType = {
    name: string;
    type: FormDataType;
    numberPrecision?: number;
    rules?: Array<FormRuleType>;
};

export type EndpointsType = {
    list: string;
    export: string;
    detail: string;
    create: string;
    update: string;
    delete: string;
};
export type ModelType = {
    tableName: string;
    detailColumns: Array<string>;
    listColumns: Array<string>;
    sortableColumns?: Array<string>;
    filterColumns?: Array<FilterColumnType>;

    endpoints: EndpointsType;
    resolverName: string;
};
