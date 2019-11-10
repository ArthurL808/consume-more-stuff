import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { loadItemAsync } from "../../../actions";
import { Link } from "react-router-dom";

const AuthDetailItem = ({ ...props }) => {
  const { dispatch, item, match } = props;
  const id = parseInt(match.params.id);
  const details = item.initialState;
  console.log("details:::", details);

  useEffect(() => {
    dispatch(loadItemAsync(id));
  }, [dispatch]);

  return (
    <Fragment>
      <button>
        <Link to="/">Go Back</Link>
      </button>

      <div key={id}>
        <h2>•~Item Detail~•</h2>
        {details && (
          <>
            <img src={details.imageUrl} alt="MOOOOOOOO" />
            <h3>{details.name}</h3>

            <h4>Description:</h4>
            <p>{details.description}</p>
            <h4>Price:</h4>
            <p>{details.price}</p>
            <h4>Manufacturer:</h4>
            <p>{details.manufacturer}</p>
            <h4>Condition</h4>
            <p>{details.condition.condition}</p>
            <h4>Category</h4>
            <p>{details.category.category}</p>
          </>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return { item: state.item };
};

export default connect(mapStateToProps)(AuthDetailItem);
