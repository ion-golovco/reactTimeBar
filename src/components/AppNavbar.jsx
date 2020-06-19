import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  Container,
  NavItem,
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <div>
        <Navbar color="secondary" dark expand="sm">
          <Container>
            <NavbarBrand>Time progress bar :)</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/ion-golovco">
                    Github
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
}

export default AppNavbar;
