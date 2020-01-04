import { gql } from "apollo-boost";
import * as checkout from "./checkout.services";
// import { ProductsQueryVariables } from '../models';
import * as products from "./products.services";

const SERVICES_QUERY = gql`
  {
    shop {
      name
      primaryDomain {
        url
        host
      }
    }
  }
`;

export default { SERVICES_QUERY, products, checkout };
