import React, { useEffect } from 'react';
import styles from './UnAuth.module.scss'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import { loadItemsAsync } from '../../actions';
import Filter from '../Filter';

const UnAuth = (props) => {
    const location = useLocation().pathname.slice(1);


    const { dispatch, items } = props;

    useEffect(() => {
        dispatch(loadItemsAsync())
    }, [dispatch])



    return (
        <div className={styles.container}>
            {/* Change filter to location once the real seeds are setup */}
            {items.length > 0 && <Filter items={items} filter={location} />}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        items: state.items.items
    }
}

export default connect(mapStateToProps)(UnAuth);


// {routes.map(route => (
//     <Route
//         key={route.path}
//         path={route.path}
//         exact={route.exact}
//         component={route.main}
//     />
// ))}