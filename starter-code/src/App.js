import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import FoodBox from "./components/FoodBox.js";
import AddFood from "./components/AddFood.js";
import Search from "./components/Search.js";

import foods from "./foods.json";

class App extends Component {
  constructor(props) {
    super(props);

    // initial state for ONLY when you need state
    this.state = {
      foodArray: foods,
      isFormDisplayed: false
    };
  }

  toggleForm() {
    const formState = this.state.isFormDisplayed;
    this.setState({ isFormDisplayed: !formState });
  }
  addNewFood(foodObject) {
    const foods = this.state.foodArray;
    // update the array (add at the beginning so we don't need to scroll for feedback)
    foods.unshift(foodObject);

    // save the new array in the state to render the component again
    this.setState({ foodArray: foods });
    this.toggleForm();
  }

  filterFood(searchObject) {
    const foods = this.state.foodArray;

    // update the array (add at the beginning so we don't need to scroll for feedback)

    // save the new array in the state to render the component again
    this.setState({
      foodArray: foods.filter(oneFood => {
        return oneFood.name.includes(searchObject);
      })
    });
  }

  render() {
    const { foodArray } = this.state;
    const { isFormDisplayed } = this.state;

    console.log(foodArray);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        {isFormDisplayed ? (
          <AddFood foodSubmit={foodObject => this.addNewFood(foodObject)} />
        ) : (
          <button onClick={() => this.toggleForm()}>Food Form</button>
        )}
        <Search searchSubmit={searchObject => this.filterFood(searchObject)} />
        {foodArray.map(oneFood => {
          return <FoodBox key={oneFood.image} oneBox={oneFood} />;
        })}
      </div>
    );
  }
}

export default App;
