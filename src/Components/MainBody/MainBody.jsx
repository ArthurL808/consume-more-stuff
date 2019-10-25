import React from 'react';
import styles from './MainBody.module.scss'

// IMPORT ALL BODY COMPOENENTS HERE
import UnAuth from '../UnAuth';

const MainBody = ({ isAuth }) => {
    return (
        <div className={styles.main_body}>
            {/*ALL CONTENT FOR THE BODY SECTION GOES HERE*/}
            {isAuth ?
                <h1>Logged In</h1>
                :
                <UnAuth />
            }

        </div>
    )
}

export default MainBody;