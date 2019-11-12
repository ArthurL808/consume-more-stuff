import React, { Component } from "react";
import styles from "./AuthNewItem.module.scss";
import { connect } from "react-redux";
import { addItemAsync } from "../../../actions";

class AuthNewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      price: "",
      condition: 1,
      category: 1,
      make: "",
      itemStatus: 1,
      note: "",
      image: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.name) {
      case "name":
        this.setState({ name: event.target.value });
        break;
      case "description":
        this.setState({ description: event.target.value });
        break;
      case "price":
        this.setState({ price: event.target.value });
        break;
      case "condition":
        this.setState({ condition: parseInt(event.target.value) });
        break;
      case "make":
        this.setState({ make: event.target.value });
        break;
      case "note":
        this.setState({ note: event.target.value });
        break;
      case "category":
        this.setState({ category: parseInt(event.target.value) });
        break;
      case "itemStatus":
        this.setState({ itemStatus: parseInt(event.target.value) });
        break;
      case "image":
        this.setState({ image: event.target.files[0] });
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    function getFormData(object) {
      const formData = new FormData();
      Object.keys(object).forEach(key => formData.append(key, object[key]));

      return formData;
    }

    const data = getFormData(this.state);

    this.props.addItem(data);
  }

  render() {
    return (
      <form className={styles.auth_new_item} onSubmit={this.handleSubmit}>
        <div className={styles.new_item_details}>
          <div>
            <h3>Name:</h3>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <h3>Description:</h3>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <h3>Price</h3>
            <input
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>

          <div>
            {/* THIS ONE SHOULD BE A DROP DOWN */}
            <h3>Condition</h3>
            <select
              value={this.state.condition}
              name="condition"
              onChange={this.handleChange}
            >
              <option value={1}>new</option>
              <option value={2}>good</option>
              <option value={3}>used</option>
            </select>
          </div>

          <div>
            {/* THIS ONE SHOULD BE A DROP DOWN */}
            <h3>Category</h3>
            <select
              value={this.state.category}
              name="category"
              onChange={this.handleChange}
            >
              <option value={1}>Hardware</option>
              <option value={2}>Software</option>
              <option value={3}>Accessories</option>
              <option value={4}>Miscellaneous</option>
            </select>
          </div>

          <div>
            {/* THIS ONE SHOULD BE A DROP DOWN */}
            <h3>Status</h3>
            <select
              value={this.state.itemStatus}
              name="itemStatus"
              onChange={this.handleChange}
            >
              <option value={1}>pending</option>
              <option value={2}>published</option>
              <option value={3}>sold</option>
            </select>
          </div>

          <div>
            <h3>Manufacturer/Make</h3>
            <input
              type="text"
              value={this.state.make}
              name="make"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <h3>Note</h3>
            <textarea
              type="text"
              value={this.state.note}
              name="note"
              onChange={this.handleChange}
            />
          </div>

          <div className={styles.new_item_img}>

            <input className={styles.file_input} name="image" type="file" onChange={this.handleChange} />

          </div>
          <input className={styles.submit_btn} type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addItem: item => {
      dispatch(addItemAsync(item));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AuthNewItem);

/*
description --
price --
name --
condition --
category --
note  --
make --
imgUrl
userId
item status - pending published sold
*/

//Might have to manage posting items and images separately
