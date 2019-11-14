import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./AuthEditItem.module.scss";
import {
  editItemAsync,
  loadItemAsync,
  deleteItemAsync
} from "../../../actions";

class AuthEditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      price: "",
      condition: 1,
      category: 1,
      manufacturer: "",
      itemStatus: 1,
      image: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { loadItem, match } = this.props;

    loadItem(match.params.id);
    this.setState(this.props.item);
  }
  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) this.setState(this.props.item);
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
        this.setState({ condition_id: parseInt(event.target.value) });
        break;
      case "manufacturer":
        this.setState({ manufacturer: event.target.value });
        break;
      case "category":
        this.setState({ category_id: parseInt(event.target.value) });
        break;
      case "itemStatus":
        this.setState({ itemStatus_id: parseInt(event.target.value) });
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
    console.log(this.state)
    const data = getFormData(this.state);
    const id = parseInt(this.props.match.params.id);
    this.props.editItem(id, data);
  }

  handleDelete(id) {
    const { deleteItem, match } = this.props;

    deleteItem(match.params.id);
  }

  render() {
    return (
      <>
        <form className={styles.auth_edit_item} onSubmit={this.handleSubmit}>
          <div className={styles.edit_item_details}>
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
                value={this.state.condition_id}
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
                value={this.state.category_id}
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
                value={this.state.itemStatus_id}
                name="itemStatus"
                onChange={this.handleChange}
              >
                <option value={1}>pending</option>
                <option value={2}>published</option>
                <option value={3}>sold</option>
              </select>
            </div>

            <div>
              <h3>Manufacturer/manufacturer</h3>
              <input
                type="text"
                value={this.state.manufacturer}
                name="manufacturer"
                onChange={this.handleChange}
              />
            </div>

            <div className={styles.edit_item_img}>
              <img src={this.state.imageUrl} alt="Image" />
              <input
                className={styles.file_input}
                name="image"
                type="file"
                onChange={this.handleChange}
              />
            </div>
            <input className={styles.submit_btn} type="submit" value="Submit" />
          </div>
        </form>

        <button className={styles.submit_btn} onClick={this.handleDelete}>
          Delete Item
        </button>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    editItem: (id, item) => {
      dispatch(editItemAsync(id, item));
    },
    loadItem: item => {
      dispatch(loadItemAsync(item));
    },
    deleteItem: id => {
      dispatch(deleteItemAsync(id));
    }
  };
};
const mapStateToProps = state => {
  return { item: state.item };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthEditItem);
