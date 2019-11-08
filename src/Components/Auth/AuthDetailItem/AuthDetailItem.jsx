import React, { Component } from "react";
import { connect } from "react-redux";
import { loadItemsAsync } from "../../../actions";
// import { withRouter } from "react-router-dom";
// import AuthEditItem from "../AuthEditItem";

class AuthDetailItem extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(loadItemsAsync());
  }

  render() {
    return (
      <>
        <h1>yo</h1>

        <div>
          {console.log("this.props", this.prop)}
          hello
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(mapStateToProps)(AuthDetailItem);
