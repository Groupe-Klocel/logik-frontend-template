import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from 'react-query';
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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Article = {
  __typename?: 'Article';
  accountId: Scalars['Int'];
  additionalDescription?: Maybe<Scalars['String']>;
  barcodes: Array<Barcode>;
  baseUnitPicking?: Maybe<Scalars['Boolean']>;
  baseUnitPrice?: Maybe<Scalars['Float']>;
  baseUnitRotation?: Maybe<Scalars['String']>;
  baseUnitWeight?: Maybe<Scalars['Float']>;
  boxPicking?: Maybe<Scalars['Boolean']>;
  boxQuantity?: Maybe<Scalars['Float']>;
  boxRotation?: Maybe<Scalars['String']>;
  boxWeight?: Maybe<Scalars['Float']>;
  code: Scalars['String'];
  companyId: Scalars['Int'];
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  cubingType?: Maybe<Scalars['Int']>;
  family?: Maybe<Scalars['String']>;
  featureTypeId?: Maybe<Scalars['Int']>;
  groupingId?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permanentProduct?: Maybe<Scalars['Boolean']>;
  status: Scalars['Int'];
  subfamily?: Maybe<Scalars['String']>;
  supplierName?: Maybe<Scalars['String']>;
  tariffClassification?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

/** Filters to apply before the data export is made */
export type ArticleExportFilters = {
  accountId?: InputMaybe<Scalars['Int']>;
  additionalDescription?: InputMaybe<Scalars['String']>;
  baseUnitPicking?: InputMaybe<Scalars['Boolean']>;
  baseUnitPrice?: InputMaybe<Scalars['Float']>;
  baseUnitRotation?: InputMaybe<Scalars['String']>;
  baseUnitWeight?: InputMaybe<Scalars['Float']>;
  boxPicking?: InputMaybe<Scalars['Boolean']>;
  boxQuantity?: InputMaybe<Scalars['Float']>;
  boxRotation?: InputMaybe<Scalars['String']>;
  boxWeight?: InputMaybe<Scalars['Float']>;
  code?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Int']>;
  cubingType?: InputMaybe<Scalars['Int']>;
  family?: InputMaybe<Scalars['String']>;
  featureTypeId?: InputMaybe<Scalars['Int']>;
  groupingId?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  permanentProduct?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Int']>;
  subfamily?: InputMaybe<Scalars['String']>;
  supplierName?: InputMaybe<Scalars['String']>;
  tariffClassification?: InputMaybe<Scalars['String']>;
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
  height?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permanentProduct?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Int']>;
  subfamily?: InputMaybe<Scalars['String']>;
  supplierName?: InputMaybe<Scalars['String']>;
  tariffClassification?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type Barcode = {
  __typename?: 'Barcode';
  accountId: Scalars['Int'];
  article: Article;
  articleId: Scalars['String'];
  companyId: Scalars['Int'];
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  flagDouble?: Maybe<Scalars['Int']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  preparationMode?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Float']>;
  rotation: Scalars['String'];
  supplierArticleCode?: Maybe<Scalars['String']>;
  supplierName?: Maybe<Scalars['String']>;
};

export enum BarcodeCategory {
  Code39 = 'CODE39',
  Code128 = 'CODE128',
  Ean = 'EAN',
  Ean8 = 'EAN8',
  Ean13 = 'EAN13',
  Ean14 = 'EAN14',
  Gs1 = 'GS1',
  Gs1_128 = 'GS1_128',
  Gtin = 'GTIN',
  Isbn = 'ISBN',
  Isbn10 = 'ISBN10',
  Isbn13 = 'ISBN13',
  Issn = 'ISSN',
  Itf = 'ITF',
  Jan = 'JAN',
  Pzn = 'PZN',
  Upc = 'UPC',
  Upca = 'UPCA'
}

export type BarcodeError = {
  __typename?: 'BarcodeError';
  message: Scalars['String'];
};

/** Filters to apply before the data export is made */
export type BarcodeExportFilters = {
  accountId?: InputMaybe<Scalars['Int']>;
  articleId?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Int']>;
  flagDouble?: InputMaybe<Scalars['Int']>;
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
  articleId?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  flagDouble?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  preparationMode?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Float']>;
  rotation?: InputMaybe<Scalars['String']>;
  supplierArticleCode?: InputMaybe<Scalars['String']>;
  supplierName?: InputMaybe<Scalars['String']>;
};

export type Block = {
  __typename?: 'Block';
  /** Set a group of several blocs */
  blockGroup?: Maybe<Scalars['Int']>;
  /** Large area without racks where products are stored on top of each other. */
  bulk?: Maybe<Scalars['Boolean']>;
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  /** DEFAULT '-1', set level when bloc is a mezzanine (“-1”: “N/A”, “0”: “Level0”, “1”: “Level1”, “2”: “Level2”, …). Language conversion have to be set on this field. */
  level?: Maybe<Scalars['Int']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  /** Manage stock in transit mode. */
  moveable?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

/** Field names for the Block model */
export enum BlockFieldName {
  BlockGroup = 'blockGroup',
  Bulk = 'bulk',
  Comment = 'comment',
  Created = 'created',
  CreatedBy = 'createdBy',
  Id = 'id',
  Level = 'level',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Moveable = 'moveable',
  Name = 'name'
}

/** Returns a list of Block */
export type BlockListResult = {
  __typename?: 'BlockListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Block>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Block */
export type BlockOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: BlockFieldName;
};

/** Attributes of Block to filter onto */
export type BlockSearchFilters = {
  blockGroup?: InputMaybe<Scalars['Int']>;
  bulk?: InputMaybe<Scalars['Boolean']>;
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  moveable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Building = {
  __typename?: 'Building';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  awsAccessKeyId?: Maybe<Scalars['String']>;
  awsSecretAccessKey?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  contactMobile?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  postCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** Field names for the Building model */
export enum BuildingFieldName {
  Address1 = 'address1',
  Address2 = 'address2',
  Address3 = 'address3',
  AwsAccessKeyId = 'awsAccessKeyId',
  AwsSecretAccessKey = 'awsSecretAccessKey',
  City = 'city',
  ContactEmail = 'contactEmail',
  ContactMobile = 'contactMobile',
  ContactName = 'contactName',
  ContactPhone = 'contactPhone',
  Country = 'country',
  Created = 'created',
  CreatedBy = 'createdBy',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  PostCode = 'postCode',
  Status = 'status'
}

/** Returns a list of Building */
export type BuildingListResult = {
  __typename?: 'BuildingListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Building>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Building */
export type BuildingOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: BuildingFieldName;
};

/** Attributes of Building to filter onto */
export type BuildingSearchFilters = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  address3?: InputMaybe<Scalars['String']>;
  awsAccessKeyId?: InputMaybe<Scalars['String']>;
  awsSecretAccessKey?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactMobile?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

export type BulkCreateLocationsInput = {
  aisle: Scalars['Int'];
  /** Eminza : create inventory when stock below quantity */
  allowCycleCountStockMin?: InputMaybe<Scalars['Boolean']>;
  /** Eminza : replenishment location advisor */
  baseUnitRotation?: InputMaybe<Scalars['String']>;
  blockId: Scalars['String'];
  /** Eminza : replenishment location advisor */
  boxRotation?: InputMaybe<Scalars['String']>;
  column: Scalars['Int'];
  comment?: InputMaybe<Scalars['String']>;
  constraint?: InputMaybe<Scalars['String']>;
  level: Scalars['Int'];
  levelStep: Scalars['Int'];
  numberOfAisle: Scalars['Int'];
  numberOfColumn: Scalars['Int'];
  numberOfLevel: Scalars['Int'];
  numberOfPosition: Scalars['Int'];
  position: Scalars['Int'];
  replenish?: InputMaybe<Scalars['Boolean']>;
  replenishType?: InputMaybe<Scalars['Int']>;
  separator?: Scalars['String'];
};

export type ChangePasswordFailure = {
  __typename?: 'ChangePasswordFailure';
  message: Scalars['String'];
};

export type ChangePasswordResponse = ChangePasswordFailure | ChangePasswordSuccess;

export type ChangePasswordSuccess = {
  __typename?: 'ChangePasswordSuccess';
  message: Scalars['String'];
};

export type CreateArticleInput = {
  accountId: Scalars['Int'];
  additionalDescription?: InputMaybe<Scalars['String']>;
  baseUnitPicking?: InputMaybe<Scalars['Boolean']>;
  baseUnitPrice?: InputMaybe<Scalars['Float']>;
  baseUnitRotation?: InputMaybe<Scalars['String']>;
  baseUnitWeight?: InputMaybe<Scalars['Float']>;
  boxPicking?: InputMaybe<Scalars['Boolean']>;
  boxQuantity?: InputMaybe<Scalars['Float']>;
  boxRotation?: InputMaybe<Scalars['String']>;
  boxWeight?: InputMaybe<Scalars['Float']>;
  code: Scalars['String'];
  companyId: Scalars['Int'];
  cubingType?: InputMaybe<Scalars['Int']>;
  family?: InputMaybe<Scalars['String']>;
  featureTypeId?: InputMaybe<Scalars['Int']>;
  groupingId?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  permanentProduct?: InputMaybe<Scalars['Boolean']>;
  status: Scalars['Int'];
  subfamily?: InputMaybe<Scalars['String']>;
  supplierName?: InputMaybe<Scalars['String']>;
  tariffClassification?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type CreateBarcodeInput = {
  accountId: Scalars['Int'];
  articleId: Scalars['String'];
  companyId: Scalars['Int'];
  flagDouble?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  preparationMode?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Float']>;
  rotation: Scalars['String'];
  supplierArticleCode?: InputMaybe<Scalars['String']>;
  supplierName?: InputMaybe<Scalars['String']>;
};

export type CreateBlockInput = {
  /** Set a group of several blocs */
  blockGroup?: InputMaybe<Scalars['Int']>;
  /** Large area without racks where products are stored on top of each other. */
  bulk?: InputMaybe<Scalars['Boolean']>;
  comment?: InputMaybe<Scalars['String']>;
  /** DEFAULT '-1', set level when bloc is a mezzanine (“-1”: “N/A”, “0”: “Level0”, “1”: “Level1”, “2”: “Level2”, …). Language conversion have to be set on this field. */
  level?: InputMaybe<Scalars['Int']>;
  /** Manage stock in transit mode. */
  moveable?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type CreateBuildingInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  address3?: InputMaybe<Scalars['String']>;
  awsAccessKeyId?: InputMaybe<Scalars['String']>;
  awsSecretAccessKey?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactMobile?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  postCode?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

export type CreateLocationInput = {
  aisle: Scalars['Int'];
  /** Eminza : create inventory when stock below quantity */
  allowCycleCountStockMin?: InputMaybe<Scalars['Boolean']>;
  barcode: Scalars['String'];
  /** Eminza : replenishment location advisor */
  baseUnitRotation?: InputMaybe<Scalars['String']>;
  blockId: Scalars['String'];
  /** Eminza : replenishment location advisor */
  boxRotation?: InputMaybe<Scalars['String']>;
  column: Scalars['Int'];
  comment?: InputMaybe<Scalars['String']>;
  constraint?: InputMaybe<Scalars['String']>;
  level: Scalars['Int'];
  name: Scalars['String'];
  position: Scalars['Int'];
  replenish?: InputMaybe<Scalars['Boolean']>;
  replenishType?: InputMaybe<Scalars['Int']>;
};

export type CreateLocationResponse = Location | ValidationError;

export type CreatePatternInput = {
  name: Scalars['String'];
  patternType: Scalars['String'];
  status: Scalars['Int'];
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

export type CreatePatternPathInput = {
  name: Scalars['String'];
  patternId: Scalars['String'];
  status: Scalars['Int'];
};

export type CreatePatternPathLocationInput = {
  locationId: Scalars['String'];
  /** Location position in pattern_path */
  order: Scalars['Int'];
};

export type CreateStockOwnerInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  address3?: InputMaybe<Scalars['String']>;
  awsAccessKeyId?: InputMaybe<Scalars['String']>;
  awsSecretAccessKey?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  contact?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  exchangePrefix?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  s3ExchangeDir?: InputMaybe<Scalars['String']>;
  senderAddress1?: InputMaybe<Scalars['String']>;
  senderAddress2?: InputMaybe<Scalars['String']>;
  senderAddress3?: InputMaybe<Scalars['String']>;
  senderCity?: InputMaybe<Scalars['String']>;
  senderContact?: InputMaybe<Scalars['String']>;
  senderCountry?: InputMaybe<Scalars['String']>;
  senderCountryCode?: InputMaybe<Scalars['String']>;
  senderEmail?: InputMaybe<Scalars['String']>;
  senderMobile?: InputMaybe<Scalars['String']>;
  senderName?: InputMaybe<Scalars['String']>;
  senderPhone?: InputMaybe<Scalars['String']>;
  senderPostCode?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
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

export type Location = {
  __typename?: 'Location';
  aisle: Scalars['Int'];
  /** Eminza : create inventory when stock below quantity */
  allowCycleCountStockMin?: Maybe<Scalars['Boolean']>;
  barcode: Scalars['String'];
  /** Eminza : replenishment location advisor */
  baseUnitRotation?: Maybe<Scalars['String']>;
  block: Block;
  blockId: Scalars['String'];
  /** Eminza : replenishment location advisor */
  boxRotation?: Maybe<Scalars['String']>;
  column: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  constraint?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  position: Scalars['Int'];
  replenish?: Maybe<Scalars['Boolean']>;
  replenishType?: Maybe<Scalars['Int']>;
};

/** Filters to apply before the data export is made */
export type LocationExportFilters = {
  aisle?: InputMaybe<Scalars['Int']>;
  allowCycleCountStockMin?: InputMaybe<Scalars['Boolean']>;
  barcode?: InputMaybe<Scalars['String']>;
  baseUnitRotation?: InputMaybe<Scalars['String']>;
  blockId?: InputMaybe<Scalars['String']>;
  boxRotation?: InputMaybe<Scalars['String']>;
  column?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  constraint?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  replenish?: InputMaybe<Scalars['Boolean']>;
  replenishType?: InputMaybe<Scalars['Int']>;
};

/** Field names for the Location model */
export enum LocationFieldName {
  Aisle = 'aisle',
  AllowCycleCountStockMin = 'allowCycleCountStockMin',
  Barcode = 'barcode',
  BaseUnitRotation = 'baseUnitRotation',
  BlockId = 'blockId',
  BoxRotation = 'boxRotation',
  Column = 'column',
  Comment = 'comment',
  Constraint = 'constraint',
  Created = 'created',
  CreatedBy = 'createdBy',
  Id = 'id',
  Level = 'level',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  Position = 'position',
  Replenish = 'replenish',
  ReplenishType = 'replenishType'
}

/** Returns a list of Location */
export type LocationListResult = {
  __typename?: 'LocationListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Location>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Location */
export type LocationOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: LocationFieldName;
};

/** Attributes of Location to filter onto */
export type LocationSearchFilters = {
  aisle?: InputMaybe<Scalars['Int']>;
  allowCycleCountStockMin?: InputMaybe<Scalars['Boolean']>;
  barcode?: InputMaybe<Scalars['String']>;
  baseUnitRotation?: InputMaybe<Scalars['String']>;
  blockId?: InputMaybe<Scalars['String']>;
  boxRotation?: InputMaybe<Scalars['String']>;
  column?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  constraint?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  replenish?: InputMaybe<Scalars['Boolean']>;
  replenishType?: InputMaybe<Scalars['Int']>;
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

export enum ModeEnum {
  Read = 'READ',
  Write = 'WRITE'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Create multiple Locations */
  bulkCreateLocations: Array<Location>;
  /** Create multiple PatternPathLocations */
  bulkCreatePatternPathLocations: Array<PatternPathLocation>;
  /** Deletes all PatternPathLocations associated with a given PatternPath */
  bulkDeletePatternPathLocations: Scalars['Boolean'];
  /** Change own password using a temporary token */
  changePassword: ChangePasswordResponse;
  /** Create article */
  createArticle: Article;
  /** Create barcode */
  createBarcode: Barcode;
  /** Create a Block */
  createBlock: Block;
  /** Create a Building */
  createBuilding: Building;
  /** Create an IntegratorOrganization */
  createIntegratorOrganization: Organization;
  /** As an Integrator, I can invite a fellow Integrator */
  createIntegratorUser: User;
  createLocation: CreateLocationResponse;
  /** Create a Pattern */
  createPattern: Pattern;
  /** Create a PatternPath */
  createPatternPath: PatternPath;
  /** Create a new Role */
  createRole: RoleType;
  /** Create stock owner */
  createStockOwner: StockOwner;
  /** Create a new Warehouse */
  createWarehouse: Warehouse;
  /** Delete article */
  deleteArticle: Scalars['Boolean'];
  /** Delete barcode */
  deleteBarcode: Scalars['Boolean'];
  /** Delete a Block */
  deleteBlock: Scalars['Boolean'];
  /** Delete a Location */
  deleteLocation: Scalars['Boolean'];
  deleteOrganization: Scalars['Boolean'];
  /** Delete a Pattern */
  deletePattern: Scalars['Boolean'];
  /** Delete a PatternPath */
  deletePatternPath: Scalars['Boolean'];
  deleteRole: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteWarehouse: Scalars['Boolean'];
  /** Exports Articles into a file */
  exportArticles: ExportResult;
  /** Exports Barcodes into a file */
  exportBarcodes: ExportResult;
  /** Exports Locations into a file */
  exportLocations: ExportResult;
  /** As an Integrator, I can invite a ClientUser */
  inviteClientUser: Scalars['Boolean'];
  /** Obtain a JSON Web Token (JWT) to use in the frontend */
  login?: Maybe<LoginSuccess>;
  /** Renders a barcode into a PDF document uploaded onto S3, then returns the URL to download the document */
  renderBarcode: RenderBarcodeResponse;
  /** Renders a template given its filename and a context dictionary */
  renderDocument: RenderDocumentResponse;
  /** Sends an email to reset the User's password */
  resetPassword: ResetPasswordResponse;
  /** Delete Stock Owner => update status */
  softDeleteStockOwner: Scalars['Boolean'];
  /** Update article */
  updateArticle?: Maybe<Article>;
  /** Update barcode */
  updateBarcode?: Maybe<Barcode>;
  /** Update block */
  updateBlock?: Maybe<Block>;
  /** Update building */
  updateBuilding?: Maybe<Building>;
  /** Update Location */
  updateLocation?: Maybe<Location>;
  /** Update Pattern */
  updatePattern?: Maybe<Pattern>;
  /** Update PatternPath */
  updatePatternPath?: Maybe<PatternPath>;
  /** Update a Role */
  updateRole?: Maybe<RoleType>;
  /** Update stock owner */
  updateStockOwner?: Maybe<StockOwner>;
  updateUser?: Maybe<User>;
};


export type MutationBulkCreateLocationsArgs = {
  input: BulkCreateLocationsInput;
};


export type MutationBulkCreatePatternPathLocationsArgs = {
  inputs: Array<CreatePatternPathLocationInput>;
  patternPathId: Scalars['String'];
};


export type MutationBulkDeletePatternPathLocationsArgs = {
  patternPathId: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  password: Scalars['String'];
  password2: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreateArticleArgs = {
  input: CreateArticleInput;
};


export type MutationCreateBarcodeArgs = {
  input: CreateBarcodeInput;
};


export type MutationCreateBlockArgs = {
  input: CreateBlockInput;
};


export type MutationCreateBuildingArgs = {
  input: CreateBuildingInput;
};


export type MutationCreateIntegratorOrganizationArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
};


export type MutationCreateIntegratorUserArgs = {
  email: Scalars['String'];
  organizationId: Scalars['String'];
  password: Scalars['String'];
  roleId: Scalars['String'];
};


export type MutationCreateLocationArgs = {
  input: CreateLocationInput;
};


export type MutationCreatePatternArgs = {
  input: CreatePatternInput;
};


export type MutationCreatePatternPathArgs = {
  input: CreatePatternPathInput;
};


export type MutationCreateRoleArgs = {
  name: Scalars['String'];
  permissions: Array<PermissionInput>;
};


export type MutationCreateStockOwnerArgs = {
  input: CreateStockOwnerInput;
};


export type MutationCreateWarehouseArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  organizationId: Scalars['ID'];
};


export type MutationDeleteArticleArgs = {
  id: Scalars['String'];
};


export type MutationDeleteBarcodeArgs = {
  id: Scalars['String'];
};


export type MutationDeleteBlockArgs = {
  id: Scalars['String'];
};


export type MutationDeleteLocationArgs = {
  id: Scalars['String'];
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['String'];
};


export type MutationDeletePatternArgs = {
  id: Scalars['String'];
};


export type MutationDeletePatternPathArgs = {
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


export type MutationExportLocationsArgs = {
  compression?: InputMaybe<ExportCompression>;
  filters?: InputMaybe<LocationExportFilters>;
  format?: InputMaybe<ExportFormat>;
  orderBy?: InputMaybe<Array<LocationOrderByCriterion>>;
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


export type MutationRenderBarcodeArgs = {
  category?: BarcodeCategory;
  code: Scalars['String'];
  pages?: Scalars['Int'];
};


export type MutationRenderDocumentArgs = {
  context: Scalars['JSON'];
  templateFilename: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  callbackUrl: Scalars['String'];
  email: Scalars['String'];
};


export type MutationSoftDeleteStockOwnerArgs = {
  stockOwnerId: Scalars['String'];
};


export type MutationUpdateArticleArgs = {
  id: Scalars['String'];
  input: UpdateArticleInput;
};


export type MutationUpdateBarcodeArgs = {
  id: Scalars['String'];
  input: UpdateBarcodeInput;
};


export type MutationUpdateBlockArgs = {
  id: Scalars['String'];
  input: UpdateBlockInput;
};


export type MutationUpdateBuildingArgs = {
  id: Scalars['String'];
  input: UpdateBuildingInput;
};


export type MutationUpdateLocationArgs = {
  id: Scalars['String'];
  input: UpdateLocationInput;
};


export type MutationUpdatePatternArgs = {
  id: Scalars['String'];
  input: UpdatePatternInput;
};


export type MutationUpdatePatternPathArgs = {
  id: Scalars['String'];
  input: UpdatePatternPathInput;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<PermissionInput>>;
};


export type MutationUpdateStockOwnerArgs = {
  id: Scalars['String'];
  input: UpdateStockOwnerInput;
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
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** Organization that manages this one (e.g. integrator org to its client) */
  parentOrganizationId?: Maybe<Scalars['String']>;
};

/** Field names for the Organization model */
export enum OrganizationFieldName {
  AwsAccessKeyId = 'awsAccessKeyId',
  AwsSecretAccessKey = 'awsSecretAccessKey',
  Created = 'created',
  CreatedBy = 'createdBy',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
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
  awsAccessKeyId?: InputMaybe<Scalars['String']>;
  awsSecretAccessKey?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parentOrganizationId?: InputMaybe<Scalars['String']>;
};

export type Pattern = {
  __typename?: 'Pattern';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  paths: Array<PatternPath>;
  patternType: Scalars['String'];
  status: Scalars['Int'];
  stockOwnerId?: Maybe<Scalars['String']>;
};

/** Field names for the Pattern model */
export enum PatternFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  PatternType = 'patternType',
  Status = 'status',
  StockOwnerId = 'stockOwnerId'
}

/** Returns a list of Pattern */
export type PatternListResult = {
  __typename?: 'PatternListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Pattern>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Pattern */
export type PatternOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: PatternFieldName;
};

export type PatternPath = {
  __typename?: 'PatternPath';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  locations: Array<PatternPathLocation>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  patternId: Scalars['String'];
  status: Scalars['Int'];
};

/** Field names for the PatternPath model */
export enum PatternPathFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  PatternId = 'patternId',
  Status = 'status'
}

/** Returns a list of PatternPath */
export type PatternPathListResult = {
  __typename?: 'PatternPathListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<PatternPath>;
  totalPages: Scalars['Int'];
};

export type PatternPathLocation = {
  __typename?: 'PatternPathLocation';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  location: Location;
  locationId: Scalars['String'];
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  /** Location position in pattern_path */
  order: Scalars['Int'];
  patternPathId: Scalars['String'];
};

/** Field names for the PatternPathLocation model */
export enum PatternPathLocationFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  Id = 'id',
  LocationId = 'locationId',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Order = 'order',
  PatternPathId = 'patternPathId'
}

/** Returns a list of PatternPathLocation */
export type PatternPathLocationListResult = {
  __typename?: 'PatternPathLocationListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<PatternPathLocation>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for PatternPathLocation */
export type PatternPathLocationOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: PatternPathLocationFieldName;
};

/** Attributes of PatternPathLocation to filter onto */
export type PatternPathLocationSearchFilters = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  patternPathId?: InputMaybe<Scalars['String']>;
};

/** How to order the search results for PatternPath */
export type PatternPathOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: PatternPathFieldName;
};

/** Attributes of PatternPath to filter onto */
export type PatternPathSearchFilters = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  patternId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** Attributes of Pattern to filter onto */
export type PatternSearchFilters = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  patternType?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

export type PermissionInput = {
  mode: ModeEnum;
  table: Table;
};

export type PermissionType = {
  __typename?: 'PermissionType';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  /** Read/write permission */
  mode: Scalars['String'];
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  roleId: Scalars['String'];
  /** The table to apply permissions on (e.g. Article) */
  table: Scalars['String'];
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
  /** Get a Block */
  block?: Maybe<Block>;
  /** Search Blocks */
  blocks: BlockListResult;
  /** Get a Building */
  building?: Maybe<Building>;
  /** Search Buildings */
  buildings: BuildingListResult;
  /** Get a Location */
  location?: Maybe<Location>;
  /** Search Locations */
  locations: LocationListResult;
  me: User;
  organizations: OrganizationListResult;
  /** Get a Pattern */
  pattern?: Maybe<Pattern>;
  /** Get a PatternPath */
  patternPath?: Maybe<PatternPath>;
  /** Search PatternPathLocations */
  patternPathLocations: PatternPathLocationListResult;
  /** Search PatternPaths */
  patternPaths: PatternPathListResult;
  /** Search Patterns */
  patterns: PatternListResult;
  roles: RoleListResult;
  /** Retrieve a given StockOwner by its ID */
  stockOwner?: Maybe<StockOwner>;
  /** List multiple StockOwner */
  stockOwners: StockOwnerListResult;
  users: UserListResult;
  warehouses: WarehouseListResult;
};


export type QueryArticleArgs = {
  id: Scalars['String'];
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  orderBy?: InputMaybe<Array<ArticleOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryBarcodeArgs = {
  id: Scalars['String'];
};


export type QueryBarcodesArgs = {
  filters?: InputMaybe<BarcodeSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  orderBy?: InputMaybe<Array<BarcodeOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryBlockArgs = {
  id: Scalars['String'];
};


export type QueryBlocksArgs = {
  filters?: InputMaybe<BlockSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  orderBy?: InputMaybe<Array<BlockOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryBuildingArgs = {
  id: Scalars['String'];
};


export type QueryBuildingsArgs = {
  filters?: InputMaybe<BuildingSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  orderBy?: InputMaybe<Array<BuildingOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryLocationArgs = {
  id: Scalars['String'];
};


export type QueryLocationsArgs = {
  filters?: InputMaybe<LocationSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  orderBy?: InputMaybe<Array<LocationOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryOrganizationsArgs = {
  filters?: InputMaybe<OrganizationSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  orderBy?: InputMaybe<Array<OrganizationOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryPatternArgs = {
  id: Scalars['String'];
};


export type QueryPatternPathArgs = {
  id: Scalars['String'];
};


export type QueryPatternPathLocationsArgs = {
  filters?: InputMaybe<PatternPathLocationSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  orderBy?: InputMaybe<Array<PatternPathLocationOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryPatternPathsArgs = {
  filters?: InputMaybe<PatternPathSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  orderBy?: InputMaybe<Array<PatternPathOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryPatternsArgs = {
  filters?: InputMaybe<PatternSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  orderBy?: InputMaybe<Array<PatternOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryRolesArgs = {
  filters?: InputMaybe<RoleSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  orderBy?: InputMaybe<Array<RoleOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryStockOwnerArgs = {
  id: Scalars['String'];
};


export type QueryStockOwnersArgs = {
  filters?: InputMaybe<StockOwnerSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  orderBy?: InputMaybe<Array<StockOwnerOrderByCriterion>>;
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

export type RenderBarcodeResponse = BarcodeError | RenderedDocument;

export type RenderDocumentResponse = MissingContext | RenderedDocument | TemplateDoesNotExist | TemplateError;

export type RenderedDocument = {
  __typename?: 'RenderedDocument';
  url: Scalars['String'];
};

export type ResetPasswordFailure = {
  __typename?: 'ResetPasswordFailure';
  message: Scalars['String'];
};

export type ResetPasswordResponse = ResetPasswordFailure | ResetPasswordSuccess;

export type ResetPasswordSuccess = {
  __typename?: 'ResetPasswordSuccess';
  message: Scalars['String'];
};

/** Field names for the Role model */
export enum RoleFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name'
}

/** Returns a list of Role */
export type RoleListResult = {
  __typename?: 'RoleListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<RoleType>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Role */
export type RoleOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: RoleFieldName;
};

/** Attributes of Role to filter onto */
export type RoleSearchFilters = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type RoleType = {
  __typename?: 'RoleType';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions: Array<PermissionType>;
};

export type StockOwner = {
  __typename?: 'StockOwner';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  awsAccessKeyId?: Maybe<Scalars['String']>;
  awsSecretAccessKey?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  exchangePrefix?: Maybe<Scalars['String']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  s3ExchangeDir?: Maybe<Scalars['String']>;
  senderAddress1?: Maybe<Scalars['String']>;
  senderAddress2?: Maybe<Scalars['String']>;
  senderAddress3?: Maybe<Scalars['String']>;
  senderCity?: Maybe<Scalars['String']>;
  senderContact?: Maybe<Scalars['String']>;
  senderCountry?: Maybe<Scalars['String']>;
  senderCountryCode?: Maybe<Scalars['String']>;
  senderEmail?: Maybe<Scalars['String']>;
  senderMobile?: Maybe<Scalars['String']>;
  senderName?: Maybe<Scalars['String']>;
  senderPhone?: Maybe<Scalars['String']>;
  senderPostCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** Field names for the StockOwner model */
export enum StockOwnerFieldName {
  Address1 = 'address1',
  Address2 = 'address2',
  Address3 = 'address3',
  AwsAccessKeyId = 'awsAccessKeyId',
  AwsSecretAccessKey = 'awsSecretAccessKey',
  City = 'city',
  Contact = 'contact',
  Country = 'country',
  CountryCode = 'countryCode',
  Created = 'created',
  CreatedBy = 'createdBy',
  Email = 'email',
  ExchangePrefix = 'exchangePrefix',
  Id = 'id',
  LogoUrl = 'logoUrl',
  Mobile = 'mobile',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  Phone = 'phone',
  PostCode = 'postCode',
  S3ExchangeDir = 's3ExchangeDir',
  SenderAddress1 = 'senderAddress1',
  SenderAddress2 = 'senderAddress2',
  SenderAddress3 = 'senderAddress3',
  SenderCity = 'senderCity',
  SenderContact = 'senderContact',
  SenderCountry = 'senderCountry',
  SenderCountryCode = 'senderCountryCode',
  SenderEmail = 'senderEmail',
  SenderMobile = 'senderMobile',
  SenderName = 'senderName',
  SenderPhone = 'senderPhone',
  SenderPostCode = 'senderPostCode',
  Status = 'status'
}

/** Returns a list of StockOwner */
export type StockOwnerListResult = {
  __typename?: 'StockOwnerListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<StockOwner>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for StockOwner */
export type StockOwnerOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: StockOwnerFieldName;
};

/** Attributes of StockOwner to filter onto */
export type StockOwnerSearchFilters = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  address3?: InputMaybe<Scalars['String']>;
  awsAccessKeyId?: InputMaybe<Scalars['String']>;
  awsSecretAccessKey?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  contact?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  exchangePrefix?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  s3ExchangeDir?: InputMaybe<Scalars['String']>;
  senderAddress1?: InputMaybe<Scalars['String']>;
  senderAddress2?: InputMaybe<Scalars['String']>;
  senderAddress3?: InputMaybe<Scalars['String']>;
  senderCity?: InputMaybe<Scalars['String']>;
  senderContact?: InputMaybe<Scalars['String']>;
  senderCountry?: InputMaybe<Scalars['String']>;
  senderCountryCode?: InputMaybe<Scalars['String']>;
  senderEmail?: InputMaybe<Scalars['String']>;
  senderMobile?: InputMaybe<Scalars['String']>;
  senderName?: InputMaybe<Scalars['String']>;
  senderPhone?: InputMaybe<Scalars['String']>;
  senderPostCode?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

export enum Table {
  Article = 'ARTICLE',
  Barcode = 'BARCODE',
  Block = 'BLOCK',
  Building = 'BUILDING',
  Location = 'LOCATION',
  Organization = 'ORGANIZATION',
  Pattern = 'PATTERN',
  PatternPath = 'PATTERN_PATH',
  Role = 'ROLE',
  StockOwner = 'STOCK_OWNER',
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
  baseUnitWeight?: InputMaybe<Scalars['Float']>;
  boxPicking?: InputMaybe<Scalars['Boolean']>;
  boxQuantity?: InputMaybe<Scalars['Float']>;
  boxRotation?: InputMaybe<Scalars['String']>;
  boxWeight?: InputMaybe<Scalars['Float']>;
  code?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Int']>;
  cubingType?: InputMaybe<Scalars['Int']>;
  family?: InputMaybe<Scalars['String']>;
  featureTypeId?: InputMaybe<Scalars['Int']>;
  groupingId?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  permanentProduct?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Int']>;
  subfamily?: InputMaybe<Scalars['String']>;
  supplierName?: InputMaybe<Scalars['String']>;
  tariffClassification?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

/** Values to update the existing record with */
export type UpdateBarcodeInput = {
  accountId?: InputMaybe<Scalars['Int']>;
  articleId?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Int']>;
  flagDouble?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  preparationMode?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Float']>;
  rotation?: InputMaybe<Scalars['String']>;
  supplierArticleCode?: InputMaybe<Scalars['String']>;
  supplierName?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateBlockInput = {
  blockGroup?: InputMaybe<Scalars['Int']>;
  bulk?: InputMaybe<Scalars['Boolean']>;
  comment?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  moveable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateBuildingInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  address3?: InputMaybe<Scalars['String']>;
  awsAccessKeyId?: InputMaybe<Scalars['String']>;
  awsSecretAccessKey?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactMobile?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** Values to update the existing record with */
export type UpdateLocationInput = {
  aisle?: InputMaybe<Scalars['Int']>;
  allowCycleCountStockMin?: InputMaybe<Scalars['Boolean']>;
  barcode?: InputMaybe<Scalars['String']>;
  baseUnitRotation?: InputMaybe<Scalars['String']>;
  blockId?: InputMaybe<Scalars['String']>;
  boxRotation?: InputMaybe<Scalars['String']>;
  column?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  constraint?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  replenish?: InputMaybe<Scalars['Boolean']>;
  replenishType?: InputMaybe<Scalars['Int']>;
};

/** Values to update the existing record with */
export type UpdatePatternInput = {
  name?: InputMaybe<Scalars['String']>;
  patternType?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdatePatternPathInput = {
  name?: InputMaybe<Scalars['String']>;
  patternId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** Values to update the existing record with */
export type UpdateStockOwnerInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  address3?: InputMaybe<Scalars['String']>;
  awsAccessKeyId?: InputMaybe<Scalars['String']>;
  awsSecretAccessKey?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  contact?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  exchangePrefix?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  s3ExchangeDir?: InputMaybe<Scalars['String']>;
  senderAddress1?: InputMaybe<Scalars['String']>;
  senderAddress2?: InputMaybe<Scalars['String']>;
  senderAddress3?: InputMaybe<Scalars['String']>;
  senderCity?: InputMaybe<Scalars['String']>;
  senderContact?: InputMaybe<Scalars['String']>;
  senderCountry?: InputMaybe<Scalars['String']>;
  senderCountryCode?: InputMaybe<Scalars['String']>;
  senderEmail?: InputMaybe<Scalars['String']>;
  senderMobile?: InputMaybe<Scalars['String']>;
  senderName?: InputMaybe<Scalars['String']>;
  senderPhone?: InputMaybe<Scalars['String']>;
  senderPostCode?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** Values to update the existing record with */
export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  roleId?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  organizationId: Scalars['String'];
  password: Scalars['String'];
  role: RoleType;
  roleId: Scalars['String'];
  username: Scalars['String'];
};

/** Field names for the User model */
export enum UserFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  Email = 'email',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
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
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  roleId?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ValidationError = {
  __typename?: 'ValidationError';
  message: Scalars['String'];
};

export type Warehouse = {
  __typename?: 'Warehouse';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  /** Name of the Warehouse (e.g. `Roubaix (prod)`) */
  name: Scalars['String'];
  organization: Organization;
  /** ID of the IntegratorOrganization that manages this Warehouse */
  organizationId: Scalars['String'];
};

/** Field names for the Warehouse model */
export enum WarehouseFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
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
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
};

export type GetAllArticlesQueryVariables = Exact<{
  filters?: InputMaybe<ArticleSearchFilters>;
  orderBy?: InputMaybe<Array<ArticleOrderByCriterion> | ArticleOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetAllArticlesQuery = { __typename?: 'Query', articles: { __typename?: 'ArticleListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'Article', id?: string | null, accountId: number, companyId: number, status: number, code: string, name: string, length?: number | null, width?: number | null, height?: number | null, baseUnitWeight?: number | null, boxWeight?: number | null, boxQuantity?: number | null, baseUnitPicking?: boolean | null, boxPicking?: boolean | null, cubingType?: number | null, permanentProduct?: boolean | null, additionalDescription?: string | null, supplierName?: string | null }> } };

export type GetArticleByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetArticleByIdQuery = { __typename?: 'Query', article?: { __typename?: 'Article', id?: string | null, accountId: number, companyId: number, status: number, code: string, name: string, length?: number | null, width?: number | null, height?: number | null, baseUnitWeight?: number | null, boxWeight?: number | null, boxQuantity?: number | null, baseUnitPicking?: boolean | null, boxPicking?: boolean | null, cubingType?: number | null, permanentProduct?: boolean | null, additionalDescription?: string | null, supplierName?: string | null, baseUnitPrice?: number | null, baseUnitRotation?: string | null, boxRotation?: string | null, featureTypeId?: number | null, tariffClassification?: string | null, family?: string | null, subfamily?: string | null, groupingId?: string | null } | null };

export type GetArticleIdsQueryVariables = Exact<{
  filters?: InputMaybe<ArticleSearchFilters>;
  orderBy?: InputMaybe<Array<ArticleOrderByCriterion> | ArticleOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetArticleIdsQuery = { __typename?: 'Query', articles: { __typename?: 'ArticleListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'Article', id?: string | null, name: string }> } };

export type CreateArticleMutationVariables = Exact<{
  input: CreateArticleInput;
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', createArticle: { __typename?: 'Article', id?: string | null, accountId: number, companyId: number, status: number, code: string, name: string, length?: number | null, width?: number | null, height?: number | null, baseUnitWeight?: number | null, boxWeight?: number | null, boxQuantity?: number | null, baseUnitPicking?: boolean | null, boxPicking?: boolean | null, cubingType?: number | null, permanentProduct?: boolean | null, additionalDescription?: string | null, supplierName?: string | null } };

export type ExportArticlesMutationVariables = Exact<{
  format?: InputMaybe<ExportFormat>;
  compression?: InputMaybe<ExportCompression>;
  separator?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<ArticleOrderByCriterion> | ArticleOrderByCriterion>;
  filters?: InputMaybe<ArticleExportFilters>;
}>;


export type ExportArticlesMutation = { __typename?: 'Mutation', exportArticles: { __typename?: 'ExportResult', url: string } };

export type DeleteArticleMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteArticleMutation = { __typename?: 'Mutation', deleteArticle: boolean };

export type UpdateArticleMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateArticleInput;
}>;


export type UpdateArticleMutation = { __typename?: 'Mutation', updateArticle?: { __typename?: 'Article', id?: string | null, accountId: number, companyId: number, status: number, code: string, name: string, length?: number | null, width?: number | null, height?: number | null, baseUnitWeight?: number | null, boxWeight?: number | null, boxQuantity?: number | null, baseUnitPicking?: boolean | null, boxPicking?: boolean | null, cubingType?: number | null, permanentProduct?: boolean | null, additionalDescription?: string | null, supplierName?: string | null } | null };

export type GetAllBarcodesQueryVariables = Exact<{
  filters?: InputMaybe<BarcodeSearchFilters>;
  orderBy?: InputMaybe<Array<BarcodeOrderByCriterion> | BarcodeOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetAllBarcodesQuery = { __typename?: 'Query', barcodes: { __typename?: 'BarcodeListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'Barcode', id?: string | null, accountId: number, companyId: number, articleId: string, name: string, rotation: string, preparationMode?: number | null, flagDouble?: number | null, supplierName?: string | null, supplierArticleCode?: string | null, quantity?: number | null }> } };

export type GetBarcodeByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetBarcodeByIdQuery = { __typename?: 'Query', barcode?: { __typename?: 'Barcode', id?: string | null, accountId: number, companyId: number, articleId: string, name: string, rotation: string, preparationMode?: number | null, flagDouble?: number | null, supplierName?: string | null, supplierArticleCode?: string | null, quantity?: number | null, article: { __typename?: 'Article', name: string } } | null };

export type CreateBarcodeMutationVariables = Exact<{
  input: CreateBarcodeInput;
}>;


export type CreateBarcodeMutation = { __typename?: 'Mutation', createBarcode: { __typename?: 'Barcode', id?: string | null, accountId: number, companyId: number, articleId: string, name: string, rotation: string, preparationMode?: number | null, flagDouble?: number | null, supplierName?: string | null, supplierArticleCode?: string | null, quantity?: number | null } };

export type DeleteBarcodeMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteBarcodeMutation = { __typename?: 'Mutation', deleteBarcode: boolean };

export type RenderBarcodeMutationVariables = Exact<{
  code: Scalars['String'];
  category?: InputMaybe<BarcodeCategory>;
  pages: Scalars['Int'];
}>;


export type RenderBarcodeMutation = { __typename?: 'Mutation', renderBarcode: { __typename: 'BarcodeError', message: string } | { __typename: 'RenderedDocument', url: string } };

export type UpdateBarcodeMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateBarcodeInput;
}>;


export type UpdateBarcodeMutation = { __typename?: 'Mutation', updateBarcode?: { __typename?: 'Barcode', id?: string | null, accountId: number, companyId: number, articleId: string, name: string, rotation: string, preparationMode?: number | null, flagDouble?: number | null, supplierName?: string | null, supplierArticleCode?: string | null, quantity?: number | null, article: { __typename?: 'Article', name: string } } | null };

export type SimpleGetAllBLocksQueryVariables = Exact<{ [key: string]: never; }>;


export type SimpleGetAllBLocksQuery = { __typename?: 'Query', blocks: { __typename?: 'BlockListResult', results: Array<{ __typename?: 'Block', id?: string | null, name: string }> } };

export type GetAllBlocksQueryVariables = Exact<{
  filters?: InputMaybe<BlockSearchFilters>;
  orderBy?: InputMaybe<Array<BlockOrderByCriterion> | BlockOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetAllBlocksQuery = { __typename?: 'Query', blocks: { __typename?: 'BlockListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'Block', id?: string | null, name: string, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, moveable?: boolean | null, bulk?: boolean | null, comment?: string | null, level?: number | null, blockGroup?: number | null }> } };

export type GetBlockByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetBlockByIdQuery = { __typename?: 'Query', block?: { __typename?: 'Block', id?: string | null, name: string, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, moveable?: boolean | null, bulk?: boolean | null, comment?: string | null, level?: number | null, blockGroup?: number | null } | null };

export type GetBlockIdsQueryVariables = Exact<{
  filters?: InputMaybe<BlockSearchFilters>;
  orderBy?: InputMaybe<Array<BlockOrderByCriterion> | BlockOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetBlockIdsQuery = { __typename?: 'Query', blocks: { __typename?: 'BlockListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'Block', id?: string | null, name: string, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, moveable?: boolean | null, bulk?: boolean | null, comment?: string | null, level?: number | null, blockGroup?: number | null }> } };

export type CreateBlockMutationVariables = Exact<{
  input: CreateBlockInput;
}>;


export type CreateBlockMutation = { __typename?: 'Mutation', createBlock: { __typename?: 'Block', id?: string | null, name: string, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, moveable?: boolean | null, bulk?: boolean | null, comment?: string | null, level?: number | null, blockGroup?: number | null } };

export type DeleteBlockMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteBlockMutation = { __typename?: 'Mutation', deleteBlock: boolean };

export type UpdateBlockMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateBlockInput;
}>;


export type UpdateBlockMutation = { __typename?: 'Mutation', updateBlock?: { __typename?: 'Block', id?: string | null, name: string, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, moveable?: boolean | null, bulk?: boolean | null, comment?: string | null, level?: number | null, blockGroup?: number | null } | null };

export type GetAllLocationsQueryVariables = Exact<{
  filters?: InputMaybe<LocationSearchFilters>;
  orderBy?: InputMaybe<Array<LocationOrderByCriterion> | LocationOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetAllLocationsQuery = { __typename?: 'Query', locations: { __typename?: 'LocationListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'Location', id?: string | null, name: string, barcode: string, aisle: number, column: number, level: number, position: number, replenish?: boolean | null, blockId: string, replenishType?: number | null, constraint?: string | null, comment?: string | null, baseUnitRotation?: string | null, boxRotation?: string | null, allowCycleCountStockMin?: boolean | null, block: { __typename?: 'Block', name: string } }> } };

export type GetLocationByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetLocationByIdQuery = { __typename?: 'Query', location?: { __typename?: 'Location', id?: string | null, name: string, barcode: string, aisle: number, column: number, level: number, position: number, replenish?: boolean | null, blockId: string, replenishType?: number | null, constraint?: string | null, comment?: string | null, baseUnitRotation?: string | null, boxRotation?: string | null, allowCycleCountStockMin?: boolean | null, block: { __typename?: 'Block', name: string } } | null };

export type GetLocationIdsQueryVariables = Exact<{
  filters?: InputMaybe<LocationSearchFilters>;
  orderBy?: InputMaybe<Array<LocationOrderByCriterion> | LocationOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetLocationIdsQuery = { __typename?: 'Query', locations: { __typename?: 'LocationListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'Location', name: string, barcode: string, aisle: number, column: number, level: number, position: number, replenish?: boolean | null, blockId: string, replenishType?: number | null, constraint?: string | null, comment?: string | null, baseUnitRotation?: string | null, boxRotation?: string | null, allowCycleCountStockMin?: boolean | null, block: { __typename?: 'Block', name: string } }> } };

export type CreateLocationMutationVariables = Exact<{
  input: CreateLocationInput;
}>;


export type CreateLocationMutation = { __typename?: 'Mutation', createLocation: { __typename: 'Location', id?: string | null, name: string, barcode: string, aisle: number, column: number, level: number, position: number, replenish?: boolean | null, blockId: string, replenishType?: number | null, constraint?: string | null, comment?: string | null, baseUnitRotation?: string | null, boxRotation?: string | null, allowCycleCountStockMin?: boolean | null, block: { __typename?: 'Block', name: string } } | { __typename: 'ValidationError', message: string } };

export type BulkCreateLocationsMutationVariables = Exact<{
  input: BulkCreateLocationsInput;
}>;


export type BulkCreateLocationsMutation = { __typename?: 'Mutation', bulkCreateLocations: Array<{ __typename: 'Location', id?: string | null, name: string, barcode: string, aisle: number, column: number, level: number, position: number, replenish?: boolean | null, blockId: string, replenishType?: number | null, constraint?: string | null, comment?: string | null, baseUnitRotation?: string | null, boxRotation?: string | null, allowCycleCountStockMin?: boolean | null, block: { __typename?: 'Block', name: string } }> };

export type DeleteLocationMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteLocationMutation = { __typename?: 'Mutation', deleteLocation: boolean };

export type UpdateLocationMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateLocationInput;
}>;


export type UpdateLocationMutation = { __typename?: 'Mutation', updateLocation?: { __typename?: 'Location', id?: string | null, name: string, barcode: string, aisle: number, column: number, level: number, position: number, replenish?: boolean | null, blockId: string, replenishType?: number | null, constraint?: string | null, comment?: string | null, baseUnitRotation?: string | null, boxRotation?: string | null, allowCycleCountStockMin?: boolean | null, block: { __typename?: 'Block', name: string } } | null };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  warehouseId: Scalars['ID'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginSuccess', accessToken: string } | null };

export type ResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
  callbackUrl: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename: 'ResetPasswordFailure', message: string } | { __typename: 'ResetPasswordSuccess', message: string } };

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
  password2: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename: 'ChangePasswordFailure', message: string } | { __typename: 'ChangePasswordSuccess', message: string } };

export type GetMyInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyInfoQuery = { __typename?: 'Query', me: { __typename?: 'User', username: string, password: string, organizationId: string, roleId: string, id?: string | null, email?: string | null, organization?: { __typename?: 'Organization', name: string, id?: string | null, awsAccessKeyId?: string | null, awsSecretAccessKey?: string | null, parentOrganizationId?: string | null } | null, role: { __typename?: 'RoleType', name: string, id?: string | null, permissions: Array<{ __typename?: 'PermissionType', table: string, mode: string, roleId: string, id?: string | null }> } } };


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
    query GetArticleById($id: String!) {
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
export const GetArticleIdsDocument = `
    query GetArticleIds($filters: ArticleSearchFilters, $orderBy: [ArticleOrderByCriterion!], $page: Int!, $itemsPerPage: Int!) {
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
      name
    }
  }
}
    `;
export const useGetArticleIdsQuery = <
      TData = GetArticleIdsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetArticleIdsQueryVariables,
      options?: UseQueryOptions<GetArticleIdsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetArticleIdsQuery, TError, TData>(
      ['GetArticleIds', variables],
      fetcher<GetArticleIdsQuery, GetArticleIdsQueryVariables>(client, GetArticleIdsDocument, variables, headers),
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
export const useCreateArticleMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateArticleMutation, TError, CreateArticleMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateArticleMutation, TError, CreateArticleMutationVariables, TContext>(
      ['CreateArticle'],
      (variables?: CreateArticleMutationVariables) => fetcher<CreateArticleMutation, CreateArticleMutationVariables>(client, CreateArticleDocument, variables, headers)(),
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
export const useExportArticlesMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ExportArticlesMutation, TError, ExportArticlesMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ExportArticlesMutation, TError, ExportArticlesMutationVariables, TContext>(
      ['ExportArticles'],
      (variables?: ExportArticlesMutationVariables) => fetcher<ExportArticlesMutation, ExportArticlesMutationVariables>(client, ExportArticlesDocument, variables, headers)(),
      options
    );
export const DeleteArticleDocument = `
    mutation DeleteArticle($id: String!) {
  deleteArticle(id: $id)
}
    `;
export const useDeleteArticleMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteArticleMutation, TError, DeleteArticleMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteArticleMutation, TError, DeleteArticleMutationVariables, TContext>(
      ['DeleteArticle'],
      (variables?: DeleteArticleMutationVariables) => fetcher<DeleteArticleMutation, DeleteArticleMutationVariables>(client, DeleteArticleDocument, variables, headers)(),
      options
    );
export const UpdateArticleDocument = `
    mutation UpdateArticle($id: String!, $input: UpdateArticleInput!) {
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
export const useUpdateArticleMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateArticleMutation, TError, UpdateArticleMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateArticleMutation, TError, UpdateArticleMutationVariables, TContext>(
      ['UpdateArticle'],
      (variables?: UpdateArticleMutationVariables) => fetcher<UpdateArticleMutation, UpdateArticleMutationVariables>(client, UpdateArticleDocument, variables, headers)(),
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
export const useGetAllBarcodesQuery = <
      TData = GetAllBarcodesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAllBarcodesQueryVariables,
      options?: UseQueryOptions<GetAllBarcodesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllBarcodesQuery, TError, TData>(
      ['GetAllBarcodes', variables],
      fetcher<GetAllBarcodesQuery, GetAllBarcodesQueryVariables>(client, GetAllBarcodesDocument, variables, headers),
      options
    );
export const GetBarcodeByIdDocument = `
    query GetBarcodeById($id: String!) {
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
    article {
      name
    }
  }
}
    `;
export const useGetBarcodeByIdQuery = <
      TData = GetBarcodeByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetBarcodeByIdQueryVariables,
      options?: UseQueryOptions<GetBarcodeByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetBarcodeByIdQuery, TError, TData>(
      ['GetBarcodeById', variables],
      fetcher<GetBarcodeByIdQuery, GetBarcodeByIdQueryVariables>(client, GetBarcodeByIdDocument, variables, headers),
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
export const useCreateBarcodeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateBarcodeMutation, TError, CreateBarcodeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateBarcodeMutation, TError, CreateBarcodeMutationVariables, TContext>(
      ['CreateBarcode'],
      (variables?: CreateBarcodeMutationVariables) => fetcher<CreateBarcodeMutation, CreateBarcodeMutationVariables>(client, CreateBarcodeDocument, variables, headers)(),
      options
    );
export const DeleteBarcodeDocument = `
    mutation DeleteBarcode($id: String!) {
  deleteBarcode(id: $id)
}
    `;
export const useDeleteBarcodeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteBarcodeMutation, TError, DeleteBarcodeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteBarcodeMutation, TError, DeleteBarcodeMutationVariables, TContext>(
      ['DeleteBarcode'],
      (variables?: DeleteBarcodeMutationVariables) => fetcher<DeleteBarcodeMutation, DeleteBarcodeMutationVariables>(client, DeleteBarcodeDocument, variables, headers)(),
      options
    );
export const RenderBarcodeDocument = `
    mutation RenderBarcode($code: String!, $category: BarcodeCategory, $pages: Int!) {
  renderBarcode(code: $code, category: $category, pages: $pages) {
    __typename
    ... on RenderedDocument {
      url
    }
    ... on BarcodeError {
      message
    }
  }
}
    `;
export const useRenderBarcodeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RenderBarcodeMutation, TError, RenderBarcodeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RenderBarcodeMutation, TError, RenderBarcodeMutationVariables, TContext>(
      ['RenderBarcode'],
      (variables?: RenderBarcodeMutationVariables) => fetcher<RenderBarcodeMutation, RenderBarcodeMutationVariables>(client, RenderBarcodeDocument, variables, headers)(),
      options
    );
export const UpdateBarcodeDocument = `
    mutation UpdateBarcode($id: String!, $input: UpdateBarcodeInput!) {
  updateBarcode(id: $id, input: $input) {
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
    article {
      name
    }
  }
}
    `;
export const useUpdateBarcodeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateBarcodeMutation, TError, UpdateBarcodeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateBarcodeMutation, TError, UpdateBarcodeMutationVariables, TContext>(
      ['UpdateBarcode'],
      (variables?: UpdateBarcodeMutationVariables) => fetcher<UpdateBarcodeMutation, UpdateBarcodeMutationVariables>(client, UpdateBarcodeDocument, variables, headers)(),
      options
    );
export const SimpleGetAllBLocksDocument = `
    query SimpleGetAllBLocks {
  blocks {
    results {
      id
      name
    }
  }
}
    `;
export const useSimpleGetAllBLocksQuery = <
      TData = SimpleGetAllBLocksQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: SimpleGetAllBLocksQueryVariables,
      options?: UseQueryOptions<SimpleGetAllBLocksQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<SimpleGetAllBLocksQuery, TError, TData>(
      variables === undefined ? ['SimpleGetAllBLocks'] : ['SimpleGetAllBLocks', variables],
      fetcher<SimpleGetAllBLocksQuery, SimpleGetAllBLocksQueryVariables>(client, SimpleGetAllBLocksDocument, variables, headers),
      options
    );
export const GetAllBlocksDocument = `
    query GetAllBlocks($filters: BlockSearchFilters, $orderBy: [BlockOrderByCriterion!], $page: Int!, $itemsPerPage: Int!) {
  blocks(
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
      name
      created
      createdBy
      modified
      modifiedBy
      moveable
      bulk
      comment
      level
      blockGroup
    }
  }
}
    `;
export const useGetAllBlocksQuery = <
      TData = GetAllBlocksQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAllBlocksQueryVariables,
      options?: UseQueryOptions<GetAllBlocksQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllBlocksQuery, TError, TData>(
      ['GetAllBlocks', variables],
      fetcher<GetAllBlocksQuery, GetAllBlocksQueryVariables>(client, GetAllBlocksDocument, variables, headers),
      options
    );
export const GetBlockByIdDocument = `
    query GetBlockById($id: String!) {
  block(id: $id) {
    id
    name
    created
    createdBy
    modified
    modifiedBy
    moveable
    bulk
    comment
    level
    blockGroup
  }
}
    `;
export const useGetBlockByIdQuery = <
      TData = GetBlockByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetBlockByIdQueryVariables,
      options?: UseQueryOptions<GetBlockByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetBlockByIdQuery, TError, TData>(
      ['GetBlockById', variables],
      fetcher<GetBlockByIdQuery, GetBlockByIdQueryVariables>(client, GetBlockByIdDocument, variables, headers),
      options
    );
export const GetBlockIdsDocument = `
    query GetBlockIds($filters: BlockSearchFilters, $orderBy: [BlockOrderByCriterion!], $page: Int!, $itemsPerPage: Int!) {
  blocks(
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
      name
      created
      createdBy
      modified
      modifiedBy
      moveable
      bulk
      comment
      level
      blockGroup
    }
  }
}
    `;
export const useGetBlockIdsQuery = <
      TData = GetBlockIdsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetBlockIdsQueryVariables,
      options?: UseQueryOptions<GetBlockIdsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetBlockIdsQuery, TError, TData>(
      ['GetBlockIds', variables],
      fetcher<GetBlockIdsQuery, GetBlockIdsQueryVariables>(client, GetBlockIdsDocument, variables, headers),
      options
    );
export const CreateBlockDocument = `
    mutation CreateBlock($input: CreateBlockInput!) {
  createBlock(input: $input) {
    id
    name
    created
    createdBy
    modified
    modifiedBy
    moveable
    bulk
    comment
    level
    blockGroup
  }
}
    `;
export const useCreateBlockMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateBlockMutation, TError, CreateBlockMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateBlockMutation, TError, CreateBlockMutationVariables, TContext>(
      ['CreateBlock'],
      (variables?: CreateBlockMutationVariables) => fetcher<CreateBlockMutation, CreateBlockMutationVariables>(client, CreateBlockDocument, variables, headers)(),
      options
    );
export const DeleteBlockDocument = `
    mutation DeleteBlock($id: String!) {
  deleteBlock(id: $id)
}
    `;
export const useDeleteBlockMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteBlockMutation, TError, DeleteBlockMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteBlockMutation, TError, DeleteBlockMutationVariables, TContext>(
      ['DeleteBlock'],
      (variables?: DeleteBlockMutationVariables) => fetcher<DeleteBlockMutation, DeleteBlockMutationVariables>(client, DeleteBlockDocument, variables, headers)(),
      options
    );
export const UpdateBlockDocument = `
    mutation UpdateBlock($id: String!, $input: UpdateBlockInput!) {
  updateBlock(id: $id, input: $input) {
    id
    name
    created
    createdBy
    modified
    modifiedBy
    moveable
    bulk
    comment
    level
    blockGroup
  }
}
    `;
export const useUpdateBlockMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateBlockMutation, TError, UpdateBlockMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateBlockMutation, TError, UpdateBlockMutationVariables, TContext>(
      ['UpdateBlock'],
      (variables?: UpdateBlockMutationVariables) => fetcher<UpdateBlockMutation, UpdateBlockMutationVariables>(client, UpdateBlockDocument, variables, headers)(),
      options
    );
export const GetAllLocationsDocument = `
    query GetAllLocations($filters: LocationSearchFilters, $orderBy: [LocationOrderByCriterion!], $page: Int!, $itemsPerPage: Int!) {
  locations(
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
      name
      barcode
      aisle
      column
      level
      position
      replenish
      blockId
      block {
        name
      }
      replenishType
      constraint
      comment
      baseUnitRotation
      boxRotation
      allowCycleCountStockMin
    }
  }
}
    `;
export const useGetAllLocationsQuery = <
      TData = GetAllLocationsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAllLocationsQueryVariables,
      options?: UseQueryOptions<GetAllLocationsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllLocationsQuery, TError, TData>(
      ['GetAllLocations', variables],
      fetcher<GetAllLocationsQuery, GetAllLocationsQueryVariables>(client, GetAllLocationsDocument, variables, headers),
      options
    );
export const GetLocationByIdDocument = `
    query GetLocationById($id: String!) {
  location(id: $id) {
    id
    name
    barcode
    aisle
    column
    level
    position
    replenish
    blockId
    block {
      name
    }
    replenishType
    constraint
    comment
    baseUnitRotation
    boxRotation
    allowCycleCountStockMin
  }
}
    `;
export const useGetLocationByIdQuery = <
      TData = GetLocationByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetLocationByIdQueryVariables,
      options?: UseQueryOptions<GetLocationByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetLocationByIdQuery, TError, TData>(
      ['GetLocationById', variables],
      fetcher<GetLocationByIdQuery, GetLocationByIdQueryVariables>(client, GetLocationByIdDocument, variables, headers),
      options
    );
export const GetLocationIdsDocument = `
    query GetLocationIds($filters: LocationSearchFilters, $orderBy: [LocationOrderByCriterion!], $page: Int!, $itemsPerPage: Int!) {
  locations(
    filters: $filters
    orderBy: $orderBy
    page: $page
    itemsPerPage: $itemsPerPage
  ) {
    count
    itemsPerPage
    totalPages
    results {
      name
      barcode
      aisle
      column
      level
      position
      replenish
      blockId
      block {
        name
      }
      replenishType
      constraint
      comment
      baseUnitRotation
      boxRotation
      allowCycleCountStockMin
    }
  }
}
    `;
export const useGetLocationIdsQuery = <
      TData = GetLocationIdsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetLocationIdsQueryVariables,
      options?: UseQueryOptions<GetLocationIdsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetLocationIdsQuery, TError, TData>(
      ['GetLocationIds', variables],
      fetcher<GetLocationIdsQuery, GetLocationIdsQueryVariables>(client, GetLocationIdsDocument, variables, headers),
      options
    );
export const CreateLocationDocument = `
    mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
    __typename
    ... on Location {
      id
      name
      barcode
      aisle
      column
      level
      position
      replenish
      blockId
      block {
        name
      }
      replenishType
      constraint
      comment
      baseUnitRotation
      boxRotation
      allowCycleCountStockMin
    }
    ... on ValidationError {
      message
    }
  }
}
    `;
export const useCreateLocationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateLocationMutation, TError, CreateLocationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateLocationMutation, TError, CreateLocationMutationVariables, TContext>(
      ['CreateLocation'],
      (variables?: CreateLocationMutationVariables) => fetcher<CreateLocationMutation, CreateLocationMutationVariables>(client, CreateLocationDocument, variables, headers)(),
      options
    );
export const BulkCreateLocationsDocument = `
    mutation BulkCreateLocations($input: BulkCreateLocationsInput!) {
  bulkCreateLocations(input: $input) {
    __typename
    ... on Location {
      id
      name
      barcode
      aisle
      column
      level
      position
      replenish
      blockId
      block {
        name
      }
      replenishType
      constraint
      comment
      baseUnitRotation
      boxRotation
      allowCycleCountStockMin
    }
  }
}
    `;
export const useBulkCreateLocationsMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<BulkCreateLocationsMutation, TError, BulkCreateLocationsMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<BulkCreateLocationsMutation, TError, BulkCreateLocationsMutationVariables, TContext>(
      ['BulkCreateLocations'],
      (variables?: BulkCreateLocationsMutationVariables) => fetcher<BulkCreateLocationsMutation, BulkCreateLocationsMutationVariables>(client, BulkCreateLocationsDocument, variables, headers)(),
      options
    );
export const DeleteLocationDocument = `
    mutation DeleteLocation($id: String!) {
  deleteLocation(id: $id)
}
    `;
export const useDeleteLocationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteLocationMutation, TError, DeleteLocationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteLocationMutation, TError, DeleteLocationMutationVariables, TContext>(
      ['DeleteLocation'],
      (variables?: DeleteLocationMutationVariables) => fetcher<DeleteLocationMutation, DeleteLocationMutationVariables>(client, DeleteLocationDocument, variables, headers)(),
      options
    );
export const UpdateLocationDocument = `
    mutation UpdateLocation($id: String!, $input: UpdateLocationInput!) {
  updateLocation(id: $id, input: $input) {
    id
    name
    barcode
    aisle
    column
    level
    position
    replenish
    blockId
    block {
      name
    }
    replenishType
    constraint
    comment
    baseUnitRotation
    boxRotation
    allowCycleCountStockMin
  }
}
    `;
export const useUpdateLocationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateLocationMutation, TError, UpdateLocationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateLocationMutation, TError, UpdateLocationMutationVariables, TContext>(
      ['UpdateLocation'],
      (variables?: UpdateLocationMutationVariables) => fetcher<UpdateLocationMutation, UpdateLocationMutationVariables>(client, UpdateLocationDocument, variables, headers)(),
      options
    );
export const LoginDocument = `
    mutation Login($username: String!, $password: String!, $warehouseId: ID!) {
  login(username: $username, password: $password, warehouseId: $warehouseId) {
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
      ['Login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers)(),
      options
    );
export const ResetPasswordDocument = `
    mutation ResetPassword($email: String!, $callbackUrl: String!) {
  resetPassword(email: $email, callbackUrl: $callbackUrl) {
    __typename
    ... on ResetPasswordSuccess {
      message
    }
    ... on ResetPasswordFailure {
      message
    }
  }
}
    `;
export const useResetPasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ResetPasswordMutation, TError, ResetPasswordMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ResetPasswordMutation, TError, ResetPasswordMutationVariables, TContext>(
      ['ResetPassword'],
      (variables?: ResetPasswordMutationVariables) => fetcher<ResetPasswordMutation, ResetPasswordMutationVariables>(client, ResetPasswordDocument, variables, headers)(),
      options
    );
export const ChangePasswordDocument = `
    mutation ChangePassword($token: String!, $password: String!, $password2: String!) {
  changePassword(token: $token, password: $password, password2: $password2) {
    __typename
    ... on ChangePasswordFailure {
      message
    }
    ... on ChangePasswordSuccess {
      message
    }
  }
}
    `;
export const useChangePasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ChangePasswordMutation, TError, ChangePasswordMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ChangePasswordMutation, TError, ChangePasswordMutationVariables, TContext>(
      ['ChangePassword'],
      (variables?: ChangePasswordMutationVariables) => fetcher<ChangePasswordMutation, ChangePasswordMutationVariables>(client, ChangePasswordDocument, variables, headers)(),
      options
    );
export const GetMyInfoDocument = `
    query GetMyInfo {
  me {
    username
    password
    organizationId
    roleId
    organization {
      name
      id
      awsAccessKeyId
      awsSecretAccessKey
      parentOrganizationId
    }
    role {
      name
      id
      permissions {
        table
        mode
        roleId
        id
      }
    }
    id
    email
  }
}
    `;
export const useGetMyInfoQuery = <
      TData = GetMyInfoQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetMyInfoQueryVariables,
      options?: UseQueryOptions<GetMyInfoQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetMyInfoQuery, TError, TData>(
      variables === undefined ? ['GetMyInfo'] : ['GetMyInfo', variables],
      fetcher<GetMyInfoQuery, GetMyInfoQueryVariables>(client, GetMyInfoDocument, variables, headers),
      options
    );