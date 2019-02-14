import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth'
import Main from './Main';
import { alreadyLogin,notLoginYet } from '../actions'
import { connect } from 'react-redux'

class AppInit extends Component {

  componentDidMount() {
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBVjuEV22vB8-4eou96WOiuF2NbU-Rjzac",
    authDomain: "ujianmobile-df989.firebaseapp.com",
    databaseURL: "https://ujianmobile-df989.firebaseio.com",
    projectId: "ujianmobile-df989",
    storageBucket: "ujianmobile-df989.appspot.com",
    messagingSenderId: "496197493761"
  };
  if(firebase.apps.length===0){
    firebase.initializeApp(config);
  }
  
  firebase.auth().onAuthStateChanged((user)=>{
      if(user){
          this.props.alreadyLogin(user)
      }else{
          this.props.notLoginYet();
      }
  })
  }

  render() {
    return (
          <Main />
    );
  }
}

export default connect(null, {alreadyLogin,notLoginYet}) (AppInit);