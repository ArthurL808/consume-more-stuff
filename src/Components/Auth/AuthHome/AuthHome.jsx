import React, { Component } from "react";
// import styles from "./AuthHome.module.scss";
import { connect } from "react-redux";
import { loadItemsAsync } from "../../../actions";

class AuthHome extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(loadItemsAsync());
  }

  render() {
    return (
      <div>
        {this.props.items && this.props.items.map(item => <h1>{item.name}</h1>)}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(mapStateToProps)(AuthHome);
