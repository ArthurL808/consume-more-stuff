import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { loadItemAsync } from "../../../actions";
import { Link } from "react-router-dom";
import styles from "./AuthDetailItem.module.scss";

const AuthDetailItem = ({ ...props }) => {
  const { dispatch, item, match } = props;
  const id = parseInt(match.params.id);
  const details = item.initialState;
  const createdDate = details && new Date(details.created_at).toUTCString();
  const updatedDate = details && new Date(details.updated_at).toUTCString();

  useEffect(() => {
    dispatch(loadItemAsync(id));
  }, [dispatch]);

  return (
    <Fragment>
      <button>
        <Link to="/">Go Back</Link>
      </button>

      <div key={id} className={styles.detailBody}>
        <div className={styles.titleAndImage}>
          <h2 className={styles.header}>•~Item Detail~•</h2>
          {details && (
            <img
              src={details.imageUrl}
              alt="MOOOOOOOO"
              className={styles.image}
            />
          )}
        </div>

        <div className={styles.detailsText}>
          {details && (
            <>
              <ul>
                <li>
                  <h3>{details.name}</h3>
                </li>
                <li>
                  <h4>Description:</h4>
                  {details.description}
                </li>
                <li>
                  <h4>Price:</h4>
                  {details.price}
                </li>
                <li>
                  <h4>Manufacturer:</h4>
                  {details.manufacturer}
                </li>
                <li>
                  <h4>Condition:</h4>
                  {details.condition.condition}
                </li>
                <li>
                  <h4>Category:</h4>
                  {details.category.category}
                </li>
                <li>
                  <h5>Created At:</h5>
                  {createdDate}
                </li>
                <li>
                  <h5>Updated At:</h5>
                  {updatedDate}
                </li>
              </ul>

              <button>
                <Link
                  to={location => ({
                    ...location,
                    pathname: `/edit/${details.id}`
                  })}
                >
                  Edit Item
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return { item: state.item };
};

export default connect(mapStateToProps)(AuthDetailItem);
