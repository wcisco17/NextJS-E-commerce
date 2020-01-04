import { gql } from "apollo-boost";

export const PRODUCTS_FRAGMENT = gql`
  {
    products(first: 12) {
      edges {
        node {
          title
          handle
          description
          createdAt
          images(first: 1) {
            edges {
              node {
                transformedSrc
                altText
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

export const PRODUCTS_QUERY = gql`
  ${PRODUCTS_FRAGMENT}
  query products(
    $cursor: String
    $query: String!
    $sortKey: ProductSortKeys!
    $reverse: Boolean!
  ) {
    products(
      first: 12
      after: $cursor
      query: $query
      sortKey: $sortKey
      reverse: $reverse
    ) {
      ...products
    }
  }
`;
