import React from 'react';
import styles from './Filter.module.scss'

class Filter extends React.Component {
    setFilterElem(event, sub) {
        return event.toLowerCase() === 'all' ? sub.toLowerCase() : event.toLowerCase()
    }


    render() {
        return (
            <div>
                <h1>{this.props.filter}</h1>
                <div className={styles.container}>
                    {!!this.props.items === true && this.props.items.map(
                        (item, index) =>
                            item.manufacturer.toLowerCase() === this.setFilterElem(this.props.filter, item.manufacturer) &&
                            <div key={index} className={styles.product_card}>
                                <img src="https://f1.media.brightcove.com/8/1078702682/1078702682_6004950245001_6004956161001-vs.jpg?pubId=1078702682&videoId=6004956161001" alt={item.name} />
                                <h4>{item.name}</h4>
                                <p>{item.status}</p>
                            </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Filter;

