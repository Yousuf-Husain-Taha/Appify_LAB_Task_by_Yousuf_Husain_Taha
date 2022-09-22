import React, { useState } from 'react';
import style from './PostSelector.module.css';

const PostSelector = () => {
    const [ state, setState ] = useState(true);

    return (
        <div id={style.root}>
            <p className={style.post} id={ state ? style.red : style.black } onClick={() => setState(!state)}>Public post</p>
            <p className={style.post} id={ state ? style.black : style.red } onClick={() => setState(!state)}>Friend post</p>
        </div>
    );
};

export default PostSelector;