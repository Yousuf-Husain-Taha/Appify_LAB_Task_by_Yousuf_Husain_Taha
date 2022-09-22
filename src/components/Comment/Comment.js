import React, { useState } from 'react';
import style from './Comment.module.css';
import profile_picture_icon from '../../images/profile_picture_icon.svg';
import dot_icon from '../../images/dot_icon.svg';
import kleep_icon from '../../images/kleep_icon.svg';
import face_icon from '../../images/face_icon.svg';
import gif_icon from '../../images/gif_icon.svg';
import telegram_icon from '../../images/telegram_icon.svg';
import Reply from '../Reply/Reply';

const Comment = ({comment}) => {
    const [ reply, setReply ] = useState(false);

    let PP="";
    if(comment.profile_picture === ""){
        PP = profile_picture_icon;
    }
    const replies = comment.reply;
    return (
        <div id={style.comment}>
            <img id={style.commenter_pic} src={PP} alt="" />
            <div id={style.comment_info}>
                <div id={style.comment_body_container}>
                    <div id={style.comment_body}>
                        <p id={style.commenter_name}>{comment.name}</p>
                        <p id={style.comment_text}>{comment.text}</p>
                        <img id={style.comment_image} src={comment.image} alt="" />
                    </div>
                    <img id={style.dot} src={dot_icon} alt="" />
                </div>
                <div id={style.comment_bottom}>
                    <p id={style.comment_react}><span id={style.comment_span}>Like  <span onClick={() => {setReply(true)}}>Reply</span> . </span>{comment.time}</p>
                </div>
                {
                    replies.map( rpl => <Reply key={replies.indexOf(rpl)} reply={rpl}></Reply> )
                }
                {
                    reply ? <div id={style.replyer}>
                                <img id={style.replyer_pic} src={profile_picture_icon} alt="" />
                                <div id={style.replyer_option}>
                                    <img className={style.replyer_option_icon} src={face_icon} alt="" />
                                    <img className={style.replyer_option_icon} src={kleep_icon} alt="" />
                                    <img className={style.replyer_option_icon} src={gif_icon} alt="" />
                                    <div id={style.reply_box}>
                                        <input id={style.input_reply} type='text' placeholder="Write a reply..." />
                                        <img id={style.telegram_icon} src={telegram_icon} alt="" />
                                    </div>
                                </div>
                            </div> : null
                }
            </div>
        </div>
    );
};

export default Comment;