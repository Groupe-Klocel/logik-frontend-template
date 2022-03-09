import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(
    client: GraphQLClient,
    query: string,
    variables?: TVariables,
    headers?: RequestInit['headers']
) {
    return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** Date with time (isoformat) */
    DateTime: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
};

export type Article = {
    __typename?: 'Article';
    accountId: Scalars['Int'];
    additionalDescription?: Maybe<Scalars['String']>;
    baseUnitPicking: Scalars['Boolean'];
    baseUnitPrice?: Maybe<Scalars['Float']>;
    baseUnitRotation?: Maybe<Scalars['String']>;
    /** Weight in kilograms (kg) */
    baseUnitWeight: Scalars['Float'];
    boxPicking: Scalars['Boolean'];
    boxQuantity: Scalars['Float'];
    boxRotation?: Maybe<Scalars['String']>;
    boxWeight: Scalars['Float'];
    code: Scalars['String'];
    companyId: Scalars['Int'];
    created?: Maybe<Scalars['DateTime']>;
    createdBy?: Maybe<Scalars['String']>;
    cubingType: Scalars['Int'];
    family?: Maybe<Scalars['String']>;
    featureTypeId?: Maybe<Scalars['Int']>;
    groupingId?: Maybe<Scalars['String']>;
    /** Height in centimeters (cm) */
    height: Scalars['Float'];
    id?: Maybe<Scalars['Int']>;
    /** Length in centimeters (cm) */
    length: Scalars['Float'];
    modified?: Maybe<Scalars['DateTime']>;
    modifiedBy?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    permanentProduct: Scalars['Boolean'];
    status: Scalars['Int'];
    subfamily?: Maybe<Scalars['String']>;
    supplierName?: Maybe<Scalars['String']>;
    tariffClassification?: Maybe<Scalars['String']>;
    /** Width in centimeters (cm) */
    width: Scalars['Float'];
};

/** Filters to apply before the data export is made */
export type ArticleExportFilters = {
    accountId?: InputMaybe<Scalars['Int']>;
    additionalDescription?: InputMaybe<Scalars['String']>;
    baseUnitPicking?: InputMaybe<Scalars['Boolean']>;
    baseUnitPrice?: InputMaybe<Scalars['Float']>;
    baseUnitRotation?: InputMaybe<Scalars['String']>;
    /** Weight in kilograms (kg) */
    baseUnitWeight?: InputMaybe<Scalars['Float']>;
    boxPicking?: InputMaybe<Scalars['Boolean']>;
    boxQuantity?: InputMaybe<Scalars['Float']>;
    boxRotation?: InputMaybe<Scalars['String']>;
    boxWeight?: InputMaybe<Scalars['Float']>;
    code?: InputMaybe<Scalars['String']>;
    companyId?: InputMaybe<Scalars['Int']>;
    createdBy?: InputMaybe<Scalars['String']>;
    cubingType?: InputMaybe<Scalars['Int']>;
    family?: InputMaybe<Scalars['String']>;
    featureTypeId?: InputMaybe<Scalars['Int']>;
    groupingId?: InputMaybe<Scalars['String']>;
    /** Height in centimeters (cm) */
    height?: InputMaybe<Scalars['Float']>;
    /** Length in centimeters (cm) */
    length?: InputMaybe<Scalars['Float']>;
    modifiedBy?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    permanentProduct?: InputMaybe<Scalars['Boolean']>;
    status?: InputMaybe<Scalars['Int']>;
    subfamily?: InputMaybe<Scalars['String']>;
    supplierName?: InputMaybe<Scalars['String']>;
    tariffClassification?: InputMaybe<Scalars['String']>;
    /** Width in centimeters (cm) */
    width?: InputMaybe<Scalars['Float']>;
};

/** Field names for the Article model */
export enum ArticleFieldName {
    AccountId = 'accountId',
    AdditionalDescription = 'additionalDescription',
    BaseUnitPicking = 'baseUnitPicking',
    BaseUnitPrice = 'baseUnitPrice',
    BaseUnitRotation = 'baseUnitRotation',
    BaseUnitWeight = 'baseUnitWeight',
    BoxPicking = 'boxPicking',
    BoxQuantity = 'boxQuantity',
    BoxRotation = 'boxRotation',
    BoxWeight = 'boxWeight',
    Code = 'code',
    CompanyId = 'companyId',
    Created = 'created',
    CreatedBy = 'createdBy',
    CubingType = 'cubingType',
    Family = 'family',
    FeatureTypeId = 'featureTypeId',
    GroupingId = 'groupingId',
    Height = 'height',
    Id = 'id',
    Length = 'length',
    Modified = 'modified',
    ModifiedBy = 'modifiedBy',
    Name = 'name',
    PermanentProduct = 'permanentProduct',
    Status = 'status',
    Subfamily = 'subfamily',
    SupplierName = 'supplierName',
    TariffClassification = 'tariffClassification',
    Width = 'width'
}

/** Returns a list of Article */
export type ArticleListResult = {
    __typename?: 'ArticleListResult';
    count: Scalars['Int'];
    itemsPerPage: Scalars['Int'];
    page: Scalars['Int'];
    results: Array<Article>;
    totalPages: Scalars['Int'];
};

/** How to order the search results for Article */
export type ArticleOrderByCriterion = {
    ascending?: Scalars['Boolean'];
    field: ArticleFieldName;
};

