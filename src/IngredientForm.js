import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class IngredientForm extends Component {

  handleInputChange(e) {
    //not used just for reference
    console.log(e.target.value)
  };

  focus() {
    // Explicitly focus the text input using the raw DOM API
    console.log(this.nameInput.focus);
  };

  newIngredient() {
    const URL = 'http://nameless-garden-50196.herokuapp.com/api/v1/ingredients';
    axios.post(URL + '?ingredient_name=' + this.nameInput.value)
      .then((response) => {
        console.log(response);
        this.nameInput = '';
        this.props.getIngredientList();
      })
      .catch(function (err) {
        console.log(err)
      });
  };


  render() {
    return (
      <div>
        <input type="text" ref={(input) => { this.nameInput = input; }} onChange={(e) => this.handleInputChange(e)} />
        <button onClick={() => this.newIngredient()}> Add </button>
      </div>
    )
  }
}

IngredientForm.propTypes = {
  getIngredientList: PropTypes.func.isRequired
}

export default IngredientForm;
