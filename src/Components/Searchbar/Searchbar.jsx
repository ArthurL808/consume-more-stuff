import React, { Component } from "react";
import { loadItemsAsync } from "../../actions";
import { connect } from "react-redux";

class Searchbar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  componentDidMount() {
    this.props.dispatch(loadItemsAsync());
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search by item name..."
        name="search"
        value={this.props.items.name}
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(mapStateToProps)(Searchbar);
