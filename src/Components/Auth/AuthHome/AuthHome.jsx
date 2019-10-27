import React, { Component } from "react";
import Item from "./AuthHomePending";
import styles from "./AuthHome.module.scss";

class AuthHome extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //WORK ON THIS ONCE BACKEND IS CONNECTED.
  render() {
    return (
      <>
        <div className={styles.auth_home}>
          <div className={styles.auth_home_pending}>
            <h1>Pending Items</h1>
            <ul>
              <div className={styles.pending_image}>Image here</div>
              <br />
              Name: Price: <br />
              Description: <br />
              {/* {this.props.items.map(item => {
          return (
            <span key={item.id}>
              <Item
                name={item.name}
                description={item.description}
                price={item.price}
                condition={item.condition}
              />
            </span>
          );
        })} */}
            </ul>
          </div>

          <div className={styles.auth_home_published}>
            <h1>Published</h1>

            <ul>
              <li>
                <div className={styles.published_image}>Image here</div>
                <br />
                Name: Price: <br />
                Description: <br />
              </li>
            </ul>
          </div>

          <div className={styles.auth_home_sold}>
            <h1>Sold</h1>
            <ul>
              <li>
                <div className={styles.sold_image}>Image here</div>
                <br />
                Name: Price: <br />
                Description: <br />
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default AuthHome;