/** Attributes of Article to filter onto */
export type ArticleSearchFilters = {
    accountId?: InputMaybe<Scalars['Int']>;
    additionalDescription?: InputMaybe<Scalars['String']>;
    baseUnitPicking?: InputMaybe<Scalars['Boolean']>;
    baseUnitPrice?: InputMaybe<Scalars['Float']>;
    baseUnitRotation?: InputMaybe<Scalars['String']>;
    /** Weight in kilograms (kg) */
    baseUnitWeight?: InputMaybe<Scalars['Float']>;
    boxPicking?: InputMaybe<Scalars['Boolean']>;
    boxQuantity?: InputMaybe<Scalars['Float']>;
    boxRotation?: InputMaybe<Scalars['String']>;
    boxWeight?: InputMaybe<Scalars['Float']>;
    code?: InputMaybe<Scalars['String']>;
    companyId?: InputMaybe<Scalars['Int']>;
    created?: InputMaybe<Scalars['DateTime']>;
    createdBy?: InputMaybe<Scalars['String']>;
    cubingType?: InputMaybe<Scalars['Int']>;
    family?: InputMaybe<Scalars['String']>;
    featureTypeId?: InputMaybe<Scalars['Int']>;
    groupingId?: InputMaybe<Scalars['String']>;
    /** Height in centimeters (cm) */
    height?: InputMaybe<Scalars['Float']>;
    id?: InputMaybe<Scalars['Int']>;
    /** Length in centimeters (cm) */
    length?: InputMaybe<Scalars['Float']>;
    modified?: InputMaybe<Scalars['DateTime']>;
    modifiedBy?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    permanentProduct?: InputMaybe<Scalars['Boolean']>;
    status?: InputMaybe<Scalars['Int']>;
    subfamily?: InputMaybe<Scalars['String']>;
    supplierName?: InputMaybe<Scalars['String']>;
    tariffClassification?: InputMaybe<Scalars['String']>;
    /** Width in centimeters (cm) */
    width?: InputMaybe<Scalars['Float']>;
};

export type Barcode = {
    __typename?: 'Barcode';
    accountId: Scalars['Int'];
    articleId: Scalars['Int'];
    companyId: Scalars['Int'];
    created?: Maybe<Scalars['DateTime']>;
    createdBy?: Maybe<Scalars['String']>;
    flagDouble: Scalars['Int'];
    id?: Maybe<Scalars['Int']>;
    modified?: Maybe<Scalars['DateTime']>;
    modifiedBy?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    preparationMode: Scalars['Int'];
    quantity?: Maybe<Scalars['Float']>;
    rotation: Scalars['String'];
    supplierArticleCode?: Maybe<Scalars['String']>;
    supplierName?: Maybe<Scalars['String']>;
};

/** Filters to apply before the data export is made */
export type BarcodeExportFilters = {
    accountId?: InputMaybe<Scalars['Int']>;
    articleId?: InputMaybe<Scalars['Int']>;
    companyId?: InputMaybe<Scalars['Int']>;
    createdBy?: InputMaybe<Scalars['String']>;
    flagDouble?: InputMaybe<Scalars['Int']>;
    modifiedBy?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    preparationMode?: InputMaybe<Scalars['Int']>;
    quantity?: InputMaybe<Scalars['Float']>;
    rotation?: InputMaybe<Scalars['String']>;
    supplierArticleCode?: InputMaybe<Scalars['String']>;
    supplierName?: InputMaybe<Scalars['String']>;
};

/** Field names for the Barcode model */
export enum BarcodeFieldName {
    AccountId = 'accountId',
    ArticleId = 'articleId',
    CompanyId = 'companyId',
    Created = 'created',
    CreatedBy = 'createdBy',
    FlagDouble = 'flagDouble',
    Id = 'id',
    Modified = 'modified',
    ModifiedBy = 'modifiedBy',
    Name = 'name',
    PreparationMode = 'preparationMode',
    Quantity = 'quantity',
    Rotation = 'rotation',
    SupplierArticleCode = 'supplierArticleCode',
    SupplierName = 'supplierName'
}

/** Returns a list of Barcode */
export type BarcodeListResult = {
    __typename?: 'BarcodeListResult';
    count: Scalars['Int'];
    itemsPerPage: Scalars['Int'];
    page: Scalars['Int'];
    results: Array<Barcode>;
    totalPages: Scalars['Int'];
};

/** How to order the search results for Barcode */
export type BarcodeOrderByCriterion = {
    ascending?: Scalars['Boolean'];
    field: BarcodeFieldName;
};

/** Attributes of Barcode to filter onto */
export type BarcodeSearchFilters = {
    accountId?: InputMaybe<Scalars['Int']>;
    articleId?: InputMaybe<Scalars['Int']>;
    companyId?: InputMaybe<Scalars['Int']>;
    created?: InputMaybe<Scalars['DateTime']>;
    createdBy?: InputMaybe<Scalars['String']>;
    flagDouble?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Int']>;
    modified?: InputMaybe<Scalars['DateTime']>;
    modifiedBy?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    preparationMode?: InputMaybe<Scalars['Int']>;
    quantity?: InputMaybe<Scalars['Float']>;
    rotation?: InputMaybe<Scalars['String']>;
    supplierArticleCode?: InputMaybe<Scalars['String']>;
    supplierName?: InputMaybe<Scalars['String']>;
};

export type CreateArticleInput = {
    accountId: Scalars['Int'];
    additionalDescription?: InputMaybe<Scalars['String']>;
    baseUnitPicking: Scalars['Boolean'];
    baseUnitPrice?: InputMaybe<Scalars['Float']>;
    baseUnitRotation?: InputMaybe<Scalars['String']>;
    /** Weight in kilograms (kg) */
    baseUnitWeight: Scalars['Float'];
    boxPicking: Scalars['Boolean'];
    boxQuantity: Scalars['Float'];
    boxRotation?: InputMaybe<Scalars['String']>;
    boxWeight: Scalars['Float'];
    code: Scalars['String'];
    companyId: Scalars['Int'];
    createdBy?: InputMaybe<Scalars['String']>;
    cubingType: Scalars['Int'];
    family?: InputMaybe<Scalars['String']>;
    featureTypeId?: InputMaybe<Scalars['Int']>;
    groupingId?: InputMaybe<Scalars['String']>;
    /** Height in centimeters (cm) */
    height: Scalars['Float'];
    /** Length in centimeters (cm) */
    length: Scalars['Float'];
    modifiedBy?: InputMaybe<Scalars['String']>;
    name: Scalars['String'];
    permanentProduct: Scalars['Boolean'];
    status: Scalars['Int'];
    subfamily?: InputMaybe<Scalars['String']>;
    supplierName?: InputMaybe<Scalars['String']>;
    tariffClassification?: InputMaybe<Scalars['String']>;
    /** Width in centimeters (cm) */
    width: Scalars['Float'];
};

