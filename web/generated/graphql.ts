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
  Upload: any;
};

export type Article = {
  __typename?: 'Article';
  additionalDescription?: Maybe<Scalars['String']>;
  baseUnitPicking?: Maybe<Scalars['Boolean']>;
  baseUnitPrice?: Maybe<Scalars['Float']>;
  baseUnitRotation?: Maybe<Scalars['Int']>;
  /** Text value for field base_unit_rotation */
  baseUnitRotationText?: Maybe<Scalars['String']>;
  baseUnitWeight?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  countryOfOrigin?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  cubingType?: Maybe<Scalars['Int']>;
  /** Text value for field cubing_type */
  cubingTypeText?: Maybe<Scalars['String']>;
  endOfLife?: Maybe<Scalars['Boolean']>;
  extras?: Maybe<Scalars['JSON']>;
  family?: Maybe<Scalars['String']>;
  featureType?: Maybe<Scalars['Int']>;
  /** Text value for field feature_type */
  featureTypeText?: Maybe<Scalars['String']>;
  groupingId?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  newProduct?: Maybe<Scalars['Boolean']>;
  permanentProduct?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  subfamily?: Maybe<Scalars['String']>;
  supplierName?: Maybe<Scalars['String']>;
  supportPackaging?: Maybe<Scalars['String']>;
  supportQuantity?: Maybe<Scalars['Float']>;
  tariffClassification?: Maybe<Scalars['String']>;
  translation?: Maybe<Scalars['JSON']>;
  width?: Maybe<Scalars['Float']>;
};

/** Filters to apply before the data export is made */
export type ArticleExportFilters = {
  additionalDescription?: InputMaybe<Scalars['String']>;
  baseUnitPicking?: InputMaybe<Scalars['Boolean']>;
  baseUnitPrice?: InputMaybe<Scalars['Float']>;
  baseUnitRotation?: InputMaybe<Scalars['Int']>;
  baseUnitWeight?: InputMaybe<Scalars['Float']>;
  code?: InputMaybe<Scalars['String']>;
  countryOfOrigin?: InputMaybe<Scalars['String']>;
  cubingType?: InputMaybe<Scalars['Int']>;
  endOfLife?: InputMaybe<Scalars['Boolean']>;
  extras?: InputMaybe<Scalars['JSON']>;
  family?: InputMaybe<Scalars['String']>;
  featureType?: InputMaybe<Scalars['Int']>;
  groupingId?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  permanentProduct?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  subfamily?: InputMaybe<Scalars['String']>;
  supplierName?: InputMaybe<Scalars['String']>;
  supportPackaging?: InputMaybe<Scalars['String']>;
  supportQuantity?: InputMaybe<Scalars['Float']>;
  tariffClassification?: InputMaybe<Scalars['String']>;
  translation?: InputMaybe<Scalars['JSON']>;
  width?: InputMaybe<Scalars['Float']>;
};

