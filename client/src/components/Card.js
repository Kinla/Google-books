import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

const Card = (props) => {

  const onClickHandler = (e) => {
    if(props.saved){
      props.bookUnsave(e)
    }else{
      props.bookSave(e)
    }
  }

  return (
    <MDBCol className="col-12">
      <MDBCard className="mb-3">
        <MDBCardBody>
          <div className="d-flex flex-row">
            <MDBCardTitle className="flex-grow-1">{props.title}</MDBCardTitle>
            <div>
              <MDBBtn size="sm" className="p-2 rounded-pill" href={props.link} target="_blank"><i className="fas fa-book-open"></i></MDBBtn>
            </div>
            {/* saved button */}
            <div>
              <MDBBtn 
                onClick={(e) => {onClickHandler(e)}} 
                id={props.id} 
                size="sm" 
                className="p-2 rounded-pill" >
                  <i className={props.saved ? "fas fa-bookmark" : "far fa-bookmark"} id={props.id}></i>
              </MDBBtn>
            </div> 
             
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