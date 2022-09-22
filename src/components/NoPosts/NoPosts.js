import React from 'react';
import style from './NoPosts.module.css';

const NoPosts = () => {
    return (
        <div id={style.root}>
            <h1>There Are No Posts Found</h1>
            <h5>Keep checking back later or refresh to get more feeds</h5>
        </div>
    );
};

export default NoPosts;