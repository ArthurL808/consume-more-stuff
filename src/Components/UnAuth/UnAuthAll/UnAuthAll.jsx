import React, { useEffect } from 'react';
// import styles from './UnAuthAll.module.scss';
import { connect } from 'react-redux';
import { loadItemsAsync } from '../../../actions';

const UnAuthAll = (props) => {

    const { dispatch, items } = props;

    useEffect(() => {
        dispatch(loadItemsAsync())
    }, [dispatch])

    return (
        <div>
            {items && (items.map(item => (
                <h1>{item.name}</h1>
            )))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(UnAuthAll);