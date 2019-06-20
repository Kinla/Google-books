import React, { Component } from "react";
import { MDBCard, MDBCardBody,  MDBCardTitle, MDBContainer, MDBRow } from 'mdbreact';
import Card from "../components/Card"
import API from "../util/API"

class Search extends Component {

  state = {
    library: []
  }

  componentDidMount () {
    this.loadLibrary()
  }
  
  loadLibrary = () => {
    API.library()
    .then(res => {
        this.setState({library: res.data})
    })
    .catch(err => console.log(err))
}

  handleBookSave = (e) => {
    e.preventDefault()
    let id = e.target.id
    let newLibrary = this.state.library.map(el => {
      if (el.id === id){
        el.saved = true
        API.saveBook(el)
        .then(res => console.log(`This is added to libary: ${res.data}`))
      }
      return el
    })
    this.setState({library: newLibrary})
    console.log('saved')
  }

  handleBookUnsave = (e) => {
    e.preventDefault()
    let id = e.target.id
    let newLibrary = this.state.library.map(el => {
      if (el.id === id){
        el.saved = false
      }
      return el
    })

    API.unsaveBook(id)
    .then(res => console.log(`This is removed from libary: ${res.data}`))
    
    let updated = newLibrary.filter(el => el.saved)
    this.setState({library: updated})

    console.log('unsaved')
  }



  render() {
    return (
    <div className="h-100">
      <MDBContainer className="pb-4 mt-5 h-100">
        <MDBCard classname="">
            <MDBCardBody>
                <MDBCardTitle className="h5 mb-3">My Reading Nook</MDBCardTitle>
                <MDBContainer >
                    <MDBRow>
                        {this.state.library.length === 0 && <p>Add some books to your library and start reading.</p>}
                        {this.state.library.map(el => <Card key={el.id} id={el.id} title={el.title} description={el.description} author={el.author} image={el.image} link={el.link} saved={el.saved} bookSave={this.handleBookSave} bookUnsave={this.handleBookUnsave}/>)}
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