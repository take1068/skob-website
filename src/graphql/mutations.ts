/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCorporation = /* GraphQL */ `mutation CreateCorporation(
  $input: CreateCorporationInput!
  $condition: ModelCorporationConditionInput
) {
  createCorporation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCorporationMutationVariables,
  APITypes.CreateCorporationMutation
>;
export const updateCorporation = /* GraphQL */ `mutation UpdateCorporation(
  $input: UpdateCorporationInput!
  $condition: ModelCorporationConditionInput
) {
  updateCorporation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCorporationMutationVariables,
  APITypes.UpdateCorporationMutation
>;
export const deleteCorporation = /* GraphQL */ `mutation DeleteCorporation(
  $input: DeleteCorporationInput!
  $condition: ModelCorporationConditionInput
) {
  deleteCorporation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCorporationMutationVariables,
  APITypes.DeleteCorporationMutation
>;
export const createAlcohlCheckData = /* GraphQL */ `mutation CreateAlcohlCheckData(
  $input: CreateAlcohlCheckDataInput!
  $condition: ModelAlcohlCheckDataConditionInput
) {
  createAlcohlCheckData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAlcohlCheckDataMutationVariables,
  APITypes.CreateAlcohlCheckDataMutation
>;
export const updateAlcohlCheckData = /* GraphQL */ `mutation UpdateAlcohlCheckData(
  $input: UpdateAlcohlCheckDataInput!
  $condition: ModelAlcohlCheckDataConditionInput
) {
  updateAlcohlCheckData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAlcohlCheckDataMutationVariables,
  APITypes.UpdateAlcohlCheckDataMutation
>;
export const deleteAlcohlCheckData = /* GraphQL */ `mutation DeleteAlcohlCheckData(
  $input: DeleteAlcohlCheckDataInput!
  $condition: ModelAlcohlCheckDataConditionInput
) {
  deleteAlcohlCheckData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAlcohlCheckDataMutationVariables,
  APITypes.DeleteAlcohlCheckDataMutation
>;
