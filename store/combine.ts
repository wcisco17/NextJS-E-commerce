import { combineReducers, Reducer } from "redux";
import { Counter, counterReducer, ICounterAction } from "./counter";
import { allProductsReducer, ProductsAction, ProductsState } from "./products";

export interface StoreState {
  counter: Counter;
  products: ProductsState;
}

export const reducer = combineReducers<StoreState>({
  counter: counterReducer as Reducer<Counter, ICounterAction>,
  products: allProductsReducer as Reducer<ProductsState, ProductsAction>
});
