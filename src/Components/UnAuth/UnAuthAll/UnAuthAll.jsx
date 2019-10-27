import React, { useEffect, useState } from 'react';
import syles from './UnAuthAll.module.scss';
import { useDispatch } from 'react-redux';
import { loadItemsAsync } from '../../../actions';

const UnAuthAll = () => {
    const [products, setProducts] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadItemsAsync())
    }, [dispatch])


    return (
        <div>
            {console.log(products)}
        </div>
    )
}

export default UnAuthAll;