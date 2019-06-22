import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import "./style.css"

class NavbarPage extends Component {
state = {
  isOpen: false,
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

toggleActive = (e) => {
  this.forceUpdate()
}

render() {
  return (
      <MDBNavbar color="blue" dark expand="sm">
        <MDBNavbarBrand>
          <strong className="white-text bFont">B &#8226; Nook</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem id="home" className={window.location.pathname === "/" && "active"} onClick={this.toggleActive}>
              <MDBNavLink to="/" >Search</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem id="nook" className={window.location.pathname === "/saved" && "active"} onClick={this.toggleActive}>
              <MDBNavLink to="/saved" >Nook</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;