import React, { Component } from "react";
import styles from "./AuthNewItem.module.scss";

class AuthNewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descriptionInput: "",
      priceInput: "",
      conditionInput: "",
      makeInput: "",
      modelInput: "",
      dimensionInput: "",
      noteInput: ""
    };
  }

  //ADD onChange TO RETURN IN RENDER AND THEN CREATE INPUT HANDLER FUNCTIONS LATER

  // handleDescriptionInput = e =>{
  //     const {value} = e.target;
  //     this.setState({descriptionInput:value})
  // }

  render() {
    return (
      <div className={styles.auth_new_item}>
        <div className={styles.new_item_details}>
          <div>
            <h3>Description:</h3>
            <input type="text" value={this.state.description} />
          </div>

          <div>
            <h3>Price</h3>
            <input type="text" value={this.state.price} />
          </div>

          <div>
            {/* THIS ONE SHOULD BE A DROP DOWN */}
            <h3>Condition</h3>
            <select onChange={(e) => console.log(e.target.value)}>
              <option>new</option>
              <option>good</option>
              <option>used</option>
            </select>
          </div>

          <div>
            <h3>Manufacturer/Make</h3>
            <input type="text" value={this.state.makeInput} />
          </div>

          <div>
            <h3>Model Name/Number</h3>
            <input type="text" value={this.state.modelInput} />
          </div>

          <div>
            <h3>Dimensions</h3>
            <input type="text" value={this.state.dimensionInput} />
          </div>

          <div>
            <h3>Note</h3>
            <input type="text" value={this.state.noteInput} />
          </div>

          <button>Submit New Product</button>
        </div>

        <div className={styles.new_item_img}>
          <div>image goes hereeeee</div>
          <button>ADD iMAGE</button>
        </div>
      </div>
    );
  }
}

export default AuthNewItem;
