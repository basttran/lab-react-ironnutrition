import React, { Component } from "react";

import "./FoodBox.css";
import "bulma/css/bulma.css";

class AddFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: "",
      image: "",
      quantity: ""
    };
  }

  genericOnChange(event) {
    // event.target is the <input> tag the onChange is linked to
    const { value, name } = event.target;
    // value is the text inside the <input> tag
    // name is the <input> tag's name attribute
    // use the variable "name" to set the key of the object
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    // prevent the default page refresh you get when you submit a form
    event.preventDefault();

    this.props.foodSubmit(this.state);
    // clear the form by setting the state back to initial value
    // (REMEMBER to use SET STATE)
    this.setState({
      name: "",
      calories: "",
      image: "",
      quantity: ""
    });
  }

  render() {
    return (
      <section className="AddFood">
        <h2>Add a Movie</h2>
        {/* NO action and method on React forms
          (use an onSubmit event instead to handle the submission) */}
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Name:
            <input
              // capture what is typed and keep it synchronized
              onChange={event => this.genericOnChange(event)}
              // value sets initial text and allows us to reset the text
              value={this.state.name}
              type="text"
              name="name"
              placeholder="food's name (pizza, burrito, raclette..."
            />
          </label>
          <label>
            Calories:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.calories}
              type="number"
              name="calories"
              placeholder="9000"
            />
          </label>
          <label>
            Image Link:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.image}
              type="text"
              name="image"
              placeholder="https://www.example.com/blah.jpg"
            />
          </label>
          <button>Save This Food</button>
        </form>
      </section>
    );
  }
}

export default AddFood;
