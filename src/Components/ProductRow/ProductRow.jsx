import React, { useState } from "react";
import styles from "./ProductRow.module.scss";
import { useSpring, animated } from "react-spring";
import Filter from '../Filter';

const ProductRow = ({ title, filter, items }) => {
    const [value, setValue] = useState(0);
    const translateContainer = useSpring({
        transform: `translate3d(${value}px, 0, 0)`
    });

    return (
        <div className={styles.container}>
            <h3>{title}</h3>

            <animated.div style={translateContainer} className={styles.product_list}>
                <Filter filter={filter} items={items} />
            </animated.div>

            <button
                onClick={() => setValue(value + 50)}
                onMouseDown={() => setValue(value + 50)}
                className={styles.left_btn}
            >
                left
      </button>
            <button
                onClick={() => setValue(value - 50)}
                onMouseDown={() => setValue(value - 50)}
                className={styles.right_btn}
            >
                right
      </button>
        </div>
    );
};

export default ProductRow;