export type CreateBarcodeInput = {
    accountId: Scalars['Int'];
    articleId: Scalars['Int'];
    companyId: Scalars['Int'];
    createdBy?: InputMaybe<Scalars['String']>;
    flagDouble: Scalars['Int'];
    modifiedBy?: InputMaybe<Scalars['String']>;
    name: Scalars['String'];
    preparationMode: Scalars['Int'];
    quantity?: InputMaybe<Scalars['Float']>;
    rotation: Scalars['String'];
    supplierArticleCode?: InputMaybe<Scalars['String']>;
    supplierName?: InputMaybe<Scalars['String']>;
};

export type Document = {
    __typename?: 'Document';
    url: Scalars['String'];
};

/** Compression of the exported file */
export enum ExportCompression {
    Gzip = 'GZIP'
}

/** List of possible formats for exporting data */
export enum ExportFormat {
    Csv = 'CSV',
    Json = 'JSON',
    Xlsx = 'XLSX'
}

export type ExportResult = {
    __typename?: 'ExportResult';
    compression?: Maybe<ExportCompression>;
    format: ExportFormat;
    separator?: Maybe<Scalars['String']>;
    /** URL to download the exported file */
    url: Scalars['String'];
};

export type LoginSuccess = {
    __typename?: 'LoginSuccess';
    /** A short-lived JWT that can be used to authenticate a user onto the platform */
    accessToken: Scalars['String'];
};

export type MissingContext = {
    __typename?: 'MissingContext';
    /** Message explaining which context fields are missing in the GraphQL mutation call */
    message: Scalars['String'];
};

export enum Mode {
    Read = 'READ',
    Write = 'WRITE'
}

export type Mutation = {
    __typename?: 'Mutation';
    /** Create article */
    createArticle: Article;
    /** Create barcode */
    createBarcode: Barcode;
    /** Create an IntegratorOrganization */
    createIntegratorOrganization: Organization;
    /** As an Integrator, I can invite a fellow Integrator */
    createIntegratorUser: User;
    /** Create a new Role */
    createRole: RoleType;
    /** Create a new Warehouse */
    createWarehouse: Warehouse;
    /** Delete article */
    deleteArticle: Scalars['Boolean'];
    /** Delete barcode */
    deleteBarcode: Scalars['Boolean'];
    deleteOrganization: Scalars['Boolean'];
    deleteRole: Scalars['Boolean'];
    deleteUser: Scalars['Boolean'];
    deleteWarehouse: Scalars['Boolean'];
    /** Exports Articles into a file */
    exportArticles: ExportResult;
    /** Exports Barcodes into a file */
    exportBarcodes: ExportResult;
    /** As an Integrator, I can invite a ClientUser */
    inviteClientUser: Scalars['Boolean'];
    /** Obtain a JSON Web Token (JWT) to use in the frontend */
    login?: Maybe<LoginSuccess>;
    /** Renders a template given its filename and a context dictionary */
    renderDocument: RenderDocumentResponse;
    /** Update article */
    updateArticle?: Maybe<Article>;
    /** Update barcode */
    updateBarcode?: Maybe<Barcode>;
    updateUser?: Maybe<User>;
};

export type MutationCreateArticleArgs = {
    input: CreateArticleInput;
};

export type MutationCreateBarcodeArgs = {
    input: CreateBarcodeInput;
};

export type MutationCreateIntegratorOrganizationArgs = {
    name: Scalars['String'];
};

export type MutationCreateIntegratorUserArgs = {
    email: Scalars['String'];
    organizationId: Scalars['String'];
    password: Scalars['String'];
    roleId: Scalars['String'];
};

export type MutationCreateRoleArgs = {
    name: Scalars['String'];
    permissions: Array<PermissionInput>;
};

export type MutationCreateWarehouseArgs = {
    name: Scalars['String'];
    organizationId: Scalars['ID'];
};

export type MutationDeleteArticleArgs = {
    id: Scalars['Int'];
};

export type MutationDeleteBarcodeArgs = {
    id: Scalars['Int'];
};

export type MutationDeleteOrganizationArgs = {
    id: Scalars['String'];
};

export type MutationDeleteRoleArgs = {
    id: Scalars['String'];
};

export type MutationDeleteUserArgs = {
    id: Scalars['String'];
};

export type MutationDeleteWarehouseArgs = {
    id: Scalars['String'];
};

export type MutationExportArticlesArgs = {
    compression?: InputMaybe<ExportCompression>;
    filters?: InputMaybe<ArticleExportFilters>;
    format?: InputMaybe<ExportFormat>;
    orderBy?: InputMaybe<Array<ArticleOrderByCriterion>>;
    separator?: InputMaybe<Scalars['String']>;
};

export type MutationExportBarcodesArgs = {
    compression?: InputMaybe<ExportCompression>;
    filters?: InputMaybe<BarcodeExportFilters>;
    format?: InputMaybe<ExportFormat>;
    orderBy?: InputMaybe<Array<BarcodeOrderByCriterion>>;
    separator?: InputMaybe<Scalars['String']>;
};

export type MutationInviteClientUserArgs = {
    clientOrganizationId: Scalars['ID'];
    email?: InputMaybe<Scalars['String']>;
    password: Scalars['String'];
    username: Scalars['String'];
};

