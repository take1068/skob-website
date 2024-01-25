/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCorporation = /* GraphQL */ `query GetCorporation($corpId: Int!) {
  getCorporation(corpId: $corpId) {
    corpId
    corpName
    alcohlCheckDataList {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCorporationQueryVariables,
  APITypes.GetCorporationQuery
>;
export const listCorporations = /* GraphQL */ `query ListCorporations(
  $corpId: Int
  $filter: ModelCorporationFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCorporations(
    corpId: $corpId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      corpId
      corpName
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCorporationsQueryVariables,
  APITypes.ListCorporationsQuery
>;
export const getAlcohlCheckData = /* GraphQL */ `query GetAlcohlCheckData($id: ID!) {
  getAlcohlCheckData(id: $id) {
    id
    userId
    corpId
    corp {
      corpId
      corpName
      createdAt
      updatedAt
      owner
      __typename
    }
    categoryId
    data
    photographer
    description
    targetDate
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAlcohlCheckDataQueryVariables,
  APITypes.GetAlcohlCheckDataQuery
>;
export const listAlcohlCheckData = /* GraphQL */ `query ListAlcohlCheckData(
  $filter: ModelAlcohlCheckDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listAlcohlCheckData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      corpId
      categoryId
      data
      photographer
      description
      targetDate
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAlcohlCheckDataQueryVariables,
  APITypes.ListAlcohlCheckDataQuery
>;
export const alcohlCheckDataByCorpIdAndTargetDate = /* GraphQL */ `query AlcohlCheckDataByCorpIdAndTargetDate(
  $corpId: Int!
  $targetDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAlcohlCheckDataFilterInput
  $limit: Int
  $nextToken: String
) {
  alcohlCheckDataByCorpIdAndTargetDate(
    corpId: $corpId
    targetDate: $targetDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      corpId
      categoryId
      data
      photographer
      description
      targetDate
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AlcohlCheckDataByCorpIdAndTargetDateQueryVariables,
  APITypes.AlcohlCheckDataByCorpIdAndTargetDateQuery
>;
