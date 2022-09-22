import React, { useState } from 'react';
import { useEffect } from 'react';
import default_profile_picture from '../../images/default_profile_picture.svg';
import style from './YouMightLike.module.css';

const YouMightLike = () => {
    const [ items, setItems ] = useState([]);

    useEffect( () => {
        fetch("you_might_like.json")
        .then( res => res.json() )
        .then( data => setItems(data) )
    } , [] )

    return (
        <div id={style.you_might_like}>
            <p id={style.title}>You Might Like</p>
            {
                items.map( item => {
                    return(<div className={style.item}>
                            <div className={style.info}>
                                <img src={ item.profile_picture === "" ? default_profile_picture : item.profile_picture } alt="" />
                                <div className={style.info_text}>
                                    <h1>{item.name}</h1>
                                    <h2>{item.info}</h2>
                                </div>
                            </div>
                            <div className={style.button_container}>
                                <button className={style.ignor_button}>Ignor</button>
                                <button className={style.follow_button}>Follow</button>
                            </div>
                          </div>);
                } )
            }
        </div>
    );
};

export default YouMightLike;