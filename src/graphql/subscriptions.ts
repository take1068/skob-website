/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCorporation = /* GraphQL */ `subscription OnCreateCorporation(
  $filter: ModelSubscriptionCorporationFilterInput
  $owner: String
) {
  onCreateCorporation(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCorporationSubscriptionVariables,
  APITypes.OnCreateCorporationSubscription
>;
export const onUpdateCorporation = /* GraphQL */ `subscription OnUpdateCorporation(
  $filter: ModelSubscriptionCorporationFilterInput
  $owner: String
) {
  onUpdateCorporation(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCorporationSubscriptionVariables,
  APITypes.OnUpdateCorporationSubscription
>;
export const onDeleteCorporation = /* GraphQL */ `subscription OnDeleteCorporation(
  $filter: ModelSubscriptionCorporationFilterInput
  $owner: String
) {
  onDeleteCorporation(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCorporationSubscriptionVariables,
  APITypes.OnDeleteCorporationSubscription
>;
export const onCreateAlcohlCheckData = /* GraphQL */ `subscription OnCreateAlcohlCheckData(
  $filter: ModelSubscriptionAlcohlCheckDataFilterInput
  $owner: String
) {
  onCreateAlcohlCheckData(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAlcohlCheckDataSubscriptionVariables,
  APITypes.OnCreateAlcohlCheckDataSubscription
>;
export const onUpdateAlcohlCheckData = /* GraphQL */ `subscription OnUpdateAlcohlCheckData(
  $filter: ModelSubscriptionAlcohlCheckDataFilterInput
  $owner: String
) {
  onUpdateAlcohlCheckData(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAlcohlCheckDataSubscriptionVariables,
  APITypes.OnUpdateAlcohlCheckDataSubscription
>;
export const onDeleteAlcohlCheckData = /* GraphQL */ `subscription OnDeleteAlcohlCheckData(
  $filter: ModelSubscriptionAlcohlCheckDataFilterInput
  $owner: String
) {
  onDeleteAlcohlCheckData(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAlcohlCheckDataSubscriptionVariables,
  APITypes.OnDeleteAlcohlCheckDataSubscription
>;
