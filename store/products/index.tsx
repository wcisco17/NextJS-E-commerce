import { ApolloError } from "apollo-boost";
import { useQuery } from "react-apollo";
import { ProductConnection } from "../../models/shopify.model";
import { PRODUCTS_FRAGMENT } from "../../services/products.services";

interface ProductVariables {
  products: ProductConnection;
}

export type ProductsAction =
  | { type: "GET_REQUEST" }
  | { type: "GET_FAILURE"; payload: ApolloError | null }
  | { type: "GET_SUCCESS_DATA"; payload: ProductVariables | null };

export interface ProductsState {
  loading: boolean;
  error?: ApolloError | null;
  data?: ProductVariables | null;
}

export const productsState: ProductsState = {
  loading: true,
  error: null,
  data: null
};

export const allProductsReducer = (
  state = productsState,
  action: ProductsAction
) => {
  switch (action.type) {
    case "GET_REQUEST":
      return {
        ...state,
        loading: state.loading
      };

    case "GET_FAILURE":
      return {
        ...state,
        loading: !state.loading,
        error: action.payload
      };

    case "GET_SUCCESS_DATA":
      return {
        ...state,
        loading: !state.loading,
        data: action.payload
      };
    default:
      return {
        ...state,
        ...productsState
      };
  }
};

export const getRequest = (): ProductsAction => ({
  type: "GET_REQUEST"
});

export const getFailure = (error: ApolloError): ProductsAction => ({
  type: "GET_FAILURE",
  payload: error
});

export const getSuccessData = (data: ProductVariables): ProductsAction => ({
  type: "GET_SUCCESS_DATA",
  payload: data
});

export const get = async (dispatch: any) => {
  // const dispatch = useDispatch();

  const { data, loading, error } = useQuery(PRODUCTS_FRAGMENT);
  if (loading) return dispatch(getRequest());

  if (error) return dispatch(getFailure(error));
  if (!data) return console.log("No data..");
  else return dispatch(getSuccessData(data));
};
