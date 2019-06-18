import React, { Component } from "react";
import { MDBCard, MDBCardBody,  MDBCardTitle, MDBContainer, MDBRow } from 'mdbreact';
import Jumbo from "../components/Jumbotron"
import Form from "../components/Form"
import Card from "../components/Card"
import API from "../util/API"

class Search extends Component {

  state = {
    bookTitle: "",
    results: []
  }

  handleOnChange = (event) => {
    const {value} = event.target
    this.setState({bookTitle: value})
  }
  
  handleFormSubmit = (event) => {
    event.preventDefault()
    const bookTitle = this.state.bookTitle.split(" ").join("+")
    console.log(bookTitle)

    API.search(bookTitle)
      .then(res => {
        let results = []
        res.data.items.forEach(el => {
          let book = {}
          let entry = el.volumeInfo
          console.log(el)
          book.id = el.id
          book.title = entry.title
          book.description = entry.description
          book.image = entry.imageLinks.thumbnail
          book.link = entry.infoLink
          if (typeof(entry.authors) === "object"){
            book.author = entry.authors.join(", ")
          } else {
            book.author = entry.authors
          }
          for(var key in book){
            book[key] = (book[key] !== undefined) ? book[key] : '';
        }
          results.push(book)
          console.log(results)
      });
        this.setState({results: results})
      })
      .catch(err => console.log(err))

    this.setState({bookTitle: ""})
  }
      
  render() {
    return (
    <div>
      <Jumbo></Jumbo>
      <MDBContainer className="pb-4">
        <MDBCard className="mb-5">
            <MDBCardBody>
            <MDBCardTitle className="h5">Search</MDBCardTitle>
                <MDBContainer>
                    <Form title={this.state.bookTitle} onChange={this.handleOnChange} onClick={this.handleFormSubmit}/>
                </MDBContainer>
            </MDBCardBody>
        </MDBCard>
        <MDBCard>
            <MDBCardBody>
                <MDBCardTitle className="h5 mb-3">Results</MDBCardTitle>
                <MDBContainer>
                    <MDBRow>
                        {this.state.results.map(el => <Card key={el.id} id={el.id} title={el.title} description={el.description} author={el.author} image={el.image} link={el.link}/>)}
                    </MDBRow>
                </MDBContainer>
            </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>    
    );
    }
}
    
export default Search;