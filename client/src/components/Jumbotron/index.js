import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle} from "mdbreact";
import "./style.css"

const JumbotronPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-3 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="mt-5 font-bold bFont customTitle" style={{fontSize: "40px"}}><strong>Book Nook</strong></MDBCardTitle>
                <p className="mb-5">Powered by Google Books</p>
                <h5 className="mx-5 mb-5">Search for and Saved Books of Interest.</h5>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumbotronPage;