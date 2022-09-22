import React from 'react';
import YouMightLike from '../YouMightLike/YouMightLike';
import YourFriends from '../YourFriends/YourFriends';
import style from './RightSide.module.css';

const RightSide = () => {
    return (
        <div id={style.right_side}>
            <YouMightLike></YouMightLike>
            <YourFriends></YourFriends>
        </div>
    );
};

export default RightSide;