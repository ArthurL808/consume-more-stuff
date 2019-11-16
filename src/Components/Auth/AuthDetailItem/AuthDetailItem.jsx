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
    <Fragment>
      <button>
        <Link to="/">Go Back</Link>
      </button>

      <div key={id} className={styles.detailBody}>
        {item && (
          <>
            <div className={styles.imageAndName}>
              <h2>{item.name}</h2>
              <img src={item.imageUrl} alt={item.name} />
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
              {/* <button onClick={this.handleDelete}> Delete Item </button> */}
            </div>

            <div className={styles.detailText}>
              <h4>Description:</h4>
              <p>{item.description}</p>
              <h4>Price:</h4>
              <p>{item.price}</p>
              <h4>Manufacturer:</h4>
              <p>{item.manufacturer}</p>
              <h4>Condition:</h4>
              <p>{item.condition.condition}</p>
              <h4>Category:</h4>
              <p>{item.category.category}</p>
              <h4>Created At:</h4>
              <p>{createdDate}</p>
              <h4>Updated At:</h4>
              <p>{updatedDate}</p>
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return { item: state.item };
};
export default connect(mapStateToProps)(AuthDetailItem);