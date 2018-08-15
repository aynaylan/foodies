import React,{Component}from 'react';
import {fire,auth,provider,database,storage} from './fire';

export class Reciepepage extends Component{

  constructor(props) {
    super(props);
    this.state = { Receipes: [] }; // <- set up react state
  }



  componentDidMount(){
    let itemsRef = database.ref('/').child("Receipe");
        itemsRef.on('child_added', (snapshot) => {
          console.log(snapshot.key);
          let food = {
            Dated:snapshot.child("Posted"),
            Poster:snapshot.child("Url").val(),
            Description: snapshot.child('Description').val()
          };

            this.setState({ Receipes: [food].concat(this.state.Receipes) });
         });
  }

render(){
  return(
    <div>
<div class="rc">

<h1>Cookbook</h1>
</div>

<div class="container">
{ /* Render the list of messages */
            this.state.Receipes.map( food => 
              <div>
              <p>{food.Description}</p>
              <img class="img-fluid" src={food.Poster} />
              
              </div>

 )
          }


</div>
</div>
  );
}


}

export default Reciepepage;