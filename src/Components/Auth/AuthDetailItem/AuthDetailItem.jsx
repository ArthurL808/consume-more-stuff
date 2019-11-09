import React, { Component, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { loadItemsAsync } from "../../../actions";

const AuthDetailItem = ({ ...props }) => {
  const { dispatch, items, match } = props;
  const id = parseInt(match.params.id);

  useEffect(() => {
    dispatch(loadItemsAsync());
  }, [dispatch]);

  return (
    <Fragment>
      {items &&
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
        )}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(mapStateToProps)(AuthDetailItem);
