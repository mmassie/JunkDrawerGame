
import React, { Component } from "react";
import Checkbox from "./checkbox";
import Modal from 'react-modal';

const OPTIONS = [
    "Phillips & Slot Screwdriver (All-in-One’s accepted)",
    "A bushel of Batteries (3 diff. types)",
    "Chopsticks",
    "Lip Lotion/Balm",
    "Box Cutter/Knife",
    "Random Loyalty/Membership Card",
    "A nest of USB Cables",
    "Nails/Screws",
    "Scissors",
    "Rubber Bands",
    "Condiment Packet(s)", 
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
    "Plant/Flower Seeds",
    "Post Card",
    "Bottle Cap",
    "Tape Measure",
    "Free IKEA Allen Wrench (x3)",
    "Expired Bed Bath & Beyond Coupon",
    "Furniture Foot/Pad",
    "SD Card",
    "Hair Tie",
    "Loose Change",
    "Ticket Stub",
    "Menu",
    "Hand Lotion/Sanitizer (COVID Edition)"
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