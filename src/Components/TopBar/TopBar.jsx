import React, { Fragment } from 'react';
import styles from './TopBar.module.scss';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';

const TopBar = ({ isAuth, sidebarOn }) => {

    const slideIn = useSpring({
        transform: sidebarOn ? 'translateY(0)' : 'translateY(-100%)',
    })

    return (
        <animated.div className={styles.topbar} style={slideIn}>
            {!isAuth && <h3>Home</h3>}

            <ul className={styles.sidebar_links}>
                {isAuth ?
                    <Fragment>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/messages">Messages</Link></li>
                        <li><Link to="/settings">Setting</Link></li>
                        <button><Link to="/new">new</Link></button>
                    </Fragment> :
                    <Fragment>
                        {/* Replace these with the real routes later */}
                        <li>
                            <Link to="/software">Software</Link>
                        </li>
                        <li>
                            <Link to="/hardware">Hardware</Link>
                        </li>
                        <li>
                            <Link to="/accessories">Accessories</Link>
                        </li>
                        <li>
                            <Link to="/miscellaneous">Misc</Link>
                        </li>
                        <button><Link to="/all">ALL</Link></button>
                    </Fragment>
                }
            </ul>
        </animated.div>
    )
}

export default TopBar;