import React from 'react';
import styles from './UnAuthAll.module.scss';

const UnAuthAll = () => {
    const categories = ['Vehicles', 'Computers', 'Appliances', 'Furniture'];

    return (
        <div>
            {categories.map(category => (
                <div className={styles.top_items} key={category}>
                    <h2>Top 10 items in {category}</h2>

                </div>
            ))}
        </div>
    )
}

export default UnAuthAll;