import classNames from "classnames";
import * as React from "react";
import Navigation from "./Navigation";

interface IProps {
  stickyTop?: boolean;
}

class Layout extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { children, stickyTop } = this.props;

    const classes = classNames(
      "main-navbar",
      "bg-white",
      stickyTop && "sticky-top"
    );
    return (
      <div className={classes}>
        <Navigation {...this.props} />
        <div className="container">{children}</div>
      </div>
    );
  }
}

export default Layout;
