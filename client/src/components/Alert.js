import React from "react";
import { MDBContainer, MDBAlert } from 'mdbreact';

const AlertPage = (props) => {
  return (
    <MDBContainer style={{maxWidth: "400px"}}>
      <MDBAlert color="dark" dismiss>
        Saved: <a href={props.link} target="_blank" className="alert-link"><strong>{props.title}</strong></a>.
      </MDBAlert>
    </MDBContainer>
  );
};

export default AlertPage;
