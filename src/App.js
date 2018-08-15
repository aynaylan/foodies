import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import './App.css';
import {fire,auth,provider,database,storage} from './fire';
import Reciepepage from './reciepe';
import Homepage from './home';
import postMe from './post';

class App extends Component {

  constructor(props){
    super(props);

    this.state= {view: <div class="alert alert-danger">
    <strong>Hey there!</strong> You should <a href="#" class="alert-link">log in</a>.
    </div>, description: '',img: null}

  }



  navigationBar(){
    return(<nav class="navbar navbar-expand-md bg-danger navbar-dark fixed-top">
    
    <a class="navbar-brand" href="/#home">Name</a>
  
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">

        <li class="nav-item">
          <a class="nav-link" href="/#cookbook">Cook Book</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#contactme">Contact me</a>
        </li> 
      </ul>
    </div> 
  </nav>);
  }

  footer(){

    return(<footer class = "page-footer">
    
             
             <div class = "footer-copyright">
                <div class = "container">
    <center>
    <a><span  class="fa fa-facebook-official"></span></a>
    <a><span class="fa fa-twitter"></span></a>
    <a><span class="fa fa-instagram"></span></a>
         </center>         </div>
             </div>         
           </footer>);
  }

  render() {
    return (<div>
      <div>{this.navigationBar()}</div>
      <Router>
      <div className="App">

     <Route path="/" exact={true} component={Homepage} />
     <Route path="/cookbook" exact={true} component={Reciepepage} />
     <Route path="/ongeza" exact={true} component={postMe} />
     
      </div>

      </Router>
            <div>{this.footer()}</div>
    </div>);
  }
}

export default App;
