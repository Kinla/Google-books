import React from "react";
import { MDBCol, MDBBtn } from "mdbreact";

const SearchForm = (props) => {
  return (
    <MDBCol md="12">        
      <div className="md-form mr-auto mb-4">
        <input className="form-control mr-sm-2" type="text" placeholder="Book title" aria-label="Search Book" value={props.title} onChange={props.onChange}/>
        <div className="text-right">
            <MDBBtn gradient="aqua" size="sm" type="submit" className="mr-auto white-text rounded-pill" onClick={(e)=>{props.onClick(e)}}>
            Search
            </MDBBtn>
        </div>
      </div>
    </MDBCol>
  );
}

export default SearchForm;