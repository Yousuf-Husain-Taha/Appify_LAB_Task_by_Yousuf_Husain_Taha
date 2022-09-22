import React from 'react';
import style from './Download.module.css';
import app_store from '../../images/App_Store.svg';
import google_play from '../../images/Google_Play.svg';

const Download = () => {
    return (
        <div id={style.download}>
            <p>Download App</p>
            <div id={style.logo_container}>
                <img id={style.app_store} src={app_store} alt="" />
                <img id={style.google_play} src={google_play} alt="" />
            </div>
        </div>
    );
};

export default Download;