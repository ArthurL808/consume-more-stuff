import React, { useEffect } from "react";
import { loadItemsAsync } from "../../actions";
import { connect } from "react-redux";

const Searchbar = data => {
  const { dispatch, items } = data;
  console.log("data in search", data);

  useEffect(() => {
    dispatch(loadItemsAsync());
  }, [dispatch]);

  return (
    <div>
      {/* <input
        type="text"
        value={this.state.searchString}
        ref="search"
        onChange={this.handleChange}
        placeholder="type name here"
      /> */}
      <input type="text" placeholder="Search by item name..." name="search" />
    </div>
  );
};

const mapStateToProps = state => {
  return { item: state.items.items };
};

export default connect(mapStateToProps)(Searchbar);
