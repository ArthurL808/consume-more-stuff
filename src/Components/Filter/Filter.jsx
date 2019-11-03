import React from 'react';
import styles from './Filter.module.scss'


const Filter = ({ filter, items }) => {
    function setFilterElem(event, sub) {
        return event.toLowerCase() === 'all' ? sub.toLowerCase() : event.toLowerCase();
    }


    return (
        <div>
            <h1>{filter}</h1>
            <div className={styles.container}>
                {!!items === true && items.map(
                    (item, index) =>
                        item.manufacturer.toLowerCase() === setFilterElem(filter, item.manufacturer) &&
                        <div key={index} className={styles.product_card}>
                            {console.log(item)}
                            <img src="https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680" alt={item.name} />
                            <h4>{item.name}</h4>
                            <p>{item.status}</p>
                        </div>
                )}
            </div>
        </div>
    );

}

export default Filter;

