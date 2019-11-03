import React, { Component } from "react";
import styles from "./AuthNewItem.module.scss";

class AuthNewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      price: "",
      condition: "new",
      category: 'Hardware',
      make: "",
      itemStatus: "pending",
      note: "",
      imgUrl: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.name) {
      case 'name':
        this.setState({ name: event.target.value });
        break;
      case 'description':
        this.setState({ description: event.target.value });
        break;
      case 'price':
        this.setState({ price: event.target.value });
        break;
      case 'condition':
        this.setState({ condition: event.target.value });
        break;
      case 'make':
        this.setState({ make: event.target.value });
        break;
      case 'note':
        this.setState({ note: event.target.value });
        break;
      case 'category':
        this.setState({ category: event.target.value });
        break;
      case 'itemStatus':
        this.setState({ itemStatus: event.target.value });
        break;
      case 'imgUrl':
        this.setState({ imgUrl: event.target.value });
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(JSON.stringify(this.state))
  }

  //ADD onChange TO RETURN IN RENDER AND THEN CREATE INPUT HANDLER FUNCTIONS LATER

  // handleDescriptionInput = e =>{
  //     const {value} = e.target;
  //     this.setState({descriptionInput:value})
  // }

  render() {
    return (
      <form className={styles.auth_new_item} onSubmit={this.handleSubmit}>
        <div className={styles.new_item_details}>
          <div>
            <h3>Name:</h3>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>

          <div>
            <h3>Description:</h3>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
          </div>

          <div>
            <h3>Price</h3>
            <input type="text" name="price" value={this.state.price} onChange={this.handleChange} />
          </div>

          <div>
            {/* THIS ONE SHOULD BE A DROP DOWN */}
            <h3>Condition</h3>
            <select value={this.state.condition} name="condition" onChange={this.handleChange}>
              <option>new</option>
              <option>good</option>
              <option>used</option>
            </select>
          </div>

          <div>
            {/* THIS ONE SHOULD BE A DROP DOWN */}
            <h3>Category</h3>
            <select value={this.state.category} name="category" onChange={this.handleChange}>
              <option>Hardware</option>
              <option>Software</option>
              <option>Accessories</option>
              <option>Miscellaneous</option>
            </select>
          </div>


          <div>
            {/* THIS ONE SHOULD BE A DROP DOWN */}
            <h3>Status</h3>
            <select value={this.state.itemStatus} name="itemStatus" onChange={this.handleChange}>
              <option>pending</option>
              <option>published</option>
              <option>sold</option>
            </select>
          </div>


          <div>
            <h3>Manufacturer/Make</h3>
            <input type="text" value={this.state.make} name="make" onChange={this.handleChange} />
          </div>

          <div>
            <h3>Note</h3>
            <textarea type="text" value={this.state.note} name="note" onChange={this.handleChange} />
          </div>

          <div className={styles.new_item_img}>
            <input name="imgUrl" type="file" />
          </div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default AuthNewItem;

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