import isServer from "detect-node";
import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import { shopify } from "../services/api.services";
import store from "../store";

interface Props {
  initialState: object;
}

function withRedux(App: any) {
  return class AppWithRedux extends Component<Props> {
    public static async getInitialProps(appContext: any) {
      let initialProps = {};

      if (isServer) {
        return store;
      }

      appContext.ctx.store = store;

      if (typeof App.getInitialProps === "function") {
        initialProps = await App.getInitialProps(appContext);
      }

      return {
        ...initialProps,
        initialState: store.getState()
      };
    }

    public constructor(props: Props) {
      super(props);
      store;
    }

    public render() {
      return (
        <Provider store={store}>
          <ApolloProvider client={shopify}>
            <App {...this.props} store={store} />
          </ApolloProvider>
        </Provider>
      );
    }
  };
}

export default withRedux;
