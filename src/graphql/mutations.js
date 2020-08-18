/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewsletter = /* GraphQL */ `
  mutation CreateNewsletter(
    $input: CreateNewsletterInput!
    $condition: ModelNewsletterConditionInput
  ) {
    createNewsletter(input: $input, condition: $condition) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateNewsletter = /* GraphQL */ `
  mutation UpdateNewsletter(
    $input: UpdateNewsletterInput!
    $condition: ModelNewsletterConditionInput
  ) {
    updateNewsletter(input: $input, condition: $condition) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteNewsletter = /* GraphQL */ `
  mutation DeleteNewsletter(
    $input: DeleteNewsletterInput!
    $condition: ModelNewsletterConditionInput
  ) {
    deleteNewsletter(input: $input, condition: $condition) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;
