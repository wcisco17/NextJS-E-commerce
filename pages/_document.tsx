import Document, { Head, Main, NextScript } from "next/document";
import * as React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {this.props.styles}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <title>Dream Tree</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
