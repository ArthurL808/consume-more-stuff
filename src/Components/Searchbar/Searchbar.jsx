import React from "react";

const Searchbar = ({ data }) => {
  // state = {
  //   searchString: ""
  // };

  return (
    <div>
      <input
        type="text"
        value={this.state.searchString}
        ref="search"
        onChange={this.handleChange}
        placeholder="type name here"
      />
    </div>
  );
};

export default Searchbar;
