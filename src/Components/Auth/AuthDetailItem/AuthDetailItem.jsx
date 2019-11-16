import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { loadItemAsync } from "../../../actions";
import { Link } from "react-router-dom";
import styles from "./AuthDetailItem.module.scss";

const AuthDetailItem = ({ ...props }) => {
  const { dispatch, item, match } = props;
  const id = parseInt(match.params.id);
  const createdDate = item && new Date(item.created_at).toUTCString();
  const updatedDate = item && new Date(item.updated_at).toUTCString();

  useEffect(() => {
    dispatch(loadItemAsync(id));
  }, [dispatch, id]);

  return (
    <div>
      <button className={styles.back_btn}>
        <Link to="/">Go Back</Link>
      </button>
      <div key={id} id={styles.detail_container} className="container">
        {item && (
          <>
            <div className={styles.img_container}>
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <h3>{item.name}</h3>

            <h4>Description:</h4>
            <p>{item.description}</p>
            <h4>Price:</h4>
            <p>{item.price}</p>
            <h4>Manufacturer:</h4>
            <p>{item.manufacturer}</p>
            <h4>Condition</h4>
            <p>{item.condition.condition}</p>
            <h4>Category</h4>
            <p>{item.category.category}</p>
            <h5>Created At</h5>
            <p>{createdDate}</p>
            <h5>Updated At</h5>
            <p>{updatedDate}</p>

            <button>
              <Link
                to={location => ({
                  ...location,
                  pathname: `/edit/${item.id}`
                })}
              >
                Edit Item
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { item: state.item };
};

export default connect(mapStateToProps)(AuthDetailItem);
