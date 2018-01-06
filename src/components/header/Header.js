import React from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" className="fixed-top">
          <Container>
            <NavbarBrand href="/"><i className="fa fa-database"></i> CloudDB</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/create-database">Create database</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/import-database">Import database</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/djavorszky/ddn/issues" title="Report bug on GitHub"><i className="fa fa-bug" aria-hidden="true"></i> Bug report</NavLink>
                  </NavItem>
                </Nav>
                <span className="navbar-text">
                  daniel.javorszky@liferay.com (<a href="/logout">logout</a>)
                </span>
              </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
