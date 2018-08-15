import React, { Component } from 'react';
import './App.css';
import {Redirect} from 'react-router';
import {fire,auth,provider,database,storage} from './fire';


export class postMe extends Component{

    constructor(props){
        super(props);
    
        this.state= {view: <div class="alert alert-danger">
        <strong>Hey there!</strong> You should <a href="#" class="alert-link">log in</a>.
      </div>, description: '',img: null}
    
        this.login = this.login.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      render(){
          return(this.state.view);
      }

    login(){
    
        auth.signInWithRedirect(provider)
        fire.auth().getRedirectResult().then(function(result) {
          if (result.credential) {
            // This gives you a Google Access Token.
            var token = result.credential.accessToken;
            console.log(token);
          }
          var user = result.user;
          console.log(user);
        });
    }

    componentWillMount(){
        
        auth.onAuthStateChanged(user => {
          user ? this.setState({view: <div class="post"><div class="container"><h1>Add Post</h1><form class="form-group" onSubmit={this.handleSubmit}><textarea onChange={event => this.setState({description: event.target.value})} class="form-control" type="text" placeholder="Description"/><br/><input onChange={event => this.setState({img: event.target.files[0]})} type="file" class="form-control "/><br/><input type="submit" class="btn btn-success"/></form></div></div>}) : this.login()
        }) 
      }

    handleSubmit(e){
        e.preventDefault();
      
        var desc = this.state.description;
        var file = this.state.img;
        const uploadTask = storage.ref('/').child(desc).put(file);
        
    
        uploadTask.on('state_changed', function(snapshot){
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
    
          console.log('Upload is '+progress+'% done');
    
         }, function(error){console.log(error);},function(){
    
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
            console.log('File available at', downloadURL);
            var d= new Date();
        
            const descriptonRef = database.ref('/').child('Receipe');
            const newDescription = {
                "Posted": d.toDateString(),
              "Description": desc,
              "Url": downloadURL
            }
            descriptonRef.push(newDescription);
            console.log(newDescription);
            <Redirect to="/cookbook"/>
          });
         }
        
        
        );
    
        this.setState({description:'',img: null})
        
    
    
      }
}

export default postMe;