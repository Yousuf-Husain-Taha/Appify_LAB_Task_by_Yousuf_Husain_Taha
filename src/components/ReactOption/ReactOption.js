import React from 'react';
import like from '../../images/like.svg';
import love from '../../images/love.svg';
import care from '../../images/care.svg';
import haha from '../../images/haha.svg';
import wow from '../../images/wow.svg';
import sad from '../../images/sad.svg';
import angry from '../../images/angry.svg';
import style from './ReactOption.module.css';

const ReactOption = ({addReact , close_react_option , userrect}) => {

    const handle_addReact = rct => {
        if( userrect === rct ){
            addReact("none")
        }else{
            addReact(rct);
        }
        close_react_option();
    }

    return (
        <div id={style.root}>
            <img onClick={() => handle_addReact("like")} className={style.emoji} src={like}  alt="Like" />
            <img onClick={() => handle_addReact("love")} className={style.emoji} src={love}  alt="Love" />
            <img onClick={() => handle_addReact("care")} className={style.emoji} src={care}  alt="Care" />
            <img onClick={() => handle_addReact("haha")} className={style.emoji} src={haha}  alt="Haha" />
            <img onClick={() => handle_addReact("wow")} className={style.emoji} src={wow}   alt="Wow" />
            <img onClick={() => handle_addReact("sad")} className={style.emoji} src={sad}   alt="Sad" />
            <img onClick={() => handle_addReact("angry")} className={style.emoji} src={angry} alt="Angry" />
        </div>
    );
};

export default ReactOption;