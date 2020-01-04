import "bootstrap/dist/css/bootstrap.min.css";
// import isServer from 'detect-node';
import App from "next/app";
import React from "react";
import "shards-ui/dist/css/shards.min.css";
import Layout from "../components/Layout";
import withRedux from "../hocs/withRedux";

class MyApp extends App {
  public static async getInitialProps({ Component, ctx }: any) {
    // const { req, res, store } = ctx;
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    // if (isServer) await store.dispatch(services.checkout.get(req, res));

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout {...pageProps}>
        <Component {...this.props} />
      </Layout>
    );
  }
}
export default withRedux(MyApp);
