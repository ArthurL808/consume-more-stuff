import React, { Component, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { loadItemAsync } from "../../../actions";

const AuthDetailItem = ({ ...props }) => {
  const { dispatch, item, match } = props;
  const id = parseInt(match.params.id);
  useEffect(() => {
    dispatch(loadItemAsync(id));
  }, [dispatch]);

  return (
    <Fragment>
      <h1>hello</h1>
      {/* {items &&
        items.map(
          item =>
            item.id === id && (
              <div key={id}>
                <h2>•~Item Detail~•</h2>
                <img src={item.imageUrl} alt="MOOOOOOOO" />
                <h3>{item.name}</h3>
                <p>Description: {item.description}</p>
                <p>Price: {item.price}</p>
                <p>Manufacturer: {item.manufacturer}</p>
              </div>
            )
        )} */}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return { item: state.item };
};

export default connect(mapStateToProps)(AuthDetailItem);
