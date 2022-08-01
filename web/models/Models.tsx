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

export type FilterFieldType = {
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
    detailFields: Array<string>;
    listFields: Array<string>;
    sortableFields?: Array<string>;
    filterFields?: Array<FilterFieldType>;

    endpoints: EndpointsType;
    resolverName: string;
};
