import React, { Component } from "react";
import { MDBCard, MDBCardBody,  MDBCardTitle, MDBContainer, MDBRow } from 'mdbreact';
import Jumbo from "../components/Jumbotron/index"
import Form from "../components/Form"
import Card from "../components/Card"
import Alert from "../components/Alert"
import API from "../util/API"
import io from "socket.io-client"

const socket = io()

class Search extends Component {

  state = {
    bookTitle: "",
    results: [],
    savedTitle: "",
    savedLink: ""
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
    let id = e.target.id
    let newResults = this.state.results.map(el => {
      if (el.id === id){
        el.saved = true
        API.saveBook(el)
          .then(res => console.log(`This is added to libary: ${res.data}`))
        socket.emit("saveBook", el)
        }
      return el
    })
    this.setState({results: newResults})
  }

  handleBookUnsave = (e) => {
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
  }

  componentDidMount() {
    socket.on("broadcast", data => {
      this.setState({
        savedTitle: data.title, 
        savedLink: data.link,
      })
      alert(`${this.state.savedTitle}. ${this.state.savedLink}`)
    })
  }

  render() {
    return (
    <div>
      <Alert title={this.state.savedTitle} link ={this.state.savedLink} />
      <Jumbo></Jumbo>
      <MDBContainer className="pb-4">
        <MDBCard className="mb-5">
            <MDBCardBody>
            <MDBCardTitle className="h5 cyan-text"><strong>Search</strong></MDBCardTitle>
                <MDBContainer>
                    <Form title={this.state.bookTitle} onChange={this.handleOnChange} onClick={this.handleFormSubmit}/>
                </MDBContainer>
            </MDBCardBody>
        </MDBCard>
        <MDBCard>
            <MDBCardBody>
                <MDBCardTitle className="h5 mb-3 cyan-text"><strong>Results</strong></MDBCardTitle>
                <MDBContainer>
                    <MDBRow>
                        {this.state.results.length === 0 && <p>Book list empty. Please submit a new query.</p>}
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