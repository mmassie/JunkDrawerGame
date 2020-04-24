
import React, { Component } from "react";
import Checkbox from "./checkbox";

const OPTIONS = [
    "Phillips & Slot Screwdriver (All-in-One’s accepted)",
    "A bushel of Batteries (3 types)",
    "Chopsticks",
    "Lip Lotion/Balm",
    "Hand Lotion/Sanitizer (JDB COVID Edition)",
    "Box Cutter",
    "Random Loyalty/Membership Card",
    "A nest of USB Cables",
    "Nails",
    "Scissors",
    "Rubber Bands",
    "Condiment Packet", 
    "Light Bulb",
    "Matches or Lighter",
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
    "Tape Measure",
    "Free IKEA Allen Wrench (x3)",
    "Expired Bed Bath & Beyond Coupon",
    "Furniture Foot"
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

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected."); 
      });
  };

  //OK now let's count it and send to console.
  
  
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