export type MutationLoginArgs = {
    password: Scalars['String'];
    username: Scalars['String'];
    warehouseId: Scalars['ID'];
};

export type MutationRenderDocumentArgs = {
    context: Scalars['JSON'];
    templateFilename: Scalars['String'];
};

export type MutationUpdateArticleArgs = {
    id: Scalars['Int'];
    input: UpdateArticleInput;
};

export type MutationUpdateBarcodeArgs = {
    id: Scalars['Int'];
    input: UpdateBarcodeInput;
};

export type MutationUpdateUserArgs = {
    id: Scalars['String'];
    input: UpdateUserInput;
};

export type Organization = {
    __typename?: 'Organization';
    /** Access key to be used when accessing your storage space via an GUI such as FileZilla, Cyberduck... */
    awsAccessKeyId?: Maybe<Scalars['String']>;
    /** Secret to use in conjunction with the `aws_access_key_id` */
    awsSecretAccessKey?: Maybe<Scalars['String']>;
    /** String-based unique identifier. */
    id?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    /** Organization that manages this one (e.g. integrator org to its client) */
    parentOrganizationId?: Maybe<Scalars['String']>;
};

/** Field names for the Organization model */
export enum OrganizationFieldName {
    AwsAccessKeyId = 'awsAccessKeyId',
    AwsSecretAccessKey = 'awsSecretAccessKey',
    Id = 'id',
    Name = 'name',
    ParentOrganizationId = 'parentOrganizationId'
}

/** Returns a list of Organization */
export type OrganizationListResult = {
    __typename?: 'OrganizationListResult';
    count: Scalars['Int'];
    itemsPerPage: Scalars['Int'];
    page: Scalars['Int'];
    results: Array<Organization>;
    totalPages: Scalars['Int'];
};

/** How to order the search results for Organization */
export type OrganizationOrderByCriterion = {
    ascending?: Scalars['Boolean'];
    field: OrganizationFieldName;
};

/** Attributes of Organization to filter onto */
export type OrganizationSearchFilters = {
    /** Access key to be used when accessing your storage space via an GUI such as FileZilla, Cyberduck... */
    awsAccessKeyId?: InputMaybe<Scalars['String']>;
    /** Secret to use in conjunction with the `aws_access_key_id` */
    awsSecretAccessKey?: InputMaybe<Scalars['String']>;
    /** String-based unique identifier. */
    id?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    /** Organization that manages this one (e.g. integrator org to its client) */
    parentOrganizationId?: InputMaybe<Scalars['String']>;
};

export type PermissionInput = {
    mode: Mode;
    table: Table;
};

export type PermissionType = {
    __typename?: 'PermissionType';
    /** String-based unique identifier. */
    id?: Maybe<Scalars['String']>;
    mode: Mode;
    roleId: Scalars['String'];
    table: Table;
};

export type Query = {
    __typename?: 'Query';
    /** Retrieve a given Article by its ID */
    article?: Maybe<Article>;
    /** List multiple articles */
    articles: ArticleListResult;
    /** Retrieve a given Barcode by its ID */
    barcode?: Maybe<Barcode>;
    /** List multiple barcodes */
    barcodes: BarcodeListResult;
    organizations: OrganizationListResult;
    /** List roles */
    roles: Array<RoleType>;
    users: UserListResult;
    warehouses: WarehouseListResult;
};

export type QueryArticleArgs = {
    id: Scalars['Int'];
};

export type QueryArticlesArgs = {
    filters?: InputMaybe<ArticleSearchFilters>;
    itemsPerPage?: Scalars['Int'];
    orderBy?: InputMaybe<Array<ArticleOrderByCriterion>>;
    page?: Scalars['Int'];
};

export type QueryBarcodeArgs = {
    id: Scalars['Int'];
};

export type QueryBarcodesArgs = {
    filters?: InputMaybe<BarcodeSearchFilters>;
    itemsPerPage?: Scalars['Int'];
    orderBy?: InputMaybe<Array<BarcodeOrderByCriterion>>;
    page?: Scalars['Int'];
};

export type QueryOrganizationsArgs = {
    filters?: InputMaybe<OrganizationSearchFilters>;
    itemsPerPage?: Scalars['Int'];
    orderBy?: InputMaybe<Array<OrganizationOrderByCriterion>>;
    page?: Scalars['Int'];
};

export type QueryUsersArgs = {
    filters?: InputMaybe<UserSearchFilters>;
    itemsPerPage?: Scalars['Int'];
    orderBy?: InputMaybe<Array<UserOrderByCriterion>>;
    page?: Scalars['Int'];
};

export type QueryWarehousesArgs = {
    filters?: InputMaybe<WarehouseSearchFilters>;
    itemsPerPage?: Scalars['Int'];
    orderBy?: InputMaybe<Array<WarehouseOrderByCriterion>>;
    page?: Scalars['Int'];
};

export type RenderDocumentResponse =
    | Document
    | MissingContext
    | TemplateDoesNotExist
    | TemplateError;

export type RoleType = {
    __typename?: 'RoleType';
    /** String-based unique identifier. */
    id?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    permissions: Array<PermissionType>;
};

export enum Table {
    Article = 'ARTICLE',
    Barcode = 'BARCODE',
    Organization = 'ORGANIZATION',
    Permission = 'PERMISSION',
    User = 'USER'
}

export type TemplateDoesNotExist = {
    __typename?: 'TemplateDoesNotExist';
    message: Scalars['String'];
};

export type TemplateError = {
    __typename?: 'TemplateError';
    /** Message explaining the error encountered while rendering the template */
    message: Scalars['String'];
};

