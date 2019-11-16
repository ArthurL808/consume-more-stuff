import React from 'react';
import styles from './Filter.module.scss'
import { Link } from "react-router-dom";


const Filter = ({ filter, items }) => {

    function setFilterElem(event, sub) {
        return event.toLowerCase() === '' ? sub.toLowerCase() : event.toLowerCase();
    }

    return (
        <div>
            <h1>{filter}</h1>
            <div className={styles.container}>
                {!!items === true && items.map(
                    (item, index) =>
                        item.category.category.toLowerCase() === setFilterElem(filter, item.category.category) &&
                        <div key={index} className={styles.product_card}>
                            <div className={styles.img_container}>
                                <Link
                                    to={location => ({
                                        ...location,
                                        pathname: `/unauth/item/${item.id}`
                                    })}
                                >
                                    <img src={item.imageUrl} alt={item.name} />
                                </Link>
                            </div>
                            <h4>{item.name}</h4>
                            <p>{item.status}</p>
                        </div>
                )}
            </div>
        </div>
    );

}

export default Filter;

