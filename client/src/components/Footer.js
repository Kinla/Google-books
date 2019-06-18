import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="footer-copyright text-center py-3 font-small pt-4 mt-4">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/Kinla"><strong>Sharon Chien</strong></a>
        </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;