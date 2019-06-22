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
              {props.saved && <div><MDBBtn size="sm" className="p-2 rounded-pill" ><i class="fas fa-bookmark" id={props.id} onClick={(e) => {props.bookUnsave(e)}}></i></MDBBtn></div>}
              {!props.saved && <div><MDBBtn size="sm" className="p-2 rounded-pill" ><i class="far fa-bookmark" id={props.id} onClick={(e) => {props.bookSave(e)}}></i></MDBBtn></div>}
          </div>    
            <MDBCardText>
                {props.author}
            </MDBCardText>
            <MDBRow>
            <MDBCol className="col-12 col-md-2">
                <MDBCardImage className="img-fluid" src={props.image} waves />
            </MDBCol>
            <MDBCol className="col-12 col-md-10">
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