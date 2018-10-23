import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import './jav.js';
import 'bootstrap';
import $ from 'jquery'; 
import Form from './Form.js';
import Table from './Table.js';
import { base } from './Database.js';

class App extends Component {
  constructor(){
    super();
    this.state ={
      table: {}
    };
  }
  
  showState(){
    console.log(this.state);
    var newPostKey = firebase.database().ref().child('posts').push().key;
    console.log(newPostKey);
  }
  getNewPost(obj){
    console.log(obj);
  }
  componentDidMount(){
    base.syncState(`sss`, {
      context: this,
      state: 'table'
    });
    console.log(this.state)
  }
  
  render() {
    return (
      <div className="App">
        <button type="button" 
                className="btn btn-info btn-lg"
                id="bbb" 
                onClick={this.onModalPress} 
                data-toggle="modal" 
                data-target="#myModal">Open Modal</button>
        <Form propsGetNewPost={this.getNewPost.bind(this)} />
        <Table />
        <button
                type="button" 
                className="btn btn-info btn-lg" 
                onClick={()=>this.showState(this.state)} 
        >show state</button>
      </div>
    );
  }
  onModalPress(event){
    console.log(event);
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })
  }


}

export default App;
