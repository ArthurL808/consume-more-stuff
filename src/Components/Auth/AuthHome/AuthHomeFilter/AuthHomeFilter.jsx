import React, { Component } from "react";
// import styles from "./AuthHomeFilter.scss";
import { Link } from "react-router-dom";

class AuthHomeFilter extends Component {
  getStatus(e) {
    if (e === 1) {
      return <h3>Pending</h3>;
    } else if (e === 2) {
      return <h3>Published</h3>;
    } else if (e === 3) {
      return <h3>Sold</h3>;
    }
  }

  //link to item needs to be fixed

  render() {
    return (
      <>
        {this.getStatus(this.props.filter)}
        <div>
          {this.props.items &&
            this.props.items.map(
              item =>
                item.itemStatus_id === this.props.filter && (
                  <div key={item.id}>
                    <Link to="/home">
                      <img src="https://placekitten.com/200/150" alt="Meow" />
                    </Link>
                    <h3>{item.name}</h3>
                    <p>{item.manufacturer}</p>
                    <p>{item.price}</p>
                  </div>
                )
            )}
        </div>
      </>
    );
  }
}

export default AuthHomeFilter;
