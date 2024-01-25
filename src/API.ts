/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCorporationInput = {
  corpId: number,
  corpName: string,
};

export type ModelCorporationConditionInput = {
  corpName?: ModelStringInput | null,
  and?: Array< ModelCorporationConditionInput | null > | null,
  or?: Array< ModelCorporationConditionInput | null > | null,
  not?: ModelCorporationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Corporation = {
  __typename: "Corporation",
  corpId: number,
  corpName: string,
  alcohlCheckDataList?: ModelAlcohlCheckDataConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelAlcohlCheckDataConnection = {
  __typename: "ModelAlcohlCheckDataConnection",
  items:  Array<AlcohlCheckData | null >,
  nextToken?: string | null,
};

export type AlcohlCheckData = {
  __typename: "AlcohlCheckData",
  id: string,
  userId: string,
  corpId: number,
  corp?: Corporation | null,
  categoryId: number,
  data?: string | null,
  photographer: string,
  description?: string | null,
  targetDate: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateCorporationInput = {
  corpId: number,
  corpName?: string | null,
};

export type DeleteCorporationInput = {
  corpId: number,
};

export type CreateAlcohlCheckDataInput = {
  id?: string | null,
  userId: string,
  corpId: number,
  categoryId: number,
  data?: string | null,
  photographer: string,
  description?: string | null,
  targetDate: string,
};

export type ModelAlcohlCheckDataConditionInput = {
  userId?: ModelStringInput | null,
  corpId?: ModelIntInput | null,
  categoryId?: ModelIntInput | null,
  data?: ModelStringInput | null,
  photographer?: ModelStringInput | null,
  description?: ModelStringInput | null,
  targetDate?: ModelStringInput | null,
  and?: Array< ModelAlcohlCheckDataConditionInput | null > | null,
  or?: Array< ModelAlcohlCheckDataConditionInput | null > | null,
  not?: ModelAlcohlCheckDataConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateAlcohlCheckDataInput = {
  id: string,
  userId?: string | null,
  corpId?: number | null,
  categoryId?: number | null,
  data?: string | null,
  photographer?: string | null,
  description?: string | null,
  targetDate?: string | null,
};

export type DeleteAlcohlCheckDataInput = {
  id: string,
};

export type ModelCorporationFilterInput = {
  corpId?: ModelIntInput | null,
  corpName?: ModelStringInput | null,
  and?: Array< ModelCorporationFilterInput | null > | null,
  or?: Array< ModelCorporationFilterInput | null > | null,
  not?: ModelCorporationFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCorporationConnection = {
  __typename: "ModelCorporationConnection",
  items:  Array<Corporation | null >,
  nextToken?: string | null,
};

export type ModelAlcohlCheckDataFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  corpId?: ModelIntInput | null,
  categoryId?: ModelIntInput | null,
  data?: ModelStringInput | null,
  photographer?: ModelStringInput | null,
  description?: ModelStringInput | null,
  targetDate?: ModelStringInput | null,
  and?: Array< ModelAlcohlCheckDataFilterInput | null > | null,
  or?: Array< ModelAlcohlCheckDataFilterInput | null > | null,
  not?: ModelAlcohlCheckDataFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubscriptionCorporationFilterInput = {
  corpId?: ModelSubscriptionIntInput | null,
  corpName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCorporationFilterInput | null > | null,
  or?: Array< ModelSubscriptionCorporationFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAlcohlCheckDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionStringInput | null,
  corpId?: ModelSubscriptionIntInput | null,
  categoryId?: ModelSubscriptionIntInput | null,
  data?: ModelSubscriptionStringInput | null,
  photographer?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  targetDate?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAlcohlCheckDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionAlcohlCheckDataFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateCorporationMutationVariables = {
  input: CreateCorporationInput,
  condition?: ModelCorporationConditionInput | null,
};

export type CreateCorporationMutation = {
  createCorporation?:  {
    __typename: "Corporation",
    corpId: number,
    corpName: string,
    alcohlCheckDataList?:  {
      __typename: "ModelAlcohlCheckDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCorporationMutationVariables = {
  input: UpdateCorporationInput,
  condition?: ModelCorporationConditionInput | null,
};

export type UpdateCorporationMutation = {
  updateCorporation?:  {
    __typename: "Corporation",
    corpId: number,
    corpName: string,
    alcohlCheckDataList?:  {
      __typename: "ModelAlcohlCheckDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCorporationMutationVariables = {
  input: DeleteCorporationInput,
  condition?: ModelCorporationConditionInput | null,
};

export type DeleteCorporationMutation = {
  deleteCorporation?:  {
    __typename: "Corporation",
    corpId: number,
    corpName: string,
    alcohlCheckDataList?:  {
      __typename: "ModelAlcohlCheckDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateAlcohlCheckDataMutationVariables = {
  input: CreateAlcohlCheckDataInput,
  condition?: ModelAlcohlCheckDataConditionInput | null,
};

export type CreateAlcohlCheckDataMutation = {
  createAlcohlCheckData?:  {
    __typename: "AlcohlCheckData",
    id: string,
    userId: string,
    corpId: number,
    corp?:  {
      __typename: "Corporation",
      corpId: number,
      corpName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    categoryId: number,
    data?: string | null,
    photographer: string,
    description?: string | null,
    targetDate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateAlcohlCheckDataMutationVariables = {
  input: UpdateAlcohlCheckDataInput,
  condition?: ModelAlcohlCheckDataConditionInput | null,
};

export type UpdateAlcohlCheckDataMutation = {
  updateAlcohlCheckData?:  {
    __typename: "AlcohlCheckData",
    id: string,
    userId: string,
    corpId: number,
    corp?:  {
      __typename: "Corporation",
      corpId: number,
      corpName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    categoryId: number,
    data?: string | null,
    photographer: string,
    description?: string | null,
    targetDate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteAlcohlCheckDataMutationVariables = {
  input: DeleteAlcohlCheckDataInput,
  condition?: ModelAlcohlCheckDataConditionInput | null,
};

export type DeleteAlcohlCheckDataMutation = {
  deleteAlcohlCheckData?:  {
    __typename: "AlcohlCheckData",
    id: string,
    userId: string,
    corpId: number,
    corp?:  {
      __typename: "Corporation",
      corpId: number,
      corpName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    categoryId: number,
    data?: string | null,
    photographer: string,
    description?: string | null,
    targetDate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetCorporationQueryVariables = {
  corpId: number,
};

export type GetCorporationQuery = {
  getCorporation?:  {
    __typename: "Corporation",
    corpId: number,
    corpName: string,
    alcohlCheckDataList?:  {
      __typename: "ModelAlcohlCheckDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCorporationsQueryVariables = {
  corpId?: number | null,
  filter?: ModelCorporationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCorporationsQuery = {
  listCorporations?:  {
    __typename: "ModelCorporationConnection",
    items:  Array< {
      __typename: "Corporation",
      corpId: number,
      corpName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAlcohlCheckDataQueryVariables = {
  id: string,
};

export type GetAlcohlCheckDataQuery = {
  getAlcohlCheckData?:  {
    __typename: "AlcohlCheckData",
    id: string,
    userId: string,
    corpId: number,
    corp?:  {
      __typename: "Corporation",
      corpId: number,
      corpName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    categoryId: number,
    data?: string | null,
    photographer: string,
    description?: string | null,
    targetDate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAlcohlCheckDataQueryVariables = {
  filter?: ModelAlcohlCheckDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlcohlCheckDataQuery = {
  listAlcohlCheckData?:  {
    __typename: "ModelAlcohlCheckDataConnection",
    items:  Array< {
      __typename: "AlcohlCheckData",
      id: string,
      userId: string,
      corpId: number,
      categoryId: number,
      data?: string | null,
      photographer: string,
      description?: string | null,
      targetDate: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AlcohlCheckDataByCorpIdAndTargetDateQueryVariables = {
  corpId: number,
  targetDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAlcohlCheckDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AlcohlCheckDataByCorpIdAndTargetDateQuery = {
  alcohlCheckDataByCorpIdAndTargetDate?:  {
    __typename: "ModelAlcohlCheckDataConnection",
    items:  Array< {
      __typename: "AlcohlCheckData",
      id: string,
      userId: string,
      corpId: number,
      categoryId: number,
      data?: string | null,
      photographer: string,
      description?: string | null,
      targetDate: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCorporationSubscriptionVariables = {
  filter?: ModelSubscriptionCorporationFilterInput | null,
  owner?: string | null,
};

export type OnCreateCorporationSubscription = {
  onCreateCorporation?:  {
    __typename: "Corporation",
    corpId: number,
    corpName: string,
    alcohlCheckDataList?:  {
      __typename: "ModelAlcohlCheckDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCorporationSubscriptionVariables = {
  filter?: ModelSubscriptionCorporationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCorporationSubscription = {
  onUpdateCorporation?:  {
    __typename: "Corporation",
    corpId: number,
    corpName: string,
    alcohlCheckDataList?:  {
      __typename: "ModelAlcohlCheckDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCorporationSubscriptionVariables = {
  filter?: ModelSubscriptionCorporationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCorporationSubscription = {
  onDeleteCorporation?:  {
    __typename: "Corporation",
    corpId: number,
    corpName: string,
    alcohlCheckDataList?:  {
      __typename: "ModelAlcohlCheckDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateAlcohlCheckDataSubscriptionVariables = {
  filter?: ModelSubscriptionAlcohlCheckDataFilterInput | null,
  owner?: string | null,
};

export type OnCreateAlcohlCheckDataSubscription = {
  onCreateAlcohlCheckData?:  {
    __typename: "AlcohlCheckData",
    id: string,
    userId: string,
    corpId: number,
    corp?:  {
      __typename: "Corporation",
      corpId: number,
      corpName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    categoryId: number,
    data?: string | null,
    photographer: string,
    description?: string | null,
    targetDate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateAlcohlCheckDataSubscriptionVariables = {
  filter?: ModelSubscriptionAlcohlCheckDataFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAlcohlCheckDataSubscription = {
  onUpdateAlcohlCheckData?:  {
    __typename: "AlcohlCheckData",
    id: string,
    userId: string,
    corpId: number,
    corp?:  {
      __typename: "Corporation",
      corpId: number,
      corpName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    categoryId: number,
    data?: string | null,
    photographer: string,
    description?: string | null,
    targetDate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteAlcohlCheckDataSubscriptionVariables = {
  filter?: ModelSubscriptionAlcohlCheckDataFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAlcohlCheckDataSubscription = {
  onDeleteAlcohlCheckData?:  {
    __typename: "AlcohlCheckData",
    id: string,
    userId: string,
    corpId: number,
    corp?:  {
      __typename: "Corporation",
      corpId: number,
      corpName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    categoryId: number,
    data?: string | null,
    photographer: string,
    description?: string | null,
    targetDate: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
