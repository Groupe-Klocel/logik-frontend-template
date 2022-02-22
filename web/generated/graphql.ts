import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
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
    /** The GenericScalar scalar type represents a generic GraphQL scalar value that could be: List or Object. */
    JSONScalar: any;
    /** Represents NULL values */
    Void: any;
};

export type Article = {
    __typename?: 'Article';
    accountId: Scalars['Int'];
    additionalDescription?: Maybe<Scalars['String']>;
    barcodes?: Maybe<Array<Barcode>>;
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

/** Returns a list of Article */
export type ArticleListResult = {
    __typename?: 'ArticleListResult';
    count: Scalars['Int'];
    itemsPerPage: Scalars['Int'];
    page: Scalars['Int'];
    results: Array<Article>;
    totalPages: Scalars['Int'];
};

/** Attributes of Article to filter onto */
export type ArticleSearchFilters = {
    accountId?: InputMaybe<Scalars['String']>;
    additionalDescription?: InputMaybe<Scalars['String']>;
    barcodes?: InputMaybe<Scalars['String']>;
    baseUnitPicking?: InputMaybe<Scalars['String']>;
    baseUnitPrice?: InputMaybe<Scalars['String']>;
    baseUnitRotation?: InputMaybe<Scalars['String']>;
    baseUnitWeight?: InputMaybe<Scalars['String']>;
    boxPicking?: InputMaybe<Scalars['String']>;
    boxQuantity?: InputMaybe<Scalars['String']>;
    boxRotation?: InputMaybe<Scalars['String']>;
    boxWeight?: InputMaybe<Scalars['String']>;
    code?: InputMaybe<Scalars['String']>;
    companyId?: InputMaybe<Scalars['String']>;
    created?: InputMaybe<Scalars['String']>;
    createdBy?: InputMaybe<Scalars['String']>;
    cubingType?: InputMaybe<Scalars['String']>;
    family?: InputMaybe<Scalars['String']>;
    featureTypeId?: InputMaybe<Scalars['String']>;
    groupingId?: InputMaybe<Scalars['String']>;
    height?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    length?: InputMaybe<Scalars['String']>;
    modified?: InputMaybe<Scalars['String']>;
    modifiedBy?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    permanentProduct?: InputMaybe<Scalars['String']>;
    status?: InputMaybe<Scalars['String']>;
    subfamily?: InputMaybe<Scalars['String']>;
    supplierName?: InputMaybe<Scalars['String']>;
    tariffClassification?: InputMaybe<Scalars['String']>;
    width?: InputMaybe<Scalars['String']>;
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

/** Returns a list of Barcode */
export type BarcodeListResult = {
    __typename?: 'BarcodeListResult';
    count: Scalars['Int'];
    itemsPerPage: Scalars['Int'];
    page: Scalars['Int'];
    results: Array<Barcode>;
    totalPages: Scalars['Int'];
};

/** Attributes of Barcode to filter onto */
export type BarcodeSearchFilters = {
    accountId?: InputMaybe<Scalars['String']>;
    articleId?: InputMaybe<Scalars['String']>;
    companyId?: InputMaybe<Scalars['String']>;
    created?: InputMaybe<Scalars['String']>;
    createdBy?: InputMaybe<Scalars['String']>;
    flagDouble?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    modified?: InputMaybe<Scalars['String']>;
    modifiedBy?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    preparationMode?: InputMaybe<Scalars['String']>;
    quantity?: InputMaybe<Scalars['String']>;
    rotation?: InputMaybe<Scalars['String']>;
    supplierArticleCode?: InputMaybe<Scalars['String']>;
    supplierName?: InputMaybe<Scalars['String']>;
};

export type CreateArticleInput = {
    accountId: Scalars['Int'];
    additionalDescription?: InputMaybe<Scalars['String']>;
    barcodes?: InputMaybe<Array<CreateBarcodeInput>>;
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
    cubingType: Scalars['Int'];
    family?: InputMaybe<Scalars['String']>;
    featureTypeId?: InputMaybe<Scalars['Int']>;
    groupingId?: InputMaybe<Scalars['String']>;
    /** Height in centimeters (cm) */
    height: Scalars['Float'];
    /** Length in centimeters (cm) */
    length: Scalars['Float'];
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
    flagDouble: Scalars['Int'];
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

export type ExportArticlesResult = {
    __typename?: 'ExportArticlesResult';
    compression?: Maybe<ExportCompression>;
    format: ExportFormat;
    separator?: Maybe<Scalars['String']>;
    /** URL to download the exported file */
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

/** Facets that you can filter on during an Article search or export */
export type FacetFilters = {
    accountId?: InputMaybe<Scalars['String']>;
    additionalDescription?: InputMaybe<Scalars['String']>;
    baseUnitPicking?: InputMaybe<Scalars['String']>;
    baseUnitPrice?: InputMaybe<Scalars['String']>;
    baseUnitRotation?: InputMaybe<Scalars['String']>;
    baseUnitWeight?: InputMaybe<Scalars['String']>;
    boxPicking?: InputMaybe<Scalars['String']>;
    boxQuantity?: InputMaybe<Scalars['String']>;
    boxRotation?: InputMaybe<Scalars['String']>;
    boxWeight?: InputMaybe<Scalars['String']>;
    code?: InputMaybe<Scalars['String']>;
    companyId?: InputMaybe<Scalars['String']>;
    created?: InputMaybe<Scalars['String']>;
    createdBy?: InputMaybe<Scalars['String']>;
    cubingType?: InputMaybe<Scalars['String']>;
    family?: InputMaybe<Scalars['String']>;
    featureTypeId?: InputMaybe<Scalars['String']>;
    groupingId?: InputMaybe<Scalars['String']>;
    height?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    length?: InputMaybe<Scalars['String']>;
    modified?: InputMaybe<Scalars['String']>;
    modifiedBy?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    permanentProduct?: InputMaybe<Scalars['String']>;
    status?: InputMaybe<Scalars['String']>;
    subfamily?: InputMaybe<Scalars['String']>;
    supplierName?: InputMaybe<Scalars['String']>;
    tariffClassification?: InputMaybe<Scalars['String']>;
    width?: InputMaybe<Scalars['String']>;
};

export type InvokeResult = {
    __typename?: 'InvokeResult';
    /** Path to the Python module remote storage */
    codePath: Scalars['String'];
    /** Input to the `handler` function */
    event: Scalars['JSONScalar'];
    /** Result of the function execution */
    output: Scalars['JSONScalar'];
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

export type Mutation = {
    __typename?: 'Mutation';
    /** Create article */
    createArticle: Article;
    /** Create barcode */
    createBarcode: Barcode;
    /** Create a new Workspace */
    createWorkspace: Workspace;
    /** Delete barcode */
    deleteBarcode?: Maybe<Scalars['Void']>;
    /** Exports the whole Article table into a file on S3 */
    exportArticles: ExportArticlesResult;
    /** Invite a new User via email */
    inviteUser: Scalars['String'];
    /**
     * Executes a dynamic function on the fly, using the `event` as input.In order to execute your custom code, you must pass the code directly into the `code` argument as a string, and you must define a function named `handler` which takes a JSON-serializable value as it's only argument.For example something like:
     *
     * `def handler(event): return event["n"] ** 2`
     */
    invoke: InvokeResult;
    /** Obtain a JSON Web Token (JWT) to use in the frontend */
    login?: Maybe<LoginSuccess>;
    /** Renders a template given its filename and a context dictionary */
    renderDocument: RenderDocumentResponse;
    /** As a WorkspaceOwner, I can reset my Workspace's users password */
    updateUser: Scalars['String'];
};

export type MutationCreateArticleArgs = {
    input: CreateArticleInput;
};

export type MutationCreateBarcodeArgs = {
    input: CreateBarcodeInput;
};

export type MutationCreateWorkspaceArgs = {
    name: Scalars['String'];
    ownerEmail: Scalars['String'];
};

export type MutationDeleteBarcodeArgs = {
    id: Scalars['Int'];
};

export type MutationExportArticlesArgs = {
    compression?: InputMaybe<ExportCompression>;
    filters?: InputMaybe<FacetFilters>;
    format?: InputMaybe<ExportFormat>;
    separator?: InputMaybe<Scalars['String']>;
};

export type MutationInviteUserArgs = {
    email: Scalars['String'];
    role: Scalars['String'];
    workspaceId: Scalars['ID'];
};

export type MutationInvokeArgs = {
    codePath: Scalars['String'];
    event: Scalars['JSONScalar'];
    functionName?: Scalars['String'];
};

export type MutationLoginArgs = {
    password: Scalars['String'];
    username: Scalars['String'];
    workspaceId: Scalars['ID'];
};

export type MutationRenderDocumentArgs = {
    context: Scalars['JSONScalar'];
    templateFilename: Scalars['String'];
};

export type MutationUpdateUserArgs = {
    id: Scalars['Int'];
    password: Scalars['String'];
    username: Scalars['String'];
};

export type Permission = {
    __typename?: 'Permission';
    model: Scalars['String'];
    role: Role;
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
};

export type QueryArticleArgs = {
    id: Scalars['Int'];
};

export type QueryArticlesArgs = {
    filters?: InputMaybe<ArticleSearchFilters>;
    itemsPerPage?: Scalars['Int'];
    orderBy?: Scalars['String'];
    page?: Scalars['Int'];
};

export type QueryBarcodeArgs = {
    id: Scalars['Int'];
};

export type QueryBarcodesArgs = {
    filters?: InputMaybe<BarcodeSearchFilters>;
    itemsPerPage?: Scalars['Int'];
    orderBy?: Scalars['String'];
    page?: Scalars['Int'];
};

export type RenderDocumentResponse =
    | Document
    | MissingContext
    | TemplateDoesNotExist
    | TemplateError;

export enum Role {
    Read = 'READ',
    Write = 'WRITE'
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

export type User = {
    __typename?: 'User';
    createdAt?: Maybe<Scalars['DateTime']>;
    email?: Maybe<Scalars['String']>;
    permissions: Array<Permission>;
    username: Scalars['String'];
    workspace: Workspace;
};

export type Workspace = {
    __typename?: 'Workspace';
    /** This is your workspace's auto-generated unique identifier. It can't be changed. */
    id: Scalars['String'];
    name: Scalars['String'];
    owner?: Maybe<User>;
    slug: Scalars['String'];
};

export type GetAllArticlesQueryVariables = Exact<{
    filters?: InputMaybe<ArticleSearchFilters>;
    orderBy?: InputMaybe<Scalars['String']>;
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
              barcodes?:
                  | Array<{
                        __typename?: 'Barcode';
                        id?: number | null | undefined;
                        name: string;
                        flagDouble: number;
                    }>
                  | null
                  | undefined;
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

export type GetAllBarcodesQueryVariables = Exact<{
    filters?: InputMaybe<BarcodeSearchFilters>;
    orderBy?: InputMaybe<Scalars['String']>;
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

export type DeleteBarcodeMutation = {
    __typename?: 'Mutation';
    deleteBarcode?: any | null | undefined;
};

export type LoginMutationVariables = Exact<{
    username: Scalars['String'];
    password: Scalars['String'];
    workspaceId: Scalars['ID'];
}>;

export type LoginMutation = {
    __typename?: 'Mutation';
    login?: { __typename?: 'LoginSuccess'; accessToken: string } | null | undefined;
};

export const GetAllArticlesDocument = `
    query GetAllArticles($filters: ArticleSearchFilters, $orderBy: String, $page: Int!, $itemsPerPage: Int!) {
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
export const useGetAllArticlesQuery = <TData = GetAllArticlesQuery, TError = unknown>(
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
    barcodes {
      id
      name
      flagDouble
    }
  }
}
    `;
export const useGetArticleByIdQuery = <TData = GetArticleByIdQuery, TError = unknown>(
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
export const useCreateArticleMutation = <TError = unknown, TContext = unknown>(
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
        'CreateArticle',
        (variables?: CreateArticleMutationVariables) =>
            fetcher<CreateArticleMutation, CreateArticleMutationVariables>(
                client,
                CreateArticleDocument,
                variables,
                headers
            )(),
        options
    );
export const GetAllBarcodesDocument = `
    query GetAllBarcodes($filters: BarcodeSearchFilters, $orderBy: String, $page: Int!, $itemsPerPage: Int!) {
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
export const useGetAllBarcodesQuery = <TData = GetAllBarcodesQuery, TError = unknown>(
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
export const useGetBarcodeByIdQuery = <TData = GetBarcodeByIdQuery, TError = unknown>(
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
export const useCreateBarcodeMutation = <TError = unknown, TContext = unknown>(
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
        'CreateBarcode',
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
export const useDeleteBarcodeMutation = <TError = unknown, TContext = unknown>(
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
        'DeleteBarcode',
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
    mutation Login($username: String!, $password: String!, $workspaceId: ID!) {
  login(username: $username, password: $password, workspaceId: $workspaceId) {
    accessToken
  }
}
    `;
export const useLoginMutation = <TError = unknown, TContext = unknown>(
    client: GraphQLClient,
    options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
    headers?: RequestInit['headers']
) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
        'Login',
        (variables?: LoginMutationVariables) =>
            fetcher<LoginMutation, LoginMutationVariables>(
                client,
                LoginDocument,
                variables,
                headers
            )(),
        options
    );
