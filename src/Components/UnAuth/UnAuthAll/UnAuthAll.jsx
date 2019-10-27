import React from 'react';
import styles from './UnAuthAll.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadItemsAsync } from '../../../actions';
import reducer from '../../../reducers';

const UnAuthAll = () => {

    const items = useSelector(state => state.items)

    return (
        <div>
            {console.log(items)}
        </div>
    )
}

export default UnAuthAll;