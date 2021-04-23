import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import QuoteMachine from './component/QuoteMachine'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      quotes: [],
      index: null
    }
  }
  componentDidMount = () => {
    axios.get('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(res => {
        const quotes = res.data
        this.setState({quotes}, this.assignIndex)
      })
  }  

  get selectedQuote(){
    if(!this.state.quotes.length || !Number.isInteger(this.state.index)){
      return undefined
    }
    return this.state.quotes[this.state.index];
  }

  selectRandomIndex = () =>{
    if (!this.state.quotes.length){
      return undefined
    }
    return Math.floor(Math.random() * this.state.quotes.length)
  }
  assignIndex = () => {
    this.setState({index: this.selectRandomIndex()})
  }

  render(){
    return (
      <div id="quote-box">
        {
         this.selectedQuote ?
          <QuoteMachine selectedQuote={this.selectedQuote} assignIndex={this.assignIndex}/> :
          null
        }
      </div>
    )
  }
}

export default App;
