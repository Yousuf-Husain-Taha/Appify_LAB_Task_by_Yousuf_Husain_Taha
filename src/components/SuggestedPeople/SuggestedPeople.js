import React, { useEffect, useState } from 'react';
import default_profile_picture from '../../images/default_profile_picture.svg';
import style from './SuggestedPeople.module.css';

const SuggestedPeople = () => {
    const [peoples, setPeoples] = useState([]);
    useEffect( () => {
        fetch('suggested_people.json')
        .then(res => res.json())
        .then( data => setPeoples(data) )
    } , [] );
    return (
        <div id={style.suggested_people}>
            <p id={style.suggested_people_title}>Suggested People</p>
            {
                peoples.map( people => {
                    return (<div className={style.people}>
                                <div className={style.people_info}>
                                    <img src={ people.profile_picture === "" ? default_profile_picture : people.profile_picture } alt="" />
                                    <p>{people.name}</p>
                                </div>
                                <button>Add +</button>
                            </div>);
                } )
            }
        </div>
    );
};

export default SuggestedPeople;