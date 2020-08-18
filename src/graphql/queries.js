/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNewsletter = /* GraphQL */ `
  query GetNewsletter($id: ID!) {
    getNewsletter(id: $id) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;
export const listNewsletters = /* GraphQL */ `
  query ListNewsletters(
    $filter: ModelNewsletterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewsletters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
