import React, { Component } from "react";
// import styles from "./AuthHome.module.scss";
import AuthHomeFilter from "./AuthHomeFilter";
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
        <AuthHomeFilter items={this.props.items} filter={"pending"} />
        <AuthHomeFilter items={this.props.items} filter={"published"} />
        <AuthHomeFilter items={this.props.items} filter={"sold"} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(mapStateToProps)(AuthHome);

// return this.props.items.map(item => (
//   <AuthHomeFilter key={item.id} filter={item.itemStatus_id} item={item} />
// ));
