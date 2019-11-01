import React, { useEffect } from 'react';
// import styles from './UnAuthAll.module.scss';
import { connect } from 'react-redux';
import { loadItemsAsync } from '../../../actions';
import Filter from '../../Filter'
// import ProductRow from '../../ProductRow';

const UnAuthAll = (props) => {

    const { dispatch, items } = props;

    useEffect(() => {
        dispatch(loadItemsAsync())
    }, [dispatch])

    return (
        <div>
            {items && items.map(item =>
                <Filter items={items} filter={item.manufacturer} />
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(UnAuthAll);

