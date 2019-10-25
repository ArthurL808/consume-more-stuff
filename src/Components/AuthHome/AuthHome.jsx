import React, { Component } from "react";
import styles from "./AuthHome.module.scss";

class AuthHome extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className={styles.auth_home}>
          <div className={styles.auth_home_pending}>
            <h1>Pending Items</h1>
            <ul>
              <li>
                <div className={styles.pending_image}>Image here</div>
                <br />
                Name: Price: <br />
                Description: <br />
              </li>
              {/* ONCE SEEDS ARE DONE I CAN WORK ON THIS I THINKKKKKKKKK 
              
              {this.props.items.map(item => {
              return (
                <Item
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
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
