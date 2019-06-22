import React from "react";
import { MDBContainer, MDBAlert, MDBRow, MDBCol } from 'mdbreact';
import "./style.css"

const AlertPage = (props) => {
  return (
      <MDBAlert color="dark" className="displayBox">
        <MDBRow>
            <MDBCol left size="11">
                Saved: <a href={props.link} target="_blank" className="alert-link"><strong>{props.title}</strong></a>.
            </MDBCol>
            <MDBCol right size="1" onClick={(e) => {props.dismiss(e)}}>
                <i class="fas fa-times"></i>
            </MDBCol>
        </MDBRow>
      </MDBAlert>
  );
};

export default AlertPage;
