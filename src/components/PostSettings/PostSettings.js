import React from 'react';
import save_icon from '../../images/save_icon.svg';
import flag_icon from '../../images/flag_icon.svg';
import edit_icon from '../../images/edit_icon.svg';
import delete_icon from '../../images/delete_icon.svg';
import chain_icon from '../../images/chain_icon.svg';
import style from './PostSettings.module.css';

const PostSettings = () => {

    return (
        <div id={style.root}>
            <div className={style.option}>
                <img src={save_icon} alt="" />
                <p>Save Post</p>
            </div>
            <div className={style.option}>
                <img src={flag_icon} alt="" />
                <p>Report Post</p>
            </div>
            <div className={style.option}>
                <img src={edit_icon} alt="" />
                <p>Edit Post</p>
            </div>
            <div className={style.option}>
                <img src={delete_icon} alt="" />
                <p>Delete Post</p>
            </div>
            <div className={style.option}>
                <img src={chain_icon} alt="" />
                <p>Open post in new tab</p>
            </div>
        </div>
    );
};

export default PostSettings;