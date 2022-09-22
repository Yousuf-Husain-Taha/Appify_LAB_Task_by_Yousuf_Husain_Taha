import React, { useEffect, useState } from 'react';
import search_icon from '../../images/search_icon.svg';
import default_profile_picture from '../../images/default_profile_picture.svg';
import style from './YourFriends.module.css';

const YourFriends = () => {
    const [ friends, setFriends ] = useState([]);

    useEffect( () => {
        fetch('your_friends.json')
        .then( res => res.json() )
        .then( data => setFriends(data) )
    } , [] )

    return (
        <div id={style.window}>
            <p id={style.title}>Your Friends</p>
            <div id={style.search_bar}>
                <img src={search_icon} alt="" />
                <input id={style.search_input}></input>
            </div>
            {
                friends.map( frnd => {
                    return( <div className={style.friend}>
                                <img src={ frnd.profile_picture === "" ? default_profile_picture : frnd.profile_picture } alt="" />
                                <p>{frnd.name}</p>
                            </div> );
                } )
            }
        </div>
    );
};

export default YourFriends;