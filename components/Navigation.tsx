import * as React from "react";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "shards-react";

type State = {
  dropdownOpen: boolean;
  collapseOpen: boolean;
};

export default class Navigation extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown = () => {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  };

  toggleNavbar = () => {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  };

  render() {
    return (
      <Container>
        <Navbar
          style={{ borderRadius: 5, marginTop: 25 }}
          type="dark"
          theme="primary"
          expand="md"
        >
          <NavbarBrand href="#">Shards React</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink active href="#">
                  Products
                </NavLink>
              </NavItem>
            </Nav>

            <Nav navbar className="ml-auto"></Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}
