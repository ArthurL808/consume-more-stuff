import React, { Component, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { loadItemsAsync } from "../../../actions";
import { useLocation } from "react-router-dom";
// import { withRouter } from "react-router-dom";
// import AuthEditItem from "../AuthEditItem";

const AuthDetailItem = props => {
  const location = useLocation().pathname.split("/")[2];

  const { dispatch, items } = props;

  useEffect(() => {
    dispatch(loadItemsAsync());
  }, [dispatch, location]);

  return (
    <Fragment>
      <h1>{location}</h1>
      <div>hello</div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(mapStateToProps)(AuthDetailItem);