/** Values to update the existing record with */
export type UpdateArticleInput = {
    accountId?: InputMaybe<Scalars['Int']>;
    additionalDescription?: InputMaybe<Scalars['String']>;
    baseUnitPicking?: InputMaybe<Scalars['Boolean']>;
    baseUnitPrice?: InputMaybe<Scalars['Float']>;
    baseUnitRotation?: InputMaybe<Scalars['String']>;
    /** Weight in kilograms (kg) */
    baseUnitWeight?: InputMaybe<Scalars['Float']>;
    boxPicking?: InputMaybe<Scalars['Boolean']>;
    boxQuantity?: InputMaybe<Scalars['Float']>;
    boxRotation?: InputMaybe<Scalars['String']>;
    boxWeight?: InputMaybe<Scalars['Float']>;
    code?: InputMaybe<Scalars['String']>;
    companyId?: InputMaybe<Scalars['Int']>;
    createdBy?: InputMaybe<Scalars['String']>;
    cubingType?: InputMaybe<Scalars['Int']>;
    family?: InputMaybe<Scalars['String']>;
    featureTypeId?: InputMaybe<Scalars['Int']>;
    groupingId?: InputMaybe<Scalars['String']>;
    /** Height in centimeters (cm) */
    height?: InputMaybe<Scalars['Float']>;
    /** Length in centimeters (cm) */
    length?: InputMaybe<Scalars['Float']>;
    modifiedBy?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    permanentProduct?: InputMaybe<Scalars['Boolean']>;
    status?: InputMaybe<Scalars['Int']>;
    subfamily?: InputMaybe<Scalars['String']>;
    supplierName?: InputMaybe<Scalars['String']>;
    tariffClassification?: InputMaybe<Scalars['String']>;
    /** Width in centimeters (cm) */
    width?: InputMaybe<Scalars['Float']>;
};

