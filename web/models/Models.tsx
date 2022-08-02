// Used for CRUD form field type declarations.
export enum FormDataType {
    Number,
    String,
    Boolean,
    TextArea
}
// Used for CRUD form validation rule definitions
export type FormRuleType = {
    required: boolean;
    message: string;
};
// Used for CRUD form item definitons
export type FilterFieldType = {
    name: string;
    type: FormDataType;
    numberPrecision?: number;
    rules?: Array<FormRuleType>;
};

// Used for defining endpoints inside ModelType
export type EndpointsType = {
    list: string;
    export: string;
    detail: string;
    create: string;
    update: string;
    delete: string;
};
// Used for model definition of CRUD operations.
export type ModelType = {
    tableName: string;
    detailFields: Array<string>;
    listFields: Array<string>;
    sortableFields?: Array<string>;
    filterFields?: Array<FilterFieldType>;

    endpoints: EndpointsType;
    resolverName: string;
};
