import React from 'react';
import default_profile_picture from '../../images/default_profile_picture.svg';
import background_icon from '../../images/background_icon.svg';
import camera_icon from '../../images/camera_icon.svg';
import feeling_icon from '../../images/feeling_icon.svg';
import style from './PostOption.module.css';

const PostOption = () => {
    return (
        <div id={style.root}>
            <div id={style.up}>
                <img src={default_profile_picture} alt="" />
                <input placeholder='Create a new post...'></input>
            </div>
            <div id={style.down}>
                <div className={style.post_option}>
                    <img src={background_icon} alt="" />
                    <p>Background</p>
                </div>
                <div className={style.post_option}>
                    <img src={camera_icon} alt="" />
                    <p>Photo/Video</p>
                </div>
                <div className={style.post_option}>
                    <img src={feeling_icon} alt="" />
                    <p>Feeling/Activity</p>
                </div>
            </div>
        </div>
    );
};

export default PostOption;