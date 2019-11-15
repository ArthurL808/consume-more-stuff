import React, { Component } from "react";
import styles from "./AuthHome.module.scss";
import AuthHomeFilter from "../AuthHomeFilter";
import { connect } from "react-redux";
import { loadItemsAsync } from "../../../actions";

class AuthHome extends Component {
  componentDidMount() {
    this.props.dispatch(loadItemsAsync());
  }

  render() {
    console.log("this is my props", this.props.items.items);
    return (
      <>
        <div className={styles.authHome_container}>
          <AuthHomeFilter items={this.props.items} filter={"pending"} />
          <AuthHomeFilter items={this.props.items} filter={"published"} />
          <AuthHomeFilter items={this.props.items} filter={"sold"} />
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(mapStateToProps)(AuthHome);