/** Values to update the existing record with */
export type UpdateBarcodeInput = {
    accountId?: InputMaybe<Scalars['Int']>;
    articleId?: InputMaybe<Scalars['Int']>;
    companyId?: InputMaybe<Scalars['Int']>;
    createdBy?: InputMaybe<Scalars['String']>;
    flagDouble?: InputMaybe<Scalars['Int']>;
    modifiedBy?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    preparationMode?: InputMaybe<Scalars['Int']>;
    quantity?: InputMaybe<Scalars['Float']>;
    rotation?: InputMaybe<Scalars['String']>;
    supplierArticleCode?: InputMaybe<Scalars['String']>;
    supplierName?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateUserInput = {
    email?: InputMaybe<Scalars['String']>;
    organizationId?: InputMaybe<Scalars['String']>;
    roleId?: InputMaybe<Scalars['String']>;
    username?: InputMaybe<Scalars['String']>;
};

export type User = {
    __typename?: 'User';
    email?: Maybe<Scalars['String']>;
    /** String-based unique identifier. */
    id?: Maybe<Scalars['String']>;
    organizationId: Scalars['String'];
    password: Scalars['String'];
    roleId: Scalars['String'];
    username: Scalars['String'];
};

/** Field names for the User model */
export enum UserFieldName {
    Email = 'email',
    Id = 'id',
    OrganizationId = 'organizationId',
    Password = 'password',
    RoleId = 'roleId',
    Username = 'username'
}

/** Returns a list of User */
export type UserListResult = {
    __typename?: 'UserListResult';
    count: Scalars['Int'];
    itemsPerPage: Scalars['Int'];
    page: Scalars['Int'];
    results: Array<User>;
    totalPages: Scalars['Int'];
};

/** How to order the search results for User */
export type UserOrderByCriterion = {
    ascending?: Scalars['Boolean'];
    field: UserFieldName;
};

/** Attributes of User to filter onto */
export type UserSearchFilters = {
    email?: InputMaybe<Scalars['String']>;
    /** String-based unique identifier. */
    id?: InputMaybe<Scalars['String']>;
    organizationId?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
    roleId?: InputMaybe<Scalars['String']>;
    username?: InputMaybe<Scalars['String']>;
};

export type Warehouse = {
    __typename?: 'Warehouse';
    /** String-based unique identifier. */
    id?: Maybe<Scalars['String']>;
    /** Name of the Warehouse (e.g. `Roubaix (prod)`) */
    name: Scalars['String'];
    /** ID of the IntegratorOrganization that manages this Warehouse */
    organizationId: Scalars['String'];
};

/** Field names for the Warehouse model */
export enum WarehouseFieldName {
    Id = 'id',
    Name = 'name',
    OrganizationId = 'organizationId'
}

/** Returns a list of Warehouse */
export type WarehouseListResult = {
    __typename?: 'WarehouseListResult';
    count: Scalars['Int'];
    itemsPerPage: Scalars['Int'];
    page: Scalars['Int'];
    results: Array<Warehouse>;
    totalPages: Scalars['Int'];
};

/** How to order the search results for Warehouse */
export type WarehouseOrderByCriterion = {
    ascending?: Scalars['Boolean'];
    field: WarehouseFieldName;
};

/** Attributes of Warehouse to filter onto */
export type WarehouseSearchFilters = {
    /** String-based unique identifier. */
    id?: InputMaybe<Scalars['String']>;
    /** Name of the Warehouse (e.g. `Roubaix (prod)`) */
    name?: InputMaybe<Scalars['String']>;
    /** ID of the IntegratorOrganization that manages this Warehouse */
    organizationId?: InputMaybe<Scalars['String']>;
};

export type GetAllArticlesQueryVariables = Exact<{
    filters?: InputMaybe<ArticleSearchFilters>;
    orderBy?: InputMaybe<Array<ArticleOrderByCriterion> | ArticleOrderByCriterion>;
    page: Scalars['Int'];
    itemsPerPage: Scalars['Int'];
}>;

export type GetAllArticlesQuery = {
    __typename?: 'Query';
    articles: {
        __typename?: 'ArticleListResult';
        count: number;
        itemsPerPage: number;
        totalPages: number;
        results: Array<{
            __typename?: 'Article';
            id?: number | null | undefined;
            accountId: number;
            companyId: number;
            status: number;
            code: string;
            name: string;
            length: number;
            width: number;
            height: number;
            baseUnitWeight: number;
            boxWeight: number;
            boxQuantity: number;
            baseUnitPicking: boolean;
            boxPicking: boolean;
            cubingType: number;
            permanentProduct: boolean;
            additionalDescription?: string | null | undefined;
            supplierName?: string | null | undefined;
        }>;
    };
};

export type GetArticleByIdQueryVariables = Exact<{
    id: Scalars['Int'];
}>;

export type GetArticleByIdQuery = {
    __typename?: 'Query';
    article?:
        | {
              __typename?: 'Article';
              id?: number | null | undefined;
              accountId: number;
              companyId: number;
              status: number;
              code: string;
              name: string;
              length: number;
              width: number;
              height: number;
              baseUnitWeight: number;
              boxWeight: number;
              boxQuantity: number;
              baseUnitPicking: boolean;
              boxPicking: boolean;
              cubingType: number;
              permanentProduct: boolean;
              additionalDescription?: string | null | undefined;
              supplierName?: string | null | undefined;
              baseUnitPrice?: number | null | undefined;
              baseUnitRotation?: string | null | undefined;
              boxRotation?: string | null | undefined;
              featureTypeId?: number | null | undefined;
              created?: any | null | undefined;
              createdBy?: string | null | undefined;
              modified?: any | null | undefined;
              modifiedBy?: string | null | undefined;
              tariffClassification?: string | null | undefined;
              family?: string | null | undefined;
              subfamily?: string | null | undefined;
              groupingId?: string | null | undefined;
          }
        | null
        | undefined;
};

export type CreateArticleMutationVariables = Exact<{
    input: CreateArticleInput;
}>;

export type CreateArticleMutation = {
    __typename?: 'Mutation';
    createArticle: {
        __typename?: 'Article';
        id?: number | null | undefined;
        accountId: number;
        companyId: number;
        status: number;
        code: string;
        name: string;
        length: number;
        width: number;
        height: number;
        baseUnitWeight: number;
        boxWeight: number;
        boxQuantity: number;
        baseUnitPicking: boolean;
        boxPicking: boolean;
        cubingType: number;
        permanentProduct: boolean;
        additionalDescription?: string | null | undefined;
        supplierName?: string | null | undefined;
    };
};

export type ExportArticlesMutationVariables = Exact<{
    format?: InputMaybe<ExportFormat>;
    compression?: InputMaybe<ExportCompression>;
    separator?: InputMaybe<Scalars['String']>;
    orderBy?: InputMaybe<Array<ArticleOrderByCriterion> | ArticleOrderByCriterion>;
    filters?: InputMaybe<ArticleExportFilters>;
}>;

export type ExportArticlesMutation = {
    __typename?: 'Mutation';
    exportArticles: { __typename?: 'ExportResult'; url: string };
};

export type DeleteArticleMutationVariables = Exact<{
    id: Scalars['Int'];
}>;

export type DeleteArticleMutation = { __typename?: 'Mutation'; deleteArticle: boolean };

export type UpdateArticleMutationVariables = Exact<{
    id: Scalars['Int'];
    input: UpdateArticleInput;
}>;

export type UpdateArticleMutation = {
    __typename?: 'Mutation';
    updateArticle?:
        | {
              __typename?: 'Article';
              id?: number | null | undefined;
              accountId: number;
              companyId: number;
              status: number;
              code: string;
              name: string;
              length: number;
              width: number;
              height: number;
              baseUnitWeight: number;
              boxWeight: number;
              boxQuantity: number;
              baseUnitPicking: boolean;
              boxPicking: boolean;
              cubingType: number;
              permanentProduct: boolean;
              additionalDescription?: string | null | undefined;
              supplierName?: string | null | undefined;
          }
        | null
        | undefined;
};

export type GetAllBarcodesQueryVariables = Exact<{
    filters?: InputMaybe<BarcodeSearchFilters>;
    orderBy?: InputMaybe<Array<BarcodeOrderByCriterion> | BarcodeOrderByCriterion>;
    page: Scalars['Int'];
    itemsPerPage: Scalars['Int'];
}>;

export type GetAllBarcodesQuery = {
    __typename?: 'Query';
    barcodes: {
        __typename?: 'BarcodeListResult';
        count: number;
        itemsPerPage: number;
        totalPages: number;
        results: Array<{
            __typename?: 'Barcode';
            id?: number | null | undefined;
            accountId: number;
            companyId: number;
            articleId: number;
            name: string;
            rotation: string;
            preparationMode: number;
            flagDouble: number;
            supplierName?: string | null | undefined;
            supplierArticleCode?: string | null | undefined;
            quantity?: number | null | undefined;
        }>;
    };
};

export type GetBarcodeByIdQueryVariables = Exact<{
    id: Scalars['Int'];
}>;

export type GetBarcodeByIdQuery = {
    __typename?: 'Query';
    barcode?:
        | {
              __typename?: 'Barcode';
              id?: number | null | undefined;
              accountId: number;
              companyId: number;
              articleId: number;
              name: string;
              rotation: string;
              preparationMode: number;
              flagDouble: number;
              supplierName?: string | null | undefined;
              supplierArticleCode?: string | null | undefined;
              quantity?: number | null | undefined;
          }
        | null
        | undefined;
};

export type CreateBarcodeMutationVariables = Exact<{
    input: CreateBarcodeInput;
}>;

export type CreateBarcodeMutation = {
    __typename?: 'Mutation';
    createBarcode: {
        __typename?: 'Barcode';
        id?: number | null | undefined;
        accountId: number;
        companyId: number;
        articleId: number;
        name: string;
        rotation: string;
        preparationMode: number;
        flagDouble: number;
        supplierName?: string | null | undefined;
        supplierArticleCode?: string | null | undefined;
        quantity?: number | null | undefined;
    };
};

export type DeleteBarcodeMutationVariables = Exact<{
    id: Scalars['Int'];
}>;

export type DeleteBarcodeMutation = { __typename?: 'Mutation'; deleteBarcode: boolean };

export type LoginMutationVariables = Exact<{
    username: Scalars['String'];
    password: Scalars['String'];
    warehouseId: Scalars['ID'];
}>;

export type LoginMutation = {
    __typename?: 'Mutation';
    login?: { __typename?: 'LoginSuccess'; accessToken: string } | null | undefined;
};

export const GetAllArticlesDocument = `
    query GetAllArticles($filters: ArticleSearchFilters, $orderBy: [ArticleOrderByCriterion!], $page: Int!, $itemsPerPage: Int!) {
  articles(
    filters: $filters
    orderBy: $orderBy
    page: $page
    itemsPerPage: $itemsPerPage
  ) {
    count
    itemsPerPage
    totalPages
    results {
      id
      accountId
      companyId
      status
      code
      name
      length
      width
      height
      baseUnitWeight
      boxWeight
      boxQuantity
      baseUnitPicking
      boxPicking
      cubingType
      permanentProduct
      additionalDescription
      supplierName
    }
  }
}
    `;
export const useGetAllArticlesQuery = <TData = GetAllArticlesQuery, TError = any>(
    client: GraphQLClient,
    variables: GetAllArticlesQueryVariables,
    options?: UseQueryOptions<GetAllArticlesQuery, TError, TData>,
    headers?: RequestInit['headers']
) =>
    useQuery<GetAllArticlesQuery, TError, TData>(
        ['GetAllArticles', variables],
        fetcher<GetAllArticlesQuery, GetAllArticlesQueryVariables>(
            client,
            GetAllArticlesDocument,
            variables,
            headers
        ),
        options
    );
export const GetArticleByIdDocument = `
    query GetArticleById($id: Int!) {
  article(id: $id) {
    id
    accountId
    companyId
    status
    code
    name
    length
    width
    height
    baseUnitWeight
    boxWeight
    boxQuantity
    baseUnitPicking
    boxPicking
    cubingType
    permanentProduct
    additionalDescription
    supplierName
    baseUnitPrice
    baseUnitRotation
    boxRotation
    featureTypeId
    created
    createdBy
    modified
    modifiedBy
    tariffClassification
    family
    subfamily
    groupingId
  }
}
    `;
export const useGetArticleByIdQuery = <TData = GetArticleByIdQuery, TError = any>(
    client: GraphQLClient,
    variables: GetArticleByIdQueryVariables,
    options?: UseQueryOptions<GetArticleByIdQuery, TError, TData>,
    headers?: RequestInit['headers']
) =>
    useQuery<GetArticleByIdQuery, TError, TData>(
        ['GetArticleById', variables],
        fetcher<GetArticleByIdQuery, GetArticleByIdQueryVariables>(
            client,
            GetArticleByIdDocument,
            variables,
            headers
        ),
        options
    );
export const CreateArticleDocument = `
    mutation CreateArticle($input: CreateArticleInput!) {
  createArticle(input: $input) {
    id
    accountId
    companyId
    status
    code
    name
    length
    width
    height
    baseUnitWeight
    boxWeight
    boxQuantity
    baseUnitPicking
    boxPicking
    cubingType
    permanentProduct
    additionalDescription
    supplierName
  }
}
    `;
export const useCreateArticleMutation = <TError = any, TContext = any>(
    client: GraphQLClient,
    options?: UseMutationOptions<
        CreateArticleMutation,
        TError,
        CreateArticleMutationVariables,
        TContext
    >,
    headers?: RequestInit['headers']
) =>
    useMutation<CreateArticleMutation, TError, CreateArticleMutationVariables, TContext>(
        ['CreateArticle'],
        (variables?: CreateArticleMutationVariables) =>
            fetcher<CreateArticleMutation, CreateArticleMutationVariables>(
                client,
                CreateArticleDocument,
                variables,
                headers
            )(),
        options
    );
export const ExportArticlesDocument = `
    mutation ExportArticles($format: ExportFormat, $compression: ExportCompression, $separator: String, $orderBy: [ArticleOrderByCriterion!], $filters: ArticleExportFilters) {
  exportArticles(
    format: $format
    compression: $compression
    separator: $separator
    orderBy: $orderBy
    filters: $filters
  ) {
    url
  }
}
    `;
export const useExportArticlesMutation = <TError = any, TContext = any>(
    client: GraphQLClient,
    options?: UseMutationOptions<
        ExportArticlesMutation,
        TError,
        ExportArticlesMutationVariables,
        TContext
    >,
    headers?: RequestInit['headers']
) =>
    useMutation<ExportArticlesMutation, TError, ExportArticlesMutationVariables, TContext>(
        ['ExportArticles'],
        (variables?: ExportArticlesMutationVariables) =>
            fetcher<ExportArticlesMutation, ExportArticlesMutationVariables>(
                client,
                ExportArticlesDocument,
                variables,
                headers
            )(),
        options
    );
export const DeleteArticleDocument = `
    mutation DeleteArticle($id: Int!) {
  deleteArticle(id: $id)
}
    `;
export const useDeleteArticleMutation = <TError = any, TContext = any>(
    client: GraphQLClient,
    options?: UseMutationOptions<
        DeleteArticleMutation,
        TError,
        DeleteArticleMutationVariables,
        TContext
    >,
    headers?: RequestInit['headers']
) =>
    useMutation<DeleteArticleMutation, TError, DeleteArticleMutationVariables, TContext>(
        ['DeleteArticle'],
        (variables?: DeleteArticleMutationVariables) =>
            fetcher<DeleteArticleMutation, DeleteArticleMutationVariables>(
                client,
                DeleteArticleDocument,
                variables,
                headers
            )(),
        options
    );
export const UpdateArticleDocument = `
    mutation UpdateArticle($id: Int!, $input: UpdateArticleInput!) {
  updateArticle(id: $id, input: $input) {
    id
    accountId
    companyId
    status
    code
    name
    length
    width
    height
    baseUnitWeight
    boxWeight
    boxQuantity
    baseUnitPicking
    boxPicking
    cubingType
    permanentProduct
    additionalDescription
    supplierName
  }
}
    `;
export const useUpdateArticleMutation = <TError = any, TContext = any>(
    client: GraphQLClient,
    options?: UseMutationOptions<
        UpdateArticleMutation,
        TError,
        UpdateArticleMutationVariables,
        TContext
    >,
    headers?: RequestInit['headers']
) =>
    useMutation<UpdateArticleMutation, TError, UpdateArticleMutationVariables, TContext>(
        ['UpdateArticle'],
        (variables?: UpdateArticleMutationVariables) =>
            fetcher<UpdateArticleMutation, UpdateArticleMutationVariables>(
                client,
                UpdateArticleDocument,
                variables,
                headers
            )(),
        options
    );
export const GetAllBarcodesDocument = `
    query GetAllBarcodes($filters: BarcodeSearchFilters, $orderBy: [BarcodeOrderByCriterion!], $page: Int!, $itemsPerPage: Int!) {
  barcodes(
    filters: $filters
    orderBy: $orderBy
    page: $page
    itemsPerPage: $itemsPerPage
  ) {
    count
    itemsPerPage
    totalPages
    results {
      id
      accountId
      companyId
      articleId
      name
      rotation
      preparationMode
      flagDouble
      supplierName
      supplierArticleCode
      quantity
    }
  }
}
    `;
export const useGetAllBarcodesQuery = <TData = GetAllBarcodesQuery, TError = any>(
    client: GraphQLClient,
    variables: GetAllBarcodesQueryVariables,
    options?: UseQueryOptions<GetAllBarcodesQuery, TError, TData>,
    headers?: RequestInit['headers']
) =>
    useQuery<GetAllBarcodesQuery, TError, TData>(
        ['GetAllBarcodes', variables],
        fetcher<GetAllBarcodesQuery, GetAllBarcodesQueryVariables>(
            client,
            GetAllBarcodesDocument,
            variables,
            headers
        ),
        options
    );
export const GetBarcodeByIdDocument = `
    query GetBarcodeById($id: Int!) {
  barcode(id: $id) {
    id
    accountId
    companyId
    articleId
    name
    rotation
    preparationMode
    flagDouble
    supplierName
    supplierArticleCode
    quantity
  }
}
    `;
export const useGetBarcodeByIdQuery = <TData = GetBarcodeByIdQuery, TError = any>(
    client: GraphQLClient,
    variables: GetBarcodeByIdQueryVariables,
    options?: UseQueryOptions<GetBarcodeByIdQuery, TError, TData>,
    headers?: RequestInit['headers']
) =>
    useQuery<GetBarcodeByIdQuery, TError, TData>(
        ['GetBarcodeById', variables],
        fetcher<GetBarcodeByIdQuery, GetBarcodeByIdQueryVariables>(
            client,
            GetBarcodeByIdDocument,
            variables,
            headers
        ),
        options
    );
export const CreateBarcodeDocument = `
    mutation CreateBarcode($input: CreateBarcodeInput!) {
  createBarcode(input: $input) {
    id
    accountId
    companyId
    articleId
    name
    rotation
    preparationMode
    flagDouble
    supplierName
    supplierArticleCode
    quantity
  }
}
    `;
export const useCreateBarcodeMutation = <TError = any, TContext = any>(
    client: GraphQLClient,
    options?: UseMutationOptions<
        CreateBarcodeMutation,
        TError,
        CreateBarcodeMutationVariables,
        TContext
    >,
    headers?: RequestInit['headers']
) =>
    useMutation<CreateBarcodeMutation, TError, CreateBarcodeMutationVariables, TContext>(
        ['CreateBarcode'],
        (variables?: CreateBarcodeMutationVariables) =>
            fetcher<CreateBarcodeMutation, CreateBarcodeMutationVariables>(
                client,
                CreateBarcodeDocument,
                variables,
                headers
            )(),
        options
    );
export const DeleteBarcodeDocument = `
    mutation DeleteBarcode($id: Int!) {
  deleteBarcode(id: $id)
}
    `;
export const useDeleteBarcodeMutation = <TError = any, TContext = any>(
    client: GraphQLClient,
    options?: UseMutationOptions<
        DeleteBarcodeMutation,
        TError,
        DeleteBarcodeMutationVariables,
        TContext
    >,
    headers?: RequestInit['headers']
) =>
    useMutation<DeleteBarcodeMutation, TError, DeleteBarcodeMutationVariables, TContext>(
        ['DeleteBarcode'],
        (variables?: DeleteBarcodeMutationVariables) =>
            fetcher<DeleteBarcodeMutation, DeleteBarcodeMutationVariables>(
                client,
                DeleteBarcodeDocument,
                variables,
                headers
            )(),
        options
    );
export const LoginDocument = `
    mutation Login($username: String!, $password: String!, $warehouseId: ID!) {
  login(username: $username, password: $password, warehouseId: $warehouseId) {
    accessToken
  }
}
    `;
export const useLoginMutation = <TError = any, TContext = any>(
    client: GraphQLClient,
    options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
    headers?: RequestInit['headers']
) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
        ['Login'],
        (variables?: LoginMutationVariables) =>
            fetcher<LoginMutation, LoginMutationVariables>(
                client,
                LoginDocument,
                variables,
                headers
            )(),
        options
    );
