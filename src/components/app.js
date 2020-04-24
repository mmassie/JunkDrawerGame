
import React, { Component } from "react";
import Checkbox from "./Checkbox";

const OPTIONS = [
    "Phillips & Slot Screwdriver (All-in-One’s accepted)",
    "A bushel of batteries (3 types)",
    "Chopsticks",
    "Lip Lotion/Balm",
    "Hand Lotion/Sanitizer (JDB COVID Edition)",
    "Box Cutter",
    "Random Loyalty/Membership Card",
    "A nest of USB cables",
    "Nails",
    "Scissors",
    "Rubber Bands",
    "Condiment Packets", 
    "Light bulb",
    "Matches or lighter",
    "Notepad (Adhesive back yellow squares count)",
    "Pens",
    "Keys",
    "Aretha Franklin’s Will",
    "Tape",
    "Wet Wipes",
    "Hammer",
    "Deck of Cards",
    "Bottle Opener",
    "Flash Light/Headlamp",
    "Straws",
    "Toothpicks",
    "Stamps",
    "Mystery Adapter (Seltsamerstecker)",
    "Random free included unnecessary accessory bag",
    "Sunglasses",
    "Plant/FLower Seeds",
    "Post Card",
    "Bottle Cap",
    "Tape Measure"
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

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

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

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected."); //Ok now count it
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