import React, { Component } from "react";

import "./AddFood.css";
import "bulma/css/bulma.css";

// Create a Search component to perform a search that updates the list of all meal.

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
  }

  handleSearch(event) {
    // prevent the default page refresh you get when you submit a form

    this.props.searchSubmit(this.state);
    // clear the form by setting the state back to initial value
    // (REMEMBER to use SET STATE)
    this.setState({
      searchString: ""
    });
  }

  render() {
    return (
      <label className="Search">
        Search Foods
        <input
          onChange={event => this.handleSearch(event)}
          value={this.state.searchString}
          type="text"
          name="searchString"
          placeholder="Search.."
        />
      </label>
    );
  }
}

export default Search;
