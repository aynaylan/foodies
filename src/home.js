import React,{Component}from 'react';
import {fire,auth,provider,database,storage} from './fire';

export class Homepage extends Component{

    

    
    
    render(){
        return(
            <div>
           
             <div class="hd" id="home">
             <h1>Heading One</h1>
      
             </div>
             <div class="container">
               <p >Food is any substance[1] consumed to provide nutritional support for an organism. It is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth.

Historically, humans secured food through two methods: hunting and gathering and agriculture. Today, the majority of the food energy required by the ever increasing population of the world is supplied by the food industry.</p>
      
             </div>
            <div class="rc" id="cookbook"><h1>My cookbook</h1></div>
        <div>
        <p >A cookbook or cookery book[1] is a kitchen reference containing recipes.

Cookbooks may be general, or may specialize in a particular cuisine or category of food.

Recipes in cookbooks are organized in various ways: by course (appetizer, first course, main course, dessert), by main ingredient, by cooking technique, alphabetically, by region or country, and so on. They may include illustrations of finished dishes and preparation steps; discussions of cooking techniques, advice on kitchen equipment, ingredients, and substitutions; historical and cultural notes; and so on.</p>
            <a href="/cookbook">Show all</a>
              
        </div>
            
      
      
                  <div class="contact" id="contactme">
                  <h1>Contact me!</h1>
                  </div>
                  <div class="container">
      
                    <form class="form form-group">
                      <input type="text"class="form-control" placeholder="Your Name"/><br/>
                      <input placeholder="Your email address" type="email"class="form-control"/><br/>
                      <input class="form-control" type="text" placeholder="What would you like to tell me?"/><br/>
                      <center> 
                      <button class = "btn btn-outline-success" type="submit">Send
                </button>
                      </center>
                    </form>
                  </div>
      
      
      
      
      
      
      
      
      
      
      
      </div>
          );
    }
}

export default Homepage;