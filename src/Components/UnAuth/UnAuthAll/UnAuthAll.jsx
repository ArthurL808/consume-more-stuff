import React, { useEffect } from 'react';
// import styles from './UnAuthAll.module.scss';
import { connect } from 'react-redux';
import { loadItemsAsync } from '../../../actions';
import Filter from '../../Filter'

const UnAuthAll = (props) => {

    const { dispatch, items } = props;

    useEffect(() => {
        dispatch(loadItemsAsync())
    }, [dispatch])

    return (
        <div>
            <Filter items={items} filter={'all'} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(UnAuthAll);