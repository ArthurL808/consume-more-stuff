import React, { Component } from "react";
import styles from "./AuthHomeFilter.scss";
import { Link } from "react-router-dom";

class AuthHomeFilter extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <h2>{this.props.filter}</h2>
          {this.props.items &&
            this.props.items.map(
              item =>
                item.itemStatus.status === this.props.filter && (
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
