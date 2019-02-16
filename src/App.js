import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button'
import Favorites from './Components/Button/Favorites'
import axios from 'axios'

class App extends Component {

  constructor(){
    super();

    this.state = {
      library: [],
    }
  }

//methods 
getBook = () => {
  axios.get('/books').then((res) => {
    console.log(res)
    this.setState({
      library: res.data
    })
  })
}

addBook = (body) => {
  axios.post('/addPerson', body).then((res) => {
      this.setState({
        library: res.data
      })
  })
};


removeBook = (id) => {
  axios.delete(`/remove/${id}`).then((res) => {
    this.setState({
      library: res.data
    })
  })
}



updateBook = (id) => {
  axios.put(`/like/${id}`).then((res) => {
    this.setState({
      library: res.data
    })
  })
}


//rendering
  render() {

    const mappedLibrary = this.state.library.map( (book, index) => {
      return (
        <div key={index}>
          
          {book.title}
          {
            book.favorite ? <span>❤️</span> : <span>🖤</span>
          }
          <button onClick={() => {this.removeBook(book.id)}}>Remove🗡</button>
          <button onClick={() => {this.updateBook(book.id)}}>Fav❤</button>
        </div>
      )
    }
  )

    return (
      <div className="App">
      <h1>Full Crud But Better, Homie!</h1>
      {mappedLibrary}
       <Button getbook={this.getBook}/>
      </div>
    );
  }
}

export default App;
