import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle} from "mdbreact";

const JumbotronPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-3 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive m-5 font-bold">Google Books Search <span><h5>v. React</h5></span></MDBCardTitle>
                <h4 className="mx-5 mb-5">Search for and Saved Books of Interest</h4>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumbotronPage;