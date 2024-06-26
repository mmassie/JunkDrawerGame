
import React, { Component } from "react";
import Checkbox from "./checkbox";
import Modal from 'react-modal';

const OPTIONS = [
    "Apple",
    "Egg",
    "OSR",
    "Hot Dog",
    "MBM",
    "Sooom",
    "Burger",
    "Latte Egg",
    "Sandwiches",
    "Salad",
    "Vegetables",
    "Egg & Bacon",
    "Toast & Potato",
    "Pizza",
    "Cheese Cake",
    "Chocolate Cake",
    "Brownie",
    "Muffin",
    "Banana Cake",
    "Little Cheeseburger",
    "Noodel Soup",
    "Mac N'Cheese",
    "Chocolate Milk",
    "Orange Juice",
    "Beer",
    "Coffee",
    "Latte",
    "Coca-Cola"
];

class App extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

const arrayOfCheckboxes = Object.keys(this.state.checkboxes).filter(checkbox => this.state.checkboxes[checkbox])
const totalCount = Object.keys(this.state.checkboxes)

//add a function to make some if/else comments about the score

window.alert(" Your total clutter score is " + arrayOfCheckboxes.length + " of " + totalCount.length)

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };


 
  
  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );


  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <div className="form-group mt-2">
                <button type="submit" className="btn btn-primary">
                  Count it up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