/** Field names for the Article model */
export enum ArticleFieldName {
  AdditionalDescription = 'additionalDescription',
  BaseUnitPicking = 'baseUnitPicking',
  BaseUnitPrice = 'baseUnitPrice',
  BaseUnitRotation = 'baseUnitRotation',
  BaseUnitWeight = 'baseUnitWeight',
  Code = 'code',
  CountryOfOrigin = 'countryOfOrigin',
  Created = 'created',
  CreatedBy = 'createdBy',
  CubingType = 'cubingType',
  EndOfLife = 'endOfLife',
  Extras = 'extras',
  Family = 'family',
  FeatureType = 'featureType',
  GroupingId = 'groupingId',
  Height = 'height',
  Id = 'id',
  Length = 'length',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  NewProduct = 'newProduct',
  PermanentProduct = 'permanentProduct',
  Status = 'status',
  StockOwnerId = 'stockOwnerId',
  Subfamily = 'subfamily',
  SupplierName = 'supplierName',
  SupportPackaging = 'supportPackaging',
  SupportQuantity = 'supportQuantity',
  TariffClassification = 'tariffClassification',
  Translation = 'translation',
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

export type ArticleLu = {
  __typename?: 'ArticleLu';
  articleId?: Maybe<Scalars['String']>;
  baseUnitWeight?: Maybe<Scalars['Float']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Float']>;
  luId?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  picking?: Maybe<Scalars['Boolean']>;
  quantity?: Maybe<Scalars['Float']>;
  replenish?: Maybe<Scalars['Boolean']>;
  rotation?: Maybe<Scalars['Int']>;
  /** Text value for field rotation */
  rotationText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ArticleLuBarcode = {
  __typename?: 'ArticleLuBarcode';
  article: Article;
  articleId?: Maybe<Scalars['String']>;
  barcodeId?: Maybe<Scalars['String']>;
  countryOfOrigin?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  luId?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
};

/** Field names for the ArticleLuBarcode model */
export enum ArticleLuBarcodeFieldName {
  ArticleId = 'articleId',
  BarcodeId = 'barcodeId',
  CountryOfOrigin = 'countryOfOrigin',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  Id = 'id',
  LuId = 'luId',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  StockOwnerId = 'stockOwnerId'
}

/** Returns a list of ArticleLuBarcode */
export type ArticleLuBarcodeListResult = {
  __typename?: 'ArticleLuBarcodeListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<ArticleLuBarcode>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for ArticleLuBarcode */
export type ArticleLuBarcodeOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: ArticleLuBarcodeFieldName;
};

/** Attributes of ArticleLuBarcode to filter onto */
export type ArticleLuBarcodeSearchFilters = {
  articleId?: InputMaybe<Scalars['String']>;
  barcodeId?: InputMaybe<Scalars['String']>;
  countryOfOrigin?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  luId?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Field names for the ArticleLu model */
export enum ArticleLuFieldName {
  ArticleId = 'articleId',
  BaseUnitWeight = 'baseUnitWeight',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  Height = 'height',
  Id = 'id',
  Length = 'length',
  LuId = 'luId',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Picking = 'picking',
  Quantity = 'quantity',
  Replenish = 'replenish',
  Rotation = 'rotation',
  StockOwnerId = 'stockOwnerId',
  Width = 'width'
}

/** Returns a list of ArticleLu */
export type ArticleLuListResult = {
  __typename?: 'ArticleLuListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<ArticleLu>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for ArticleLu */
export type ArticleLuOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: ArticleLuFieldName;
};

/** Attributes of ArticleLu to filter onto */
export type ArticleLuSearchFilters = {
  articleId?: InputMaybe<Scalars['String']>;
  baseUnitWeight?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  height?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Float']>;
  luId?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  picking?: InputMaybe<Scalars['Boolean']>;
  quantity?: InputMaybe<Scalars['Float']>;
  replenish?: InputMaybe<Scalars['Boolean']>;
  rotation?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

/** How to order the search results for Article */
export type ArticleOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: ArticleFieldName;
};

/** Attributes of Article to filter onto */
export type ArticleSearchFilters = {
  additionalDescription?: InputMaybe<Scalars['String']>;
  baseUnitPicking?: InputMaybe<Scalars['Boolean']>;
  baseUnitPrice?: InputMaybe<Scalars['Float']>;
  baseUnitRotation?: InputMaybe<Scalars['Int']>;
  baseUnitWeight?: InputMaybe<Scalars['Float']>;
  code?: InputMaybe<Scalars['String']>;
  countryOfOrigin?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  cubingType?: InputMaybe<Scalars['Int']>;
  endOfLife?: InputMaybe<Scalars['Boolean']>;
  extras?: InputMaybe<Scalars['JSON']>;
  family?: InputMaybe<Scalars['String']>;
  featureType?: InputMaybe<Scalars['Int']>;
  groupingId?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  permanentProduct?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  subfamily?: InputMaybe<Scalars['String']>;
  supplierName?: InputMaybe<Scalars['String']>;
  supportPackaging?: InputMaybe<Scalars['String']>;
  supportQuantity?: InputMaybe<Scalars['Float']>;
  tariffClassification?: InputMaybe<Scalars['String']>;
  translation?: InputMaybe<Scalars['JSON']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type ArticleSet = {
  __typename?: 'ArticleSet';
  articleId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
};

export type ArticleSetDetail = {
  __typename?: 'ArticleSetDetail';
  articleId?: Maybe<Scalars['String']>;
  articleSetId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
};

/** Field names for the ArticleSetDetail model */
export enum ArticleSetDetailFieldName {
  ArticleId = 'articleId',
  ArticleSetId = 'articleSetId',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Quantity = 'quantity',
  StockOwnerId = 'stockOwnerId'
}

/** Returns a list of ArticleSetDetail */
export type ArticleSetDetailListResult = {
  __typename?: 'ArticleSetDetailListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<ArticleSetDetail>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for ArticleSetDetail */
export type ArticleSetDetailOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: ArticleSetDetailFieldName;
};

/** Attributes of ArticleSetDetail to filter onto */
export type ArticleSetDetailSearchFilters = {
  articleId?: InputMaybe<Scalars['String']>;
  articleSetId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Field names for the ArticleSet model */
export enum ArticleSetFieldName {
  ArticleId = 'articleId',
  Comment = 'comment',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  StockOwnerId = 'stockOwnerId'
}

/** Returns a list of ArticleSet */
export type ArticleSetListResult = {
  __typename?: 'ArticleSetListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<ArticleSet>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for ArticleSet */
export type ArticleSetOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: ArticleSetFieldName;
};

/** Attributes of ArticleSet to filter onto */
export type ArticleSetSearchFilters = {
  articleId?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

export type Barcode = {
  __typename?: 'Barcode';
  blacklisted?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  flagDouble?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  preparationMode?: Maybe<Scalars['Int']>;
  /** Text value for field preparation_mode */
  preparationModeText?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  rotation?: Maybe<Scalars['Int']>;
  /** Text value for field rotation */
  rotationText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  supplierArticleCode?: Maybe<Scalars['String']>;
  supplierName?: Maybe<Scalars['String']>;
};

/** Filters to apply before the data export is made */
export type BarcodeExportFilters = {
  blacklisted?: InputMaybe<Scalars['Boolean']>;
  extras?: InputMaybe<Scalars['JSON']>;
  flagDouble?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  preparationMode?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Float']>;
  rotation?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  supplierArticleCode?: InputMaybe<Scalars['String']>;
  supplierName?: InputMaybe<Scalars['String']>;
};

/** Field names for the Barcode model */
export enum BarcodeFieldName {
  Blacklisted = 'blacklisted',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  FlagDouble = 'flagDouble',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  PreparationMode = 'preparationMode',
  Quantity = 'quantity',
  Rotation = 'rotation',
  StockOwnerId = 'stockOwnerId',
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
  blacklisted?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  flagDouble?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  preparationMode?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Float']>;
  rotation?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  supplierArticleCode?: InputMaybe<Scalars['String']>;
  supplierName?: InputMaybe<Scalars['String']>;
};

export type Block = {
  __typename?: 'Block';
  blockGroup?: Maybe<Scalars['Int']>;
  building: Building;
  buildingId?: Maybe<Scalars['String']>;
  bulk?: Maybe<Scalars['Boolean']>;
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  /** Text value for field level */
  levelText?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  moveable?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

/** Field names for the Block model */
export enum BlockFieldName {
  BlockGroup = 'blockGroup',
  BuildingId = 'buildingId',
  Bulk = 'bulk',
  Comment = 'comment',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
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
  buildingId?: InputMaybe<Scalars['String']>;
  bulk?: InputMaybe<Scalars['Boolean']>;
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  moveable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Box = {
  __typename?: 'Box';
  carrierBox?: Maybe<Scalars['String']>;
  carrierId?: Maybe<Scalars['String']>;
  carrierService?: Maybe<Scalars['String']>;
  checkingTime?: Maybe<Scalars['DateTime']>;
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deliveryId?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  handlingUnitId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  loadId?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  packagingId?: Maybe<Scalars['String']>;
  preparationMode?: Maybe<Scalars['Int']>;
  /** Text value for field preparation_mode */
  preparationModeText?: Maybe<Scalars['String']>;
  roundId?: Maybe<Scalars['String']>;
  roundPosition?: Maybe<Scalars['Int']>;
  shippingExtendInfos?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  toBeChecked?: Maybe<Scalars['Boolean']>;
  toBePalletized?: Maybe<Scalars['Boolean']>;
  warehouseCode?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Field names for the Box model */
export enum BoxFieldName {
  CarrierBox = 'carrierBox',
  CarrierId = 'carrierId',
  CarrierService = 'carrierService',
  CheckingTime = 'checkingTime',
  Comment = 'comment',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeliveryId = 'deliveryId',
  Extras = 'extras',
  HandlingUnitId = 'handlingUnitId',
  Id = 'id',
  LoadId = 'loadId',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  PackagingId = 'packagingId',
  PreparationMode = 'preparationMode',
  RoundId = 'roundId',
  RoundPosition = 'roundPosition',
  ShippingExtendInfos = 'shippingExtendInfos',
  Status = 'status',
  StockOwnerId = 'stockOwnerId',
  ToBeChecked = 'toBeChecked',
  ToBePalletized = 'toBePalletized',
  WarehouseCode = 'warehouseCode',
  Weight = 'weight'
}

export type BoxLine = {
  __typename?: 'BoxLine';
  articleId?: Maybe<Scalars['String']>;
  boxId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deliveryId?: Maybe<Scalars['String']>;
  deliveryLineId?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  missingQuantity?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  pickedQuantity?: Maybe<Scalars['Float']>;
  preparationMode?: Maybe<Scalars['Int']>;
  /** Text value for field preparation_mode */
  preparationModeText?: Maybe<Scalars['String']>;
  quantityToBePicked?: Maybe<Scalars['Float']>;
  reservation?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
};

export type BoxLineFeature = {
  __typename?: 'BoxLineFeature';
  boxLineId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  featureCodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** Field names for the BoxLineFeature model */
export enum BoxLineFeatureFieldName {
  BoxLineId = 'boxLineId',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  FeatureCodeId = 'featureCodeId',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  StockOwnerId = 'stockOwnerId',
  Value = 'value'
}

/** Returns a list of BoxLineFeature */
export type BoxLineFeatureListResult = {
  __typename?: 'BoxLineFeatureListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<BoxLineFeature>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for BoxLineFeature */
export type BoxLineFeatureOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: BoxLineFeatureFieldName;
};

/** Attributes of BoxLineFeature to filter onto */
export type BoxLineFeatureSearchFilters = {
  boxLineId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  featureCodeId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Field names for the BoxLine model */
export enum BoxLineFieldName {
  ArticleId = 'articleId',
  BoxId = 'boxId',
  Comment = 'comment',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeliveryId = 'deliveryId',
  DeliveryLineId = 'deliveryLineId',
  Extras = 'extras',
  Id = 'id',
  MissingQuantity = 'missingQuantity',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  PickedQuantity = 'pickedQuantity',
  PreparationMode = 'preparationMode',
  QuantityToBePicked = 'quantityToBePicked',
  Reservation = 'reservation',
  Status = 'status',
  StockOwnerId = 'stockOwnerId'
}

/** Returns a list of BoxLine */
export type BoxLineListResult = {
  __typename?: 'BoxLineListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<BoxLine>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for BoxLine */
export type BoxLineOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: BoxLineFieldName;
};

/** Attributes of BoxLine to filter onto */
export type BoxLineSearchFilters = {
  articleId?: InputMaybe<Scalars['String']>;
  boxId?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deliveryId?: InputMaybe<Scalars['String']>;
  deliveryLineId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  missingQuantity?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  pickedQuantity?: InputMaybe<Scalars['Float']>;
  preparationMode?: InputMaybe<Scalars['Int']>;
  quantityToBePicked?: InputMaybe<Scalars['Float']>;
  reservation?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Returns a list of Box */
export type BoxListResult = {
  __typename?: 'BoxListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Box>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Box */
export type BoxOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: BoxFieldName;
};

/** Attributes of Box to filter onto */
export type BoxSearchFilters = {
  carrierBox?: InputMaybe<Scalars['String']>;
  carrierId?: InputMaybe<Scalars['String']>;
  carrierService?: InputMaybe<Scalars['String']>;
  checkingTime?: InputMaybe<Scalars['DateTime']>;
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deliveryId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  handlingUnitId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  loadId?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  packagingId?: InputMaybe<Scalars['String']>;
  preparationMode?: InputMaybe<Scalars['Int']>;
  roundId?: InputMaybe<Scalars['String']>;
  roundPosition?: InputMaybe<Scalars['Int']>;
  shippingExtendInfos?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  toBeChecked?: InputMaybe<Scalars['Boolean']>;
  toBePalletized?: InputMaybe<Scalars['Boolean']>;
  warehouseCode?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type Building = {
  __typename?: 'Building';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  contactMobile?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
};

/** Field names for the Building model */
export enum BuildingFieldName {
  Address1 = 'address1',
  Address2 = 'address2',
  Address3 = 'address3',
  City = 'city',
  ContactEmail = 'contactEmail',
  ContactMobile = 'contactMobile',
  ContactName = 'contactName',
  ContactPhone = 'contactPhone',
  Country = 'country',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
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
  city?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactMobile?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

export type BulkCreateLocationsInput = {
  aisle: Scalars['String'];
  /** Eminza : create inventory when stock below quantity */
  allowCycleCountStockMin?: InputMaybe<Scalars['Boolean']>;
  baseUnitRotation?: InputMaybe<Scalars['Int']>;
  blockId: Scalars['String'];
  column: Scalars['String'];
  comment?: InputMaybe<Scalars['String']>;
  constraint?: InputMaybe<Scalars['String']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  level: Scalars['String'];
  levelStep: Scalars['Int'];
  numberOfAisle: Scalars['Int'];
  numberOfColumn: Scalars['Int'];
  numberOfLevel: Scalars['Int'];
  numberOfPosition: Scalars['Int'];
  position: Scalars['String'];
  replenish?: InputMaybe<Scalars['Boolean']>;
  replenishType?: InputMaybe<Scalars['Int']>;
  separator?: Scalars['String'];
};

export type BulkDeleteLocationsInput = {
  blockId: Scalars['String'];
  finalAisle: Scalars['String'];
  finalColumn: Scalars['String'];
  finalLevel: Scalars['String'];
  finalPosition: Scalars['String'];
  originAisle: Scalars['String'];
  originColumn: Scalars['String'];
  originLevel: Scalars['String'];
  originPosition: Scalars['String'];
  separator?: Scalars['String'];
};

export type Carrier = {
  __typename?: 'Carrier';
  accountNumber?: Maybe<Scalars['String']>;
  available?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  counter?: Maybe<Scalars['Float']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extraInfo?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  isVirtual?: Maybe<Scalars['Boolean']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  monoroundgroup?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parentCarrierId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  toBeLoaded?: Maybe<Scalars['Boolean']>;
  toBePalletized?: Maybe<Scalars['Boolean']>;
  useReceiptNumber?: Maybe<Scalars['Boolean']>;
};

/** Field names for the Carrier model */
export enum CarrierFieldName {
  AccountNumber = 'accountNumber',
  Available = 'available',
  Code = 'code',
  Counter = 'counter',
  Created = 'created',
  CreatedBy = 'createdBy',
  ExtraInfo = 'extraInfo',
  Extras = 'extras',
  Id = 'id',
  IsVirtual = 'isVirtual',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Monoroundgroup = 'monoroundgroup',
  Name = 'name',
  ParentCarrierId = 'parentCarrierId',
  Status = 'status',
  ToBeLoaded = 'toBeLoaded',
  ToBePalletized = 'toBePalletized',
  UseReceiptNumber = 'useReceiptNumber'
}

/** Returns a list of Carrier */
export type CarrierListResult = {
  __typename?: 'CarrierListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Carrier>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Carrier */
export type CarrierOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: CarrierFieldName;
};

/** Attributes of Carrier to filter onto */
export type CarrierSearchFilters = {
  accountNumber?: InputMaybe<Scalars['String']>;
  available?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  counter?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extraInfo?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  isVirtual?: InputMaybe<Scalars['Boolean']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  monoroundgroup?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  parentCarrierId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  toBeLoaded?: InputMaybe<Scalars['Boolean']>;
  toBePalletized?: InputMaybe<Scalars['Boolean']>;
  useReceiptNumber?: InputMaybe<Scalars['Boolean']>;
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

export type Client = {
  __typename?: 'Client';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  /** Integrator that manages this one. */
  integratorId: Scalars['String'];
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Config = {
  __typename?: 'Config';
  /** Code of the config info */
  code: Scalars['String'];
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: Maybe<Scalars['JSON']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  /** Scope of the config info */
  scope: Scalars['String'];
  /** System config */
  system?: Maybe<Scalars['Boolean']>;
  /** value translation depending on the langauge */
  translation?: Maybe<Scalars['JSON']>;
  /** Text value of the config info */
  value: Scalars['String'];
};

export type ConfigResults = {
  __typename?: 'ConfigResults';
  code: Scalars['String'];
  id: Scalars['String'];
  scope: Scalars['String'];
  text: Scalars['String'];
};

export type Content = {
  __typename?: 'Content';
  articleId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  handlingUnitId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  purchaseOrderId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  reservation?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<Scalars['Int']>;
  /** Text value for field stock_status */
  stockStatusText?: Maybe<Scalars['String']>;
};

export type ContentFeature = {
  __typename?: 'ContentFeature';
  contentId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  featureCodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** Field names for the ContentFeature model */
export enum ContentFeatureFieldName {
  ContentId = 'contentId',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  FeatureCodeId = 'featureCodeId',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Value = 'value'
}

/** Returns a list of ContentFeature */
export type ContentFeatureListResult = {
  __typename?: 'ContentFeatureListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<ContentFeature>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for ContentFeature */
export type ContentFeatureOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: ContentFeatureFieldName;
};

/** Attributes of ContentFeature to filter onto */
export type ContentFeatureSearchFilters = {
  contentId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  featureCodeId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Field names for the Content model */
export enum ContentFieldName {
  ArticleId = 'articleId',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  HandlingUnitId = 'handlingUnitId',
  Id = 'id',
  LocationId = 'locationId',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  PurchaseOrderId = 'purchaseOrderId',
  Quantity = 'quantity',
  Reservation = 'reservation',
  StockOwnerId = 'stockOwnerId',
  StockStatus = 'stockStatus'
}

/** Returns a list of Content */
export type ContentListResult = {
  __typename?: 'ContentListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Content>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Content */
export type ContentOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: ContentFieldName;
};

/** Attributes of Content to filter onto */
export type ContentSearchFilters = {
  articleId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  handlingUnitId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  purchaseOrderId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  reservation?: InputMaybe<Scalars['String']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  stockStatus?: InputMaybe<Scalars['Int']>;
};

export type Conversion = {
  __typename?: 'Conversion';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  entry1?: Maybe<Scalars['String']>;
  entry2?: Maybe<Scalars['String']>;
  entry3?: Maybe<Scalars['String']>;
  entry4?: Maybe<Scalars['String']>;
  entry5?: Maybe<Scalars['String']>;
  exit1?: Maybe<Scalars['String']>;
  exit2?: Maybe<Scalars['String']>;
  exit3?: Maybe<Scalars['String']>;
  exit4?: Maybe<Scalars['String']>;
  exit5?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  /** Text value for field type */
  typeText?: Maybe<Scalars['String']>;
};

/** Field names for the Conversion model */
export enum ConversionFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  Entry1 = 'entry1',
  Entry2 = 'entry2',
  Entry3 = 'entry3',
  Entry4 = 'entry4',
  Entry5 = 'entry5',
  Exit1 = 'exit1',
  Exit2 = 'exit2',
  Exit3 = 'exit3',
  Exit4 = 'exit4',
  Exit5 = 'exit5',
  Extras = 'extras',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Status = 'status',
  StockOwnerId = 'stockOwnerId',
  Type = 'type'
}

/** Returns a list of Conversion */
export type ConversionListResult = {
  __typename?: 'ConversionListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Conversion>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Conversion */
export type ConversionOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: ConversionFieldName;
};

/** Attributes of Conversion to filter onto */
export type ConversionSearchFilters = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  entry1?: InputMaybe<Scalars['String']>;
  entry2?: InputMaybe<Scalars['String']>;
  entry3?: InputMaybe<Scalars['String']>;
  entry4?: InputMaybe<Scalars['String']>;
  entry5?: InputMaybe<Scalars['String']>;
  exit1?: InputMaybe<Scalars['String']>;
  exit2?: InputMaybe<Scalars['String']>;
  exit3?: InputMaybe<Scalars['String']>;
  exit4?: InputMaybe<Scalars['String']>;
  exit5?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
};

export type CreateArticleInput = {
  additionalDescription?: InputMaybe<Scalars['String']>;
  /** Replenish article unit. */
  baseUnitPicking?: InputMaybe<Scalars['Boolean']>;
  baseUnitPrice?: InputMaybe<Scalars['Float']>;
  baseUnitRotation?: InputMaybe<Scalars['Int']>;
  baseUnitWeight?: InputMaybe<Scalars['Float']>;
  code: Scalars['String'];
  countryOfOrigin?: InputMaybe<Scalars['String']>;
  cubingType: Scalars['Int'];
  endOfLife?: InputMaybe<Scalars['Boolean']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  family?: InputMaybe<Scalars['String']>;
  featureType?: InputMaybe<Scalars['Int']>;
  groupingId?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  permanentProduct?: InputMaybe<Scalars['Boolean']>;
  status: Scalars['Int'];
  stockOwnerId: Scalars['String'];
  subfamily?: InputMaybe<Scalars['String']>;
  supplierName?: InputMaybe<Scalars['String']>;
  supportPackaging?: InputMaybe<Scalars['String']>;
  supportQuantity?: InputMaybe<Scalars['Float']>;
  tariffClassification?: InputMaybe<Scalars['String']>;
  /** Field to manage translations of articles fields */
  translation?: InputMaybe<Scalars['JSON']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type CreateArticleLuBarcodeInput = {
  articleId: Scalars['String'];
  barcodeId: Scalars['String'];
  countryOfOrigin?: InputMaybe<Scalars['Int']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  luId: Scalars['String'];
  stockOwnerId: Scalars['String'];
};

export type CreateArticleLuInput = {
  articleId: Scalars['String'];
  baseUnitWeight?: InputMaybe<Scalars['Float']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  luId: Scalars['String'];
  picking?: InputMaybe<Scalars['Boolean']>;
  quantity?: InputMaybe<Scalars['Float']>;
  replenish?: InputMaybe<Scalars['Boolean']>;
  rotation?: InputMaybe<Scalars['Int']>;
  stockOwnerId: Scalars['String'];
  width?: InputMaybe<Scalars['Float']>;
};

export type CreateArticleSetDetailInput = {
  articleId: Scalars['String'];
  articleSetId: Scalars['String'];
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  quantity?: InputMaybe<Scalars['Float']>;
  stockOwnerId: Scalars['String'];
};

export type CreateArticleSetInput = {
  articleId: Scalars['String'];
  comment?: InputMaybe<Scalars['String']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  stockOwnerId: Scalars['String'];
};

export type CreateBarcodeInput = {
  blacklisted?: InputMaybe<Scalars['Boolean']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  flagDouble?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  preparationMode: Scalars['Int'];
  quantity?: InputMaybe<Scalars['Float']>;
  rotation: Scalars['Int'];
  stockOwnerId: Scalars['String'];
  supplierArticleCode?: InputMaybe<Scalars['String']>;
  supplierName?: InputMaybe<Scalars['String']>;
};

export type CreateBlockInput = {
  /** Set a group of several blocs */
  blockGroup?: InputMaybe<Scalars['Int']>;
  buildingId?: InputMaybe<Scalars['String']>;
  /** Large area without racks where products are stored on top of each other. */
  bulk?: InputMaybe<Scalars['Boolean']>;
  comment: Scalars['String'];
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  level?: InputMaybe<Scalars['Int']>;
  /** Manage stock in transit mode. */
  moveable?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type CreateBoxInput = {
  carrierBox?: InputMaybe<Scalars['String']>;
  carrierId: Scalars['String'];
  carrierService?: InputMaybe<Scalars['String']>;
  checkingTime?: InputMaybe<Scalars['DateTime']>;
  comment?: InputMaybe<Scalars['String']>;
  deliveryId: Scalars['String'];
  extras?: InputMaybe<Scalars['JSON']>;
  handlingUnitId?: InputMaybe<Scalars['String']>;
  loadId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  packagingId: Scalars['String'];
  preparationMode?: InputMaybe<Scalars['Int']>;
  roundId?: InputMaybe<Scalars['String']>;
  roundPosition?: InputMaybe<Scalars['Int']>;
  shippingExtendInfos?: InputMaybe<Scalars['String']>;
  status: Scalars['Int'];
  stockOwnerId: Scalars['String'];
  toBeChecked?: InputMaybe<Scalars['Boolean']>;
  toBePalletized?: InputMaybe<Scalars['Boolean']>;
  warehouseCode?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type CreateBoxLineFeatureInput = {
  boxLineId: Scalars['String'];
  extras?: InputMaybe<Scalars['JSON']>;
  featureCodeId: Scalars['String'];
  stockOwnerId: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type CreateBoxLineInput = {
  articleId: Scalars['String'];
  boxId: Scalars['String'];
  comment?: InputMaybe<Scalars['String']>;
  deliveryId: Scalars['String'];
  deliveryLineId: Scalars['String'];
  extras?: InputMaybe<Scalars['JSON']>;
  missingQuantity?: InputMaybe<Scalars['Float']>;
  pickedQuantity?: InputMaybe<Scalars['Float']>;
  preparationMode?: InputMaybe<Scalars['Int']>;
  quantityToBePicked?: InputMaybe<Scalars['Float']>;
  reservation?: InputMaybe<Scalars['String']>;
  status: Scalars['Int'];
  stockOwnerId: Scalars['String'];
};

export type CreateBuildingInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  address3?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactMobile?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  postCode?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

export type CreateCarrierInput = {
  accountNumber?: InputMaybe<Scalars['String']>;
  /** To temporary disabling a carrier. */
  available?: InputMaybe<Scalars['Boolean']>;
  code: Scalars['String'];
  counter?: InputMaybe<Scalars['Float']>;
  extraInfo?: InputMaybe<Scalars['String']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  isVirtual?: InputMaybe<Scalars['Boolean']>;
  monoroundgroup?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parentCarrierId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  /** When True, all boxes assigned to this carrier will change to this status after preparation and before shipment. */
  toBeLoaded?: InputMaybe<Scalars['Boolean']>;
  /** When True, all boxes assigned to this carrier will change to this status after preparation and before shipment. */
  toBePalletized?: InputMaybe<Scalars['Boolean']>;
  /** When True, a box for this carrier will first go through the 'WAITING RECEIPT' state before being 'SHIPPED'. To be shipped, the carrier's parcel number must be entered. */
  useReceiptNumber?: InputMaybe<Scalars['Boolean']>;
};

export type CreateConfigInput = {
  /** Code of the config info */
  code: Scalars['String'];
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  /** Scope of the config info */
  scope: Scalars['String'];
  /** value translation depending on the langauge */
  translation?: InputMaybe<Scalars['JSON']>;
  /** Text value of the config info */
  value: Scalars['String'];
};

export type CreateContentFeatureInput = {
  contentId: Scalars['String'];
  extras?: InputMaybe<Scalars['JSON']>;
  featureCodeId: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type CreateContentInput = {
  articleId: Scalars['String'];
  extras?: InputMaybe<Scalars['JSON']>;
  handlingUnitId?: InputMaybe<Scalars['String']>;
  locationId: Scalars['String'];
  purchaseOrderId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  reservation?: InputMaybe<Scalars['String']>;
  stockOwnerId: Scalars['String'];
  stockStatus: Scalars['Int'];
};

export type CreateConversionInput = {
  entry1?: InputMaybe<Scalars['String']>;
  entry2?: InputMaybe<Scalars['String']>;
  entry3?: InputMaybe<Scalars['String']>;
  entry4?: InputMaybe<Scalars['String']>;
  entry5?: InputMaybe<Scalars['String']>;
  exit1?: InputMaybe<Scalars['String']>;
  exit2?: InputMaybe<Scalars['String']>;
  exit3?: InputMaybe<Scalars['String']>;
  exit4?: InputMaybe<Scalars['String']>;
  exit5?: InputMaybe<Scalars['String']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId: Scalars['String'];
  type: Scalars['Int'];
};

export type CreateCycleCountInput = {
  articleId?: InputMaybe<Scalars['String']>;
  blockId?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  emptyLocation?: InputMaybe<Scalars['Boolean']>;
  extras?: InputMaybe<Scalars['JSON']>;
  finalAisle?: InputMaybe<Scalars['String']>;
  finalColumn?: InputMaybe<Scalars['String']>;
  finalLevel?: InputMaybe<Scalars['String']>;
  finalPosition?: InputMaybe<Scalars['String']>;
  model: Scalars['Int'];
  motive: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  numberOfDays?: InputMaybe<Scalars['Int']>;
  originalAisle?: InputMaybe<Scalars['String']>;
  originalColumn?: InputMaybe<Scalars['String']>;
  originalLevel?: InputMaybe<Scalars['String']>;
  originalPosition?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['Int']>;
  status: Scalars['Int'];
  stockOwnerId: Scalars['String'];
  type: Scalars['Int'];
};

export type CreateCycleCountLineInput = {
  articleId?: InputMaybe<Scalars['String']>;
  contentId?: InputMaybe<Scalars['String']>;
  cycleCountId: Scalars['String'];
  extras?: InputMaybe<Scalars['JSON']>;
  locationId?: InputMaybe<Scalars['String']>;
  status: Scalars['Int'];
  stockOwnerId: Scalars['String'];
};

export type CreateCycleCountMovementInput = {
  articleId?: InputMaybe<Scalars['String']>;
  contentId?: InputMaybe<Scalars['String']>;
  cycleCountId: Scalars['String'];
  date?: InputMaybe<Scalars['DateTime']>;
  extras?: InputMaybe<Scalars['JSON']>;
  gapPass1?: InputMaybe<Scalars['Float']>;
  gapPass2?: InputMaybe<Scalars['Float']>;
  gapPass3?: InputMaybe<Scalars['Float']>;
  locationId?: InputMaybe<Scalars['String']>;
  operatorPass1?: InputMaybe<Scalars['Float']>;
  operatorPass2?: InputMaybe<Scalars['Float']>;
  operatorPass3?: InputMaybe<Scalars['Float']>;
  qualityPass1?: InputMaybe<Scalars['Float']>;
  qualityPass2?: InputMaybe<Scalars['Float']>;
  qualityPass3?: InputMaybe<Scalars['Float']>;
  status: Scalars['Int'];
  stockOwnerId: Scalars['String'];
  type: Scalars['Int'];
};

export type CreateDeliveryInput = {
  anticipatedDelivery?: InputMaybe<Scalars['Boolean']>;
  anticipatedDeliveryDate?: InputMaybe<Scalars['DateTime']>;
  carrierId: Scalars['String'];
  carrierImposed?: InputMaybe<Scalars['Boolean']>;
  carrierService?: InputMaybe<Scalars['String']>;
  carrierSpecificInfo1?: InputMaybe<Scalars['String']>;
  carrierSpecificInfo2?: InputMaybe<Scalars['String']>;
  codAmount?: InputMaybe<Scalars['Int']>;
  codCurrency?: InputMaybe<Scalars['String']>;
  codPaymenyMode?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  companyOrigin?: InputMaybe<Scalars['String']>;
  compulsoryDeliveryDate?: InputMaybe<Scalars['DateTime']>;
  cubingResult?: InputMaybe<Scalars['Int']>;
  customerAddress: Scalars['String'];
  customerAddress2?: InputMaybe<Scalars['String']>;
  customerAddress3?: InputMaybe<Scalars['String']>;
  customerCity: Scalars['String'];
  customerCivility?: InputMaybe<Scalars['String']>;
  customerCompany?: InputMaybe<Scalars['String']>;
  customerCountry: Scalars['String'];
  customerDistrict?: InputMaybe<Scalars['String']>;
  customerEmail?: InputMaybe<Scalars['String']>;
  customerFirstName?: InputMaybe<Scalars['String']>;
  customerLanguage: Scalars['String'];
  customerMobile?: InputMaybe<Scalars['String']>;
  customerName: Scalars['String'];
  customerPhone?: InputMaybe<Scalars['String']>;
  customerPostcode: Scalars['String'];
  customerStreetNum?: InputMaybe<Scalars['String']>;
  deliveryPointNumber?: InputMaybe<Scalars['String']>;
  equipmentId: Scalars['String'];
  expectedDeliveryDate?: InputMaybe<Scalars['DateTime']>;
  extendDeliveryInformations?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  invoceDevise?: InputMaybe<Scalars['String']>;
  invoiceDiscount?: InputMaybe<Scalars['Float']>;
  invoiceReference?: InputMaybe<Scalars['String']>;
  invoiceShipping?: InputMaybe<Scalars['Float']>;
  invoiceTotalExcludingTaxes?: InputMaybe<Scalars['Float']>;
  invoiceTotalIncludingTaxes?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  orderDate?: InputMaybe<Scalars['DateTime']>;
  printDeliveryNote?: InputMaybe<Scalars['Int']>;
  printLanguage?: InputMaybe<Scalars['String']>;
  priority: Scalars['Int'];
  status: Scalars['Int'];
  stockOwnerId: Scalars['String'];
  toBePalletized?: InputMaybe<Scalars['Boolean']>;
  transportationAmount?: InputMaybe<Scalars['Int']>;
  type: Scalars['Int'];
};

export type CreateDeliveryLineInput = {
  articleId: Scalars['String'];
  backOrderQuantity?: InputMaybe<Scalars['Float']>;
  childLine?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  deliveryId: Scalars['String'];
  extras?: InputMaybe<Scalars['JSON']>;
  invoicePdfFile?: InputMaybe<Scalars['String']>;
  masterLine?: InputMaybe<Scalars['Int']>;
  masterLineNb?: InputMaybe<Scalars['Int']>;
  missingQuantity?: InputMaybe<Scalars['Float']>;
  pickedQuantity?: InputMaybe<Scalars['Float']>;
  quantityToBePicked?: InputMaybe<Scalars['Float']>;
  reservation?: InputMaybe<Scalars['String']>;
  status: Scalars['Int'];
  stockOwnerId: Scalars['String'];
  substitutionArticle?: InputMaybe<Scalars['String']>;
  toBeCubed?: InputMaybe<Scalars['Boolean']>;
  unitPriceExcludingTaxes?: InputMaybe<Scalars['Float']>;
  unitPriceIncludingTaxes?: InputMaybe<Scalars['Float']>;
  vatRate?: InputMaybe<Scalars['Float']>;
};

export type CreateEquipmentDetailInput = {
  equipmentId: Scalars['String'];
  extras?: InputMaybe<Scalars['JSON']>;
  packagingId?: InputMaybe<Scalars['String']>;
  preparationMode?: InputMaybe<Scalars['Int']>;
  stockOwnerId: Scalars['String'];
};

export type CreateEquipmentInput = {
  allowPickingOrderFree?: InputMaybe<Scalars['Boolean']>;
  /** To temporarily disable a piece of equipment. */
  available?: InputMaybe<Scalars['Boolean']>;
  boxLineGrouped?: InputMaybe<Scalars['Boolean']>;
  /** It will only accept a box with a single article reference (even if multiple quantity) */
  boxMonoArticle?: InputMaybe<Scalars['Boolean']>;
  /** If true, will enforce scanning of the barcode of box position on the equipment during the preparation step */
  checkPosition?: InputMaybe<Scalars['Boolean']>;
  comment?: InputMaybe<Scalars['String']>;
  /** To automatically distribute rounds on the radio terminals.If not distributed, the pick-up list will be printed when assigned */
  distributed?: InputMaybe<Scalars['Boolean']>;
  extras?: InputMaybe<Scalars['JSON']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  limitType?: InputMaybe<Scalars['Int']>;
  /** If false, it will split in different rounds */
  monoCarrier?: InputMaybe<Scalars['Boolean']>;
  /** If false, it will split in different rounds */
  monoCompany?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  nbMaxBox?: InputMaybe<Scalars['Int']>;
  /** Priority given to an equipment in the round calculation */
  priority?: InputMaybe<Scalars['Int']>;
  /** Maximum quantity of boxes that can be picked up for one round */
  qtyMaxArticle?: InputMaybe<Scalars['Int']>;
  status: Scalars['Int'];
  stockOwnerId: Scalars['String'];
  toleranceDimension?: InputMaybe<Scalars['Int']>;
  type: Scalars['Int'];
  virtual?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type CreateFeatureCodeInput = {
  dateType?: InputMaybe<Scalars['Boolean']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  lengthBarcode?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  prefixBarcode?: InputMaybe<Scalars['String']>;
  stockOwnerId: Scalars['String'];
  suffixBarcode?: InputMaybe<Scalars['String']>;
  unique?: InputMaybe<Scalars['Boolean']>;
};

export type CreateFeatureTypeDetailInput = {
  atPreparation?: InputMaybe<Scalars['Boolean']>;
  atReception?: InputMaybe<Scalars['Boolean']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  featureCodeId: Scalars['String'];
  featureType: Scalars['Int'];
  stockOwnerId: Scalars['String'];
};

export type CreateFeedbackOverwriteInput = {
  customValue?: InputMaybe<Scalars['Int']>;
  extras?: InputMaybe<Scalars['JSON']>;
  feedback?: InputMaybe<Scalars['Boolean']>;
  movementCode: Scalars['Int'];
  stockOwnerId?: InputMaybe<Scalars['String']>;
  system?: InputMaybe<Scalars['Boolean']>;
};

export type CreateGoodsInInput = {
  comment?: InputMaybe<Scalars['String']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
};

export type CreateGoodsInLineInput = {
  articleId: Scalars['String'];
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  goodsInId: Scalars['String'];
  purchaseOrderId: Scalars['String'];
  purchaseOrderLineId: Scalars['String'];
  quantity?: InputMaybe<Scalars['Float']>;
  reservation?: InputMaybe<Scalars['String']>;
  stockOwnerId: Scalars['String'];
};

export type CreateHandlingUnitInput = {
  barcodeId: Scalars['String'];
  category: Scalars['Int'];
  description?: InputMaybe<Scalars['String']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  parentHandlingUnitId?: InputMaybe<Scalars['String']>;
  status: Scalars['Int'];
  type: Scalars['Int'];
  weight?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type CreateLoadInput = {
  carrierId: Scalars['String'];
  counter?: InputMaybe<Scalars['Float']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  status: Scalars['Int'];
  stockOwnerId: Scalars['String'];
  weight?: InputMaybe<Scalars['Float']>;
};

export type CreateLocationInput = {
  aisle: Scalars['String'];
  /** Eminza : create inventory when stock below quantity */
  allowCycleCountStockMin?: InputMaybe<Scalars['Boolean']>;
  barcode: Scalars['String'];
  baseUnitRotation?: InputMaybe<Scalars['Int']>;
  blockId: Scalars['String'];
  column: Scalars['String'];
  comment?: InputMaybe<Scalars['String']>;
  constraint?: InputMaybe<Scalars['String']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  level: Scalars['String'];
  name: Scalars['String'];
  position: Scalars['String'];
  replenish?: InputMaybe<Scalars['Boolean']>;
  replenishType?: InputMaybe<Scalars['Int']>;
};

export type CreateLocationResponse = Location | ValidationError;

export type CreateLogisticUnitInput = {
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  luConfigId?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
  /** Logistic Unit with smaller level than this one (e.g. detail to box, box to palett) */
  parentLogisticUnitId?: InputMaybe<Scalars['String']>;
  status: Scalars['Int'];
  stockOwnerId: Scalars['String'];
  width?: InputMaybe<Scalars['Float']>;
};

export type CreateMovementInput = {
  actionCodeId?: InputMaybe<Scalars['String']>;
  articleId: Scalars['String'];
  boxId?: InputMaybe<Scalars['String']>;
  boxLineId?: InputMaybe<Scalars['String']>;
  code: Scalars['Int'];
  comment?: InputMaybe<Scalars['String']>;
  equipmentBarcode?: InputMaybe<Scalars['String']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  feedback?: InputMaybe<Scalars['Boolean']>;
  finalArticle?: InputMaybe<Scalars['Float']>;
  finalContentId?: InputMaybe<Scalars['String']>;
  finalLocationId?: InputMaybe<Scalars['String']>;
  finalQuantity?: InputMaybe<Scalars['Float']>;
  finalReservation?: InputMaybe<Scalars['String']>;
  finalStatus: Scalars['Int'];
  goodsInId?: InputMaybe<Scalars['String']>;
  initialReservation?: InputMaybe<Scalars['String']>;
  initialStatus: Scalars['Int'];
  model: Scalars['Int'];
  originalContentId: Scalars['String'];
  originalLocationId: Scalars['String'];
  originalMovementId?: InputMaybe<Scalars['String']>;
  priority: Scalars['Int'];
  purchaseOrderId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  returnCodeId?: InputMaybe<Scalars['String']>;
  status: Scalars['Int'];
  stockOwnerId: Scalars['String'];
  toBeFeedback?: InputMaybe<Scalars['Boolean']>;
  type: Scalars['Int'];
};

export type CreatePackagingInput = {
  autoCubingOrder?: InputMaybe<Scalars['Int']>;
  autoCubingProcess?: InputMaybe<Scalars['Boolean']>;
  closureWeight?: InputMaybe<Scalars['Float']>;
  cubingMaxArticleHeight?: InputMaybe<Scalars['Float']>;
  cubingMaxArticleLength?: InputMaybe<Scalars['Float']>;
  default?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  dispatchable?: InputMaybe<Scalars['Boolean']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  height: Scalars['Float'];
  length: Scalars['Float'];
  maxWeight?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  status: Scalars['Int'];
  system?: InputMaybe<Scalars['Boolean']>;
  weight: Scalars['Float'];
  width: Scalars['Float'];
};

export type CreateParameterInput = {
  /** Code of the parameter info */
  code: Scalars['String'];
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  /** Scope of the parameter info */
  scope: Scalars['String'];
  /** value translation depending on the langauge */
  translation?: InputMaybe<Scalars['JSON']>;
  /** Text value of the parameter info */
  value: Scalars['String'];
};

export type CreatePatternInput = {
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  patternType: Scalars['String'];
  status: Scalars['Int'];
  stockOwnerId: Scalars['String'];
};

export type CreatePatternPathInput = {
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  patternId: Scalars['String'];
  status: Scalars['Int'];
};

export type CreatePatternPathLocationInput = {
  extras?: InputMaybe<Scalars['JSON']>;
  locationId?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
};

export type CreatePurchaseOrderInput = {
  comment?: InputMaybe<Scalars['String']>;
  expectedGoodsInDate?: InputMaybe<Scalars['DateTime']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  orderDate?: InputMaybe<Scalars['DateTime']>;
  /** Status code of state of a purchase order */
  status: Scalars['Int'];
  stockOwnerId: Scalars['String'];
  supplier?: InputMaybe<Scalars['String']>;
  type: Scalars['Int'];
};

export type CreatePurchaseOrderLineInput = {
  articleId: Scalars['String'];
  blockingStatus: Scalars['Int'];
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  originalPurchaseOrder?: InputMaybe<Scalars['String']>;
  originalPurchaseOrderLine?: InputMaybe<Scalars['String']>;
  purchaseOrderId: Scalars['String'];
  quantity?: InputMaybe<Scalars['Float']>;
  quantityMax?: InputMaybe<Scalars['Float']>;
  receivedQuantity?: InputMaybe<Scalars['Float']>;
  reservation?: InputMaybe<Scalars['String']>;
  reservedQuantity?: InputMaybe<Scalars['Float']>;
  /** Status code of state of a purchase order line */
  status: Scalars['Int'];
  stockOwnerId: Scalars['String'];
};

export type CreateReturnCodeInput = {
  description?: InputMaybe<Scalars['String']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  type?: InputMaybe<Scalars['Int']>;
};

export type CreateRoundAdvisedAddressInput = {
  articleId: Scalars['String'];
  boxLineId?: InputMaybe<Scalars['String']>;
  contentId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  locationId?: InputMaybe<Scalars['String']>;
  locationType: Scalars['Int'];
  quantity?: InputMaybe<Scalars['Float']>;
  roundId: Scalars['String'];
  userTread?: InputMaybe<Scalars['String']>;
};

export type CreateRoundInput = {
  associatedRound?: InputMaybe<Scalars['Boolean']>;
  blocLevel?: InputMaybe<Scalars['Int']>;
  blockId?: InputMaybe<Scalars['String']>;
  carrierId?: InputMaybe<Scalars['String']>;
  delayBeforePacking?: InputMaybe<Scalars['DateTime']>;
  delayBeforePicking?: InputMaybe<Scalars['DateTime']>;
  equipmentBarcode?: InputMaybe<Scalars['String']>;
  equipmentId: Scalars['String'];
  expectedDeliveryDate?: InputMaybe<Scalars['DateTime']>;
  extras?: InputMaybe<Scalars['JSON']>;
  monoBloc?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  nbPickArticle?: InputMaybe<Scalars['Int']>;
  nbRoundLine?: InputMaybe<Scalars['Int']>;
  pickingTime?: InputMaybe<Scalars['DateTime']>;
  priority?: InputMaybe<Scalars['Int']>;
  productivity?: InputMaybe<Scalars['Int']>;
  replenishmentInProgress?: InputMaybe<Scalars['Boolean']>;
  status: Scalars['Int'];
  warehouseCode?: InputMaybe<Scalars['String']>;
};

export type CreateStatusEvolutionInput = {
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  feedback?: InputMaybe<Scalars['Boolean']>;
  object: Scalars['Int'];
  /** This will host the related object id */
  objectReference?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId: Scalars['String'];
  toBeFeedback?: InputMaybe<Scalars['Boolean']>;
};

export type CreateStatusFeedbackOverwriteInput = {
  customValue?: InputMaybe<Scalars['Int']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  feedback?: InputMaybe<Scalars['Boolean']>;
  objectType: Scalars['Int'];
  status: Scalars['Int'];
  stockOwnerId?: InputMaybe<Scalars['String']>;
  system?: InputMaybe<Scalars['Boolean']>;
};

export type CreateStockOwnerInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  address3?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  contact?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
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

export type CreateStockOwnerResponse = StockOwner | ValidationError;

export type CreateSystemConfigInput = {
  /** Code of the config info */
  code: Scalars['String'];
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: InputMaybe<Scalars['JSON']>;
  /** String-based unique identifier. */
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  /** Scope of the config info */
  scope: Scalars['String'];
  /** System config */
  system?: InputMaybe<Scalars['Boolean']>;
  /** value translation depending on the langauge */
  translation?: InputMaybe<Scalars['JSON']>;
  /** Text value of the config info */
  value: Scalars['String'];
};

export type CycleCount = {
  __typename?: 'CycleCount';
  articleId?: Maybe<Scalars['String']>;
  blockId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  emptyLocation?: Maybe<Scalars['Boolean']>;
  extras?: Maybe<Scalars['JSON']>;
  finalAisle?: Maybe<Scalars['String']>;
  finalColumn?: Maybe<Scalars['String']>;
  finalLevel?: Maybe<Scalars['String']>;
  finalPosition?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['Int']>;
  /** Text value for field model */
  modelText?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  motive?: Maybe<Scalars['Int']>;
  /** Text value for field motive */
  motiveText?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  numberOfDays?: Maybe<Scalars['Int']>;
  originalAisle?: Maybe<Scalars['String']>;
  originalColumn?: Maybe<Scalars['String']>;
  originalLevel?: Maybe<Scalars['String']>;
  originalPosition?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['Int']>;
  /** Text value for field reason */
  reasonText?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  /** Text value for field type */
  typeText?: Maybe<Scalars['String']>;
};

/** Field names for the CycleCount model */
export enum CycleCountFieldName {
  ArticleId = 'articleId',
  BlockId = 'blockId',
  Comment = 'comment',
  Created = 'created',
  CreatedBy = 'createdBy',
  EmptyLocation = 'emptyLocation',
  Extras = 'extras',
  FinalAisle = 'finalAisle',
  FinalColumn = 'finalColumn',
  FinalLevel = 'finalLevel',
  FinalPosition = 'finalPosition',
  Id = 'id',
  Model = 'model',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Motive = 'motive',
  Name = 'name',
  NumberOfDays = 'numberOfDays',
  OriginalAisle = 'originalAisle',
  OriginalColumn = 'originalColumn',
  OriginalLevel = 'originalLevel',
  OriginalPosition = 'originalPosition',
  Reason = 'reason',
  Status = 'status',
  StockOwnerId = 'stockOwnerId',
  Type = 'type'
}

export type CycleCountLine = {
  __typename?: 'CycleCountLine';
  articleId?: Maybe<Scalars['String']>;
  contentId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  cycleCountId?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
};

/** Field names for the CycleCountLine model */
export enum CycleCountLineFieldName {
  ArticleId = 'articleId',
  ContentId = 'contentId',
  Created = 'created',
  CreatedBy = 'createdBy',
  CycleCountId = 'cycleCountId',
  Extras = 'extras',
  Id = 'id',
  LocationId = 'locationId',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Status = 'status',
  StockOwnerId = 'stockOwnerId'
}

/** Returns a list of CycleCountLine */
export type CycleCountLineListResult = {
  __typename?: 'CycleCountLineListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<CycleCountLine>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for CycleCountLine */
export type CycleCountLineOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: CycleCountLineFieldName;
};

/** Attributes of CycleCountLine to filter onto */
export type CycleCountLineSearchFilters = {
  articleId?: InputMaybe<Scalars['String']>;
  contentId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  cycleCountId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Returns a list of CycleCount */
export type CycleCountListResult = {
  __typename?: 'CycleCountListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<CycleCount>;
  totalPages: Scalars['Int'];
};

export type CycleCountMovement = {
  __typename?: 'CycleCountMovement';
  articleId?: Maybe<Scalars['String']>;
  contentId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  cycleCountId?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  extras?: Maybe<Scalars['JSON']>;
  gapPass1?: Maybe<Scalars['Float']>;
  gapPass2?: Maybe<Scalars['Float']>;
  gapPass3?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  operatorPass1?: Maybe<Scalars['Float']>;
  operatorPass2?: Maybe<Scalars['Float']>;
  operatorPass3?: Maybe<Scalars['Float']>;
  qualityPass1?: Maybe<Scalars['Float']>;
  qualityPass2?: Maybe<Scalars['Float']>;
  qualityPass3?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  /** Text value for field type */
  typeText?: Maybe<Scalars['String']>;
};

/** Field names for the CycleCountMovement model */
export enum CycleCountMovementFieldName {
  ArticleId = 'articleId',
  ContentId = 'contentId',
  Created = 'created',
  CreatedBy = 'createdBy',
  CycleCountId = 'cycleCountId',
  Date = 'date',
  Extras = 'extras',
  GapPass1 = 'gapPass1',
  GapPass2 = 'gapPass2',
  GapPass3 = 'gapPass3',
  Id = 'id',
  LocationId = 'locationId',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  OperatorPass1 = 'operatorPass1',
  OperatorPass2 = 'operatorPass2',
  OperatorPass3 = 'operatorPass3',
  QualityPass1 = 'qualityPass1',
  QualityPass2 = 'qualityPass2',
  QualityPass3 = 'qualityPass3',
  Status = 'status',
  StockOwnerId = 'stockOwnerId',
  Type = 'type'
}

/** Returns a list of CycleCountMovement */
export type CycleCountMovementListResult = {
  __typename?: 'CycleCountMovementListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<CycleCountMovement>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for CycleCountMovement */
export type CycleCountMovementOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: CycleCountMovementFieldName;
};

/** Attributes of CycleCountMovement to filter onto */
export type CycleCountMovementSearchFilters = {
  articleId?: InputMaybe<Scalars['String']>;
  contentId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  cycleCountId?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  extras?: InputMaybe<Scalars['JSON']>;
  gapPass1?: InputMaybe<Scalars['Float']>;
  gapPass2?: InputMaybe<Scalars['Float']>;
  gapPass3?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  operatorPass1?: InputMaybe<Scalars['Float']>;
  operatorPass2?: InputMaybe<Scalars['Float']>;
  operatorPass3?: InputMaybe<Scalars['Float']>;
  qualityPass1?: InputMaybe<Scalars['Float']>;
  qualityPass2?: InputMaybe<Scalars['Float']>;
  qualityPass3?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
};

/** How to order the search results for CycleCount */
export type CycleCountOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: CycleCountFieldName;
};

/** Attributes of CycleCount to filter onto */
export type CycleCountSearchFilters = {
  articleId?: InputMaybe<Scalars['String']>;
  blockId?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  emptyLocation?: InputMaybe<Scalars['Boolean']>;
  extras?: InputMaybe<Scalars['JSON']>;
  finalAisle?: InputMaybe<Scalars['String']>;
  finalColumn?: InputMaybe<Scalars['String']>;
  finalLevel?: InputMaybe<Scalars['String']>;
  finalPosition?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['Int']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  motive?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  numberOfDays?: InputMaybe<Scalars['Int']>;
  originalAisle?: InputMaybe<Scalars['String']>;
  originalColumn?: InputMaybe<Scalars['String']>;
  originalLevel?: InputMaybe<Scalars['String']>;
  originalPosition?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
};

export type Delivery = {
  __typename?: 'Delivery';
  anticipatedDelivery?: Maybe<Scalars['Boolean']>;
  anticipatedDeliveryDate?: Maybe<Scalars['DateTime']>;
  carrierId?: Maybe<Scalars['String']>;
  carrierImposed?: Maybe<Scalars['Boolean']>;
  carrierService?: Maybe<Scalars['String']>;
  carrierSpecificInfo1?: Maybe<Scalars['String']>;
  carrierSpecificInfo2?: Maybe<Scalars['String']>;
  codAmount?: Maybe<Scalars['Int']>;
  codCurrency?: Maybe<Scalars['String']>;
  codPaymenyMode?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  companyOrigin?: Maybe<Scalars['String']>;
  compulsoryDeliveryDate?: Maybe<Scalars['DateTime']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  cubingResult?: Maybe<Scalars['Int']>;
  customerAddress?: Maybe<Scalars['String']>;
  customerAddress2?: Maybe<Scalars['String']>;
  customerAddress3?: Maybe<Scalars['String']>;
  customerCity?: Maybe<Scalars['String']>;
  customerCivility?: Maybe<Scalars['String']>;
  customerCompany?: Maybe<Scalars['String']>;
  customerCountry?: Maybe<Scalars['String']>;
  customerDistrict?: Maybe<Scalars['String']>;
  customerEmail?: Maybe<Scalars['String']>;
  customerFirstName?: Maybe<Scalars['String']>;
  customerLanguage?: Maybe<Scalars['String']>;
  customerMobile?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  customerPhone?: Maybe<Scalars['String']>;
  customerPostcode?: Maybe<Scalars['String']>;
  customerStreetNum?: Maybe<Scalars['String']>;
  deliveryPointNumber?: Maybe<Scalars['String']>;
  equipmentId?: Maybe<Scalars['String']>;
  expectedDeliveryDate?: Maybe<Scalars['DateTime']>;
  extendDeliveryInformations?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  invoceDevise?: Maybe<Scalars['String']>;
  invoiceDiscount?: Maybe<Scalars['Float']>;
  invoiceReference?: Maybe<Scalars['String']>;
  invoiceShipping?: Maybe<Scalars['Float']>;
  invoiceTotalExcludingTaxes?: Maybe<Scalars['Float']>;
  invoiceTotalIncludingTaxes?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['DateTime']>;
  printDeliveryNote?: Maybe<Scalars['Int']>;
  printLanguage?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  /** Text value for field priority */
  priorityText?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  toBePalletized?: Maybe<Scalars['Boolean']>;
  transportationAmount?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  /** Text value for field type */
  typeText?: Maybe<Scalars['String']>;
};

/** Field names for the Delivery model */
export enum DeliveryFieldName {
  AnticipatedDelivery = 'anticipatedDelivery',
  AnticipatedDeliveryDate = 'anticipatedDeliveryDate',
  CarrierId = 'carrierId',
  CarrierImposed = 'carrierImposed',
  CarrierService = 'carrierService',
  CarrierSpecificInfo1 = 'carrierSpecificInfo1',
  CarrierSpecificInfo2 = 'carrierSpecificInfo2',
  CodAmount = 'codAmount',
  CodCurrency = 'codCurrency',
  CodPaymenyMode = 'codPaymenyMode',
  Comment = 'comment',
  CompanyOrigin = 'companyOrigin',
  CompulsoryDeliveryDate = 'compulsoryDeliveryDate',
  Created = 'created',
  CreatedBy = 'createdBy',
  CubingResult = 'cubingResult',
  CustomerAddress = 'customerAddress',
  CustomerAddress2 = 'customerAddress2',
  CustomerAddress3 = 'customerAddress3',
  CustomerCity = 'customerCity',
  CustomerCivility = 'customerCivility',
  CustomerCompany = 'customerCompany',
  CustomerCountry = 'customerCountry',
  CustomerDistrict = 'customerDistrict',
  CustomerEmail = 'customerEmail',
  CustomerFirstName = 'customerFirstName',
  CustomerLanguage = 'customerLanguage',
  CustomerMobile = 'customerMobile',
  CustomerName = 'customerName',
  CustomerPhone = 'customerPhone',
  CustomerPostcode = 'customerPostcode',
  CustomerStreetNum = 'customerStreetNum',
  DeliveryPointNumber = 'deliveryPointNumber',
  EquipmentId = 'equipmentId',
  ExpectedDeliveryDate = 'expectedDeliveryDate',
  ExtendDeliveryInformations = 'extendDeliveryInformations',
  Extras = 'extras',
  Id = 'id',
  InvoceDevise = 'invoceDevise',
  InvoiceDiscount = 'invoiceDiscount',
  InvoiceReference = 'invoiceReference',
  InvoiceShipping = 'invoiceShipping',
  InvoiceTotalExcludingTaxes = 'invoiceTotalExcludingTaxes',
  InvoiceTotalIncludingTaxes = 'invoiceTotalIncludingTaxes',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  OrderDate = 'orderDate',
  PrintDeliveryNote = 'printDeliveryNote',
  PrintLanguage = 'printLanguage',
  Priority = 'priority',
  Status = 'status',
  StockOwnerId = 'stockOwnerId',
  ToBePalletized = 'toBePalletized',
  TransportationAmount = 'transportationAmount',
  Type = 'type'
}

export type DeliveryLine = {
  __typename?: 'DeliveryLine';
  articleId?: Maybe<Scalars['String']>;
  backOrderQuantity?: Maybe<Scalars['Float']>;
  childLine?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deliveryId?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  invoicePdfFile?: Maybe<Scalars['String']>;
  masterLine?: Maybe<Scalars['Int']>;
  masterLineNb?: Maybe<Scalars['Int']>;
  missingQuantity?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  pickedQuantity?: Maybe<Scalars['Float']>;
  quantityToBePicked?: Maybe<Scalars['Float']>;
  reservation?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  substitutionArticle?: Maybe<Scalars['String']>;
  toBeCubed?: Maybe<Scalars['Boolean']>;
  unitPriceExcludingTaxes?: Maybe<Scalars['Float']>;
  unitPriceIncludingTaxes?: Maybe<Scalars['Float']>;
  vatRate?: Maybe<Scalars['Float']>;
};

/** Field names for the DeliveryLine model */
export enum DeliveryLineFieldName {
  ArticleId = 'articleId',
  BackOrderQuantity = 'backOrderQuantity',
  ChildLine = 'childLine',
  Comment = 'comment',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeliveryId = 'deliveryId',
  Extras = 'extras',
  Id = 'id',
  InvoicePdfFile = 'invoicePdfFile',
  MasterLine = 'masterLine',
  MasterLineNb = 'masterLineNb',
  MissingQuantity = 'missingQuantity',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  PickedQuantity = 'pickedQuantity',
  QuantityToBePicked = 'quantityToBePicked',
  Reservation = 'reservation',
  Status = 'status',
  StockOwnerId = 'stockOwnerId',
  SubstitutionArticle = 'substitutionArticle',
  ToBeCubed = 'toBeCubed',
  UnitPriceExcludingTaxes = 'unitPriceExcludingTaxes',
  UnitPriceIncludingTaxes = 'unitPriceIncludingTaxes',
  VatRate = 'vatRate'
}

/** Returns a list of DeliveryLine */
export type DeliveryLineListResult = {
  __typename?: 'DeliveryLineListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<DeliveryLine>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for DeliveryLine */
export type DeliveryLineOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: DeliveryLineFieldName;
};

/** Attributes of DeliveryLine to filter onto */
export type DeliveryLineSearchFilters = {
  articleId?: InputMaybe<Scalars['String']>;
  backOrderQuantity?: InputMaybe<Scalars['Float']>;
  childLine?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deliveryId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  invoicePdfFile?: InputMaybe<Scalars['String']>;
  masterLine?: InputMaybe<Scalars['Int']>;
  masterLineNb?: InputMaybe<Scalars['Int']>;
  missingQuantity?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  pickedQuantity?: InputMaybe<Scalars['Float']>;
  quantityToBePicked?: InputMaybe<Scalars['Float']>;
  reservation?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  substitutionArticle?: InputMaybe<Scalars['String']>;
  toBeCubed?: InputMaybe<Scalars['Boolean']>;
  unitPriceExcludingTaxes?: InputMaybe<Scalars['Float']>;
  unitPriceIncludingTaxes?: InputMaybe<Scalars['Float']>;
  vatRate?: InputMaybe<Scalars['Float']>;
};

/** Returns a list of Delivery */
export type DeliveryListResult = {
  __typename?: 'DeliveryListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Delivery>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Delivery */
export type DeliveryOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: DeliveryFieldName;
};

/** Attributes of Delivery to filter onto */
export type DeliverySearchFilters = {
  anticipatedDelivery?: InputMaybe<Scalars['Boolean']>;
  anticipatedDeliveryDate?: InputMaybe<Scalars['DateTime']>;
  carrierId?: InputMaybe<Scalars['String']>;
  carrierImposed?: InputMaybe<Scalars['Boolean']>;
  carrierService?: InputMaybe<Scalars['String']>;
  carrierSpecificInfo1?: InputMaybe<Scalars['String']>;
  carrierSpecificInfo2?: InputMaybe<Scalars['String']>;
  codAmount?: InputMaybe<Scalars['Int']>;
  codCurrency?: InputMaybe<Scalars['String']>;
  codPaymenyMode?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  companyOrigin?: InputMaybe<Scalars['String']>;
  compulsoryDeliveryDate?: InputMaybe<Scalars['DateTime']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  cubingResult?: InputMaybe<Scalars['Int']>;
  customerAddress?: InputMaybe<Scalars['String']>;
  customerAddress2?: InputMaybe<Scalars['String']>;
  customerAddress3?: InputMaybe<Scalars['String']>;
  customerCity?: InputMaybe<Scalars['String']>;
  customerCivility?: InputMaybe<Scalars['String']>;
  customerCompany?: InputMaybe<Scalars['String']>;
  customerCountry?: InputMaybe<Scalars['String']>;
  customerDistrict?: InputMaybe<Scalars['String']>;
  customerEmail?: InputMaybe<Scalars['String']>;
  customerFirstName?: InputMaybe<Scalars['String']>;
  customerLanguage?: InputMaybe<Scalars['String']>;
  customerMobile?: InputMaybe<Scalars['String']>;
  customerName?: InputMaybe<Scalars['String']>;
  customerPhone?: InputMaybe<Scalars['String']>;
  customerPostcode?: InputMaybe<Scalars['String']>;
  customerStreetNum?: InputMaybe<Scalars['String']>;
  deliveryPointNumber?: InputMaybe<Scalars['String']>;
  equipmentId?: InputMaybe<Scalars['String']>;
  expectedDeliveryDate?: InputMaybe<Scalars['DateTime']>;
  extendDeliveryInformations?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  invoceDevise?: InputMaybe<Scalars['String']>;
  invoiceDiscount?: InputMaybe<Scalars['Float']>;
  invoiceReference?: InputMaybe<Scalars['String']>;
  invoiceShipping?: InputMaybe<Scalars['Float']>;
  invoiceTotalExcludingTaxes?: InputMaybe<Scalars['Float']>;
  invoiceTotalIncludingTaxes?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  orderDate?: InputMaybe<Scalars['DateTime']>;
  printDeliveryNote?: InputMaybe<Scalars['Int']>;
  printLanguage?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  toBePalletized?: InputMaybe<Scalars['Boolean']>;
  transportationAmount?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
};

export type Equipment = {
  __typename?: 'Equipment';
  allowPickingOrderFree?: Maybe<Scalars['Boolean']>;
  available?: Maybe<Scalars['Boolean']>;
  boxLineGrouped?: Maybe<Scalars['Boolean']>;
  boxMonoArticle?: Maybe<Scalars['Boolean']>;
  checkPosition?: Maybe<Scalars['Boolean']>;
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  distributed?: Maybe<Scalars['Boolean']>;
  extras?: Maybe<Scalars['JSON']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Float']>;
  limitType?: Maybe<Scalars['Int']>;
  /** Text value for field limit_type */
  limitTypeText?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  monoCarrier?: Maybe<Scalars['Boolean']>;
  monoCompany?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  nbMaxBox?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['Int']>;
  /** Text value for field priority */
  priorityText?: Maybe<Scalars['String']>;
  qtyMaxArticle?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  toleranceDimension?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  /** Text value for field type */
  typeText?: Maybe<Scalars['String']>;
  virtual?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Float']>;
};

export type EquipmentDetail = {
  __typename?: 'EquipmentDetail';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  equipmentId?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  packagingId?: Maybe<Scalars['String']>;
  preparationMode?: Maybe<Scalars['Int']>;
  /** Text value for field preparation_mode */
  preparationModeText?: Maybe<Scalars['String']>;
  stockOwnerId?: Maybe<Scalars['String']>;
};

/** Field names for the EquipmentDetail model */
export enum EquipmentDetailFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  EquipmentId = 'equipmentId',
  Extras = 'extras',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  PackagingId = 'packagingId',
  PreparationMode = 'preparationMode',
  StockOwnerId = 'stockOwnerId'
}

/** Returns a list of EquipmentDetail */
export type EquipmentDetailListResult = {
  __typename?: 'EquipmentDetailListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<EquipmentDetail>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for EquipmentDetail */
export type EquipmentDetailOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: EquipmentDetailFieldName;
};

/** Attributes of EquipmentDetail to filter onto */
export type EquipmentDetailSearchFilters = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  equipmentId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  packagingId?: InputMaybe<Scalars['String']>;
  preparationMode?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Field names for the Equipment model */
export enum EquipmentFieldName {
  AllowPickingOrderFree = 'allowPickingOrderFree',
  Available = 'available',
  BoxLineGrouped = 'boxLineGrouped',
  BoxMonoArticle = 'boxMonoArticle',
  CheckPosition = 'checkPosition',
  Comment = 'comment',
  Created = 'created',
  CreatedBy = 'createdBy',
  Distributed = 'distributed',
  Extras = 'extras',
  Height = 'height',
  Id = 'id',
  Length = 'length',
  LimitType = 'limitType',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  MonoCarrier = 'monoCarrier',
  MonoCompany = 'monoCompany',
  Name = 'name',
  NbMaxBox = 'nbMaxBox',
  Priority = 'priority',
  QtyMaxArticle = 'qtyMaxArticle',
  Status = 'status',
  StockOwnerId = 'stockOwnerId',
  ToleranceDimension = 'toleranceDimension',
  Type = 'type',
  Virtual = 'virtual',
  Width = 'width'
}

/** Returns a list of Equipment */
export type EquipmentListResult = {
  __typename?: 'EquipmentListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Equipment>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Equipment */
export type EquipmentOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: EquipmentFieldName;
};

/** Attributes of Equipment to filter onto */
export type EquipmentSearchFilters = {
  allowPickingOrderFree?: InputMaybe<Scalars['Boolean']>;
  available?: InputMaybe<Scalars['Boolean']>;
  boxLineGrouped?: InputMaybe<Scalars['Boolean']>;
  boxMonoArticle?: InputMaybe<Scalars['Boolean']>;
  checkPosition?: InputMaybe<Scalars['Boolean']>;
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  distributed?: InputMaybe<Scalars['Boolean']>;
  extras?: InputMaybe<Scalars['JSON']>;
  height?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Float']>;
  limitType?: InputMaybe<Scalars['Int']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  monoCarrier?: InputMaybe<Scalars['Boolean']>;
  monoCompany?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  nbMaxBox?: InputMaybe<Scalars['Int']>;
  priority?: InputMaybe<Scalars['Int']>;
  qtyMaxArticle?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  toleranceDimension?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
  virtual?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Float']>;
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

export type FeatureCode = {
  __typename?: 'FeatureCode';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  dateType?: Maybe<Scalars['Boolean']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  lengthBarcode?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  prefixBarcode?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  suffixBarcode?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
};

/** Field names for the FeatureCode model */
export enum FeatureCodeFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  DateType = 'dateType',
  Extras = 'extras',
  Id = 'id',
  LengthBarcode = 'lengthBarcode',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  PrefixBarcode = 'prefixBarcode',
  StockOwnerId = 'stockOwnerId',
  SuffixBarcode = 'suffixBarcode',
  Unique = 'unique'
}

/** Returns a list of FeatureCode */
export type FeatureCodeListResult = {
  __typename?: 'FeatureCodeListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<FeatureCode>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for FeatureCode */
export type FeatureCodeOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: FeatureCodeFieldName;
};

/** Attributes of FeatureCode to filter onto */
export type FeatureCodeSearchFilters = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  dateType?: InputMaybe<Scalars['Boolean']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  lengthBarcode?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  prefixBarcode?: InputMaybe<Scalars['String']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  suffixBarcode?: InputMaybe<Scalars['String']>;
  unique?: InputMaybe<Scalars['Boolean']>;
};

export type FeatureTypeDetail = {
  __typename?: 'FeatureTypeDetail';
  atPreparation?: Maybe<Scalars['Boolean']>;
  atReception?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  featureCodeId?: Maybe<Scalars['String']>;
  featureType?: Maybe<Scalars['Int']>;
  /** Text value for field feature_type */
  featureTypeText?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  stockOwnerId?: Maybe<Scalars['String']>;
};

/** Field names for the FeatureTypeDetail model */
export enum FeatureTypeDetailFieldName {
  AtPreparation = 'atPreparation',
  AtReception = 'atReception',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  FeatureCodeId = 'featureCodeId',
  FeatureType = 'featureType',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  StockOwnerId = 'stockOwnerId'
}

/** Returns a list of FeatureTypeDetail */
export type FeatureTypeDetailListResult = {
  __typename?: 'FeatureTypeDetailListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<FeatureTypeDetail>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for FeatureTypeDetail */
export type FeatureTypeDetailOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: FeatureTypeDetailFieldName;
};

/** Attributes of FeatureTypeDetail to filter onto */
export type FeatureTypeDetailSearchFilters = {
  atPreparation?: InputMaybe<Scalars['Boolean']>;
  atReception?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  featureCodeId?: InputMaybe<Scalars['String']>;
  featureType?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

export type FeedbackOverwrite = {
  __typename?: 'FeedbackOverwrite';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  customValue?: Maybe<Scalars['Int']>;
  extras?: Maybe<Scalars['JSON']>;
  feedback?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  movementCode?: Maybe<Scalars['Int']>;
  /** Text value for field movement_code */
  movementCodeText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  system?: Maybe<Scalars['Boolean']>;
};

/** Field names for the FeedbackOverwrite model */
export enum FeedbackOverwriteFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  CustomValue = 'customValue',
  Extras = 'extras',
  Feedback = 'feedback',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  MovementCode = 'movementCode',
  StockOwnerId = 'stockOwnerId',
  System = 'system'
}

/** Returns a list of FeedbackOverwrite */
export type FeedbackOverwriteListResult = {
  __typename?: 'FeedbackOverwriteListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<FeedbackOverwrite>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for FeedbackOverwrite */
export type FeedbackOverwriteOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: FeedbackOverwriteFieldName;
};

/** Attributes of FeedbackOverwrite to filter onto */
export type FeedbackOverwriteSearchFilters = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  customValue?: InputMaybe<Scalars['Int']>;
  extras?: InputMaybe<Scalars['JSON']>;
  feedback?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  movementCode?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  system?: InputMaybe<Scalars['Boolean']>;
};

export type FileInfo = {
  __typename?: 'FileInfo';
  key: Scalars['String'];
};

export type FileUploadResult = {
  __typename?: 'FileUploadResult';
  /** Generated filename during the upload */
  fileName: Scalars['String'];
  /** Presigned url of file */
  presignedUrl: Scalars['String'];
};

export type GoodsIn = {
  __typename?: 'GoodsIn';
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
};

/** Field names for the GoodsIn model */
export enum GoodsInFieldName {
  Comment = 'comment',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name'
}

export type GoodsInLine = {
  __typename?: 'GoodsInLine';
  articleId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  goodsInId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  purchaseOrderId?: Maybe<Scalars['String']>;
  purchaseOrderLineId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  reservation?: Maybe<Scalars['String']>;
  stockOwnerId?: Maybe<Scalars['String']>;
};

/** Field names for the GoodsInLine model */
export enum GoodsInLineFieldName {
  ArticleId = 'articleId',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  GoodsInId = 'goodsInId',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  PurchaseOrderId = 'purchaseOrderId',
  PurchaseOrderLineId = 'purchaseOrderLineId',
  Quantity = 'quantity',
  Reservation = 'reservation',
  StockOwnerId = 'stockOwnerId'
}

/** Returns a list of GoodsInLine */
export type GoodsInLineListResult = {
  __typename?: 'GoodsInLineListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<GoodsInLine>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for GoodsInLine */
export type GoodsInLineOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: GoodsInLineFieldName;
};

/** Attributes of GoodsInLine to filter onto */
export type GoodsInLineSearchFilters = {
  articleId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  goodsInId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  purchaseOrderId?: InputMaybe<Scalars['String']>;
  purchaseOrderLineId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  reservation?: InputMaybe<Scalars['String']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Returns a list of GoodsIn */
export type GoodsInListResult = {
  __typename?: 'GoodsInListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<GoodsIn>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for GoodsIn */
export type GoodsInOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: GoodsInFieldName;
};

/** Attributes of GoodsIn to filter onto */
export type GoodsInSearchFilters = {
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type HandlingUnit = {
  __typename?: 'HandlingUnit';
  barcodeId?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['Int']>;
  /** Text value for field category */
  categoryText?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentHandlingUnit: Array<HandlingUnit>;
  parentHandlingUnitId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  /** Text value for field type */
  typeText?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** Field names for the HandlingUnit model */
export enum HandlingUnitFieldName {
  BarcodeId = 'barcodeId',
  Category = 'category',
  Created = 'created',
  CreatedBy = 'createdBy',
  Description = 'description',
  Extras = 'extras',
  Height = 'height',
  Id = 'id',
  Length = 'length',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  ParentHandlingUnitId = 'parentHandlingUnitId',
  Status = 'status',
  Type = 'type',
  Weight = 'weight',
  Width = 'width'
}

/** Returns a list of HandlingUnit */
export type HandlingUnitListResult = {
  __typename?: 'HandlingUnitListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<HandlingUnit>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for HandlingUnit */
export type HandlingUnitOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: HandlingUnitFieldName;
};

/** Attributes of HandlingUnit to filter onto */
export type HandlingUnitSearchFilters = {
  barcodeId?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  height?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parentHandlingUnitId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type Integrator = {
  __typename?: 'Integrator';
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
};

/** Field names for the Integrator model */
export enum IntegratorFieldName {
  AwsAccessKeyId = 'awsAccessKeyId',
  AwsSecretAccessKey = 'awsSecretAccessKey',
  Created = 'created',
  CreatedBy = 'createdBy',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name'
}

/** Returns a list of Integrator */
export type IntegratorListResult = {
  __typename?: 'IntegratorListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Integrator>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Integrator */
export type IntegratorOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: IntegratorFieldName;
};

/** Attributes of Integrator to filter onto */
export type IntegratorSearchFilters = {
  awsAccessKeyId?: InputMaybe<Scalars['String']>;
  awsSecretAccessKey?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IntegratorUser = {
  __typename?: 'IntegratorUser';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  integrator: Integrator;
  integratorId: Scalars['String'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  role: RoleType;
  roleId: Scalars['String'];
};

/** Field names for the IntegratorUser model */
export enum IntegratorUserFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  Email = 'email',
  Id = 'id',
  IntegratorId = 'integratorId',
  IsAdmin = 'isAdmin',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Password = 'password',
  RoleId = 'roleId'
}

/** Returns a list of IntegratorUser */
export type IntegratorUserListResult = {
  __typename?: 'IntegratorUserListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<IntegratorUser>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for IntegratorUser */
export type IntegratorUserOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: IntegratorUserFieldName;
};

/** Attributes of IntegratorUser to filter onto */
export type IntegratorUserSearchFilters = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  integratorId?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  roleId?: InputMaybe<Scalars['String']>;
};

export type Load = {
  __typename?: 'Load';
  carrierId?: Maybe<Scalars['String']>;
  counter?: Maybe<Scalars['Float']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Field names for the Load model */
export enum LoadFieldName {
  CarrierId = 'carrierId',
  Counter = 'counter',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  Status = 'status',
  StockOwnerId = 'stockOwnerId',
  Weight = 'weight'
}

/** Returns a list of Load */
export type LoadListResult = {
  __typename?: 'LoadListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Load>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Load */
export type LoadOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: LoadFieldName;
};

/** Attributes of Load to filter onto */
export type LoadSearchFilters = {
  carrierId?: InputMaybe<Scalars['String']>;
  counter?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type Location = {
  __typename?: 'Location';
  aisle?: Maybe<Scalars['String']>;
  allowCycleCountStockMin?: Maybe<Scalars['Boolean']>;
  barcode?: Maybe<Scalars['String']>;
  baseUnitRotation?: Maybe<Scalars['Int']>;
  /** Text value for field base_unit_rotation */
  baseUnitRotationText?: Maybe<Scalars['String']>;
  block: Block;
  blockId?: Maybe<Scalars['String']>;
  column?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  constraint?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  replenish?: Maybe<Scalars['Boolean']>;
  replenishType?: Maybe<Scalars['Int']>;
};

/** Filters to apply before the data export is made */
export type LocationExportFilters = {
  aisle?: InputMaybe<Scalars['String']>;
  allowCycleCountStockMin?: InputMaybe<Scalars['Boolean']>;
  barcode?: InputMaybe<Scalars['String']>;
  baseUnitRotation?: InputMaybe<Scalars['Int']>;
  blockId?: InputMaybe<Scalars['String']>;
  column?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  constraint?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  level?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
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
  Column = 'column',
  Comment = 'comment',
  Constraint = 'constraint',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
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
  aisle?: InputMaybe<Scalars['String']>;
  allowCycleCountStockMin?: InputMaybe<Scalars['Boolean']>;
  barcode?: InputMaybe<Scalars['String']>;
  baseUnitRotation?: InputMaybe<Scalars['Int']>;
  blockId?: InputMaybe<Scalars['String']>;
  column?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  constraint?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  replenish?: InputMaybe<Scalars['Boolean']>;
  replenishType?: InputMaybe<Scalars['Int']>;
};

export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  /** A short-lived JWT that can be used to authenticate a user onto the platform */
  accessToken: Scalars['String'];
};

export type LogisticUnit = {
  __typename?: 'LogisticUnit';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Float']>;
  luConfigId?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['Int']>;
  /** Text value for field model */
  modelText?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  parentLogisticUnit: Array<LogisticUnit>;
  parentLogisticUnitId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

/** Filters to apply before the data export is made */
export type LogisticUnitExportFilters = {
  extras?: InputMaybe<Scalars['JSON']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  luConfigId?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  parentLogisticUnitId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

/** Field names for the LogisticUnit model */
export enum LogisticUnitFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  Height = 'height',
  Id = 'id',
  Length = 'length',
  LuConfigId = 'luConfigId',
  Model = 'model',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  Order = 'order',
  ParentLogisticUnitId = 'parentLogisticUnitId',
  Status = 'status',
  StockOwnerId = 'stockOwnerId',
  Width = 'width'
}

/** Returns a list of LogisticUnit */
export type LogisticUnitListResult = {
  __typename?: 'LogisticUnitListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<LogisticUnit>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for LogisticUnit */
export type LogisticUnitOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: LogisticUnitFieldName;
};

/** Attributes of LogisticUnit to filter onto */
export type LogisticUnitSearchFilters = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  height?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Float']>;
  luConfigId?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['Int']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  parentLogisticUnitId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MeResponse = IntegratorUser | WarehouseWorker;

export type MissingContext = {
  __typename?: 'MissingContext';
  /** Message explaining which context fields are missing in the GraphQL mutation call */
  message: Scalars['String'];
};

export enum ModeEnum {
  Read = 'READ',
  Write = 'WRITE'
}

export type Movement = {
  __typename?: 'Movement';
  actionCodeId?: Maybe<Scalars['String']>;
  articleId?: Maybe<Scalars['String']>;
  boxId?: Maybe<Scalars['String']>;
  boxLineId?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  /** Text value for field code */
  codeText?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  equipmentBarcode?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  feedback?: Maybe<Scalars['Boolean']>;
  finalArticle?: Maybe<Scalars['Float']>;
  finalContentId?: Maybe<Scalars['String']>;
  finalLocationId?: Maybe<Scalars['String']>;
  finalQuantity?: Maybe<Scalars['Float']>;
  finalReservation?: Maybe<Scalars['String']>;
  finalStatus?: Maybe<Scalars['Int']>;
  /** Text value for field final_status */
  finalStatusText?: Maybe<Scalars['String']>;
  goodsInId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  initialReservation?: Maybe<Scalars['String']>;
  initialStatus?: Maybe<Scalars['Int']>;
  /** Text value for field initial_status */
  initialStatusText?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['Int']>;
  /** Text value for field model */
  modelText?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  originalContentId?: Maybe<Scalars['String']>;
  originalLocationId?: Maybe<Scalars['String']>;
  originalMovement: Array<Movement>;
  originalMovementId?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  /** Text value for field priority */
  priorityText?: Maybe<Scalars['String']>;
  purchaseOrderId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  returnCodeId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  toBeFeedback?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['Int']>;
  /** Text value for field type */
  typeText?: Maybe<Scalars['String']>;
};

/** Field names for the Movement model */
export enum MovementFieldName {
  ActionCodeId = 'actionCodeId',
  ArticleId = 'articleId',
  BoxId = 'boxId',
  BoxLineId = 'boxLineId',
  Code = 'code',
  Comment = 'comment',
  Created = 'created',
  CreatedBy = 'createdBy',
  EquipmentBarcode = 'equipmentBarcode',
  Extras = 'extras',
  Feedback = 'feedback',
  FinalArticle = 'finalArticle',
  FinalContentId = 'finalContentId',
  FinalLocationId = 'finalLocationId',
  FinalQuantity = 'finalQuantity',
  FinalReservation = 'finalReservation',
  FinalStatus = 'finalStatus',
  GoodsInId = 'goodsInId',
  Id = 'id',
  InitialReservation = 'initialReservation',
  InitialStatus = 'initialStatus',
  Model = 'model',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  OriginalContentId = 'originalContentId',
  OriginalLocationId = 'originalLocationId',
  OriginalMovementId = 'originalMovementId',
  Priority = 'priority',
  PurchaseOrderId = 'purchaseOrderId',
  Quantity = 'quantity',
  ReturnCodeId = 'returnCodeId',
  Status = 'status',
  StockOwnerId = 'stockOwnerId',
  ToBeFeedback = 'toBeFeedback',
  Type = 'type'
}

/** Returns a list of Movement */
export type MovementListResult = {
  __typename?: 'MovementListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Movement>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Movement */
export type MovementOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: MovementFieldName;
};

/** Attributes of Movement to filter onto */
export type MovementSearchFilters = {
  actionCodeId?: InputMaybe<Scalars['String']>;
  articleId?: InputMaybe<Scalars['String']>;
  boxId?: InputMaybe<Scalars['String']>;
  boxLineId?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  equipmentBarcode?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  feedback?: InputMaybe<Scalars['Boolean']>;
  finalArticle?: InputMaybe<Scalars['Float']>;
  finalContentId?: InputMaybe<Scalars['String']>;
  finalLocationId?: InputMaybe<Scalars['String']>;
  finalQuantity?: InputMaybe<Scalars['Float']>;
  finalReservation?: InputMaybe<Scalars['String']>;
  finalStatus?: InputMaybe<Scalars['Int']>;
  goodsInId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  initialReservation?: InputMaybe<Scalars['String']>;
  initialStatus?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['Int']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  originalContentId?: InputMaybe<Scalars['String']>;
  originalLocationId?: InputMaybe<Scalars['String']>;
  originalMovementId?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  purchaseOrderId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  returnCodeId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  toBeFeedback?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create multiple Locations */
  bulkCreateLocations: Array<Location>;
  /** Create multiple PatternPathLocations */
  bulkCreatePatternPathLocations: Array<PatternPathLocation>;
  /** Deletes all BoxLineFeature associated to a given BoxLine */
  bulkDeleteBoxLineFeatures: Scalars['Boolean'];
  /** Deletes all BoxLine associated to a given Box */
  bulkDeleteBoxLines: Scalars['Boolean'];
  /** Deletes all ContentFeature associated to a given Content */
  bulkDeleteContentFeatures: Scalars['Boolean'];
  /** Deletes all CycleCountLine associated to a given Cycle Count */
  bulkDeleteCycleCountLines: Scalars['Boolean'];
  /** Deletes all CycleCountMovement associated to a given Cycle Count */
  bulkDeleteCycleCountMovements: Scalars['Boolean'];
  /** Deletes all Deliveryline associated to a given Delivery */
  bulkDeleteDeliveryLines: Scalars['Boolean'];
  /** Deletes all EquipmentDetail associated to a given Equipment */
  bulkDeleteEquipmentDetails: Scalars['Boolean'];
  /** Delete multiple Locations */
  bulkDeleteLocations: Array<Location>;
  /** Deletes all PatternPathLocations associated with a given PatternPath */
  bulkDeletePatternPathLocations: Scalars['Boolean'];
  /** Deletes all RoundAdvisedAddress associated to a given Round */
  bulkDeleteRoundAdvisedAddresses: Scalars['Boolean'];
  /** Change own password using a temporary token */
  changePassword: ChangePasswordResponse;
  /** Create article */
  createArticle: Article;
  /** Create article_logistic unit object */
  createArticleLu: ArticleLu;
  /** Create article_logistic unit_barcode */
  createArticleLuBarcode: ArticleLuBarcode;
  /** Create article set */
  createArticleSet: ArticleSet;
  /** Create article set */
  createArticleSetDetail: ArticleSetDetail;
  /** Create barcode */
  createBarcode: Barcode;
  /** Create a Block */
  createBlock: Block;
  /** Create box */
  createBox: Box;
  /** Create box_line */
  createBoxLine: BoxLine;
  /** Create box_line_feature */
  createBoxLineFeature: BoxLineFeature;
  /** Create a Building */
  createBuilding: Building;
  /** Create a Carrier */
  createCarrier: Carrier;
  /** Create a new client */
  createClient: Client;
  /** Create a Config */
  createConfig: Config;
  /** Create content */
  createContent: Content;
  /** Create content_feature */
  createContentFeature: ContentFeature;
  /** Create conversion */
  createConversion: Conversion;
  /** Create cycle_count */
  createCycleCount: CycleCount;
  /** Create cycle_count_line */
  createCycleCountLine: CycleCountLine;
  /** Create cycle_count_movement */
  createCycleCountMovement: CycleCountMovement;
  /** Create delivery */
  createDelivery: Delivery;
  /** Create delivery_line */
  createDeliveryLine: DeliveryLine;
  /** Create equipment */
  createEquipment: Equipment;
  /** Create equipment_detail */
  createEquipmentDetail: EquipmentDetail;
  /** Create feature code */
  createFeatureCode: FeatureCode;
  /** Create feature type detail */
  createFeatureTypeDetail: FeatureTypeDetail;
  /** Create feedback_overwrite */
  createFeedbackOverwrite: FeedbackOverwrite;
  /** Create goods-in */
  createGoodsIn: GoodsIn;
  /** Create goods-in line */
  createGoodsInLine: GoodsInLine;
  /** Create handling_unit */
  createHandlingUnit: HandlingUnit;
  /** Create an IntegratorOrganization */
  createIntegratorOrganization: Integrator;
  /** Create integrator as superadmin */
  createIntegratorUser: IntegratorUser;
  /** Create load */
  createLoad: Load;
  createLocation: CreateLocationResponse;
  /** Create logistic unit */
  createLogisticUnit: LogisticUnit;
  /** Create movement */
  createMovement: Movement;
  /** Create package */
  createPackaging: Packaging;
  /** Create a Parameter */
  createParameter: Parameter;
  /** Create a Pattern */
  createPattern: Pattern;
  /** Create a PatternPath */
  createPatternPath: PatternPath;
  /** Create a PurchaseOrder */
  createPurchaseOrder: PurchaseOrder;
  /** Create a PurchaseOrderLine */
  createPurchaseOrderLine: PurchaseOrderLine;
  /** Create Return Code */
  createReturnCode: ReturnCode;
  /** Create a new Role */
  createRole: RoleType;
  /** Create round */
  createRound: Round;
  /** Create round_advised_address */
  createRoundAdvisedAddress: RoundAdvisedAddress;
  /** Create a Status Evolution */
  createStatusEvolution: StatusEvolution;
  /** Create a Status Feedback Overwrite */
  createStatusFeedbackOverwrite: StatusFeedbackOverWrite;
  /** Create stock owner */
  createStockOwner: CreateStockOwnerResponse;
  /** Create a new system config */
  createSystemConfig: Config;
  /** Create a new system parameter */
  createSystemParameter: Parameter;
  /** Create a new Warehouse */
  createWarehouse: Warehouse;
  /** Create a warehouse worker */
  createWarehouseWorker: WarehouseWorker;
  /** Delete article */
  deleteArticle: Scalars['Boolean'];
  /** Delete logistic unit */
  deleteArticleLu: Scalars['Boolean'];
  /** Delete article_logistic unit_barcode */
  deleteArticleLuBarcode: Scalars['Boolean'];
  /** Delete article set */
  deleteArticleSet: Scalars['Boolean'];
  /** Delete article set detail */
  deleteArticleSetDetail: Scalars['Boolean'];
  /** Delete barcode */
  deleteBarcode: Scalars['Boolean'];
  /** Delete a Block */
  deleteBlock: Scalars['Boolean'];
  /** Delete box */
  deleteBox: Scalars['Boolean'];
  /** Delete box_line */
  deleteBoxLine: Scalars['Boolean'];
  /** Delete box_line_feature */
  deleteBoxLineFeature: Scalars['Boolean'];
  /** Delete a building */
  deleteBuilding: Scalars['Boolean'];
  /** Delete a Carrier */
  deleteCarrier: Scalars['Boolean'];
  /** Delete a not systeme Config */
  deleteConfig: Scalars['Boolean'];
  /** Delete content */
  deleteContent: Scalars['Boolean'];
  /** Delete content_feature */
  deleteContentFeature: Scalars['Boolean'];
  /** Delete conversion */
  deleteConversion: Scalars['Boolean'];
  /** Delete cycle_count */
  deleteCycleCount: Scalars['Boolean'];
  /** Delete cycle_count_line */
  deleteCycleCountLine: Scalars['Boolean'];
  /** Delete cycle_count_movement */
  deleteCycleCountMovement: Scalars['Boolean'];
  /** Delete delivery */
  deleteDelivery: Scalars['Boolean'];
  /** Delete delivery_line */
  deleteDeliveryLine: Scalars['Boolean'];
  /** Delete equipment */
  deleteEquipment: Scalars['Boolean'];
  /** Delete equipment_detail */
  deleteEquipmentDetail: Scalars['Boolean'];
  /** Delete feature code */
  deleteFeatureCode: Scalars['Boolean'];
  /** Delete feature type detail */
  deleteFeatureTypeDetail: Scalars['Boolean'];
  /** Delete feedback_overwrite */
  deleteFeedbackOverwrite: Scalars['Boolean'];
  /** Delete a File */
  deleteFile: Scalars['Boolean'];
  /** Delete goods-in */
  deleteGoodsIn: Scalars['Boolean'];
  /** Delete goods-in line */
  deleteGoodsInLine: Scalars['Boolean'];
  /** Delete handling_unit */
  deleteHandlingUnit: Scalars['Boolean'];
  /** Delete an Integrator */
  deleteIntegrator: Scalars['Boolean'];
  /** Delete integrator user. */
  deleteIntegratorUser: Scalars['Boolean'];
  /** Delete load */
  deleteLoad: Scalars['Boolean'];
  /** Delete a Location */
  deleteLocation: Scalars['Boolean'];
  /** Delete logistic unit */
  deleteLogisticUnit: Scalars['Boolean'];
  /** Delete movement */
  deleteMovement: Scalars['Boolean'];
  /** Delete packaging */
  deletePackaging: Scalars['Boolean'];
  /** Delete a not system parameter */
  deleteParameter: Scalars['Boolean'];
  /** Delete a Pattern */
  deletePattern: Scalars['Boolean'];
  /** Delete a PatternPath */
  deletePatternPath: Scalars['Boolean'];
  /** Delete a PurchaseOrder */
  deletePurchaseOrder: Scalars['Boolean'];
  /** Delete a PurchaseOrderLine */
  deletePurchaseOrderLine: Scalars['Boolean'];
  /** Delete a return code */
  deleteReturnCode: Scalars['Boolean'];
  deleteRole: Scalars['Boolean'];
  /** Delete round */
  deleteRound: Scalars['Boolean'];
  /** Delete round_advised_address */
  deleteRoundAdvisedAddress: Scalars['Boolean'];
  /** Delete a Status Evolution */
  deleteStatusEvolution: Scalars['Boolean'];
  /** Delete a Status Feedback Overwrite */
  deleteStatusFeedbackOverwrite: Scalars['Boolean'];
  /** Delete a system Config (reserved for super admin) */
  deleteSystemConfig: Scalars['Boolean'];
  /** Delete a system parameter (reserved for super admin) */
  deleteSystemParameter: Scalars['Boolean'];
  deleteWarehouse: Scalars['Boolean'];
  /** Deleting warehouse worker. */
  deleteWarehouseWorker: Scalars['Boolean'];
  /** Exports Articles into a file */
  exportArticles: ExportResult;
  /** Exports Barcodes into a file */
  exportBarcodes: ExportResult;
  /** Exports Boxes into a file */
  exportBoxes: ExportResult;
  /** Exports Contents into a file */
  exportContents: ExportResult;
  /** Exports CycleCounts into a file */
  exportCycleCounts: ExportResult;
  /** Exports Deliveryes into a file */
  exportDeliveries: ExportResult;
  /** Exports Equipments into a file */
  exportEquipments: ExportResult;
  /** Exports Locations into a file */
  exportLocations: ExportResult;
  /** Exports logistic units into a file */
  exportLogisticUnits: ExportResult;
  /** Exports Rounds into a file */
  exportRounds: ExportResult;
  /** Obtain a JSON Web Token (JWT) to use in the frontend */
  integratorLogin?: Maybe<LoginSuccess>;
  /** Renders a template given its filename and a context dictionary */
  renderDocument: RenderDocumentResponse;
  /** Sends an email to reset the IntegratorUser's password */
  resetPassword: ResetPasswordResponse;
  /** Reset a StockOwner's access key */
  resetStockOwnerAccesskey: Scalars['Boolean'];
  /** Delete article => update status */
  softDeleteArticle: Scalars['Boolean'];
  /** Delete Box => update status */
  softDeleteBox: Scalars['Boolean'];
  /** Delete BoxLine => update status */
  softDeleteBoxLine: Scalars['Boolean'];
  /** Delete building => update status */
  softDeleteBuilding: Scalars['Boolean'];
  /** Delete Carrier => update status */
  softDeleteCarrier: Scalars['Boolean'];
  /** Delete Conversion => update status */
  softDeleteConversion: Scalars['Boolean'];
  /** Delete CycleCount => update status */
  softDeleteCycleCount: Scalars['Boolean'];
  /** Delete Delivery => update status */
  softDeleteDelivery: Scalars['Boolean'];
  /** Delete Deliveryline => update status */
  softDeleteDeliveryLine: Scalars['Boolean'];
  /** Delete Equipment => update status */
  softDeleteEquipment: Scalars['Boolean'];
  /** Delete HandlingUnit => update status */
  softDeleteHandlingUnit: Scalars['Boolean'];
  /** Delete Load => update status */
  softDeleteLoad: Scalars['Boolean'];
  /** Delete Package => update status */
  softDeletePackaging: Scalars['Boolean'];
  /** Delete Purchase Order => update status */
  softDeletePurchaseOrder: Scalars['Boolean'];
  /** Delete Purchase Order Line => update status */
  softDeletePurchaseOrderLine: Scalars['Boolean'];
  /** Delete Round => update status */
  softDeleteRound: Scalars['Boolean'];
  /** Delete Stock Owner => update status */
  softDeleteStockOwner: Scalars['Boolean'];
  /** Update article */
  updateArticle?: Maybe<Article>;
  /** Update article_logistic unit object */
  updateArticleLu?: Maybe<ArticleLu>;
  /** Update article_logistic unit_barcode */
  updateArticleLuBarcode?: Maybe<ArticleLuBarcode>;
  /** Update article set */
  updateArticleSet?: Maybe<ArticleSet>;
  /** Update article set detail */
  updateArticleSetDetail?: Maybe<ArticleSetDetail>;
  /** Update barcode */
  updateBarcode?: Maybe<Barcode>;
  /** Update block */
  updateBlock?: Maybe<Block>;
  /** Update box */
  updateBox?: Maybe<Box>;
  /** Update box_line */
  updateBoxLine?: Maybe<BoxLine>;
  /** Update box_line_feature */
  updateBoxLineFeature?: Maybe<BoxLineFeature>;
  /** Update building */
  updateBuilding?: Maybe<Building>;
  /** Update carrier */
  updateCarrier?: Maybe<Carrier>;
  /** Update Config */
  updateConfig?: Maybe<Config>;
  /** Update content */
  updateContent?: Maybe<Content>;
  /** Update content_feature */
  updateContentFeature?: Maybe<ContentFeature>;
  /** Update conversion */
  updateConversion?: Maybe<Conversion>;
  /** Update cycle_count */
  updateCycleCount?: Maybe<CycleCount>;
  /** Update cycle_count_line */
  updateCycleCountLine?: Maybe<CycleCountLine>;
  /** Update cycle_count_movement */
  updateCycleCountMovement?: Maybe<CycleCountMovement>;
  /** Update delivery */
  updateDelivery?: Maybe<Delivery>;
  /** Update delivery_line */
  updateDeliveryLine?: Maybe<DeliveryLine>;
  /** Update equipment */
  updateEquipment?: Maybe<Equipment>;
  /** Update equipment_detail */
  updateEquipmentDetail?: Maybe<EquipmentDetail>;
  /** Update feature code */
  updateFeatureCode?: Maybe<FeatureCode>;
  /** Update feature type detail */
  updateFeatureTypeDetail?: Maybe<FeatureTypeDetail>;
  /** Update feedback_overwrite */
  updateFeedbackOverwrite?: Maybe<FeedbackOverwrite>;
  /** Update goods-in */
  updateGoodsIn?: Maybe<GoodsIn>;
  /** Update goods-in line */
  updateGoodsInLine?: Maybe<GoodsInLine>;
  /** Update handling_unit */
  updateHandlingUnit?: Maybe<HandlingUnit>;
  /** Update load */
  updateLoad?: Maybe<Load>;
  /** Update Location */
  updateLocation?: Maybe<Location>;
  /** Update logistic unit */
  updateLogisticUnit?: Maybe<LogisticUnit>;
  /** Update movement */
  updateMovement?: Maybe<Movement>;
  /** Update package */
  updatePackaging?: Maybe<Packaging>;
  /** Update a parameter */
  updateParameter?: Maybe<Parameter>;
  /** Update Pattern */
  updatePattern?: Maybe<Pattern>;
  /** Update PatternPath */
  updatePatternPath?: Maybe<PatternPath>;
  /** Update PurchaseOrder */
  updatePurchaseOrder?: Maybe<PurchaseOrder>;
  /** Update PurchaseOrderLine */
  updatePurchaseOrderLine?: Maybe<PurchaseOrderLine>;
  /** Update Return Code */
  updateReturnCode?: Maybe<ReturnCode>;
  /** Update a Role */
  updateRole?: Maybe<RoleType>;
  /** Update round */
  updateRound?: Maybe<Round>;
  /** Update round_advised_address */
  updateRoundAdvisedAddress?: Maybe<RoundAdvisedAddress>;
  /** Update a Status Evolution */
  updateStatusEvolution?: Maybe<StatusEvolution>;
  /** Update a Status Feedback Overwrite */
  updateStatusFeedbackOverwrite?: Maybe<StatusFeedbackOverWrite>;
  /** Update stock owner */
  updateStockOwner?: Maybe<StockOwner>;
  /** Upload File */
  uploadFile: FileUploadResult;
  /** Obtain a JSON Web Token (JWT) to use in the frontend */
  warehouseLogin?: Maybe<LoginSuccess>;
};


export type MutationBulkCreateLocationsArgs = {
  input: BulkCreateLocationsInput;
};


export type MutationBulkCreatePatternPathLocationsArgs = {
  inputs: Array<CreatePatternPathLocationInput>;
  patternPathId: Scalars['String'];
};


export type MutationBulkDeleteBoxLineFeaturesArgs = {
  boxId: Scalars['String'];
};


export type MutationBulkDeleteBoxLinesArgs = {
  boxId: Scalars['String'];
};


export type MutationBulkDeleteContentFeaturesArgs = {
  contentId: Scalars['String'];
};


export type MutationBulkDeleteCycleCountLinesArgs = {
  cycleCountId: Scalars['String'];
};


export type MutationBulkDeleteCycleCountMovementsArgs = {
  cycleCountId: Scalars['String'];
};


export type MutationBulkDeleteDeliveryLinesArgs = {
  deliveryId: Scalars['String'];
};


export type MutationBulkDeleteEquipmentDetailsArgs = {
  equipmentId: Scalars['String'];
};


export type MutationBulkDeleteLocationsArgs = {
  input: BulkDeleteLocationsInput;
};


export type MutationBulkDeletePatternPathLocationsArgs = {
  patternPathId: Scalars['String'];
};


export type MutationBulkDeleteRoundAdvisedAddressesArgs = {
  roundId: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  password: Scalars['String'];
  password2: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreateArticleArgs = {
  input: CreateArticleInput;
};


export type MutationCreateArticleLuArgs = {
  input: CreateArticleLuInput;
};


export type MutationCreateArticleLuBarcodeArgs = {
  input: CreateArticleLuBarcodeInput;
};


export type MutationCreateArticleSetArgs = {
  input: CreateArticleSetInput;
};


export type MutationCreateArticleSetDetailArgs = {
  input: CreateArticleSetDetailInput;
};


export type MutationCreateBarcodeArgs = {
  input: CreateBarcodeInput;
};


export type MutationCreateBlockArgs = {
  input: CreateBlockInput;
};


export type MutationCreateBoxArgs = {
  input: CreateBoxInput;
};


export type MutationCreateBoxLineArgs = {
  input: CreateBoxLineInput;
};


export type MutationCreateBoxLineFeatureArgs = {
  input: CreateBoxLineFeatureInput;
};


export type MutationCreateBuildingArgs = {
  input: CreateBuildingInput;
};


export type MutationCreateCarrierArgs = {
  input: CreateCarrierInput;
};


export type MutationCreateClientArgs = {
  id?: InputMaybe<Scalars['ID']>;
  integratorId: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationCreateConfigArgs = {
  input: CreateConfigInput;
};


export type MutationCreateContentArgs = {
  input: CreateContentInput;
};


export type MutationCreateContentFeatureArgs = {
  input: CreateContentFeatureInput;
};


export type MutationCreateConversionArgs = {
  input: CreateConversionInput;
};


export type MutationCreateCycleCountArgs = {
  input: CreateCycleCountInput;
};


export type MutationCreateCycleCountLineArgs = {
  input: CreateCycleCountLineInput;
};


export type MutationCreateCycleCountMovementArgs = {
  input: CreateCycleCountMovementInput;
};


export type MutationCreateDeliveryArgs = {
  input: CreateDeliveryInput;
};


export type MutationCreateDeliveryLineArgs = {
  input: CreateDeliveryLineInput;
};


export type MutationCreateEquipmentArgs = {
  input: CreateEquipmentInput;
};


export type MutationCreateEquipmentDetailArgs = {
  input: CreateEquipmentDetailInput;
};


export type MutationCreateFeatureCodeArgs = {
  input: CreateFeatureCodeInput;
};


export type MutationCreateFeatureTypeDetailArgs = {
  input: CreateFeatureTypeDetailInput;
};


export type MutationCreateFeedbackOverwriteArgs = {
  input: CreateFeedbackOverwriteInput;
};


export type MutationCreateGoodsInArgs = {
  input: CreateGoodsInInput;
};


export type MutationCreateGoodsInLineArgs = {
  input: CreateGoodsInLineInput;
};


export type MutationCreateHandlingUnitArgs = {
  input: CreateHandlingUnitInput;
};


export type MutationCreateIntegratorOrganizationArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
};


export type MutationCreateIntegratorUserArgs = {
  email: Scalars['String'];
  integratorId: Scalars['String'];
  password: Scalars['String'];
  roleId: Scalars['String'];
};


export type MutationCreateLoadArgs = {
  input: CreateLoadInput;
};


export type MutationCreateLocationArgs = {
  input: CreateLocationInput;
};


export type MutationCreateLogisticUnitArgs = {
  input: CreateLogisticUnitInput;
};


export type MutationCreateMovementArgs = {
  input: CreateMovementInput;
};


export type MutationCreatePackagingArgs = {
  input: CreatePackagingInput;
};


export type MutationCreateParameterArgs = {
  input: CreateParameterInput;
};


export type MutationCreatePatternArgs = {
  input: CreatePatternInput;
};


export type MutationCreatePatternPathArgs = {
  input: CreatePatternPathInput;
};


export type MutationCreatePurchaseOrderArgs = {
  input: CreatePurchaseOrderInput;
};


export type MutationCreatePurchaseOrderLineArgs = {
  input: CreatePurchaseOrderLineInput;
};


export type MutationCreateReturnCodeArgs = {
  input: CreateReturnCodeInput;
};


export type MutationCreateRoleArgs = {
  name: Scalars['String'];
  permissions: Array<PermissionInput>;
};


export type MutationCreateRoundArgs = {
  input: CreateRoundInput;
};


export type MutationCreateRoundAdvisedAddressArgs = {
  input: CreateRoundAdvisedAddressInput;
};


export type MutationCreateStatusEvolutionArgs = {
  input: CreateStatusEvolutionInput;
};


export type MutationCreateStatusFeedbackOverwriteArgs = {
  input: CreateStatusFeedbackOverwriteInput;
};


export type MutationCreateStockOwnerArgs = {
  input: CreateStockOwnerInput;
};


export type MutationCreateSystemConfigArgs = {
  input: CreateSystemConfigInput;
};


export type MutationCreateSystemParameterArgs = {
  input: CreateSystemConfigInput;
};


export type MutationCreateWarehouseArgs = {
  clientId: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
};


export type MutationCreateWarehouseWorkerArgs = {
  password: Scalars['String'];
  roleId: Scalars['String'];
  username: Scalars['String'];
  warehouseId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['String'];
};


export type MutationDeleteArticleLuArgs = {
  id: Scalars['String'];
};


export type MutationDeleteArticleLuBarcodeArgs = {
  id: Scalars['String'];
};


export type MutationDeleteArticleSetArgs = {
  id: Scalars['String'];
};


export type MutationDeleteArticleSetDetailArgs = {
  id: Scalars['String'];
};


export type MutationDeleteBarcodeArgs = {
  id: Scalars['String'];
};


export type MutationDeleteBlockArgs = {
  id: Scalars['String'];
};


export type MutationDeleteBoxArgs = {
  id: Scalars['String'];
};


export type MutationDeleteBoxLineArgs = {
  id: Scalars['String'];
};


export type MutationDeleteBoxLineFeatureArgs = {
  id: Scalars['String'];
};


export type MutationDeleteBuildingArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCarrierArgs = {
  id: Scalars['String'];
};


export type MutationDeleteConfigArgs = {
  configId: Scalars['String'];
};


export type MutationDeleteContentArgs = {
  id: Scalars['String'];
};


export type MutationDeleteContentFeatureArgs = {
  id: Scalars['String'];
};


export type MutationDeleteConversionArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCycleCountArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCycleCountLineArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCycleCountMovementArgs = {
  id: Scalars['String'];
};


export type MutationDeleteDeliveryArgs = {
  id: Scalars['String'];
};


export type MutationDeleteDeliveryLineArgs = {
  id: Scalars['String'];
};


export type MutationDeleteEquipmentArgs = {
  id: Scalars['String'];
};


export type MutationDeleteEquipmentDetailArgs = {
  id: Scalars['String'];
};


export type MutationDeleteFeatureCodeArgs = {
  id: Scalars['String'];
};


export type MutationDeleteFeatureTypeDetailArgs = {
  id: Scalars['String'];
};


export type MutationDeleteFeedbackOverwriteArgs = {
  id: Scalars['String'];
};


export type MutationDeleteFileArgs = {
  fileName: Scalars['String'];
  stockOwnerId: Scalars['String'];
};


export type MutationDeleteGoodsInArgs = {
  id: Scalars['String'];
};


export type MutationDeleteGoodsInLineArgs = {
  id: Scalars['String'];
};


export type MutationDeleteHandlingUnitArgs = {
  id: Scalars['String'];
};


export type MutationDeleteIntegratorArgs = {
  id: Scalars['String'];
};


export type MutationDeleteIntegratorUserArgs = {
  id: Scalars['String'];
};


export type MutationDeleteLoadArgs = {
  id: Scalars['String'];
};


export type MutationDeleteLocationArgs = {
  id: Scalars['String'];
};


export type MutationDeleteLogisticUnitArgs = {
  id: Scalars['String'];
};


export type MutationDeleteMovementArgs = {
  id: Scalars['String'];
};


export type MutationDeletePackagingArgs = {
  id: Scalars['String'];
};


export type MutationDeleteParameterArgs = {
  parameterId: Scalars['String'];
};


export type MutationDeletePatternArgs = {
  id: Scalars['String'];
};


export type MutationDeletePatternPathArgs = {
  id: Scalars['String'];
};


export type MutationDeletePurchaseOrderArgs = {
  id: Scalars['String'];
};


export type MutationDeletePurchaseOrderLineArgs = {
  id: Scalars['String'];
};


export type MutationDeleteReturnCodeArgs = {
  id: Scalars['String'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['String'];
};


export type MutationDeleteRoundArgs = {
  id: Scalars['String'];
};


export type MutationDeleteRoundAdvisedAddressArgs = {
  id: Scalars['String'];
};


export type MutationDeleteStatusEvolutionArgs = {
  id: Scalars['String'];
};


export type MutationDeleteStatusFeedbackOverwriteArgs = {
  id: Scalars['String'];
};


export type MutationDeleteSystemConfigArgs = {
  id: Scalars['String'];
};


export type MutationDeleteSystemParameterArgs = {
  id: Scalars['String'];
};


export type MutationDeleteWarehouseArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWarehouseWorkerArgs = {
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


export type MutationExportBoxesArgs = {
  compression?: InputMaybe<ExportCompression>;
  filters?: InputMaybe<LocationExportFilters>;
  format?: InputMaybe<ExportFormat>;
  orderBy?: InputMaybe<Array<LocationOrderByCriterion>>;
  separator?: InputMaybe<Scalars['String']>;
};


export type MutationExportContentsArgs = {
  compression?: InputMaybe<ExportCompression>;
  filters?: InputMaybe<LocationExportFilters>;
  format?: InputMaybe<ExportFormat>;
  orderBy?: InputMaybe<Array<LocationOrderByCriterion>>;
  separator?: InputMaybe<Scalars['String']>;
};


export type MutationExportCycleCountsArgs = {
  compression?: InputMaybe<ExportCompression>;
  filters?: InputMaybe<LocationExportFilters>;
  format?: InputMaybe<ExportFormat>;
  orderBy?: InputMaybe<Array<LocationOrderByCriterion>>;
  separator?: InputMaybe<Scalars['String']>;
};


export type MutationExportDeliveriesArgs = {
  compression?: InputMaybe<ExportCompression>;
  filters?: InputMaybe<LocationExportFilters>;
  format?: InputMaybe<ExportFormat>;
  orderBy?: InputMaybe<Array<LocationOrderByCriterion>>;
  separator?: InputMaybe<Scalars['String']>;
};


export type MutationExportEquipmentsArgs = {
  compression?: InputMaybe<ExportCompression>;
  filters?: InputMaybe<LocationExportFilters>;
  format?: InputMaybe<ExportFormat>;
  orderBy?: InputMaybe<Array<LocationOrderByCriterion>>;
  separator?: InputMaybe<Scalars['String']>;
};


export type MutationExportLocationsArgs = {
  compression?: InputMaybe<ExportCompression>;
  filters?: InputMaybe<LocationExportFilters>;
  format?: InputMaybe<ExportFormat>;
  orderBy?: InputMaybe<Array<LocationOrderByCriterion>>;
  separator?: InputMaybe<Scalars['String']>;
};


export type MutationExportLogisticUnitsArgs = {
  compression?: InputMaybe<ExportCompression>;
  filters?: InputMaybe<LogisticUnitExportFilters>;
  format?: InputMaybe<ExportFormat>;
  orderBy?: InputMaybe<Array<LogisticUnitOrderByCriterion>>;
  separator?: InputMaybe<Scalars['String']>;
};


export type MutationExportRoundsArgs = {
  compression?: InputMaybe<ExportCompression>;
  filters?: InputMaybe<LocationExportFilters>;
  format?: InputMaybe<ExportFormat>;
  orderBy?: InputMaybe<Array<LocationOrderByCriterion>>;
  separator?: InputMaybe<Scalars['String']>;
};


export type MutationIntegratorLoginArgs = {
  email: Scalars['String'];
  integratorId: Scalars['ID'];
  password: Scalars['String'];
};


export type MutationRenderDocumentArgs = {
  context: Scalars['JSON'];
  templateFilename: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  callbackUrl: Scalars['String'];
  email: Scalars['String'];
};


export type MutationResetStockOwnerAccesskeyArgs = {
  id: Scalars['String'];
};


export type MutationSoftDeleteArticleArgs = {
  articleId: Scalars['String'];
};


export type MutationSoftDeleteBoxArgs = {
  boxId: Scalars['String'];
};


export type MutationSoftDeleteBoxLineArgs = {
  boxLineId: Scalars['String'];
};


export type MutationSoftDeleteBuildingArgs = {
  buildingId: Scalars['String'];
};


export type MutationSoftDeleteCarrierArgs = {
  carrierId: Scalars['String'];
};


export type MutationSoftDeleteConversionArgs = {
  conversionId: Scalars['String'];
};


export type MutationSoftDeleteCycleCountArgs = {
  cycleCountId: Scalars['String'];
};


export type MutationSoftDeleteDeliveryArgs = {
  deliveryId: Scalars['String'];
};


export type MutationSoftDeleteDeliveryLineArgs = {
  deliveryLineId: Scalars['String'];
};


export type MutationSoftDeleteEquipmentArgs = {
  equipmentId: Scalars['String'];
};


export type MutationSoftDeleteHandlingUnitArgs = {
  handlingUnitId: Scalars['String'];
};


export type MutationSoftDeleteLoadArgs = {
  loadId: Scalars['String'];
};


export type MutationSoftDeletePackagingArgs = {
  packagingId: Scalars['String'];
};


export type MutationSoftDeletePurchaseOrderArgs = {
  purchaseOrderId: Scalars['String'];
};


export type MutationSoftDeletePurchaseOrderLineArgs = {
  purchaseOrderLineId: Scalars['String'];
};


export type MutationSoftDeleteRoundArgs = {
  roundId: Scalars['String'];
};


export type MutationSoftDeleteStockOwnerArgs = {
  stockOwnerId: Scalars['String'];
};


export type MutationUpdateArticleArgs = {
  id: Scalars['String'];
  input: UpdateArticleInput;
};


export type MutationUpdateArticleLuArgs = {
  id: Scalars['String'];
  input: UpdateArticleLuInput;
};


export type MutationUpdateArticleLuBarcodeArgs = {
  id: Scalars['String'];
  input: UpdateArticleLuBarcodeInput;
};


export type MutationUpdateArticleSetArgs = {
  id: Scalars['String'];
  input: UpdateArticleSetInput;
};


export type MutationUpdateArticleSetDetailArgs = {
  id: Scalars['String'];
  input: UpdateArticleSetDetailInput;
};


export type MutationUpdateBarcodeArgs = {
  id: Scalars['String'];
  input: UpdateBarcodeInput;
};


export type MutationUpdateBlockArgs = {
  id: Scalars['String'];
  input: UpdateBlockInput;
};


export type MutationUpdateBoxArgs = {
  id: Scalars['String'];
  input: UpdateBoxInput;
};


export type MutationUpdateBoxLineArgs = {
  id: Scalars['String'];
  input: UpdateBoxLineInput;
};


export type MutationUpdateBoxLineFeatureArgs = {
  id: Scalars['String'];
  input: UpdateBoxLineFeatureInput;
};


export type MutationUpdateBuildingArgs = {
  id: Scalars['String'];
  input: UpdateBuildingInput;
};


export type MutationUpdateCarrierArgs = {
  id: Scalars['String'];
  input: UpdateCarrierInput;
};


export type MutationUpdateConfigArgs = {
  id: Scalars['String'];
  input: UpdateConfigInput;
};


export type MutationUpdateContentArgs = {
  id: Scalars['String'];
  input: UpdateContentInput;
};


export type MutationUpdateContentFeatureArgs = {
  id: Scalars['String'];
  input: UpdateContentFeatureInput;
};


export type MutationUpdateConversionArgs = {
  id: Scalars['String'];
  input: UpdateConversionInput;
};


export type MutationUpdateCycleCountArgs = {
  id: Scalars['String'];
  input: UpdateCycleCountInput;
};


export type MutationUpdateCycleCountLineArgs = {
  id: Scalars['String'];
  input: UpdateCycleCountLineInput;
};


export type MutationUpdateCycleCountMovementArgs = {
  id: Scalars['String'];
  input: UpdateCycleCountMovementInput;
};


export type MutationUpdateDeliveryArgs = {
  id: Scalars['String'];
  input: UpdateDeliveryInput;
};


export type MutationUpdateDeliveryLineArgs = {
  id: Scalars['String'];
  input: UpdateDeliveryLineInput;
};


export type MutationUpdateEquipmentArgs = {
  id: Scalars['String'];
  input: UpdateEquipmentInput;
};


export type MutationUpdateEquipmentDetailArgs = {
  id: Scalars['String'];
  input: UpdateEquipmentDetailInput;
};


export type MutationUpdateFeatureCodeArgs = {
  id: Scalars['String'];
  input: UpdateFeatureCodeInput;
};


export type MutationUpdateFeatureTypeDetailArgs = {
  id: Scalars['String'];
  input: UpdateFeatureTypeDetailInput;
};


export type MutationUpdateFeedbackOverwriteArgs = {
  id: Scalars['String'];
  input: UpdateFeedbackOverwriteInput;
};


export type MutationUpdateGoodsInArgs = {
  id: Scalars['String'];
  input: UpdateGoodsInInput;
};


export type MutationUpdateGoodsInLineArgs = {
  id: Scalars['String'];
  input: UpdateGoodsInLineInput;
};


export type MutationUpdateHandlingUnitArgs = {
  id: Scalars['String'];
  input: UpdateHandlingUnitInput;
};


export type MutationUpdateLoadArgs = {
  id: Scalars['String'];
  input: UpdateLoadInput;
};


export type MutationUpdateLocationArgs = {
  id: Scalars['String'];
  input: UpdateLocationInput;
};


export type MutationUpdateLogisticUnitArgs = {
  id: Scalars['String'];
  input: UpdateLogisticUnitInput;
};


export type MutationUpdateMovementArgs = {
  id: Scalars['String'];
  input: UpdateMovementInput;
};


export type MutationUpdatePackagingArgs = {
  id: Scalars['String'];
  input: UpdatePackagingInput;
};


export type MutationUpdateParameterArgs = {
  id: Scalars['String'];
  input: UpdateParameterInput;
};


export type MutationUpdatePatternArgs = {
  id: Scalars['String'];
  input: UpdatePatternInput;
};


export type MutationUpdatePatternPathArgs = {
  id: Scalars['String'];
  input: UpdatePatternPathInput;
};


export type MutationUpdatePurchaseOrderArgs = {
  id: Scalars['String'];
  input: UpdatePurchaseOrderInput;
};


export type MutationUpdatePurchaseOrderLineArgs = {
  id: Scalars['String'];
  input: UpdatePurchaseOrderLineInput;
};


export type MutationUpdateReturnCodeArgs = {
  id: Scalars['String'];
  input: UpdateReturnCodeInput;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<PermissionInput>>;
};


export type MutationUpdateRoundArgs = {
  id: Scalars['String'];
  input: UpdateRoundInput;
};


export type MutationUpdateRoundAdvisedAddressArgs = {
  id: Scalars['String'];
  input: UpdateRoundAdvisedAddressInput;
};


export type MutationUpdateStatusEvolutionArgs = {
  id: Scalars['String'];
  input: UpdateStatusEvolutionInput;
};


export type MutationUpdateStatusFeedbackOverwriteArgs = {
  id: Scalars['String'];
  input: UpdateStatusFeedbackOverwriteInput;
};


export type MutationUpdateStockOwnerArgs = {
  id: Scalars['String'];
  input: UpdateStockOwnerInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
  stockOwnerId: Scalars['String'];
};


export type MutationWarehouseLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
  warehouseId: Scalars['ID'];
};

export type Packaging = {
  __typename?: 'Packaging';
  autoCubingOrder?: Maybe<Scalars['Int']>;
  autoCubingProcess?: Maybe<Scalars['Boolean']>;
  closureWeight?: Maybe<Scalars['Float']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  cubingMaxArticleHeight?: Maybe<Scalars['Float']>;
  cubingMaxArticleLength?: Maybe<Scalars['Float']>;
  default?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  dispatchable?: Maybe<Scalars['Boolean']>;
  extras?: Maybe<Scalars['JSON']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Float']>;
  maxWeight?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  system?: Maybe<Scalars['Boolean']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** Field names for the Packaging model */
export enum PackagingFieldName {
  AutoCubingOrder = 'autoCubingOrder',
  AutoCubingProcess = 'autoCubingProcess',
  ClosureWeight = 'closureWeight',
  Created = 'created',
  CreatedBy = 'createdBy',
  CubingMaxArticleHeight = 'cubingMaxArticleHeight',
  CubingMaxArticleLength = 'cubingMaxArticleLength',
  Default = 'default',
  Description = 'description',
  Dispatchable = 'dispatchable',
  Extras = 'extras',
  Height = 'height',
  Id = 'id',
  Length = 'length',
  MaxWeight = 'maxWeight',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  Status = 'status',
  System = 'system',
  Weight = 'weight',
  Width = 'width'
}

/** Returns a list of Packaging */
export type PackagingListResult = {
  __typename?: 'PackagingListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Packaging>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Packaging */
export type PackagingOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: PackagingFieldName;
};

/** Attributes of Packaging to filter onto */
export type PackagingSearchFilters = {
  autoCubingOrder?: InputMaybe<Scalars['Int']>;
  autoCubingProcess?: InputMaybe<Scalars['Boolean']>;
  closureWeight?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  cubingMaxArticleHeight?: InputMaybe<Scalars['Float']>;
  cubingMaxArticleLength?: InputMaybe<Scalars['Float']>;
  default?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  dispatchable?: InputMaybe<Scalars['Boolean']>;
  extras?: InputMaybe<Scalars['JSON']>;
  height?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Float']>;
  maxWeight?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  system?: InputMaybe<Scalars['Boolean']>;
  weight?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type Parameter = {
  __typename?: 'Parameter';
  /** Code of the parameter info */
  code: Scalars['String'];
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  /** Semi-structured attributes that can be used to store data for anything that doesn't fit in the default columns */
  extras?: Maybe<Scalars['JSON']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  /** Scope of the parameter info */
  scope: Scalars['String'];
  /** System parameter */
  system?: Maybe<Scalars['Boolean']>;
  /** value translation depending on the langauge */
  translation?: Maybe<Scalars['JSON']>;
  /** Text value of the parameter info */
  value: Scalars['String'];
};

/** Field names for the Parameter model */
export enum ParameterFieldName {
  Code = 'code',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Scope = 'scope',
  System = 'system',
  Translation = 'translation',
  Value = 'value'
}

/** Returns a list of Parameter */
export type ParameterListResult = {
  __typename?: 'ParameterListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Parameter>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Parameter */
export type ParameterOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: ParameterFieldName;
};

export type ParameterResults = {
  __typename?: 'ParameterResults';
  code: Scalars['String'];
  id: Scalars['String'];
  scope: Scalars['String'];
  text: Scalars['String'];
};

/** Attributes of Parameter to filter onto */
export type ParameterSearchFilters = {
  code?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  system?: InputMaybe<Scalars['Boolean']>;
  translation?: InputMaybe<Scalars['JSON']>;
  value?: InputMaybe<Scalars['String']>;
};

export type Pattern = {
  __typename?: 'Pattern';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  paths: Array<PatternPath>;
  patternType?: Maybe<Scalars['String']>;
  /** Text value for field pattern_type */
  patternTypeText?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
};

/** Field names for the Pattern model */
export enum PatternFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
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
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  locations: Array<PatternPathLocation>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  patternId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** Field names for the PatternPath model */
export enum PatternPathFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
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
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  location: Location;
  locationId?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  patternPathId?: Maybe<Scalars['String']>;
};

/** Field names for the PatternPathLocation model */
export enum PatternPathLocationFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
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
  extras?: InputMaybe<Scalars['JSON']>;
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
  extras?: InputMaybe<Scalars['JSON']>;
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
  extras?: InputMaybe<Scalars['JSON']>;
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

export type PurchaseOrder = {
  __typename?: 'PurchaseOrder';
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  expectedGoodsInDate?: Maybe<Scalars['DateTime']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  supplier?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  /** Text value for field type */
  typeText?: Maybe<Scalars['String']>;
};

/** Field names for the PurchaseOrder model */
export enum PurchaseOrderFieldName {
  Comment = 'comment',
  Created = 'created',
  CreatedBy = 'createdBy',
  ExpectedGoodsInDate = 'expectedGoodsInDate',
  Extras = 'extras',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  OrderDate = 'orderDate',
  Status = 'status',
  StockOwnerId = 'stockOwnerId',
  Supplier = 'supplier',
  Type = 'type'
}

export type PurchaseOrderLine = {
  __typename?: 'PurchaseOrderLine';
  articleId?: Maybe<Scalars['String']>;
  blockingStatus?: Maybe<Scalars['Int']>;
  /** Text value for field blocking_status */
  blockingStatusText?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  originalPurchaseOrder?: Maybe<Scalars['String']>;
  originalPurchaseOrderLine?: Maybe<Scalars['String']>;
  purchaseOrderId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  quantityMax?: Maybe<Scalars['Float']>;
  receivedQuantity?: Maybe<Scalars['Float']>;
  reservation?: Maybe<Scalars['String']>;
  reservedQuantity?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
};

/** Field names for the PurchaseOrderLine model */
export enum PurchaseOrderLineFieldName {
  ArticleId = 'articleId',
  BlockingStatus = 'blockingStatus',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  OriginalPurchaseOrder = 'originalPurchaseOrder',
  OriginalPurchaseOrderLine = 'originalPurchaseOrderLine',
  PurchaseOrderId = 'purchaseOrderId',
  Quantity = 'quantity',
  QuantityMax = 'quantityMax',
  ReceivedQuantity = 'receivedQuantity',
  Reservation = 'reservation',
  ReservedQuantity = 'reservedQuantity',
  Status = 'status',
  StockOwnerId = 'stockOwnerId'
}

/** Returns a list of PurchaseOrderLine */
export type PurchaseOrderLineListResult = {
  __typename?: 'PurchaseOrderLineListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<PurchaseOrderLine>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for PurchaseOrderLine */
export type PurchaseOrderLineOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: PurchaseOrderLineFieldName;
};

/** Attributes of PurchaseOrderLine to filter onto */
export type PurchaseOrderLineSearchFilters = {
  articleId?: InputMaybe<Scalars['String']>;
  blockingStatus?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  originalPurchaseOrder?: InputMaybe<Scalars['String']>;
  originalPurchaseOrderLine?: InputMaybe<Scalars['String']>;
  purchaseOrderId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  quantityMax?: InputMaybe<Scalars['Float']>;
  receivedQuantity?: InputMaybe<Scalars['Float']>;
  reservation?: InputMaybe<Scalars['String']>;
  reservedQuantity?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Returns a list of PurchaseOrder */
export type PurchaseOrderListResult = {
  __typename?: 'PurchaseOrderListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<PurchaseOrder>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for PurchaseOrder */
export type PurchaseOrderOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: PurchaseOrderFieldName;
};

/** Attributes of PurchaseOrder to filter onto */
export type PurchaseOrderSearchFilters = {
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  expectedGoodsInDate?: InputMaybe<Scalars['DateTime']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  orderDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  supplier?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a given Article by its ID */
  article?: Maybe<Article>;
  /** Get a Article_lu object */
  articleLu?: Maybe<ArticleLu>;
  /** Get a Article_lu_barcode object */
  articleLuBarcode?: Maybe<ArticleLuBarcode>;
  /** Get Article_lu_barcode objects */
  articleLuBarcodes: ArticleLuBarcodeListResult;
  /** Get Articles_lu_barcode objects by article id */
  articleLuBarcodesByArticleId: Array<ArticleLuBarcode>;
  /** Get Articles_lu_barcode objects by barcode id */
  articleLuBarcodesByBarcodeId: Array<ArticleLuBarcode>;
  /** Get Articles_lu_barcode objects by Logistic Unit id */
  articleLuBarcodesByLuId: Array<ArticleLuBarcode>;
  /** Get Articles_lu_barcode objects by Stock Owner id */
  articleLuBarcodesByStockOwnerId: Array<ArticleLuBarcode>;
  /** Get a Article_lu objects */
  articleLus: ArticleLuListResult;
  /** Get a article_set object */
  articleSet?: Maybe<ArticleSet>;
  /** Get a article_set_detail object */
  articleSetDetail?: Maybe<ArticleSetDetail>;
  /** Get article_set_detail objects */
  articleSetDetails: ArticleSetDetailListResult;
  /** Get article_set objects */
  articleSets: ArticleSetListResult;
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
  /** Get a box object */
  box?: Maybe<Box>;
  /** Get a box_line object */
  boxLine?: Maybe<BoxLine>;
  /** Get a box_line_feature object */
  boxLineFeature?: Maybe<BoxLineFeature>;
  /** Get box_line_feature objects */
  boxLineFeatures: BoxLineFeatureListResult;
  /** Get box_line objects */
  boxLines: BoxLineListResult;
  /** Get box objects */
  boxes: BoxListResult;
  /** Get a Building */
  building?: Maybe<Building>;
  /** Search Buildings */
  buildings: BuildingListResult;
  /** Get a Carrier */
  carrier?: Maybe<Carrier>;
  /** List multiple Carriers */
  carriers: CarrierListResult;
  /** Get a Config */
  config?: Maybe<Config>;
  /** Search parameters */
  configs: ParameterListResult;
  /** Get a content object */
  content?: Maybe<Content>;
  /** Get a content_feature object */
  contentFeature?: Maybe<ContentFeature>;
  /** Get content_feature objects */
  contentFeatures: ContentFeatureListResult;
  /** Get content objects */
  contents: ContentListResult;
  /** Get a conversion object */
  conversion?: Maybe<Conversion>;
  /** Get conversion objects */
  conversions: ConversionListResult;
  /** Get a cycle_count object */
  cycleCount?: Maybe<CycleCount>;
  /** Get a cycle_count_line object */
  cycleCountLine?: Maybe<CycleCountLine>;
  /** Get cycle_count_line objects */
  cycleCountLines: CycleCountLineListResult;
  /** Get a cycle_count_movement object */
  cycleCountMovement?: Maybe<CycleCountMovement>;
  /** Get cycle_count_movement objects */
  cycleCountMovements: CycleCountMovementListResult;
  /** Get cycle_count objects */
  cycleCounts: CycleCountListResult;
  /** Get delivery objects */
  deliveries: DeliveryListResult;
  /** Get a delivery object */
  delivery?: Maybe<Delivery>;
  /** Get a delivery_line object */
  deliveryLine?: Maybe<DeliveryLine>;
  /** Get delivery_line objects */
  deliveryLines: DeliveryLineListResult;
  /** Get a equipment object */
  equipment?: Maybe<Equipment>;
  /** Get a equipment_detail object */
  equipmentDetail?: Maybe<EquipmentDetail>;
  /** Get equipment_detail objects */
  equipmentDetails: EquipmentDetailListResult;
  /** Get equipment objects */
  equipments: EquipmentListResult;
  /** Get a feature_code object */
  featureCode?: Maybe<FeatureCode>;
  /** Get feature_code objects */
  featureCodes: FeatureCodeListResult;
  /** Get a feature_type_detail object */
  featureTypeDetail?: Maybe<FeatureTypeDetail>;
  /** Get feature_type_detail objects */
  featureTypeDetails: FeatureTypeDetailListResult;
  /** Get a feedback_overwrite object */
  feedbackOverwrite?: Maybe<FeedbackOverwrite>;
  /** Get feedback_overwrite objects */
  feedbackOverwrites: FeedbackOverwriteListResult;
  /** Get a goods_in object */
  goodsIn?: Maybe<GoodsIn>;
  /** Get a goods_in_line object */
  goodsInLine?: Maybe<GoodsInLine>;
  /** Get goods_in_line objects */
  goodsInLines: GoodsInLineListResult;
  /** Get goods_in objects */
  goodsIns: GoodsInListResult;
  /** Get a handling_unit object */
  handlingUnit?: Maybe<HandlingUnit>;
  /** Get handling_unit objects */
  handlingUnits: HandlingUnitListResult;
  integratorUsers: IntegratorUserListResult;
  integrators: IntegratorListResult;
  /** List configs for a scope */
  listConfigsForAScope: Array<ConfigResults>;
  /** List files in warehouse folder. */
  listFiles: Array<FileInfo>;
  /** List parameters for a scope */
  listParametersForAScope: Array<ParameterResults>;
  /** Get a Load */
  load?: Maybe<Load>;
  /** Search Loads */
  loads: LoadListResult;
  /** Get a Location */
  location?: Maybe<Location>;
  /** Search Locations */
  locations: LocationListResult;
  /** Get a Logistic Unit */
  logisticUnit?: Maybe<LogisticUnit>;
  /** Search Logistic Units */
  logisticUnits: LogisticUnitListResult;
  me: MeResponse;
  /** Retrieve a given Movement by its ID */
  movement?: Maybe<Movement>;
  /** List multiple Movements */
  movements: MovementListResult;
  /** Get a Package */
  packaging?: Maybe<Packaging>;
  /** Search Packages */
  packagings: PackagingListResult;
  /** Get a parameter */
  parameter?: Maybe<Parameter>;
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
  /** Get a PurchaseOrder */
  purchaseOrder?: Maybe<PurchaseOrder>;
  /** Get a PurchaseOrderLine */
  purchaseOrderLine?: Maybe<PurchaseOrderLine>;
  /** Search PurchaseOrderLines */
  purchaseOrderLines: PurchaseOrderLineListResult;
  /** Search PurchaseOrders */
  purchaseOrders: PurchaseOrderListResult;
  /** Retrieve a given Return Code by its ID */
  returnCode?: Maybe<ReturnCode>;
  /** List multiple Return Codes */
  returnCodes: ReturnCodeListResult;
  roles: RoleListResult;
  /** Get a round object */
  round?: Maybe<Round>;
  /** Get a round_advised_address object */
  roundAdvisedAddress?: Maybe<RoundAdvisedAddress>;
  /** Get round_advised_address objects */
  roundAdvisedAddresses: RoundAdvisedAddressListResult;
  /** Get round objects */
  rounds: RoundListResult;
  /** Retrieve a given Status Evolution by its ID */
  statusEvolution?: Maybe<StatusEvolution>;
  /** List multiple Status Evolution objects */
  statusEvolutions: StatusEvolutionListResult;
  /** Retrieve a given Status Feedback Overwrite by its ID */
  statusFeedbackOverwrite?: Maybe<StatusFeedbackOverWrite>;
  /** List multiple Status Feedback Overwrite objects */
  statusFeedbackOverwrites: StatusFeedbackOverwriteListResult;
  /** Retrieve a given StockOwner by its ID */
  stockOwner?: Maybe<StockOwner>;
  /** List multiple StockOwner */
  stockOwners: StockOwnerListResult;
  warehouseWorkers: WarehouseWorkerListResult;
  warehouses: WarehouseListResult;
};


export type QueryArticleArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryArticleLuArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryArticleLuBarcodeArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryArticleLuBarcodesArgs = {
  filters?: InputMaybe<ArticleLuBarcodeSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<ArticleLuBarcodeOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryArticleLuBarcodesByArticleIdArgs = {
  articleId: Scalars['String'];
};


export type QueryArticleLuBarcodesByBarcodeIdArgs = {
  barcodeId: Scalars['String'];
};


export type QueryArticleLuBarcodesByLuIdArgs = {
  luId: Scalars['String'];
};


export type QueryArticleLuBarcodesByStockOwnerIdArgs = {
  stockOwnerId: Scalars['String'];
};


export type QueryArticleLusArgs = {
  filters?: InputMaybe<ArticleLuSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<ArticleLuOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryArticleSetArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryArticleSetDetailArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryArticleSetDetailsArgs = {
  filters?: InputMaybe<ArticleSetDetailSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<ArticleSetDetailOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryArticleSetsArgs = {
  filters?: InputMaybe<ArticleSetSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<ArticleSetOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<ArticleOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryBarcodeArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryBarcodesArgs = {
  filters?: InputMaybe<BarcodeSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<BarcodeOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryBlockArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryBlocksArgs = {
  filters?: InputMaybe<BlockSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<BlockOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryBoxArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryBoxLineArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryBoxLineFeatureArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryBoxLineFeaturesArgs = {
  filters?: InputMaybe<BoxLineFeatureSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<BoxLineFeatureOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryBoxLinesArgs = {
  filters?: InputMaybe<BoxLineSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<BoxLineOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryBoxesArgs = {
  filters?: InputMaybe<BoxSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<BoxOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryBuildingArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryBuildingsArgs = {
  filters?: InputMaybe<BuildingSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<BuildingOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryCarrierArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryCarriersArgs = {
  filters?: InputMaybe<CarrierSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<CarrierOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryConfigArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryConfigsArgs = {
  filters?: InputMaybe<ParameterSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<ParameterOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryContentArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryContentFeatureArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryContentFeaturesArgs = {
  filters?: InputMaybe<ContentFeatureSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<ContentFeatureOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryContentsArgs = {
  filters?: InputMaybe<ContentSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<ContentOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryConversionArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryConversionsArgs = {
  filters?: InputMaybe<ConversionSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<ConversionOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryCycleCountArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryCycleCountLineArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryCycleCountLinesArgs = {
  filters?: InputMaybe<CycleCountLineSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<CycleCountLineOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryCycleCountMovementArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryCycleCountMovementsArgs = {
  filters?: InputMaybe<CycleCountMovementSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<CycleCountMovementOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryCycleCountsArgs = {
  filters?: InputMaybe<CycleCountSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<CycleCountOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryDeliveriesArgs = {
  filters?: InputMaybe<DeliverySearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<DeliveryOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryDeliveryArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryDeliveryLineArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryDeliveryLinesArgs = {
  filters?: InputMaybe<DeliveryLineSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<DeliveryLineOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryEquipmentArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryEquipmentDetailArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryEquipmentDetailsArgs = {
  filters?: InputMaybe<EquipmentDetailSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<EquipmentDetailOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryEquipmentsArgs = {
  filters?: InputMaybe<EquipmentSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<EquipmentOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryFeatureCodeArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryFeatureCodesArgs = {
  filters?: InputMaybe<FeatureCodeSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<FeatureCodeOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryFeatureTypeDetailArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryFeatureTypeDetailsArgs = {
  filters?: InputMaybe<FeatureTypeDetailSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<FeatureTypeDetailOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryFeedbackOverwriteArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryFeedbackOverwritesArgs = {
  filters?: InputMaybe<FeedbackOverwriteSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<FeedbackOverwriteOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryGoodsInArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryGoodsInLineArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryGoodsInLinesArgs = {
  filters?: InputMaybe<GoodsInLineSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<GoodsInLineOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryGoodsInsArgs = {
  filters?: InputMaybe<GoodsInSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<GoodsInOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryHandlingUnitArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryHandlingUnitsArgs = {
  filters?: InputMaybe<HandlingUnitSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<HandlingUnitOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryIntegratorUsersArgs = {
  filters?: InputMaybe<IntegratorUserSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<IntegratorUserOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryIntegratorsArgs = {
  filters?: InputMaybe<IntegratorSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<IntegratorOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryListConfigsForAScopeArgs = {
  code?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  scope: Scalars['String'];
};


export type QueryListFilesArgs = {
  stockOwnerId: Scalars['String'];
};


export type QueryListParametersForAScopeArgs = {
  code?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  scope: Scalars['String'];
};


export type QueryLoadArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryLoadsArgs = {
  filters?: InputMaybe<LoadSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<LoadOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryLocationArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryLocationsArgs = {
  filters?: InputMaybe<LocationSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<LocationOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryLogisticUnitArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryLogisticUnitsArgs = {
  filters?: InputMaybe<LogisticUnitSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<LogisticUnitOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryMovementArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryMovementsArgs = {
  filters?: InputMaybe<MovementSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<MovementOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryPackagingArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryPackagingsArgs = {
  filters?: InputMaybe<PackagingSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<PackagingOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryParameterArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryPatternArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryPatternPathArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryPatternPathLocationsArgs = {
  filters?: InputMaybe<PatternPathLocationSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<PatternPathLocationOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryPatternPathsArgs = {
  filters?: InputMaybe<PatternPathSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<PatternPathOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryPatternsArgs = {
  filters?: InputMaybe<PatternSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<PatternOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryPurchaseOrderArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryPurchaseOrderLineArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryPurchaseOrderLinesArgs = {
  filters?: InputMaybe<PurchaseOrderLineSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<PurchaseOrderLineOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryPurchaseOrdersArgs = {
  filters?: InputMaybe<PurchaseOrderSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<PurchaseOrderOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryReturnCodeArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryReturnCodesArgs = {
  filters?: InputMaybe<ReturnCodeSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<ReturnCodeOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryRolesArgs = {
  filters?: InputMaybe<RoleSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<RoleOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryRoundArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryRoundAdvisedAddressArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryRoundAdvisedAddressesArgs = {
  filters?: InputMaybe<RoundAdvisedAddressSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<RoundAdvisedAddressOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryRoundsArgs = {
  filters?: InputMaybe<RoundSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<RoundOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryStatusEvolutionArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryStatusEvolutionsArgs = {
  filters?: InputMaybe<StatusEvolutionSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<StatusEvolutionOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryStatusFeedbackOverwriteArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryStatusFeedbackOverwritesArgs = {
  filters?: InputMaybe<StatusFeedbackOverwriteSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<StatusFeedbackOverwriteOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryStockOwnerArgs = {
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
};


export type QueryStockOwnersArgs = {
  filters?: InputMaybe<StockOwnerSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<StockOwnerOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryWarehouseWorkersArgs = {
  filters?: InputMaybe<WarehouseWorkerSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<WarehouseWorkerOrderByCriterion>>;
  page?: Scalars['Int'];
};


export type QueryWarehousesArgs = {
  filters?: InputMaybe<WarehouseSearchFilters>;
  itemsPerPage?: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<WarehouseOrderByCriterion>>;
  page?: Scalars['Int'];
};

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

export type ReturnCode = {
  __typename?: 'ReturnCode';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  /** Text value for field type */
  typeText?: Maybe<Scalars['String']>;
};

/** Field names for the ReturnCode model */
export enum ReturnCodeFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  Description = 'description',
  Extras = 'extras',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  Type = 'type'
}

/** Returns a list of ReturnCode */
export type ReturnCodeListResult = {
  __typename?: 'ReturnCodeListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<ReturnCode>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for ReturnCode */
export type ReturnCodeOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: ReturnCodeFieldName;
};

/** Attributes of ReturnCode to filter onto */
export type ReturnCodeSearchFilters = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
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

export type Round = {
  __typename?: 'Round';
  associatedRound?: Maybe<Scalars['Boolean']>;
  blocLevel?: Maybe<Scalars['Int']>;
  blockId?: Maybe<Scalars['String']>;
  carrierId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  delayBeforePacking?: Maybe<Scalars['DateTime']>;
  delayBeforePicking?: Maybe<Scalars['DateTime']>;
  equipmentBarcode?: Maybe<Scalars['String']>;
  equipmentId?: Maybe<Scalars['String']>;
  expectedDeliveryDate?: Maybe<Scalars['DateTime']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  monoBloc?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  nbPickArticle?: Maybe<Scalars['Int']>;
  nbRoundLine?: Maybe<Scalars['Int']>;
  pickingTime?: Maybe<Scalars['DateTime']>;
  priority?: Maybe<Scalars['Int']>;
  /** Text value for field priority */
  priorityText?: Maybe<Scalars['String']>;
  productivity?: Maybe<Scalars['Int']>;
  replenishmentInProgress?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  warehouseCode?: Maybe<Scalars['String']>;
};

export type RoundAdvisedAddress = {
  __typename?: 'RoundAdvisedAddress';
  articleId?: Maybe<Scalars['String']>;
  boxLineId?: Maybe<Scalars['String']>;
  contentId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
  locationType?: Maybe<Scalars['Int']>;
  /** Text value for field location_type */
  locationTypeText?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['String']>;
  userTread?: Maybe<Scalars['String']>;
};

/** Field names for the RoundAdvisedAddress model */
export enum RoundAdvisedAddressFieldName {
  ArticleId = 'articleId',
  BoxLineId = 'boxLineId',
  ContentId = 'contentId',
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  Id = 'id',
  LocationId = 'locationId',
  LocationType = 'locationType',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Quantity = 'quantity',
  RoundId = 'roundId',
  UserTread = 'userTread'
}

/** Returns a list of RoundAdvisedAddress */
export type RoundAdvisedAddressListResult = {
  __typename?: 'RoundAdvisedAddressListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<RoundAdvisedAddress>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for RoundAdvisedAddress */
export type RoundAdvisedAddressOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: RoundAdvisedAddressFieldName;
};

/** Attributes of RoundAdvisedAddress to filter onto */
export type RoundAdvisedAddressSearchFilters = {
  articleId?: InputMaybe<Scalars['String']>;
  boxLineId?: InputMaybe<Scalars['String']>;
  contentId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['String']>;
  locationType?: InputMaybe<Scalars['Int']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  roundId?: InputMaybe<Scalars['String']>;
  userTread?: InputMaybe<Scalars['String']>;
};

/** Field names for the Round model */
export enum RoundFieldName {
  AssociatedRound = 'associatedRound',
  BlocLevel = 'blocLevel',
  BlockId = 'blockId',
  CarrierId = 'carrierId',
  Created = 'created',
  CreatedBy = 'createdBy',
  DelayBeforePacking = 'delayBeforePacking',
  DelayBeforePicking = 'delayBeforePicking',
  EquipmentBarcode = 'equipmentBarcode',
  EquipmentId = 'equipmentId',
  ExpectedDeliveryDate = 'expectedDeliveryDate',
  Extras = 'extras',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  MonoBloc = 'monoBloc',
  Name = 'name',
  NbPickArticle = 'nbPickArticle',
  NbRoundLine = 'nbRoundLine',
  PickingTime = 'pickingTime',
  Priority = 'priority',
  Productivity = 'productivity',
  ReplenishmentInProgress = 'replenishmentInProgress',
  Status = 'status',
  WarehouseCode = 'warehouseCode'
}

/** Returns a list of Round */
export type RoundListResult = {
  __typename?: 'RoundListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<Round>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for Round */
export type RoundOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: RoundFieldName;
};

/** Attributes of Round to filter onto */
export type RoundSearchFilters = {
  associatedRound?: InputMaybe<Scalars['Boolean']>;
  blocLevel?: InputMaybe<Scalars['Int']>;
  blockId?: InputMaybe<Scalars['String']>;
  carrierId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  delayBeforePacking?: InputMaybe<Scalars['DateTime']>;
  delayBeforePicking?: InputMaybe<Scalars['DateTime']>;
  equipmentBarcode?: InputMaybe<Scalars['String']>;
  equipmentId?: InputMaybe<Scalars['String']>;
  expectedDeliveryDate?: InputMaybe<Scalars['DateTime']>;
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  monoBloc?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  nbPickArticle?: InputMaybe<Scalars['Int']>;
  nbRoundLine?: InputMaybe<Scalars['Int']>;
  pickingTime?: InputMaybe<Scalars['DateTime']>;
  priority?: InputMaybe<Scalars['Int']>;
  productivity?: InputMaybe<Scalars['Int']>;
  replenishmentInProgress?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Int']>;
  warehouseCode?: InputMaybe<Scalars['String']>;
};

export type StatusEvolution = {
  __typename?: 'StatusEvolution';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  extras?: Maybe<Scalars['JSON']>;
  feedback?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['Int']>;
  objectReference?: Maybe<Scalars['String']>;
  /** Text value for field object */
  objectText?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  toBeFeedback?: Maybe<Scalars['Boolean']>;
};

/** Field names for the StatusEvolution model */
export enum StatusEvolutionFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  Extras = 'extras',
  Feedback = 'feedback',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Object = 'object',
  ObjectReference = 'objectReference',
  Status = 'status',
  StockOwnerId = 'stockOwnerId',
  ToBeFeedback = 'toBeFeedback'
}

/** Returns a list of StatusEvolution */
export type StatusEvolutionListResult = {
  __typename?: 'StatusEvolutionListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<StatusEvolution>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for StatusEvolution */
export type StatusEvolutionOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: StatusEvolutionFieldName;
};

/** Attributes of StatusEvolution to filter onto */
export type StatusEvolutionSearchFilters = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  feedback?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  object?: InputMaybe<Scalars['Int']>;
  objectReference?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  toBeFeedback?: InputMaybe<Scalars['Boolean']>;
};

export type StatusFeedbackOverWrite = {
  __typename?: 'StatusFeedbackOverWrite';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  customValue?: Maybe<Scalars['Int']>;
  extras?: Maybe<Scalars['JSON']>;
  feedback?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  objectType?: Maybe<Scalars['Int']>;
  /** Text value for field object_type */
  objectTypeText?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  /** Text value for field status */
  statusText?: Maybe<Scalars['String']>;
  stockOwner: StockOwner;
  stockOwnerId?: Maybe<Scalars['String']>;
  system?: Maybe<Scalars['Boolean']>;
};

/** Field names for the StatusFeedbackOverwrite model */
export enum StatusFeedbackOverwriteFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  CustomValue = 'customValue',
  Extras = 'extras',
  Feedback = 'feedback',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  ObjectType = 'objectType',
  Status = 'status',
  StockOwnerId = 'stockOwnerId',
  System = 'system'
}

/** Returns a list of StatusFeedbackOverwrite */
export type StatusFeedbackOverwriteListResult = {
  __typename?: 'StatusFeedbackOverwriteListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<StatusFeedbackOverWrite>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for StatusFeedbackOverwrite */
export type StatusFeedbackOverwriteOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: StatusFeedbackOverwriteFieldName;
};

/** Attributes of StatusFeedbackOverwrite to filter onto */
export type StatusFeedbackOverwriteSearchFilters = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  customValue?: InputMaybe<Scalars['Int']>;
  extras?: InputMaybe<Scalars['JSON']>;
  feedback?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  objectType?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  system?: InputMaybe<Scalars['Boolean']>;
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
  extras?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
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
  Extras = 'extras',
  Id = 'id',
  LogoUrl = 'logoUrl',
  Mobile = 'mobile',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name',
  Phone = 'phone',
  PostCode = 'postCode',
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
  extras?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
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
  ArticleLu = 'ARTICLE_LU',
  ArticleLuBarcode = 'ARTICLE_LU_BARCODE',
  ArticleSet = 'ARTICLE_SET',
  ArticleSetDetail = 'ARTICLE_SET_DETAIL',
  Barcode = 'BARCODE',
  Block = 'BLOCK',
  Box = 'BOX',
  BoxLine = 'BOX_LINE',
  BoxLineFeature = 'BOX_LINE_FEATURE',
  Building = 'BUILDING',
  Carrier = 'CARRIER',
  Config = 'CONFIG',
  Content = 'CONTENT',
  ContentFeature = 'CONTENT_FEATURE',
  Conversion = 'CONVERSION',
  CycleCount = 'CYCLE_COUNT',
  CycleCountLine = 'CYCLE_COUNT_LINE',
  CycleCountMovement = 'CYCLE_COUNT_MOVEMENT',
  Delivery = 'DELIVERY',
  DeliveryLine = 'DELIVERY_LINE',
  Equipment = 'EQUIPMENT',
  EquipmentDetail = 'EQUIPMENT_DETAIL',
  FeatureCode = 'FEATURE_CODE',
  FeatureTypeDetail = 'FEATURE_TYPE_DETAIL',
  FeedbackOverwrite = 'FEEDBACK_OVERWRITE',
  GoodsIn = 'GOODS_IN',
  GoodsInLine = 'GOODS_IN_LINE',
  HandlingUnit = 'HANDLING_UNIT',
  Integrator = 'INTEGRATOR',
  IntegratorUser = 'INTEGRATOR_USER',
  Load = 'LOAD',
  Location = 'LOCATION',
  LogisticUnit = 'LOGISTIC_UNIT',
  Movement = 'MOVEMENT',
  Packaging = 'PACKAGING',
  Parameter = 'PARAMETER',
  Pattern = 'PATTERN',
  PatternPath = 'PATTERN_PATH',
  PurchaseOrder = 'PURCHASE_ORDER',
  PurchaseOrderLine = 'PURCHASE_ORDER_LINE',
  ReturnCode = 'RETURN_CODE',
  Role = 'ROLE',
  Round = 'ROUND',
  RoundAdvisedAddress = 'ROUND_ADVISED_ADDRESS',
  StatusEvolution = 'STATUS_EVOLUTION',
  StatusFeedbackOverwrite = 'STATUS_FEEDBACK_OVERWRITE',
  StockOwner = 'STOCK_OWNER',
  WarehouseWorker = 'WAREHOUSE_WORKER'
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
  additionalDescription?: InputMaybe<Scalars['String']>;
  baseUnitPicking?: InputMaybe<Scalars['Boolean']>;
  baseUnitPrice?: InputMaybe<Scalars['Float']>;
  baseUnitRotation?: InputMaybe<Scalars['Int']>;
  baseUnitWeight?: InputMaybe<Scalars['Float']>;
  code?: InputMaybe<Scalars['String']>;
  countryOfOrigin?: InputMaybe<Scalars['String']>;
  cubingType?: InputMaybe<Scalars['Int']>;
  endOfLife?: InputMaybe<Scalars['Boolean']>;
  extras?: InputMaybe<Scalars['JSON']>;
  family?: InputMaybe<Scalars['String']>;
  featureType?: InputMaybe<Scalars['Int']>;
  groupingId?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  permanentProduct?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  subfamily?: InputMaybe<Scalars['String']>;
  supplierName?: InputMaybe<Scalars['String']>;
  supportPackaging?: InputMaybe<Scalars['String']>;
  supportQuantity?: InputMaybe<Scalars['Float']>;
  tariffClassification?: InputMaybe<Scalars['String']>;
  translation?: InputMaybe<Scalars['JSON']>;
  width?: InputMaybe<Scalars['Float']>;
};

/** Values to update the existing record with */
export type UpdateArticleLuBarcodeInput = {
  articleId?: InputMaybe<Scalars['String']>;
  barcodeId?: InputMaybe<Scalars['String']>;
  countryOfOrigin?: InputMaybe<Scalars['Int']>;
  extras?: InputMaybe<Scalars['JSON']>;
  luId?: InputMaybe<Scalars['String']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateArticleLuInput = {
  articleId?: InputMaybe<Scalars['String']>;
  baseUnitWeight?: InputMaybe<Scalars['Float']>;
  extras?: InputMaybe<Scalars['JSON']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  luId?: InputMaybe<Scalars['String']>;
  picking?: InputMaybe<Scalars['Boolean']>;
  quantity?: InputMaybe<Scalars['Float']>;
  replenish?: InputMaybe<Scalars['Boolean']>;
  rotation?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

/** Values to update the existing record with */
export type UpdateArticleSetDetailInput = {
  articleId?: InputMaybe<Scalars['String']>;
  articleSetId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  quantity?: InputMaybe<Scalars['Float']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateArticleSetInput = {
  articleId?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateBarcodeInput = {
  blacklisted?: InputMaybe<Scalars['Boolean']>;
  extras?: InputMaybe<Scalars['JSON']>;
  flagDouble?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  preparationMode?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Float']>;
  rotation?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  supplierArticleCode?: InputMaybe<Scalars['String']>;
  supplierName?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateBlockInput = {
  blockGroup?: InputMaybe<Scalars['Int']>;
  buildingId?: InputMaybe<Scalars['String']>;
  bulk?: InputMaybe<Scalars['Boolean']>;
  comment?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  level?: InputMaybe<Scalars['Int']>;
  moveable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateBoxInput = {
  carrierBox?: InputMaybe<Scalars['String']>;
  carrierId?: InputMaybe<Scalars['String']>;
  carrierService?: InputMaybe<Scalars['String']>;
  checkingTime?: InputMaybe<Scalars['DateTime']>;
  comment?: InputMaybe<Scalars['String']>;
  deliveryId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  handlingUnitId?: InputMaybe<Scalars['String']>;
  loadId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  packagingId?: InputMaybe<Scalars['String']>;
  preparationMode?: InputMaybe<Scalars['Int']>;
  roundId?: InputMaybe<Scalars['String']>;
  roundPosition?: InputMaybe<Scalars['Int']>;
  shippingExtendInfos?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  toBeChecked?: InputMaybe<Scalars['Boolean']>;
  toBePalletized?: InputMaybe<Scalars['Boolean']>;
  warehouseCode?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

/** Values to update the existing record with */
export type UpdateBoxLineFeatureInput = {
  boxLineId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  featureCodeId?: InputMaybe<Scalars['String']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateBoxLineInput = {
  articleId?: InputMaybe<Scalars['String']>;
  boxId?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  deliveryId?: InputMaybe<Scalars['String']>;
  deliveryLineId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  missingQuantity?: InputMaybe<Scalars['Float']>;
  pickedQuantity?: InputMaybe<Scalars['Float']>;
  preparationMode?: InputMaybe<Scalars['Int']>;
  quantityToBePicked?: InputMaybe<Scalars['Float']>;
  reservation?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateBuildingInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  address3?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactMobile?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** Values to update the existing record with */
export type UpdateCarrierInput = {
  accountNumber?: InputMaybe<Scalars['String']>;
  available?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  counter?: InputMaybe<Scalars['Float']>;
  extraInfo?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  isVirtual?: InputMaybe<Scalars['Boolean']>;
  monoroundgroup?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  parentCarrierId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  toBeLoaded?: InputMaybe<Scalars['Boolean']>;
  toBePalletized?: InputMaybe<Scalars['Boolean']>;
  useReceiptNumber?: InputMaybe<Scalars['Boolean']>;
};

/** Values to update the existing record with */
export type UpdateConfigInput = {
  code?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  scope?: InputMaybe<Scalars['String']>;
  translation?: InputMaybe<Scalars['JSON']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateContentFeatureInput = {
  contentId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  featureCodeId?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateContentInput = {
  articleId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  handlingUnitId?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['String']>;
  purchaseOrderId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  reservation?: InputMaybe<Scalars['String']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  stockStatus?: InputMaybe<Scalars['Int']>;
};

/** Values to update the existing record with */
export type UpdateConversionInput = {
  entry1?: InputMaybe<Scalars['String']>;
  entry2?: InputMaybe<Scalars['String']>;
  entry3?: InputMaybe<Scalars['String']>;
  entry4?: InputMaybe<Scalars['String']>;
  entry5?: InputMaybe<Scalars['String']>;
  exit1?: InputMaybe<Scalars['String']>;
  exit2?: InputMaybe<Scalars['String']>;
  exit3?: InputMaybe<Scalars['String']>;
  exit4?: InputMaybe<Scalars['String']>;
  exit5?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
};

/** Values to update the existing record with */
export type UpdateCycleCountInput = {
  articleId?: InputMaybe<Scalars['String']>;
  blockId?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  emptyLocation?: InputMaybe<Scalars['Boolean']>;
  extras?: InputMaybe<Scalars['JSON']>;
  finalAisle?: InputMaybe<Scalars['String']>;
  finalColumn?: InputMaybe<Scalars['String']>;
  finalLevel?: InputMaybe<Scalars['String']>;
  finalPosition?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['Int']>;
  motive?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  numberOfDays?: InputMaybe<Scalars['Int']>;
  originalAisle?: InputMaybe<Scalars['String']>;
  originalColumn?: InputMaybe<Scalars['String']>;
  originalLevel?: InputMaybe<Scalars['String']>;
  originalPosition?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
};

/** Values to update the existing record with */
export type UpdateCycleCountLineInput = {
  articleId?: InputMaybe<Scalars['String']>;
  contentId?: InputMaybe<Scalars['String']>;
  cycleCountId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  locationId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateCycleCountMovementInput = {
  articleId?: InputMaybe<Scalars['String']>;
  contentId?: InputMaybe<Scalars['String']>;
  cycleCountId?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  extras?: InputMaybe<Scalars['JSON']>;
  gapPass1?: InputMaybe<Scalars['Float']>;
  gapPass2?: InputMaybe<Scalars['Float']>;
  gapPass3?: InputMaybe<Scalars['Float']>;
  locationId?: InputMaybe<Scalars['String']>;
  operatorPass1?: InputMaybe<Scalars['Float']>;
  operatorPass2?: InputMaybe<Scalars['Float']>;
  operatorPass3?: InputMaybe<Scalars['Float']>;
  qualityPass1?: InputMaybe<Scalars['Float']>;
  qualityPass2?: InputMaybe<Scalars['Float']>;
  qualityPass3?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
};

/** Values to update the existing record with */
export type UpdateDeliveryInput = {
  anticipatedDelivery?: InputMaybe<Scalars['Boolean']>;
  anticipatedDeliveryDate?: InputMaybe<Scalars['DateTime']>;
  carrierId?: InputMaybe<Scalars['String']>;
  carrierImposed?: InputMaybe<Scalars['Boolean']>;
  carrierService?: InputMaybe<Scalars['String']>;
  carrierSpecificInfo1?: InputMaybe<Scalars['String']>;
  carrierSpecificInfo2?: InputMaybe<Scalars['String']>;
  codAmount?: InputMaybe<Scalars['Int']>;
  codCurrency?: InputMaybe<Scalars['String']>;
  codPaymenyMode?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  companyOrigin?: InputMaybe<Scalars['String']>;
  compulsoryDeliveryDate?: InputMaybe<Scalars['DateTime']>;
  cubingResult?: InputMaybe<Scalars['Int']>;
  customerAddress?: InputMaybe<Scalars['String']>;
  customerAddress2?: InputMaybe<Scalars['String']>;
  customerAddress3?: InputMaybe<Scalars['String']>;
  customerCity?: InputMaybe<Scalars['String']>;
  customerCivility?: InputMaybe<Scalars['String']>;
  customerCompany?: InputMaybe<Scalars['String']>;
  customerCountry?: InputMaybe<Scalars['String']>;
  customerDistrict?: InputMaybe<Scalars['String']>;
  customerEmail?: InputMaybe<Scalars['String']>;
  customerFirstName?: InputMaybe<Scalars['String']>;
  customerLanguage?: InputMaybe<Scalars['String']>;
  customerMobile?: InputMaybe<Scalars['String']>;
  customerName?: InputMaybe<Scalars['String']>;
  customerPhone?: InputMaybe<Scalars['String']>;
  customerPostcode?: InputMaybe<Scalars['String']>;
  customerStreetNum?: InputMaybe<Scalars['String']>;
  deliveryPointNumber?: InputMaybe<Scalars['String']>;
  equipmentId?: InputMaybe<Scalars['String']>;
  expectedDeliveryDate?: InputMaybe<Scalars['DateTime']>;
  extendDeliveryInformations?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  invoceDevise?: InputMaybe<Scalars['String']>;
  invoiceDiscount?: InputMaybe<Scalars['Float']>;
  invoiceReference?: InputMaybe<Scalars['String']>;
  invoiceShipping?: InputMaybe<Scalars['Float']>;
  invoiceTotalExcludingTaxes?: InputMaybe<Scalars['Float']>;
  invoiceTotalIncludingTaxes?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  orderDate?: InputMaybe<Scalars['DateTime']>;
  printDeliveryNote?: InputMaybe<Scalars['Int']>;
  printLanguage?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  toBePalletized?: InputMaybe<Scalars['Boolean']>;
  transportationAmount?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
};

/** Values to update the existing record with */
export type UpdateDeliveryLineInput = {
  articleId?: InputMaybe<Scalars['String']>;
  backOrderQuantity?: InputMaybe<Scalars['Float']>;
  childLine?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  deliveryId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  invoicePdfFile?: InputMaybe<Scalars['String']>;
  masterLine?: InputMaybe<Scalars['Int']>;
  masterLineNb?: InputMaybe<Scalars['Int']>;
  missingQuantity?: InputMaybe<Scalars['Float']>;
  pickedQuantity?: InputMaybe<Scalars['Float']>;
  quantityToBePicked?: InputMaybe<Scalars['Float']>;
  reservation?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  substitutionArticle?: InputMaybe<Scalars['String']>;
  toBeCubed?: InputMaybe<Scalars['Boolean']>;
  unitPriceExcludingTaxes?: InputMaybe<Scalars['Float']>;
  unitPriceIncludingTaxes?: InputMaybe<Scalars['Float']>;
  vatRate?: InputMaybe<Scalars['Float']>;
};

/** Values to update the existing record with */
export type UpdateEquipmentDetailInput = {
  equipmentId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  packagingId?: InputMaybe<Scalars['String']>;
  preparationMode?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateEquipmentInput = {
  allowPickingOrderFree?: InputMaybe<Scalars['Boolean']>;
  available?: InputMaybe<Scalars['Boolean']>;
  boxLineGrouped?: InputMaybe<Scalars['Boolean']>;
  boxMonoArticle?: InputMaybe<Scalars['Boolean']>;
  checkPosition?: InputMaybe<Scalars['Boolean']>;
  comment?: InputMaybe<Scalars['String']>;
  distributed?: InputMaybe<Scalars['Boolean']>;
  extras?: InputMaybe<Scalars['JSON']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  limitType?: InputMaybe<Scalars['Int']>;
  monoCarrier?: InputMaybe<Scalars['Boolean']>;
  monoCompany?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  nbMaxBox?: InputMaybe<Scalars['Int']>;
  priority?: InputMaybe<Scalars['Int']>;
  qtyMaxArticle?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  toleranceDimension?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
  virtual?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Float']>;
};

/** Values to update the existing record with */
export type UpdateFeatureCodeInput = {
  dateType?: InputMaybe<Scalars['Boolean']>;
  extras?: InputMaybe<Scalars['JSON']>;
  lengthBarcode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  prefixBarcode?: InputMaybe<Scalars['String']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  suffixBarcode?: InputMaybe<Scalars['String']>;
  unique?: InputMaybe<Scalars['Boolean']>;
};

/** Values to update the existing record with */
export type UpdateFeatureTypeDetailInput = {
  atPreparation?: InputMaybe<Scalars['Boolean']>;
  atReception?: InputMaybe<Scalars['Boolean']>;
  extras?: InputMaybe<Scalars['JSON']>;
  featureCodeId?: InputMaybe<Scalars['String']>;
  featureType?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateFeedbackOverwriteInput = {
  customValue?: InputMaybe<Scalars['Int']>;
  extras?: InputMaybe<Scalars['JSON']>;
  feedback?: InputMaybe<Scalars['Boolean']>;
  movementCode?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  system?: InputMaybe<Scalars['Boolean']>;
};

/** Values to update the existing record with */
export type UpdateGoodsInInput = {
  comment?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateGoodsInLineInput = {
  articleId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  goodsInId?: InputMaybe<Scalars['String']>;
  purchaseOrderId?: InputMaybe<Scalars['String']>;
  purchaseOrderLineId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  reservation?: InputMaybe<Scalars['String']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateHandlingUnitInput = {
  barcodeId?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  parentHandlingUnitId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

/** Values to update the existing record with */
export type UpdateLoadInput = {
  carrierId?: InputMaybe<Scalars['String']>;
  counter?: InputMaybe<Scalars['Float']>;
  extras?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

/** Values to update the existing record with */
export type UpdateLocationInput = {
  aisle?: InputMaybe<Scalars['String']>;
  allowCycleCountStockMin?: InputMaybe<Scalars['Boolean']>;
  barcode?: InputMaybe<Scalars['String']>;
  baseUnitRotation?: InputMaybe<Scalars['Int']>;
  blockId?: InputMaybe<Scalars['String']>;
  column?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  constraint?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  level?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  replenish?: InputMaybe<Scalars['Boolean']>;
  replenishType?: InputMaybe<Scalars['Int']>;
};

/** Values to update the existing record with */
export type UpdateLogisticUnitInput = {
  extras?: InputMaybe<Scalars['JSON']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  luConfigId?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  parentLogisticUnitId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

/** Values to update the existing record with */
export type UpdateMovementInput = {
  actionCodeId?: InputMaybe<Scalars['String']>;
  articleId?: InputMaybe<Scalars['String']>;
  boxId?: InputMaybe<Scalars['String']>;
  boxLineId?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  equipmentBarcode?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  feedback?: InputMaybe<Scalars['Boolean']>;
  finalArticle?: InputMaybe<Scalars['Float']>;
  finalContentId?: InputMaybe<Scalars['String']>;
  finalLocationId?: InputMaybe<Scalars['String']>;
  finalQuantity?: InputMaybe<Scalars['Float']>;
  finalReservation?: InputMaybe<Scalars['String']>;
  finalStatus?: InputMaybe<Scalars['Int']>;
  goodsInId?: InputMaybe<Scalars['String']>;
  initialReservation?: InputMaybe<Scalars['String']>;
  initialStatus?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['Int']>;
  originalContentId?: InputMaybe<Scalars['String']>;
  originalLocationId?: InputMaybe<Scalars['String']>;
  originalMovementId?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  purchaseOrderId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  returnCodeId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  toBeFeedback?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['Int']>;
};

/** Values to update the existing record with */
export type UpdatePackagingInput = {
  autoCubingOrder?: InputMaybe<Scalars['Int']>;
  autoCubingProcess?: InputMaybe<Scalars['Boolean']>;
  closureWeight?: InputMaybe<Scalars['Float']>;
  cubingMaxArticleHeight?: InputMaybe<Scalars['Float']>;
  cubingMaxArticleLength?: InputMaybe<Scalars['Float']>;
  default?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  dispatchable?: InputMaybe<Scalars['Boolean']>;
  extras?: InputMaybe<Scalars['JSON']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  maxWeight?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  system?: InputMaybe<Scalars['Boolean']>;
  weight?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

/** Values to update the existing record with */
export type UpdateParameterInput = {
  code?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  scope?: InputMaybe<Scalars['String']>;
  translation?: InputMaybe<Scalars['JSON']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdatePatternInput = {
  extras?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  patternType?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdatePatternPathInput = {
  extras?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  patternId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** Values to update the existing record with */
export type UpdatePurchaseOrderInput = {
  comment?: InputMaybe<Scalars['String']>;
  expectedGoodsInDate?: InputMaybe<Scalars['DateTime']>;
  extras?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  orderDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  supplier?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
};

/** Values to update the existing record with */
export type UpdatePurchaseOrderLineInput = {
  articleId?: InputMaybe<Scalars['String']>;
  blockingStatus?: InputMaybe<Scalars['Int']>;
  extras?: InputMaybe<Scalars['JSON']>;
  originalPurchaseOrder?: InputMaybe<Scalars['String']>;
  originalPurchaseOrderLine?: InputMaybe<Scalars['String']>;
  purchaseOrderId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  quantityMax?: InputMaybe<Scalars['Float']>;
  receivedQuantity?: InputMaybe<Scalars['Float']>;
  reservation?: InputMaybe<Scalars['String']>;
  reservedQuantity?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateReturnCodeInput = {
  description?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
};

/** Values to update the existing record with */
export type UpdateRoundAdvisedAddressInput = {
  articleId?: InputMaybe<Scalars['String']>;
  boxLineId?: InputMaybe<Scalars['String']>;
  contentId?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  locationId?: InputMaybe<Scalars['String']>;
  locationType?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Float']>;
  roundId?: InputMaybe<Scalars['String']>;
  userTread?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateRoundInput = {
  associatedRound?: InputMaybe<Scalars['Boolean']>;
  blocLevel?: InputMaybe<Scalars['Int']>;
  blockId?: InputMaybe<Scalars['String']>;
  carrierId?: InputMaybe<Scalars['String']>;
  delayBeforePacking?: InputMaybe<Scalars['DateTime']>;
  delayBeforePicking?: InputMaybe<Scalars['DateTime']>;
  equipmentBarcode?: InputMaybe<Scalars['String']>;
  equipmentId?: InputMaybe<Scalars['String']>;
  expectedDeliveryDate?: InputMaybe<Scalars['DateTime']>;
  extras?: InputMaybe<Scalars['JSON']>;
  monoBloc?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  nbPickArticle?: InputMaybe<Scalars['Int']>;
  nbRoundLine?: InputMaybe<Scalars['Int']>;
  pickingTime?: InputMaybe<Scalars['DateTime']>;
  priority?: InputMaybe<Scalars['Int']>;
  productivity?: InputMaybe<Scalars['Int']>;
  replenishmentInProgress?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Int']>;
  warehouseCode?: InputMaybe<Scalars['String']>;
};

/** Values to update the existing record with */
export type UpdateStatusEvolutionInput = {
  extras?: InputMaybe<Scalars['JSON']>;
  feedback?: InputMaybe<Scalars['Boolean']>;
  object?: InputMaybe<Scalars['Int']>;
  objectReference?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  toBeFeedback?: InputMaybe<Scalars['Boolean']>;
};

/** Values to update the existing record with */
export type UpdateStatusFeedbackOverwriteInput = {
  customValue?: InputMaybe<Scalars['Int']>;
  extras?: InputMaybe<Scalars['JSON']>;
  feedback?: InputMaybe<Scalars['Boolean']>;
  objectType?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  stockOwnerId?: InputMaybe<Scalars['String']>;
  system?: InputMaybe<Scalars['Boolean']>;
};

/** Values to update the existing record with */
export type UpdateStockOwnerInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  address3?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  contact?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  extras?: InputMaybe<Scalars['JSON']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
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

export type ValidationError = {
  __typename?: 'ValidationError';
  message: Scalars['String'];
};

export type Warehouse = {
  __typename?: 'Warehouse';
  /** ID of the Client that manages this Warehouse */
  clientId: Scalars['String'];
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  integrator: Integrator;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  /** Name of the Warehouse (e.g. `Roubaix (prod)`) */
  name: Scalars['String'];
};

/** Field names for the Warehouse model */
export enum WarehouseFieldName {
  ClientId = 'clientId',
  Created = 'created',
  CreatedBy = 'createdBy',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Name = 'name'
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
  clientId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type WarehouseWorker = {
  __typename?: 'WarehouseWorker';
  client: Client;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** String-based unique identifier. */
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  role: RoleType;
  roleId: Scalars['String'];
  username: Scalars['String'];
  warehouseId: Scalars['String'];
};

/** Field names for the WarehouseWorker model */
export enum WarehouseWorkerFieldName {
  Created = 'created',
  CreatedBy = 'createdBy',
  Email = 'email',
  Id = 'id',
  Modified = 'modified',
  ModifiedBy = 'modifiedBy',
  Password = 'password',
  RoleId = 'roleId',
  Username = 'username',
  WarehouseId = 'warehouseId'
}

/** Returns a list of WarehouseWorker */
export type WarehouseWorkerListResult = {
  __typename?: 'WarehouseWorkerListResult';
  count: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  results: Array<WarehouseWorker>;
  totalPages: Scalars['Int'];
};

/** How to order the search results for WarehouseWorker */
export type WarehouseWorkerOrderByCriterion = {
  ascending?: Scalars['Boolean'];
  field: WarehouseWorkerFieldName;
};

/** Attributes of WarehouseWorker to filter onto */
export type WarehouseWorkerSearchFilters = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  roleId?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  warehouseId?: InputMaybe<Scalars['String']>;
};

export type GetAllArticlesQueryVariables = Exact<{
  filters?: InputMaybe<ArticleSearchFilters>;
  orderBy?: InputMaybe<Array<ArticleOrderByCriterion> | ArticleOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetAllArticlesQuery = { __typename?: 'Query', articles: { __typename?: 'ArticleListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'Article', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, status?: number | null, code?: string | null, name?: string | null, additionalDescription?: string | null, supplierName?: string | null, translation?: any | null, length?: number | null, width?: number | null, height?: number | null, baseUnitPrice?: number | null, baseUnitWeight?: number | null, baseUnitPicking?: boolean | null, baseUnitRotation?: number | null, cubingType?: number | null, featureType?: number | null, permanentProduct?: boolean | null, tariffClassification?: string | null, family?: string | null, subfamily?: string | null, groupingId?: string | null, countryOfOrigin?: string | null, newProduct?: boolean | null, endOfLife?: boolean | null, supportQuantity?: number | null, stockOwnerId?: string | null, statusText?: string | null, cubingTypeText?: string | null, baseUnitRotationText?: string | null, featureTypeText?: string | null }> } };

export type GetArticleByIdQueryVariables = Exact<{
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetArticleByIdQuery = { __typename?: 'Query', article?: { __typename?: 'Article', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, status?: number | null, code?: string | null, name?: string | null, additionalDescription?: string | null, supplierName?: string | null, translation?: any | null, length?: number | null, width?: number | null, height?: number | null, baseUnitPrice?: number | null, baseUnitWeight?: number | null, baseUnitPicking?: boolean | null, baseUnitRotation?: number | null, cubingType?: number | null, featureType?: number | null, permanentProduct?: boolean | null, tariffClassification?: string | null, family?: string | null, subfamily?: string | null, groupingId?: string | null, countryOfOrigin?: string | null, newProduct?: boolean | null, endOfLife?: boolean | null, supportQuantity?: number | null, stockOwnerId?: string | null, statusText?: string | null, cubingTypeText?: string | null, baseUnitRotationText?: string | null, featureTypeText?: string | null } | null };

export type GetArticleIdsQueryVariables = Exact<{
  filters?: InputMaybe<ArticleSearchFilters>;
  orderBy?: InputMaybe<Array<ArticleOrderByCriterion> | ArticleOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetArticleIdsQuery = { __typename?: 'Query', articles: { __typename?: 'ArticleListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'Article', id?: string | null, name?: string | null }> } };

export type CreateArticleMutationVariables = Exact<{
  input: CreateArticleInput;
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', createArticle: { __typename?: 'Article', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, status?: number | null, code?: string | null, name?: string | null, additionalDescription?: string | null, supplierName?: string | null, translation?: any | null, length?: number | null, width?: number | null, height?: number | null, baseUnitPrice?: number | null, baseUnitWeight?: number | null, baseUnitPicking?: boolean | null, baseUnitRotation?: number | null, cubingType?: number | null, featureType?: number | null, permanentProduct?: boolean | null, tariffClassification?: string | null, family?: string | null, subfamily?: string | null, groupingId?: string | null, countryOfOrigin?: string | null, newProduct?: boolean | null, endOfLife?: boolean | null, supportQuantity?: number | null, stockOwnerId?: string | null, statusText?: string | null, cubingTypeText?: string | null, baseUnitRotationText?: string | null, featureTypeText?: string | null } };

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


export type UpdateArticleMutation = { __typename?: 'Mutation', updateArticle?: { __typename?: 'Article', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, status?: number | null, code?: string | null, name?: string | null, additionalDescription?: string | null, supplierName?: string | null, translation?: any | null, length?: number | null, width?: number | null, height?: number | null, baseUnitPrice?: number | null, baseUnitWeight?: number | null, baseUnitPicking?: boolean | null, baseUnitRotation?: number | null, cubingType?: number | null, featureType?: number | null, permanentProduct?: boolean | null, tariffClassification?: string | null, family?: string | null, subfamily?: string | null, groupingId?: string | null, countryOfOrigin?: string | null, newProduct?: boolean | null, endOfLife?: boolean | null, supportQuantity?: number | null, stockOwnerId?: string | null, statusText?: string | null, cubingTypeText?: string | null, baseUnitRotationText?: string | null, featureTypeText?: string | null } | null };

export type GetAllBarcodesQueryVariables = Exact<{
  filters?: InputMaybe<BarcodeSearchFilters>;
  orderBy?: InputMaybe<Array<BarcodeOrderByCriterion> | BarcodeOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetAllBarcodesQuery = { __typename?: 'Query', barcodes: { __typename?: 'BarcodeListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'Barcode', id?: string | null, extras?: any | null, name?: string | null, supplierName?: string | null, supplierArticleCode?: string | null, quantity?: number | null, rotation?: number | null, preparationMode?: number | null, flagDouble?: number | null, blacklisted?: boolean | null, stockOwnerId?: string | null, rotationText?: string | null, preparationModeText?: string | null }> } };

export type GetBarcodeByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetBarcodeByIdQuery = { __typename?: 'Query', barcode?: { __typename?: 'Barcode', id?: string | null, extras?: any | null, name?: string | null, supplierName?: string | null, supplierArticleCode?: string | null, quantity?: number | null, rotation?: number | null, preparationMode?: number | null, flagDouble?: number | null, blacklisted?: boolean | null, stockOwnerId?: string | null, rotationText?: string | null, preparationModeText?: string | null } | null };

export type CreateBarcodeMutationVariables = Exact<{
  input: CreateBarcodeInput;
}>;


export type CreateBarcodeMutation = { __typename?: 'Mutation', createBarcode: { __typename?: 'Barcode', id?: string | null, extras?: any | null, name?: string | null, supplierName?: string | null, supplierArticleCode?: string | null, quantity?: number | null, rotation?: number | null, preparationMode?: number | null, flagDouble?: number | null, blacklisted?: boolean | null, stockOwnerId?: string | null, rotationText?: string | null, preparationModeText?: string | null } };

export type DeleteBarcodeMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteBarcodeMutation = { __typename?: 'Mutation', deleteBarcode: boolean };

export type RenderDocumentMutationVariables = Exact<{
  templateFilename: Scalars['String'];
  context: Scalars['JSON'];
}>;


export type RenderDocumentMutation = { __typename?: 'Mutation', renderDocument: { __typename: 'MissingContext', message: string } | { __typename: 'RenderedDocument', url: string } | { __typename: 'TemplateDoesNotExist', message: string } | { __typename: 'TemplateError', message: string } };

export type UpdateBarcodeMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateBarcodeInput;
}>;


export type UpdateBarcodeMutation = { __typename?: 'Mutation', updateBarcode?: { __typename?: 'Barcode', id?: string | null, extras?: any | null, name?: string | null, supplierName?: string | null, supplierArticleCode?: string | null, quantity?: number | null, rotation?: number | null, preparationMode?: number | null, flagDouble?: number | null, blacklisted?: boolean | null, stockOwnerId?: string | null, rotationText?: string | null, preparationModeText?: string | null } | null };

export type SimpleGetAllBLocksQueryVariables = Exact<{ [key: string]: never; }>;


export type SimpleGetAllBLocksQuery = { __typename?: 'Query', blocks: { __typename?: 'BlockListResult', results: Array<{ __typename?: 'Block', id?: string | null, name?: string | null }> } };

export type SimpleGetAllBuildingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SimpleGetAllBuildingsQuery = { __typename?: 'Query', buildings: { __typename?: 'BuildingListResult', results: Array<{ __typename?: 'Building', id?: string | null, name?: string | null }> } };

export type GetBlockLevelsParamsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlockLevelsParamsQuery = { __typename?: 'Query', listParametersForAScope: Array<{ __typename?: 'ParameterResults', id: string, scope: string, code: string, text: string }> };

export type GetAllBlocksQueryVariables = Exact<{
  filters?: InputMaybe<BlockSearchFilters>;
  orderBy?: InputMaybe<Array<BlockOrderByCriterion> | BlockOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetAllBlocksQuery = { __typename?: 'Query', blocks: { __typename?: 'BlockListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'Block', id?: string | null, name?: string | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, moveable?: boolean | null, bulk?: boolean | null, comment?: string | null, level?: number | null, blockGroup?: number | null, building: { __typename?: 'Building', name?: string | null } }> } };

export type GetBlockByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetBlockByIdQuery = { __typename?: 'Query', block?: { __typename?: 'Block', id?: string | null, name?: string | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, moveable?: boolean | null, bulk?: boolean | null, comment?: string | null, level?: number | null, blockGroup?: number | null, building: { __typename?: 'Building', name?: string | null } } | null };

export type GetBlockIdsQueryVariables = Exact<{
  filters?: InputMaybe<BlockSearchFilters>;
  orderBy?: InputMaybe<Array<BlockOrderByCriterion> | BlockOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetBlockIdsQuery = { __typename?: 'Query', blocks: { __typename?: 'BlockListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'Block', id?: string | null, name?: string | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, moveable?: boolean | null, bulk?: boolean | null, comment?: string | null, level?: number | null, blockGroup?: number | null }> } };

export type CreateBlockMutationVariables = Exact<{
  input: CreateBlockInput;
}>;


export type CreateBlockMutation = { __typename?: 'Mutation', createBlock: { __typename?: 'Block', id?: string | null, name?: string | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, moveable?: boolean | null, bulk?: boolean | null, comment?: string | null, level?: number | null, blockGroup?: number | null } };

export type DeleteBlockMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteBlockMutation = { __typename?: 'Mutation', deleteBlock: boolean };

export type UpdateBlockMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateBlockInput;
}>;


export type UpdateBlockMutation = { __typename?: 'Mutation', updateBlock?: { __typename?: 'Block', id?: string | null, name?: string | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, moveable?: boolean | null, bulk?: boolean | null, comment?: string | null, level?: number | null, blockGroup?: number | null } | null };

export type GetAllConfigsQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<ParameterOrderByCriterion> | ParameterOrderByCriterion>;
  filters?: InputMaybe<ParameterSearchFilters>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetAllConfigsQuery = { __typename?: 'Query', configs: { __typename?: 'ParameterListResult', count: number, itemsPerPage: number, totalPages: number, page: number, results: Array<{ __typename?: 'Parameter', id?: string | null, scope: string, code: string, value: string, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, translation?: any | null, system?: boolean | null }> } };

export type GetConfigByIdQueryVariables = Exact<{
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetConfigByIdQuery = { __typename?: 'Query', config?: { __typename?: 'Config', id?: string | null, scope: string, code: string, value: string, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, translation?: any | null, system?: boolean | null } | null };

export type CreateConfigMutationVariables = Exact<{
  input: CreateConfigInput;
}>;


export type CreateConfigMutation = { __typename?: 'Mutation', createConfig: { __typename?: 'Config', id?: string | null, scope: string, code: string, value: string, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, translation?: any | null, system?: boolean | null } };

export type DeleteConfigMutationVariables = Exact<{
  configId: Scalars['String'];
}>;


export type DeleteConfigMutation = { __typename?: 'Mutation', deleteConfig: boolean };

export type UpdateConfigMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateConfigInput;
}>;


export type UpdateConfigMutation = { __typename?: 'Mutation', updateConfig?: { __typename?: 'Config', id?: string | null, scope: string, code: string, value: string, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, translation?: any | null, system?: boolean | null } | null };

export type ListConfigsForAScopeQueryVariables = Exact<{
  scope: Scalars['String'];
  code?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
}>;


export type ListConfigsForAScopeQuery = { __typename?: 'Query', listConfigsForAScope: Array<{ __typename?: 'ConfigResults', id: string, scope: string, code: string, text: string }> };

export type GetAllGoodsInsQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<GoodsInOrderByCriterion> | GoodsInOrderByCriterion>;
  filters?: InputMaybe<GoodsInSearchFilters>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetAllGoodsInsQuery = { __typename?: 'Query', goodsIns: { __typename?: 'GoodsInListResult', count: number, itemsPerPage: number, totalPages: number, page: number, results: Array<{ __typename?: 'GoodsIn', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, name?: string | null, comment?: string | null }> } };

export type GetGoodsInByIdQueryVariables = Exact<{
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetGoodsInByIdQuery = { __typename?: 'Query', goodsIn?: { __typename?: 'GoodsIn', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, name?: string | null, comment?: string | null } | null };

export type GetGoodsInIdsQueryVariables = Exact<{
  filters?: InputMaybe<GoodsInSearchFilters>;
  orderBy?: InputMaybe<Array<GoodsInOrderByCriterion> | GoodsInOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetGoodsInIdsQuery = { __typename?: 'Query', goodsIns: { __typename?: 'GoodsInListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'GoodsIn', id?: string | null, name?: string | null, comment?: string | null }> } };

export type CreateGoodsInMutationVariables = Exact<{
  input: CreateGoodsInInput;
}>;


export type CreateGoodsInMutation = { __typename?: 'Mutation', createGoodsIn: { __typename?: 'GoodsIn', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, name?: string | null, comment?: string | null } };

export type DeleteGoodsInMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteGoodsInMutation = { __typename?: 'Mutation', deleteGoodsIn: boolean };

export type UpdateGoodsInMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateGoodsInInput;
}>;


export type UpdateGoodsInMutation = { __typename?: 'Mutation', updateGoodsIn?: { __typename?: 'GoodsIn', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, name?: string | null, comment?: string | null } | null };

export type GetGoodsInLineByIdQueryVariables = Exact<{
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetGoodsInLineByIdQuery = { __typename?: 'Query', goodsInLine?: { __typename?: 'GoodsInLine', id?: string | null, extras?: any | null, quantity?: number | null, reservation?: string | null, stockOwnerId?: string | null, articleId?: string | null, goodsInId?: string | null, purchaseOrderId?: string | null, purchaseOrderLineId?: string | null } | null };

export type GetGoodsInLinesQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<GoodsInLineOrderByCriterion> | GoodsInLineOrderByCriterion>;
  filters?: InputMaybe<GoodsInLineSearchFilters>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetGoodsInLinesQuery = { __typename?: 'Query', goodsInLines: { __typename?: 'GoodsInLineListResult', count: number, itemsPerPage: number, totalPages: number, page: number, results: Array<{ __typename?: 'GoodsInLine', id?: string | null, extras?: any | null, quantity?: number | null, reservation?: string | null, stockOwnerId?: string | null, articleId?: string | null, goodsInId?: string | null, purchaseOrderId?: string | null, purchaseOrderLineId?: string | null }> } };

export type CreateGoodsInLineMutationVariables = Exact<{
  input: CreateGoodsInLineInput;
}>;


export type CreateGoodsInLineMutation = { __typename?: 'Mutation', createGoodsInLine: { __typename?: 'GoodsInLine', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, quantity?: number | null, reservation?: string | null, stockOwnerId?: string | null, articleId?: string | null, goodsInId?: string | null, purchaseOrderId?: string | null, purchaseOrderLineId?: string | null } };

export type DeleteGoodsInLineMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteGoodsInLineMutation = { __typename?: 'Mutation', deleteGoodsInLine: boolean };

export type UpdateGoodsInLineMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateGoodsInLineInput;
}>;


export type UpdateGoodsInLineMutation = { __typename?: 'Mutation', updateGoodsInLine?: { __typename?: 'GoodsInLine', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, quantity?: number | null, reservation?: string | null, stockOwnerId?: string | null, articleId?: string | null, goodsInId?: string | null, purchaseOrderId?: string | null, purchaseOrderLineId?: string | null } | null };

export type GetReplenishTypesConfigsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReplenishTypesConfigsQuery = { __typename?: 'Query', listConfigsForAScope: Array<{ __typename?: 'ConfigResults', id: string, scope: string, code: string, text: string }> };

export type GetRotationsParamsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRotationsParamsQuery = { __typename?: 'Query', listParametersForAScope: Array<{ __typename?: 'ParameterResults', id: string, scope: string, code: string, text: string }> };

export type GetAllLocationsQueryVariables = Exact<{
  filters?: InputMaybe<LocationSearchFilters>;
  orderBy?: InputMaybe<Array<LocationOrderByCriterion> | LocationOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetAllLocationsQuery = { __typename?: 'Query', locations: { __typename?: 'LocationListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'Location', id?: string | null, name?: string | null, barcode?: string | null, aisle?: string | null, column?: string | null, level?: string | null, position?: string | null, replenish?: boolean | null, blockId?: string | null, replenishType?: number | null, constraint?: string | null, comment?: string | null, baseUnitRotation?: number | null, allowCycleCountStockMin?: boolean | null, block: { __typename?: 'Block', name?: string | null } }> } };

export type GetLocationByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetLocationByIdQuery = { __typename?: 'Query', location?: { __typename?: 'Location', id?: string | null, name?: string | null, barcode?: string | null, aisle?: string | null, column?: string | null, level?: string | null, position?: string | null, replenish?: boolean | null, blockId?: string | null, replenishType?: number | null, constraint?: string | null, comment?: string | null, baseUnitRotation?: number | null, allowCycleCountStockMin?: boolean | null, block: { __typename?: 'Block', name?: string | null } } | null };

export type GetLocationIdsQueryVariables = Exact<{
  filters?: InputMaybe<LocationSearchFilters>;
  orderBy?: InputMaybe<Array<LocationOrderByCriterion> | LocationOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetLocationIdsQuery = { __typename?: 'Query', locations: { __typename?: 'LocationListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'Location', name?: string | null, barcode?: string | null, aisle?: string | null, column?: string | null, level?: string | null, position?: string | null, replenish?: boolean | null, blockId?: string | null, replenishType?: number | null, constraint?: string | null, comment?: string | null, baseUnitRotation?: number | null, allowCycleCountStockMin?: boolean | null, block: { __typename?: 'Block', name?: string | null } }> } };

export type CreateLocationMutationVariables = Exact<{
  input: CreateLocationInput;
}>;


export type CreateLocationMutation = { __typename?: 'Mutation', createLocation: { __typename: 'Location', id?: string | null, name?: string | null, barcode?: string | null, aisle?: string | null, column?: string | null, level?: string | null, position?: string | null, replenish?: boolean | null, blockId?: string | null, replenishType?: number | null, constraint?: string | null, comment?: string | null, baseUnitRotation?: number | null, allowCycleCountStockMin?: boolean | null, block: { __typename?: 'Block', name?: string | null } } | { __typename: 'ValidationError', message: string } };

export type BulkCreateLocationsMutationVariables = Exact<{
  input: BulkCreateLocationsInput;
}>;


export type BulkCreateLocationsMutation = { __typename?: 'Mutation', bulkCreateLocations: Array<{ __typename: 'Location', id?: string | null, name?: string | null, barcode?: string | null, aisle?: string | null, column?: string | null, level?: string | null, position?: string | null, replenish?: boolean | null, blockId?: string | null, replenishType?: number | null, constraint?: string | null, comment?: string | null, baseUnitRotation?: number | null, allowCycleCountStockMin?: boolean | null, block: { __typename?: 'Block', name?: string | null } }> };

export type DeleteLocationMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteLocationMutation = { __typename?: 'Mutation', deleteLocation: boolean };

export type UpdateLocationMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateLocationInput;
}>;


export type UpdateLocationMutation = { __typename?: 'Mutation', updateLocation?: { __typename?: 'Location', id?: string | null, name?: string | null, barcode?: string | null, aisle?: string | null, column?: string | null, level?: string | null, position?: string | null, replenish?: boolean | null, blockId?: string | null, replenishType?: number | null, constraint?: string | null, comment?: string | null, baseUnitRotation?: number | null, allowCycleCountStockMin?: boolean | null, block: { __typename?: 'Block', name?: string | null } } | null };

export type WarehouseLoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  warehouseId: Scalars['ID'];
}>;


export type WarehouseLoginMutation = { __typename?: 'Mutation', warehouseLogin?: { __typename?: 'LoginSuccess', accessToken: string } | null };

export type IntegratorLoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  integratorId: Scalars['ID'];
}>;


export type IntegratorLoginMutation = { __typename?: 'Mutation', integratorLogin?: { __typename?: 'LoginSuccess', accessToken: string } | null };

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

export type GetAllPatternsQueryVariables = Exact<{
  filters?: InputMaybe<PatternSearchFilters>;
  orderBy?: InputMaybe<Array<PatternOrderByCriterion> | PatternOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetAllPatternsQuery = { __typename?: 'Query', patterns: { __typename?: 'PatternListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'Pattern', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, name?: string | null, patternType?: string | null, status?: number | null, stockOwnerId?: string | null, patternTypeText?: string | null, statusText?: string | null, paths: Array<{ __typename?: 'PatternPath', id?: string | null, name?: string | null, status?: number | null, extras?: any | null }>, stockOwner: { __typename?: 'StockOwner', id?: string | null, name?: string | null } }> } };

export type GetPatternByIdQueryVariables = Exact<{
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetPatternByIdQuery = { __typename?: 'Query', pattern?: { __typename?: 'Pattern', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, name?: string | null, patternType?: string | null, status?: number | null, stockOwnerId?: string | null, patternTypeText?: string | null, statusText?: string | null, paths: Array<{ __typename?: 'PatternPath', id?: string | null, name?: string | null, status?: number | null, extras?: any | null }>, stockOwner: { __typename?: 'StockOwner', id?: string | null, name?: string | null } } | null };

export type CreatePatternMutationVariables = Exact<{
  input: CreatePatternInput;
}>;


export type CreatePatternMutation = { __typename?: 'Mutation', createPattern: { __typename?: 'Pattern', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, name?: string | null, patternType?: string | null, status?: number | null, stockOwnerId?: string | null, patternTypeText?: string | null, statusText?: string | null, paths: Array<{ __typename?: 'PatternPath', id?: string | null, name?: string | null, status?: number | null, extras?: any | null }>, stockOwner: { __typename?: 'StockOwner', id?: string | null, name?: string | null } } };

export type DeletePatternMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeletePatternMutation = { __typename?: 'Mutation', deletePattern: boolean };

export type UpdatePatternMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdatePatternInput;
}>;


export type UpdatePatternMutation = { __typename?: 'Mutation', updatePattern?: { __typename?: 'Pattern', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, name?: string | null, patternType?: string | null, status?: number | null, stockOwnerId?: string | null, patternTypeText?: string | null, statusText?: string | null, paths: Array<{ __typename?: 'PatternPath', id?: string | null, name?: string | null, status?: number | null, extras?: any | null }>, stockOwner: { __typename?: 'StockOwner', id?: string | null, name?: string | null } } | null };

export type GetPatternIdsQueryVariables = Exact<{
  filters?: InputMaybe<PatternSearchFilters>;
  orderBy?: InputMaybe<Array<PatternOrderByCriterion> | PatternOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetPatternIdsQuery = { __typename?: 'Query', patterns: { __typename?: 'PatternListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'Pattern', id?: string | null, name?: string | null }> } };

export type GetAllPatternPathsQueryVariables = Exact<{
  filters?: InputMaybe<PatternPathSearchFilters>;
  orderBy?: InputMaybe<Array<PatternPathOrderByCriterion> | PatternPathOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetAllPatternPathsQuery = { __typename?: 'Query', patternPaths: { __typename?: 'PatternPathListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'PatternPath', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, name?: string | null, status?: number | null, patternId?: string | null }> } };

export type GetPatternPathByIdQueryVariables = Exact<{
  id: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetPatternPathByIdQuery = { __typename?: 'Query', patternPath?: { __typename?: 'PatternPath', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, name?: string | null, status?: number | null, patternId?: string | null } | null };

export type CreatePatternPathMutationVariables = Exact<{
  input: CreatePatternPathInput;
}>;


export type CreatePatternPathMutation = { __typename?: 'Mutation', createPatternPath: { __typename?: 'PatternPath', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, name?: string | null, status?: number | null, patternId?: string | null } };

export type DeletePatternPathMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeletePatternPathMutation = { __typename?: 'Mutation', deletePatternPath: boolean };

export type UpdatePatternPathMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdatePatternPathInput;
}>;


export type UpdatePatternPathMutation = { __typename?: 'Mutation', updatePatternPath?: { __typename?: 'PatternPath', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, name?: string | null, status?: number | null, patternId?: string | null } | null };

export type GetPatternPathLocationsQueryVariables = Exact<{
  filters?: InputMaybe<PatternPathLocationSearchFilters>;
  orderBy?: InputMaybe<Array<PatternPathLocationOrderByCriterion> | PatternPathLocationOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetPatternPathLocationsQuery = { __typename?: 'Query', patternPathLocations: { __typename?: 'PatternPathLocationListResult', count: number, totalPages: number, page: number, itemsPerPage: number, results: Array<{ __typename?: 'PatternPathLocation', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, order?: number | null, locationId?: string | null, patternPathId?: string | null, location: { __typename?: 'Location', id?: string | null, name?: string | null, position?: string | null, column?: string | null, level?: string | null, aisle?: string | null } }> } };

export type GetAllReturnCodesQueryVariables = Exact<{
  filters?: InputMaybe<ReturnCodeSearchFilters>;
  orderBy?: InputMaybe<Array<ReturnCodeOrderByCriterion> | ReturnCodeOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetAllReturnCodesQuery = { __typename?: 'Query', returnCodes: { __typename?: 'ReturnCodeListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'ReturnCode', id?: string | null, name?: string | null, type?: number | null }> } };

export type GetReturnCodeByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetReturnCodeByIdQuery = { __typename?: 'Query', returnCode?: { __typename?: 'ReturnCode', id?: string | null, name?: string | null, type?: number | null, description?: string | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null } | null };

export type GetReturnCodeIdsQueryVariables = Exact<{
  filters?: InputMaybe<ReturnCodeSearchFilters>;
  orderBy?: InputMaybe<Array<ReturnCodeOrderByCriterion> | ReturnCodeOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetReturnCodeIdsQuery = { __typename?: 'Query', returnCodes: { __typename?: 'ReturnCodeListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'ReturnCode', id?: string | null, name?: string | null, type?: number | null }> } };

export type CreateReturnCodeMutationVariables = Exact<{
  input: CreateReturnCodeInput;
}>;


export type CreateReturnCodeMutation = { __typename?: 'Mutation', createReturnCode: { __typename?: 'ReturnCode', id?: string | null, name?: string | null, type?: number | null } };

export type DeleteReturnCodeMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteReturnCodeMutation = { __typename?: 'Mutation', deleteReturnCode: boolean };

export type UpdateReturnCodeMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateReturnCodeInput;
}>;


export type UpdateReturnCodeMutation = { __typename?: 'Mutation', updateReturnCode?: { __typename?: 'ReturnCode', id?: string | null, name?: string | null, type?: number | null } | null };

export type GetAllStockOwnersQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<StockOwnerOrderByCriterion> | StockOwnerOrderByCriterion>;
  filters?: InputMaybe<StockOwnerSearchFilters>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetAllStockOwnersQuery = { __typename?: 'Query', stockOwners: { __typename?: 'StockOwnerListResult', count: number, itemsPerPage: number, totalPages: number, page: number, results: Array<{ __typename?: 'StockOwner', id?: string | null, extras?: any | null, created?: any | null, createdBy?: string | null, modified?: any | null, modifiedBy?: string | null, name?: string | null, contact?: string | null, address1?: string | null, address2?: string | null, address3?: string | null, postCode?: string | null, city?: string | null, country?: string | null, countryCode?: string | null, phone?: string | null, mobile?: string | null, email?: string | null, senderName?: string | null, senderContact?: string | null, senderAddress1?: string | null, senderAddress2?: string | null, senderAddress3?: string | null, senderPostCode?: string | null, senderCity?: string | null, senderCountry?: string | null, senderCountryCode?: string | null, senderPhone?: string | null, senderMobile?: string | null, senderEmail?: string | null, logoUrl?: string | null, awsAccessKeyId?: string | null, awsSecretAccessKey?: string | null, status?: number | null }> } };

export type GetStockOwnerIdsQueryVariables = Exact<{
  filters?: InputMaybe<StockOwnerSearchFilters>;
  orderBy?: InputMaybe<Array<StockOwnerOrderByCriterion> | StockOwnerOrderByCriterion>;
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
}>;


export type GetStockOwnerIdsQuery = { __typename?: 'Query', stockOwners: { __typename?: 'StockOwnerListResult', count: number, itemsPerPage: number, totalPages: number, results: Array<{ __typename?: 'StockOwner', id?: string | null, name?: string | null }> } };

export type GetMyInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyInfoQuery = { __typename?: 'Query', me: { __typename: 'IntegratorUser', id?: string | null, password: string, email: string, integratorId: string, roleId: string, isAdmin?: boolean | null, integrator: { __typename?: 'Integrator', id?: string | null, name: string, awsAccessKeyId?: string | null, awsSecretAccessKey?: string | null }, role: { __typename?: 'RoleType', id?: string | null, name: string, permissions: Array<{ __typename?: 'PermissionType', id?: string | null, table: string, mode: string, roleId: string }> } } | { __typename: 'WarehouseWorker', id?: string | null, password: string, username: string, warehouseId: string, roleId: string, role: { __typename?: 'RoleType', id?: string | null, name: string, permissions: Array<{ __typename?: 'PermissionType', id?: string | null, table: string, mode: string, roleId: string }> } } };


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
      extras
      created
      createdBy
      modified
      modifiedBy
      status
      code
      name
      additionalDescription
      supplierName
      translation
      length
      width
      height
      baseUnitPrice
      baseUnitWeight
      baseUnitPicking
      baseUnitRotation
      cubingType
      featureType
      permanentProduct
      tariffClassification
      family
      subfamily
      groupingId
      countryOfOrigin
      newProduct
      endOfLife
      supportQuantity
      stockOwnerId
      statusText
      cubingTypeText
      baseUnitRotationText
      featureTypeText
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
    query GetArticleById($id: String!, $language: String = "en") {
  article(id: $id, language: $language) {
    id
    extras
    created
    createdBy
    modified
    modifiedBy
    status
    code
    name
    additionalDescription
    supplierName
    translation
    length
    width
    height
    baseUnitPrice
    baseUnitWeight
    baseUnitPicking
    baseUnitRotation
    cubingType
    featureType
    permanentProduct
    tariffClassification
    family
    subfamily
    groupingId
    countryOfOrigin
    newProduct
    endOfLife
    supportQuantity
    stockOwnerId
    statusText
    cubingTypeText
    baseUnitRotationText
    featureTypeText
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
    extras
    created
    createdBy
    modified
    modifiedBy
    status
    code
    name
    additionalDescription
    supplierName
    translation
    length
    width
    height
    baseUnitPrice
    baseUnitWeight
    baseUnitPicking
    baseUnitRotation
    cubingType
    featureType
    permanentProduct
    tariffClassification
    family
    subfamily
    groupingId
    countryOfOrigin
    newProduct
    endOfLife
    supportQuantity
    stockOwnerId
    statusText
    cubingTypeText
    baseUnitRotationText
    featureTypeText
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
    extras
    created
    createdBy
    modified
    modifiedBy
    status
    code
    name
    additionalDescription
    supplierName
    translation
    length
    width
    height
    baseUnitPrice
    baseUnitWeight
    baseUnitPicking
    baseUnitRotation
    cubingType
    featureType
    permanentProduct
    tariffClassification
    family
    subfamily
    groupingId
    countryOfOrigin
    newProduct
    endOfLife
    supportQuantity
    stockOwnerId
    statusText
    cubingTypeText
    baseUnitRotationText
    featureTypeText
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
      extras
      name
      supplierName
      supplierArticleCode
      quantity
      rotation
      preparationMode
      flagDouble
      blacklisted
      stockOwnerId
      rotationText
      preparationModeText
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
    extras
    name
    supplierName
    supplierArticleCode
    quantity
    rotation
    preparationMode
    flagDouble
    blacklisted
    stockOwnerId
    rotationText
    preparationModeText
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
    extras
    name
    supplierName
    supplierArticleCode
    quantity
    rotation
    preparationMode
    flagDouble
    blacklisted
    stockOwnerId
    rotationText
    preparationModeText
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
export const RenderDocumentDocument = `
    mutation RenderDocument($templateFilename: String!, $context: JSON!) {
  renderDocument(templateFilename: $templateFilename, context: $context) {
    __typename
    ... on RenderedDocument {
      url
    }
    ... on TemplateDoesNotExist {
      message
    }
    ... on TemplateError {
      message
    }
    ... on MissingContext {
      message
    }
  }
}
    `;
export const useRenderDocumentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RenderDocumentMutation, TError, RenderDocumentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RenderDocumentMutation, TError, RenderDocumentMutationVariables, TContext>(
      ['RenderDocument'],
      (variables?: RenderDocumentMutationVariables) => fetcher<RenderDocumentMutation, RenderDocumentMutationVariables>(client, RenderDocumentDocument, variables, headers)(),
      options
    );
export const UpdateBarcodeDocument = `
    mutation UpdateBarcode($id: String!, $input: UpdateBarcodeInput!) {
  updateBarcode(id: $id, input: $input) {
    id
    extras
    name
    supplierName
    supplierArticleCode
    quantity
    rotation
    preparationMode
    flagDouble
    blacklisted
    stockOwnerId
    rotationText
    preparationModeText
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
export const SimpleGetAllBuildingsDocument = `
    query SimpleGetAllBuildings {
  buildings {
    results {
      id
      name
    }
  }
}
    `;
export const useSimpleGetAllBuildingsQuery = <
      TData = SimpleGetAllBuildingsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: SimpleGetAllBuildingsQueryVariables,
      options?: UseQueryOptions<SimpleGetAllBuildingsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<SimpleGetAllBuildingsQuery, TError, TData>(
      variables === undefined ? ['SimpleGetAllBuildings'] : ['SimpleGetAllBuildings', variables],
      fetcher<SimpleGetAllBuildingsQuery, SimpleGetAllBuildingsQueryVariables>(client, SimpleGetAllBuildingsDocument, variables, headers),
      options
    );
export const GetBlockLevelsParamsDocument = `
    query getBlockLevelsParams {
  listParametersForAScope(scope: "block_level") {
    id
    scope
    code
    text
  }
}
    `;
export const useGetBlockLevelsParamsQuery = <
      TData = GetBlockLevelsParamsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetBlockLevelsParamsQueryVariables,
      options?: UseQueryOptions<GetBlockLevelsParamsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetBlockLevelsParamsQuery, TError, TData>(
      variables === undefined ? ['getBlockLevelsParams'] : ['getBlockLevelsParams', variables],
      fetcher<GetBlockLevelsParamsQuery, GetBlockLevelsParamsQueryVariables>(client, GetBlockLevelsParamsDocument, variables, headers),
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
      building {
        name
      }
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
    building {
      name
    }
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
export const GetAllConfigsDocument = `
    query GetAllConfigs($orderBy: [ParameterOrderByCriterion!], $filters: ParameterSearchFilters, $page: Int!, $itemsPerPage: Int!, $language: String) {
  configs(
    orderBy: $orderBy
    filters: $filters
    page: $page
    itemsPerPage: $itemsPerPage
    language: $language
  ) {
    count
    itemsPerPage
    totalPages
    page
    results {
      id
      scope
      code
      value
      extras
      created
      createdBy
      modified
      modifiedBy
      translation
      system
    }
  }
}
    `;
export const useGetAllConfigsQuery = <
      TData = GetAllConfigsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAllConfigsQueryVariables,
      options?: UseQueryOptions<GetAllConfigsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllConfigsQuery, TError, TData>(
      ['GetAllConfigs', variables],
      fetcher<GetAllConfigsQuery, GetAllConfigsQueryVariables>(client, GetAllConfigsDocument, variables, headers),
      options
    );
export const GetConfigByIdDocument = `
    query GetConfigById($id: String!, $language: String = "en") {
  config(id: $id, language: $language) {
    id
    scope
    code
    value
    extras
    created
    createdBy
    modified
    modifiedBy
    translation
    system
  }
}
    `;
export const useGetConfigByIdQuery = <
      TData = GetConfigByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetConfigByIdQueryVariables,
      options?: UseQueryOptions<GetConfigByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetConfigByIdQuery, TError, TData>(
      ['GetConfigById', variables],
      fetcher<GetConfigByIdQuery, GetConfigByIdQueryVariables>(client, GetConfigByIdDocument, variables, headers),
      options
    );
export const CreateConfigDocument = `
    mutation CreateConfig($input: CreateConfigInput!) {
  createConfig(input: $input) {
    id
    scope
    code
    value
    extras
    created
    createdBy
    modified
    modifiedBy
    translation
    system
  }
}
    `;
export const useCreateConfigMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateConfigMutation, TError, CreateConfigMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateConfigMutation, TError, CreateConfigMutationVariables, TContext>(
      ['CreateConfig'],
      (variables?: CreateConfigMutationVariables) => fetcher<CreateConfigMutation, CreateConfigMutationVariables>(client, CreateConfigDocument, variables, headers)(),
      options
    );
export const DeleteConfigDocument = `
    mutation DeleteConfig($configId: String!) {
  deleteConfig(configId: $configId)
}
    `;
export const useDeleteConfigMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteConfigMutation, TError, DeleteConfigMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteConfigMutation, TError, DeleteConfigMutationVariables, TContext>(
      ['DeleteConfig'],
      (variables?: DeleteConfigMutationVariables) => fetcher<DeleteConfigMutation, DeleteConfigMutationVariables>(client, DeleteConfigDocument, variables, headers)(),
      options
    );
export const UpdateConfigDocument = `
    mutation UpdateConfig($id: String!, $input: UpdateConfigInput!) {
  updateConfig(id: $id, input: $input) {
    id
    scope
    code
    value
    extras
    created
    createdBy
    modified
    modifiedBy
    translation
    system
  }
}
    `;
export const useUpdateConfigMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateConfigMutation, TError, UpdateConfigMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateConfigMutation, TError, UpdateConfigMutationVariables, TContext>(
      ['UpdateConfig'],
      (variables?: UpdateConfigMutationVariables) => fetcher<UpdateConfigMutation, UpdateConfigMutationVariables>(client, UpdateConfigDocument, variables, headers)(),
      options
    );
export const ListConfigsForAScopeDocument = `
    query ListConfigsForAScope($scope: String!, $code: String, $language: String = "en") {
  listConfigsForAScope(scope: $scope, code: $code, language: $language) {
    id
    scope
    code
    text
  }
}
    `;
export const useListConfigsForAScopeQuery = <
      TData = ListConfigsForAScopeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: ListConfigsForAScopeQueryVariables,
      options?: UseQueryOptions<ListConfigsForAScopeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ListConfigsForAScopeQuery, TError, TData>(
      ['ListConfigsForAScope', variables],
      fetcher<ListConfigsForAScopeQuery, ListConfigsForAScopeQueryVariables>(client, ListConfigsForAScopeDocument, variables, headers),
      options
    );
export const GetAllGoodsInsDocument = `
    query GetAllGoodsIns($orderBy: [GoodsInOrderByCriterion!], $filters: GoodsInSearchFilters, $page: Int!, $itemsPerPage: Int!, $language: String) {
  goodsIns(
    orderBy: $orderBy
    filters: $filters
    page: $page
    itemsPerPage: $itemsPerPage
    language: $language
  ) {
    count
    itemsPerPage
    totalPages
    page
    results {
      id
      extras
      created
      createdBy
      modified
      modifiedBy
      name
      comment
    }
  }
}
    `;
export const useGetAllGoodsInsQuery = <
      TData = GetAllGoodsInsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAllGoodsInsQueryVariables,
      options?: UseQueryOptions<GetAllGoodsInsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllGoodsInsQuery, TError, TData>(
      ['GetAllGoodsIns', variables],
      fetcher<GetAllGoodsInsQuery, GetAllGoodsInsQueryVariables>(client, GetAllGoodsInsDocument, variables, headers),
      options
    );
export const GetGoodsInByIdDocument = `
    query GetGoodsInById($id: String!, $language: String = "en") {
  goodsIn(id: $id, language: $language) {
    id
    extras
    created
    createdBy
    modified
    modifiedBy
    name
    comment
  }
}
    `;
export const useGetGoodsInByIdQuery = <
      TData = GetGoodsInByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetGoodsInByIdQueryVariables,
      options?: UseQueryOptions<GetGoodsInByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetGoodsInByIdQuery, TError, TData>(
      ['GetGoodsInById', variables],
      fetcher<GetGoodsInByIdQuery, GetGoodsInByIdQueryVariables>(client, GetGoodsInByIdDocument, variables, headers),
      options
    );
export const GetGoodsInIdsDocument = `
    query GetGoodsInIds($filters: GoodsInSearchFilters, $orderBy: [GoodsInOrderByCriterion!], $page: Int!, $itemsPerPage: Int!, $language: String) {
  goodsIns(
    filters: $filters
    orderBy: $orderBy
    page: $page
    itemsPerPage: $itemsPerPage
    language: $language
  ) {
    count
    itemsPerPage
    totalPages
    results {
      id
      name
      comment
    }
  }
}
    `;
export const useGetGoodsInIdsQuery = <
      TData = GetGoodsInIdsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetGoodsInIdsQueryVariables,
      options?: UseQueryOptions<GetGoodsInIdsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetGoodsInIdsQuery, TError, TData>(
      ['GetGoodsInIds', variables],
      fetcher<GetGoodsInIdsQuery, GetGoodsInIdsQueryVariables>(client, GetGoodsInIdsDocument, variables, headers),
      options
    );
export const CreateGoodsInDocument = `
    mutation CreateGoodsIn($input: CreateGoodsInInput!) {
  createGoodsIn(input: $input) {
    id
    extras
    created
    createdBy
    modified
    modifiedBy
    name
    comment
  }
}
    `;
export const useCreateGoodsInMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateGoodsInMutation, TError, CreateGoodsInMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateGoodsInMutation, TError, CreateGoodsInMutationVariables, TContext>(
      ['CreateGoodsIn'],
      (variables?: CreateGoodsInMutationVariables) => fetcher<CreateGoodsInMutation, CreateGoodsInMutationVariables>(client, CreateGoodsInDocument, variables, headers)(),
      options
    );
export const DeleteGoodsInDocument = `
    mutation DeleteGoodsIn($id: String!) {
  deleteGoodsIn(id: $id)
}
    `;
export const useDeleteGoodsInMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteGoodsInMutation, TError, DeleteGoodsInMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteGoodsInMutation, TError, DeleteGoodsInMutationVariables, TContext>(
      ['DeleteGoodsIn'],
      (variables?: DeleteGoodsInMutationVariables) => fetcher<DeleteGoodsInMutation, DeleteGoodsInMutationVariables>(client, DeleteGoodsInDocument, variables, headers)(),
      options
    );
export const UpdateGoodsInDocument = `
    mutation UpdateGoodsIn($id: String!, $input: UpdateGoodsInInput!) {
  updateGoodsIn(id: $id, input: $input) {
    id
    extras
    created
    createdBy
    modified
    modifiedBy
    name
    comment
  }
}
    `;
export const useUpdateGoodsInMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateGoodsInMutation, TError, UpdateGoodsInMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateGoodsInMutation, TError, UpdateGoodsInMutationVariables, TContext>(
      ['UpdateGoodsIn'],
      (variables?: UpdateGoodsInMutationVariables) => fetcher<UpdateGoodsInMutation, UpdateGoodsInMutationVariables>(client, UpdateGoodsInDocument, variables, headers)(),
      options
    );
export const GetGoodsInLineByIdDocument = `
    query GetGoodsInLineById($id: String!, $language: String = "en") {
  goodsInLine(id: $id, language: $language) {
    id
    extras
    quantity
    reservation
    stockOwnerId
    articleId
    goodsInId
    purchaseOrderId
    purchaseOrderLineId
  }
}
    `;
export const useGetGoodsInLineByIdQuery = <
      TData = GetGoodsInLineByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetGoodsInLineByIdQueryVariables,
      options?: UseQueryOptions<GetGoodsInLineByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetGoodsInLineByIdQuery, TError, TData>(
      ['GetGoodsInLineById', variables],
      fetcher<GetGoodsInLineByIdQuery, GetGoodsInLineByIdQueryVariables>(client, GetGoodsInLineByIdDocument, variables, headers),
      options
    );
export const GetGoodsInLinesDocument = `
    query GetGoodsInLines($orderBy: [GoodsInLineOrderByCriterion!], $filters: GoodsInLineSearchFilters, $page: Int!, $itemsPerPage: Int!, $language: String = "en") {
  goodsInLines(
    orderBy: $orderBy
    filters: $filters
    page: $page
    itemsPerPage: $itemsPerPage
    language: $language
  ) {
    count
    itemsPerPage
    totalPages
    page
    results {
      id
      extras
      quantity
      reservation
      stockOwnerId
      articleId
      goodsInId
      purchaseOrderId
      purchaseOrderLineId
    }
  }
}
    `;
export const useGetGoodsInLinesQuery = <
      TData = GetGoodsInLinesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetGoodsInLinesQueryVariables,
      options?: UseQueryOptions<GetGoodsInLinesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetGoodsInLinesQuery, TError, TData>(
      ['GetGoodsInLines', variables],
      fetcher<GetGoodsInLinesQuery, GetGoodsInLinesQueryVariables>(client, GetGoodsInLinesDocument, variables, headers),
      options
    );
export const CreateGoodsInLineDocument = `
    mutation CreateGoodsInLine($input: CreateGoodsInLineInput!) {
  createGoodsInLine(input: $input) {
    id
    extras
    created
    createdBy
    modified
    modifiedBy
    quantity
    reservation
    stockOwnerId
    articleId
    goodsInId
    purchaseOrderId
    purchaseOrderLineId
  }
}
    `;
export const useCreateGoodsInLineMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateGoodsInLineMutation, TError, CreateGoodsInLineMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateGoodsInLineMutation, TError, CreateGoodsInLineMutationVariables, TContext>(
      ['CreateGoodsInLine'],
      (variables?: CreateGoodsInLineMutationVariables) => fetcher<CreateGoodsInLineMutation, CreateGoodsInLineMutationVariables>(client, CreateGoodsInLineDocument, variables, headers)(),
      options
    );
export const DeleteGoodsInLineDocument = `
    mutation DeleteGoodsInLine($id: String!) {
  deleteGoodsInLine(id: $id)
}
    `;
export const useDeleteGoodsInLineMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteGoodsInLineMutation, TError, DeleteGoodsInLineMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteGoodsInLineMutation, TError, DeleteGoodsInLineMutationVariables, TContext>(
      ['DeleteGoodsInLine'],
      (variables?: DeleteGoodsInLineMutationVariables) => fetcher<DeleteGoodsInLineMutation, DeleteGoodsInLineMutationVariables>(client, DeleteGoodsInLineDocument, variables, headers)(),
      options
    );
export const UpdateGoodsInLineDocument = `
    mutation UpdateGoodsInLine($id: String!, $input: UpdateGoodsInLineInput!) {
  updateGoodsInLine(id: $id, input: $input) {
    id
    extras
    created
    createdBy
    modified
    modifiedBy
    quantity
    reservation
    stockOwnerId
    articleId
    goodsInId
    purchaseOrderId
    purchaseOrderLineId
  }
}
    `;
export const useUpdateGoodsInLineMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateGoodsInLineMutation, TError, UpdateGoodsInLineMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateGoodsInLineMutation, TError, UpdateGoodsInLineMutationVariables, TContext>(
      ['UpdateGoodsInLine'],
      (variables?: UpdateGoodsInLineMutationVariables) => fetcher<UpdateGoodsInLineMutation, UpdateGoodsInLineMutationVariables>(client, UpdateGoodsInLineDocument, variables, headers)(),
      options
    );
export const GetReplenishTypesConfigsDocument = `
    query getReplenishTypesConfigs {
  listConfigsForAScope(scope: "location_replenish_type") {
    id
    scope
    code
    text
  }
}
    `;
export const useGetReplenishTypesConfigsQuery = <
      TData = GetReplenishTypesConfigsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetReplenishTypesConfigsQueryVariables,
      options?: UseQueryOptions<GetReplenishTypesConfigsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetReplenishTypesConfigsQuery, TError, TData>(
      variables === undefined ? ['getReplenishTypesConfigs'] : ['getReplenishTypesConfigs', variables],
      fetcher<GetReplenishTypesConfigsQuery, GetReplenishTypesConfigsQueryVariables>(client, GetReplenishTypesConfigsDocument, variables, headers),
      options
    );
export const GetRotationsParamsDocument = `
    query getRotationsParams {
  listParametersForAScope(scope: "rotation") {
    id
    scope
    code
    text
  }
}
    `;
export const useGetRotationsParamsQuery = <
      TData = GetRotationsParamsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetRotationsParamsQueryVariables,
      options?: UseQueryOptions<GetRotationsParamsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetRotationsParamsQuery, TError, TData>(
      variables === undefined ? ['getRotationsParams'] : ['getRotationsParams', variables],
      fetcher<GetRotationsParamsQuery, GetRotationsParamsQueryVariables>(client, GetRotationsParamsDocument, variables, headers),
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
      position
      constraint
      comment
      baseUnitRotation
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
export const WarehouseLoginDocument = `
    mutation WarehouseLogin($username: String!, $password: String!, $warehouseId: ID!) {
  warehouseLogin(
    username: $username
    password: $password
    warehouseId: $warehouseId
  ) {
    accessToken
  }
}
    `;
export const useWarehouseLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<WarehouseLoginMutation, TError, WarehouseLoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<WarehouseLoginMutation, TError, WarehouseLoginMutationVariables, TContext>(
      ['WarehouseLogin'],
      (variables?: WarehouseLoginMutationVariables) => fetcher<WarehouseLoginMutation, WarehouseLoginMutationVariables>(client, WarehouseLoginDocument, variables, headers)(),
      options
    );
export const IntegratorLoginDocument = `
    mutation IntegratorLogin($email: String!, $password: String!, $integratorId: ID!) {
  integratorLogin(email: $email, password: $password, integratorId: $integratorId) {
    accessToken
  }
}
    `;
export const useIntegratorLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<IntegratorLoginMutation, TError, IntegratorLoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<IntegratorLoginMutation, TError, IntegratorLoginMutationVariables, TContext>(
      ['IntegratorLogin'],
      (variables?: IntegratorLoginMutationVariables) => fetcher<IntegratorLoginMutation, IntegratorLoginMutationVariables>(client, IntegratorLoginDocument, variables, headers)(),
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
export const GetAllPatternsDocument = `
    query GetAllPatterns($filters: PatternSearchFilters, $orderBy: [PatternOrderByCriterion!], $page: Int!, $itemsPerPage: Int!, $language: String) {
  patterns(
    filters: $filters
    orderBy: $orderBy
    page: $page
    itemsPerPage: $itemsPerPage
    language: $language
  ) {
    count
    itemsPerPage
    totalPages
    results {
      id
      paths {
        id
        name
        status
        extras
      }
      stockOwner {
        id
        name
      }
      extras
      created
      createdBy
      modified
      modifiedBy
      name
      patternType
      status
      stockOwnerId
      patternTypeText
      statusText
    }
  }
}
    `;
export const useGetAllPatternsQuery = <
      TData = GetAllPatternsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAllPatternsQueryVariables,
      options?: UseQueryOptions<GetAllPatternsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllPatternsQuery, TError, TData>(
      ['GetAllPatterns', variables],
      fetcher<GetAllPatternsQuery, GetAllPatternsQueryVariables>(client, GetAllPatternsDocument, variables, headers),
      options
    );
export const GetPatternByIdDocument = `
    query GetPatternById($id: String!, $language: String = "en") {
  pattern(id: $id, language: $language) {
    id
    paths {
      id
      name
      status
      extras
    }
    stockOwner {
      id
      name
    }
    extras
    created
    createdBy
    modified
    modifiedBy
    name
    patternType
    status
    stockOwnerId
    patternTypeText
    statusText
  }
}
    `;
export const useGetPatternByIdQuery = <
      TData = GetPatternByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPatternByIdQueryVariables,
      options?: UseQueryOptions<GetPatternByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPatternByIdQuery, TError, TData>(
      ['GetPatternById', variables],
      fetcher<GetPatternByIdQuery, GetPatternByIdQueryVariables>(client, GetPatternByIdDocument, variables, headers),
      options
    );
export const CreatePatternDocument = `
    mutation CreatePattern($input: CreatePatternInput!) {
  createPattern(input: $input) {
    id
    paths {
      id
      name
      status
      extras
    }
    stockOwner {
      id
      name
    }
    extras
    created
    createdBy
    modified
    modifiedBy
    name
    patternType
    status
    stockOwnerId
    patternTypeText
    statusText
  }
}
    `;
export const useCreatePatternMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreatePatternMutation, TError, CreatePatternMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreatePatternMutation, TError, CreatePatternMutationVariables, TContext>(
      ['CreatePattern'],
      (variables?: CreatePatternMutationVariables) => fetcher<CreatePatternMutation, CreatePatternMutationVariables>(client, CreatePatternDocument, variables, headers)(),
      options
    );
export const DeletePatternDocument = `
    mutation DeletePattern($id: String!) {
  deletePattern(id: $id)
}
    `;
export const useDeletePatternMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeletePatternMutation, TError, DeletePatternMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeletePatternMutation, TError, DeletePatternMutationVariables, TContext>(
      ['DeletePattern'],
      (variables?: DeletePatternMutationVariables) => fetcher<DeletePatternMutation, DeletePatternMutationVariables>(client, DeletePatternDocument, variables, headers)(),
      options
    );
export const UpdatePatternDocument = `
    mutation UpdatePattern($id: String!, $input: UpdatePatternInput!) {
  updatePattern(id: $id, input: $input) {
    id
    paths {
      id
      name
      status
      extras
    }
    stockOwner {
      id
      name
    }
    extras
    created
    createdBy
    modified
    modifiedBy
    name
    patternType
    status
    stockOwnerId
    patternTypeText
    statusText
  }
}
    `;
export const useUpdatePatternMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdatePatternMutation, TError, UpdatePatternMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdatePatternMutation, TError, UpdatePatternMutationVariables, TContext>(
      ['UpdatePattern'],
      (variables?: UpdatePatternMutationVariables) => fetcher<UpdatePatternMutation, UpdatePatternMutationVariables>(client, UpdatePatternDocument, variables, headers)(),
      options
    );
export const GetPatternIdsDocument = `
    query GetPatternIds($filters: PatternSearchFilters, $orderBy: [PatternOrderByCriterion!], $page: Int!, $itemsPerPage: Int!) {
  patterns(
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
export const useGetPatternIdsQuery = <
      TData = GetPatternIdsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPatternIdsQueryVariables,
      options?: UseQueryOptions<GetPatternIdsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPatternIdsQuery, TError, TData>(
      ['GetPatternIds', variables],
      fetcher<GetPatternIdsQuery, GetPatternIdsQueryVariables>(client, GetPatternIdsDocument, variables, headers),
      options
    );
export const GetAllPatternPathsDocument = `
    query GetAllPatternPaths($filters: PatternPathSearchFilters, $orderBy: [PatternPathOrderByCriterion!], $page: Int!, $itemsPerPage: Int!, $language: String) {
  patternPaths(
    filters: $filters
    orderBy: $orderBy
    page: $page
    itemsPerPage: $itemsPerPage
    language: $language
  ) {
    count
    itemsPerPage
    totalPages
    results {
      id
      extras
      created
      createdBy
      modified
      modifiedBy
      name
      status
      patternId
    }
  }
}
    `;
export const useGetAllPatternPathsQuery = <
      TData = GetAllPatternPathsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAllPatternPathsQueryVariables,
      options?: UseQueryOptions<GetAllPatternPathsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllPatternPathsQuery, TError, TData>(
      ['GetAllPatternPaths', variables],
      fetcher<GetAllPatternPathsQuery, GetAllPatternPathsQueryVariables>(client, GetAllPatternPathsDocument, variables, headers),
      options
    );
export const GetPatternPathByIdDocument = `
    query GetPatternPathById($id: String!, $language: String = "en") {
  patternPath(id: $id, language: $language) {
    id
    extras
    created
    createdBy
    modified
    modifiedBy
    name
    status
    patternId
  }
}
    `;
export const useGetPatternPathByIdQuery = <
      TData = GetPatternPathByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPatternPathByIdQueryVariables,
      options?: UseQueryOptions<GetPatternPathByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPatternPathByIdQuery, TError, TData>(
      ['GetPatternPathById', variables],
      fetcher<GetPatternPathByIdQuery, GetPatternPathByIdQueryVariables>(client, GetPatternPathByIdDocument, variables, headers),
      options
    );
export const CreatePatternPathDocument = `
    mutation CreatePatternPath($input: CreatePatternPathInput!) {
  createPatternPath(input: $input) {
    id
    extras
    created
    createdBy
    modified
    modifiedBy
    name
    status
    patternId
  }
}
    `;
export const useCreatePatternPathMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreatePatternPathMutation, TError, CreatePatternPathMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreatePatternPathMutation, TError, CreatePatternPathMutationVariables, TContext>(
      ['CreatePatternPath'],
      (variables?: CreatePatternPathMutationVariables) => fetcher<CreatePatternPathMutation, CreatePatternPathMutationVariables>(client, CreatePatternPathDocument, variables, headers)(),
      options
    );
export const DeletePatternPathDocument = `
    mutation DeletePatternPath($id: String!) {
  deletePatternPath(id: $id)
}
    `;
export const useDeletePatternPathMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeletePatternPathMutation, TError, DeletePatternPathMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeletePatternPathMutation, TError, DeletePatternPathMutationVariables, TContext>(
      ['DeletePatternPath'],
      (variables?: DeletePatternPathMutationVariables) => fetcher<DeletePatternPathMutation, DeletePatternPathMutationVariables>(client, DeletePatternPathDocument, variables, headers)(),
      options
    );
export const UpdatePatternPathDocument = `
    mutation UpdatePatternPath($id: String!, $input: UpdatePatternPathInput!) {
  updatePatternPath(id: $id, input: $input) {
    id
    extras
    created
    createdBy
    modified
    modifiedBy
    name
    status
    patternId
  }
}
    `;
export const useUpdatePatternPathMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdatePatternPathMutation, TError, UpdatePatternPathMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdatePatternPathMutation, TError, UpdatePatternPathMutationVariables, TContext>(
      ['UpdatePatternPath'],
      (variables?: UpdatePatternPathMutationVariables) => fetcher<UpdatePatternPathMutation, UpdatePatternPathMutationVariables>(client, UpdatePatternPathDocument, variables, headers)(),
      options
    );
export const GetPatternPathLocationsDocument = `
    query GetPatternPathLocations($filters: PatternPathLocationSearchFilters, $orderBy: [PatternPathLocationOrderByCriterion!], $page: Int!, $itemsPerPage: Int!, $language: String) {
  patternPathLocations(
    filters: $filters
    orderBy: $orderBy
    page: $page
    itemsPerPage: $itemsPerPage
    language: $language
  ) {
    count
    totalPages
    page
    itemsPerPage
    results {
      id
      extras
      created
      createdBy
      modified
      modifiedBy
      order
      locationId
      patternPathId
      location {
        id
        name
        position
        column
        level
        aisle
      }
    }
  }
}
    `;
export const useGetPatternPathLocationsQuery = <
      TData = GetPatternPathLocationsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPatternPathLocationsQueryVariables,
      options?: UseQueryOptions<GetPatternPathLocationsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPatternPathLocationsQuery, TError, TData>(
      ['GetPatternPathLocations', variables],
      fetcher<GetPatternPathLocationsQuery, GetPatternPathLocationsQueryVariables>(client, GetPatternPathLocationsDocument, variables, headers),
      options
    );
export const GetAllReturnCodesDocument = `
    query GetAllReturnCodes($filters: ReturnCodeSearchFilters, $orderBy: [ReturnCodeOrderByCriterion!], $page: Int!, $itemsPerPage: Int!) {
  returnCodes(
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
      type
    }
  }
}
    `;
export const useGetAllReturnCodesQuery = <
      TData = GetAllReturnCodesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAllReturnCodesQueryVariables,
      options?: UseQueryOptions<GetAllReturnCodesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllReturnCodesQuery, TError, TData>(
      ['GetAllReturnCodes', variables],
      fetcher<GetAllReturnCodesQuery, GetAllReturnCodesQueryVariables>(client, GetAllReturnCodesDocument, variables, headers),
      options
    );
export const GetReturnCodeByIdDocument = `
    query GetReturnCodeById($id: String!) {
  returnCode(id: $id) {
    id
    name
    type
    description
    created
    createdBy
    modified
    modifiedBy
  }
}
    `;
export const useGetReturnCodeByIdQuery = <
      TData = GetReturnCodeByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetReturnCodeByIdQueryVariables,
      options?: UseQueryOptions<GetReturnCodeByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetReturnCodeByIdQuery, TError, TData>(
      ['GetReturnCodeById', variables],
      fetcher<GetReturnCodeByIdQuery, GetReturnCodeByIdQueryVariables>(client, GetReturnCodeByIdDocument, variables, headers),
      options
    );
export const GetReturnCodeIdsDocument = `
    query GetReturnCodeIds($filters: ReturnCodeSearchFilters, $orderBy: [ReturnCodeOrderByCriterion!], $page: Int!, $itemsPerPage: Int!) {
  returnCodes(
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
      type
    }
  }
}
    `;
export const useGetReturnCodeIdsQuery = <
      TData = GetReturnCodeIdsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetReturnCodeIdsQueryVariables,
      options?: UseQueryOptions<GetReturnCodeIdsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetReturnCodeIdsQuery, TError, TData>(
      ['GetReturnCodeIds', variables],
      fetcher<GetReturnCodeIdsQuery, GetReturnCodeIdsQueryVariables>(client, GetReturnCodeIdsDocument, variables, headers),
      options
    );
export const CreateReturnCodeDocument = `
    mutation CreateReturnCode($input: CreateReturnCodeInput!) {
  createReturnCode(input: $input) {
    id
    name
    type
  }
}
    `;
export const useCreateReturnCodeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateReturnCodeMutation, TError, CreateReturnCodeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateReturnCodeMutation, TError, CreateReturnCodeMutationVariables, TContext>(
      ['CreateReturnCode'],
      (variables?: CreateReturnCodeMutationVariables) => fetcher<CreateReturnCodeMutation, CreateReturnCodeMutationVariables>(client, CreateReturnCodeDocument, variables, headers)(),
      options
    );
export const DeleteReturnCodeDocument = `
    mutation DeleteReturnCode($id: String!) {
  deleteReturnCode(id: $id)
}
    `;
export const useDeleteReturnCodeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteReturnCodeMutation, TError, DeleteReturnCodeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteReturnCodeMutation, TError, DeleteReturnCodeMutationVariables, TContext>(
      ['DeleteReturnCode'],
      (variables?: DeleteReturnCodeMutationVariables) => fetcher<DeleteReturnCodeMutation, DeleteReturnCodeMutationVariables>(client, DeleteReturnCodeDocument, variables, headers)(),
      options
    );
export const UpdateReturnCodeDocument = `
    mutation UpdateReturnCode($id: String!, $input: UpdateReturnCodeInput!) {
  updateReturnCode(id: $id, input: $input) {
    id
    name
    type
  }
}
    `;
export const useUpdateReturnCodeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateReturnCodeMutation, TError, UpdateReturnCodeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateReturnCodeMutation, TError, UpdateReturnCodeMutationVariables, TContext>(
      ['UpdateReturnCode'],
      (variables?: UpdateReturnCodeMutationVariables) => fetcher<UpdateReturnCodeMutation, UpdateReturnCodeMutationVariables>(client, UpdateReturnCodeDocument, variables, headers)(),
      options
    );
export const GetAllStockOwnersDocument = `
    query GetAllStockOwners($orderBy: [StockOwnerOrderByCriterion!], $filters: StockOwnerSearchFilters, $page: Int!, $itemsPerPage: Int!, $language: String) {
  stockOwners(
    orderBy: $orderBy
    filters: $filters
    page: $page
    itemsPerPage: $itemsPerPage
    language: $language
  ) {
    count
    itemsPerPage
    totalPages
    page
    results {
      id
      extras
      created
      createdBy
      modified
      modifiedBy
      name
      contact
      address1
      address2
      address3
      postCode
      city
      country
      countryCode
      phone
      mobile
      email
      senderName
      senderContact
      senderAddress1
      senderAddress2
      senderAddress3
      senderPostCode
      senderCity
      senderCountry
      senderCountryCode
      senderPhone
      senderMobile
      senderEmail
      logoUrl
      awsAccessKeyId
      awsSecretAccessKey
      status
    }
  }
}
    `;
export const useGetAllStockOwnersQuery = <
      TData = GetAllStockOwnersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAllStockOwnersQueryVariables,
      options?: UseQueryOptions<GetAllStockOwnersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllStockOwnersQuery, TError, TData>(
      ['GetAllStockOwners', variables],
      fetcher<GetAllStockOwnersQuery, GetAllStockOwnersQueryVariables>(client, GetAllStockOwnersDocument, variables, headers),
      options
    );
export const GetStockOwnerIdsDocument = `
    query GetStockOwnerIds($filters: StockOwnerSearchFilters, $orderBy: [StockOwnerOrderByCriterion!], $page: Int!, $itemsPerPage: Int!) {
  stockOwners(
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
export const useGetStockOwnerIdsQuery = <
      TData = GetStockOwnerIdsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetStockOwnerIdsQueryVariables,
      options?: UseQueryOptions<GetStockOwnerIdsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetStockOwnerIdsQuery, TError, TData>(
      ['GetStockOwnerIds', variables],
      fetcher<GetStockOwnerIdsQuery, GetStockOwnerIdsQueryVariables>(client, GetStockOwnerIdsDocument, variables, headers),
      options
    );
export const GetMyInfoDocument = `
    query GetMyInfo {
  me {
    __typename
    ... on WarehouseWorker {
      id
      password
      username
      warehouseId
      roleId
      role {
        id
        name
        permissions {
          id
          table
          mode
          roleId
        }
      }
    }
    ... on IntegratorUser {
      id
      password
      email
      integratorId
      roleId
      integrator {
        id
        name
        awsAccessKeyId
        awsSecretAccessKey
      }
      role {
        id
        name
        permissions {
          id
          table
          mode
          roleId
        }
      }
      isAdmin
    }
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