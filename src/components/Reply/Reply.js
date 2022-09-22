import React from 'react';
import style from './Reply.module.css';
import profile_picture_icon from '../../images/profile_picture_icon.svg';
import dot_icon from '../../images/dot_icon.svg';

const Reply = ({reply}) => {
    let PP="";
    if(reply.profile_picture === ""){
        PP = profile_picture_icon;
    }
    return (
        <div id={style.reply}>
            <img id={style.replyer_pic} src={PP} alt="" />
            <div id={style.reply_info}>
                <div id={style.reply_body_container}>
                    <div id={style.reply_body}>
                        <p id={style.replyer_name}>{reply.name}</p>
                        <p id={style.reply_text}>{reply.text}</p>
                        <img id={style.reply_image} src={reply.image} alt="" />
                    </div>
                    <img id={style.dot} src={dot_icon} alt="" />
                </div>
                <div id={style.reply_bottom}>
                    <p id={style.reply_react}><span id={style.reply_span}>Like  . </span>{reply.time}</p>
                </div>
            </div>
        </div>
    );
};

export default Reply;