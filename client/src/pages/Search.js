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

    API.search(bookTitle)
      .then(res => {
        let results = []
        res.data.items.forEach(el => {
          let book = {}
          let entry = el.volumeInfo
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
          book.saved = false
          for(var key in book){
            book[key] = (book[key] !== undefined) ? book[key] : 'Not available';
        }
          results.push(book)
      });
        this.setState({results: results})
      })
      .catch(err => console.log(err))

    this.setState({bookTitle: ""})
  }
  
  handleBookSave = (e) => {
    e.preventDefault()
    let id = e.target.id
    let newResults = this.state.results.map(el => {
      if (el.id === id){
        el.saved = true
        API.saveBook(el)
          .then(res => console.log(`This is added to libary: ${res.data}`))
      }
      return el
    })
    this.setState({results: newResults})
    console.log('saved')
  }

  handleBookUnsave = (e) => {
    e.preventDefault()
    let id = e.target.id
    let newResults = this.state.results.map(el => {
      if (el.id === id){
        el.saved = false
        API.unsaveBook(id)
          .then(res => console.log(`This is removed from libary: ${res.data}`))
      }
      return el
    })
    this.setState({results: newResults})
    console.log('unsaved')
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
                        {this.state.results.map(el => <Card key={el.id} id={el.id} title={el.title} description={el.description} author={el.author} image={el.image} link={el.link} saved={el.saved} bookSave={this.handleBookSave} bookUnsave={this.handleBookUnsave}/>)}
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