import { FormDataType } from 'models/Models';

const formStep1 = (errorMessageEmptyInput: string) => {
    return [
        {
            name: 'name',
            type: FormDataType.String,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        },
        { name: 'additionalDescription', type: FormDataType.TextArea },
        { name: 'supplierName', type: FormDataType.String },
        {
            name: 'status',
            type: FormDataType.Number,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        },
        {
            name: 'code',
            type: FormDataType.String,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        },
        {
            name: 'stockOwnerId',
            type: FormDataType.String,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        }
    ];
};

const formStep2 = (errorMessageEmptyInput: string) => {
    return [
        {
            name: 'length',
            type: FormDataType.Number,
            numberPrecision: 2,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        },
        {
            name: 'width',
            type: FormDataType.Number,
            numberPrecision: 2,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        },
        {
            name: 'height',
            type: FormDataType.Number,
            numberPrecision: 2,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        },
        {
            name: 'baseUnitWeight',
            type: FormDataType.Number,
            numberPrecision: 2,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        },
        {
            name: 'baseUnitPicking',
            type: FormDataType.Boolean
        },
        {
            name: 'cubingType',
            type: FormDataType.Number,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        },
        {
            name: 'baseUnitPrice',
            type: FormDataType.Number
        },
        {
            name: 'baseUnitRotation',
            type: FormDataType.String
        },
        {
            name: 'boxRotation',
            type: FormDataType.String
        }
    ];
};
const formStep3 = (errorMessageEmptyInput: string) => {
    return [
        {
            name: 'family',
            type: FormDataType.String
        },
        {
            name: 'subfamily',
            type: FormDataType.String
        },
        {
            name: 'tariffClassification',
            type: FormDataType.String
        },
        {
            name: 'groupingId',
            type: FormDataType.Number
        },
        {
            name: 'featureTypeId',
            type: FormDataType.Number
        },
        {
            name: 'permanentProduct',
            type: FormDataType.Boolean
        }
    ];
};
export { formStep1, formStep2, formStep3 };
