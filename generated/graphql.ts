import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
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
};

export type Article = {
  __typename?: 'Article';
  accountId: Scalars['Int'];
  additionalDescription?: Maybe<Scalars['String']>;
  barcodes: Array<Barcode>;
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
  id: Scalars['Int'];
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

export type Barcode = {
  __typename?: 'Barcode';
  accountId: Scalars['Int'];
  articleId: Scalars['Int'];
  companyId: Scalars['Int'];
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  flagDouble: Scalars['Int'];
  id: Scalars['Int'];
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  preparationMode: Scalars['Int'];
  quantity?: Maybe<Scalars['Float']>;
  rotation: Scalars['String'];
  supplierArticleCode?: Maybe<Scalars['String']>;
  supplierName?: Maybe<Scalars['String']>;
};

export type FiltersInput = {
  /** Height in centimeters (cm) */
  height: Scalars['Float'];
  /** Length in centimeters (cm) */
  length: Scalars['Float'];
  /** Width in centimeters (cm) */
  width: Scalars['Float'];
};

export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  /** A short-lived JWT that can be used to authenticate a user onto the platform */
  accessToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new Workspace */
  createWorkspace: WorkspaceType;
  /** Invite a new User via email */
  inviteUser: Scalars['String'];
  /** Obtain a JSON Web Token (JWT) to use in the frontend */
  login?: Maybe<LoginSuccess>;
  /** Reset a user's password */
  resetUser: Scalars['String'];
};


export type MutationCreateWorkspaceArgs = {
  name: Scalars['String'];
  ownerEmail: Scalars['String'];
};


export type MutationInviteUserArgs = {
  email: Scalars['String'];
  role: Scalars['String'];
  workspaceId: Scalars['ID'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
  workspaceId: Scalars['ID'];
};


export type MutationResetUserArgs = {
  username: Scalars['String'];
};

export type Permission = {
  __typename?: 'Permission';
  model: Scalars['String'];
  role: Role;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a given Article by its SKU */
  article: Article;
  /** List multiple articles */
  articles: Array<Article>;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<FiltersInput>;
  itemsPerPage?: Scalars['Int'];
  orderBy?: InputMaybe<Scalars['String']>;
  page?: Scalars['Int'];
};

export enum Role {
  Read = 'READ',
  Write = 'WRITE'
}

export type UserType = {
  __typename?: 'UserType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  permissions: Array<Permission>;
  username: Scalars['String'];
  workspace: WorkspaceType;
};

export type WorkspaceType = {
  __typename?: 'WorkspaceType';
  /** This is your workspace's auto-generated unique identifier. It can't be changed. */
  id: Scalars['String'];
  name: Scalars['String'];
  owner?: Maybe<UserType>;
  slug: Scalars['String'];
};

export type GetAllArticlesQueryVariables = Exact<{
  filters?: InputMaybe<FiltersInput>;
  orderBy?: InputMaybe<Scalars['String']>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetAllArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', id: number, accountId: number, companyId: number, status: number, code: string, name: string, length: number, width: number, height: number, baseUnitWeight: number, boxWeight: number, boxQuantity: number, baseUnitPicking: boolean, boxPicking: boolean, cubingType: number, permanentProduct: boolean, additionalDescription?: string | null | undefined, supplierName?: string | null | undefined }> };

export type GetArticleByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetArticleByIdQuery = { __typename?: 'Query', article: { __typename?: 'Article', id: number, accountId: number, companyId: number, status: number, code: string, name: string, length: number, width: number, height: number, baseUnitWeight: number, boxWeight: number, boxQuantity: number, baseUnitPicking: boolean, boxPicking: boolean, cubingType: number, permanentProduct: boolean, additionalDescription?: string | null | undefined, supplierName?: string | null | undefined, baseUnitPrice?: number | null | undefined, baseUnitRotation?: string | null | undefined, boxRotation?: string | null | undefined, featureTypeId?: number | null | undefined, created?: any | null | undefined, createdBy?: string | null | undefined, modified?: any | null | undefined, modifiedBy?: string | null | undefined, tariffClassification?: string | null | undefined, family?: string | null | undefined, subfamily?: string | null | undefined, groupingId?: string | null | undefined, barcodes: Array<{ __typename?: 'Barcode', id: number }> } };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  workspaceId: Scalars['ID'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginSuccess', accessToken: string } | null | undefined };


export const GetAllArticlesDocument = `
    query GetAllArticles($filters: FiltersInput, $orderBy: String, $page: Int!, $itemsPerPage: Int!) {
  articles(
    filters: $filters
    orderBy: $orderBy
    page: $page
    itemsPerPage: $itemsPerPage
  ) {
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
export const useGetAllArticlesQuery = <
      TData = GetAllArticlesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAllArticlesQueryVariables,
      options?: UseQueryOptions<GetAllArticlesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllArticlesQuery, TError, TData>(
      ['GetAllArticles', variables],
      fetcher<GetAllArticlesQuery, GetAllArticlesQueryVariables>(client, GetAllArticlesDocument, variables, headers),
      options
    );
export const GetArticleByIdDocument = `
    query GetArticleById($id: ID!) {
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
    barcodes {
      id
    }
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
export const useGetArticleByIdQuery = <
      TData = GetArticleByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetArticleByIdQueryVariables,
      options?: UseQueryOptions<GetArticleByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetArticleByIdQuery, TError, TData>(
      ['GetArticleById', variables],
      fetcher<GetArticleByIdQuery, GetArticleByIdQueryVariables>(client, GetArticleByIdDocument, variables, headers),
      options
    );
export const LoginDocument = `
    mutation Login($username: String!, $password: String!, $workspaceId: ID!) {
  login(username: $username, password: $password, workspaceId: $workspaceId) {
    accessToken
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      'Login',
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers)(),
      options
    );