import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

const Card = (props) => {
  return (
    <MDBCol className="col-12">
      <MDBCard className="mb-3">
        <MDBCardBody>
          <div className="d-flex flex-row">
            <MDBCardTitle className="flex-grow-1">{props.title}</MDBCardTitle>
            <div>
              <MDBBtn size="sm" className="p-2 rounded-pill" href={props.link} target="_blank"><i class="fas fa-book-open"></i></MDBBtn>
            </div>
            <div>
              <MDBBtn size="sm" className="p-2 rounded-pill" href="#" id={props.id}><i class="fas fa-bookmark"></i></MDBBtn>
            </div>
          </div>    
            <MDBCardText>
                {props.author}
            </MDBCardText>
            <MDBRow>
            <MDBCol className="col-12 col-md-2">
                <MDBCardImage className="img-fluid" src={props.image} waves />
            </MDBCol>
            <MDBCol className="col-12 col-md-9">
                <MDBCardText>
                  {props.description}
                </MDBCardText>
            </MDBCol>
            </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Card;