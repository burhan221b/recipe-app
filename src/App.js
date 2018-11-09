import React, { Component } from 'react';
import Form from './components/Form';
import Recipes from './components/Recipes';
import { Link } from 'react-router-dom';
import './App.css';


const API_KEY = "{Your API KEY}";
class App extends Component {

  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    // because its onsbumit, we must prevent it from refreshing.
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    console.log(recipeName);
    const data = await api_call.json();

    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);//Also can use json.json();
    this.setState({ recipes: recipes });
  }

  componentDidUpdate = () => {
    // When the component updates (meaning when state changes), then this will run as well.
    const recipes = JSON.stringify(this.state.recipes);
    //( Name of Item, and what you are going to store)
    localStorage.setItem("recipes", recipes);
    // localStorage.getItem is to retrieve data from localstorage
  }

  toClean = () => {
    window.location.reload();
    console.log('clicked');
    localStorage.clear();
    this.setState({ recipes: "" });

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" >
            <Link onClick={this.toClean} to="/">Recipe Search</Link>
          </h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />

      </div>
    );
  }
}

export default App;
