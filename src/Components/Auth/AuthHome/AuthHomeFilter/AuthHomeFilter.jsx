import React, { Component } from "react";
import styles from "./AuthHomeFilter.module.scss";
import { Link } from "react-router-dom";
import { Spring, animated } from "react-spring/renderprops";

class AuthHomeFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  increment = () => {
    this.setState({ value: this.state.value + 50 });
  };

  decrease = () => {
    this.setState({ value: this.state.value - 50 });
  };

  render() {
    return (
      <>
        <div className={styles.container}>
          <button onClick={this.increment} className={styles.arrowLeft}>
            {" "}
            &larr;{" "}
          </button>
          <button onClick={this.decrease} className={styles.arrowRight}>
            {" "}
            &rarr;{" "}
          </button>

          <h2>{this.props.filter}</h2>

          <Spring from={{ x: this.state.value }} to={{ x: this.state.value }}>
            {props => (
              <animated.div
                className={styles.prodList}
                style={{ transform: `translate3d(${props.x}px, 0, 0)` }}
              >
                {this.props.items &&
                  this.props.items.map(
                    item =>
                      item.itemStatus.status === this.props.filter && (
                        <div key={item.id}>
                          <Link to="/home">
                            <div className={styles.imageContainer}>
                              <img src={item.imageUrl} alt="Meow" />
                            </div>
                          </Link>
                          <h3>Name: {item.name}</h3>
                          <p>Manufacturer: {item.manufacturer}</p>
                          <p>Price: {item.price}</p>
                        </div>
                      )
                  )}
              </animated.div>
            )}
          </Spring>
        </div>
      </>
    );
  }
}

export default AuthHomeFilter;
