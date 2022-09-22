import React from 'react';
import style from './Reaction.module.css';
import like from '../../images/like.svg';
import love from '../../images/love.svg';
import care from '../../images/care.svg';
import haha from '../../images/haha.svg';
import wow from '../../images/wow.svg';
import sad from '../../images/sad.svg';
import angry from '../../images/angry.svg';

const Reaction = ({ic}) => {
    if( ic[1] > 0 ){
        if( ic[0] === 'like' ){
            return <img className={style.react_image} src={like} alt='' />
        }else if( ic[0] === 'love' ){
            return <img className={style.react_image} src={love} alt='' />
        }else if( ic[0] === 'care' ){
            return <img className={style.react_image} src={care} alt='' />
        }else if( ic[0] === 'haha' ){
            return <img className={style.react_image} src={haha} alt='' />
        }else if( ic[0] === 'wow' ){
            return <img className={style.react_image} src={wow} alt='' />
        }else if( ic[0] === 'sad' ){
            return <img className={style.react_image} src={sad} alt='' />
        }else if( ic[0] === 'angry' ){
            return <img className={style.react_image} src={angry} alt='' />
        }
    }
};

export default Reaction;