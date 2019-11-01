import React from 'react';

class Filter extends React.Component {
    setFilterElem(event, sub) {
        return event.toLowerCase() === 'all' ? sub.toLowerCase() : event.toLowerCase()
    }


    render() {
        return (
            <div>
                <h1>{this.props.filter}</h1>
                {!!this.props.items === true && this.props.items.map(
                    (item, index) =>
                        item.manufacturer.toLowerCase() === this.setFilterElem(this.props.filter, item.manufacturer) &&
                        <div key={index}>
                            <h4>{item.name}</h4>
                            <p>{item.status}</p>
                        </div>
                )}
            </div>
        );
    }
}

export default Filter;

