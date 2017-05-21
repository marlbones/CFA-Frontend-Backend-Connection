import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';
import Baby from './Baby';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      counter: 0
    };
    this.feedAction = this.feedAction.bind(this);
  }


  // componentWillMount() {
  //   console.log('componentWillMount()');
  // };

  componentDidMount() {
    this.getIngredientList();
  };

  feedAction(ingredient, id) {
    if (this.state.counter < 6) {
    const URL = 'http://nameless-garden-50196.herokuapp.com/api/v1/ingredient/';
    console.log(ingredient);
    const ingredientRemove = URL + id + '/remove'
    axios.delete(ingredientRemove)
      .then(() => {
      this.getIngredientList();
    })
    this.setState({
      counter: this.state.counter + 1
    })
    console.log(this.state.counter)
  } else {
    alert('DEATH!')
  }
}

  getIngredientList() {
    console.log('componentDidMount()');
    const URL = 'http://nameless-garden-50196.herokuapp.com/api/v1/ingredients'
    axios.get(URL)
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch(function (error){
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Feed the man!</h1>
        <h3>Pantry</h3>
        <IngredientForm getIngredientList={() => this.getIngredientList()} />
        {this.state.ingredients.length < 1 ? <p>loading... </p> : <IngredientList ingredients={this.state.ingredients} feed={this.feedAction} />}
        <div className="baby">
          <Baby size={this.state.counter} />
        </div>
      </div>
    );
  }
}
// {!this.state.ingredients ? <p>Loading... </p> : this.state.ingredients.map((ingredient, i) => <li key={i}>{ingredient.name}</li>)} {/* ! reverses the boolean. ? asks if it is something, so in this case it asks if it's true */}


export default App;
