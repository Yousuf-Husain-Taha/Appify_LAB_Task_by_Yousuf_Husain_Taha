import React from 'react';
import Download from '../Download/Download';
import Explore from '../Explore/Explore';
import SuggestedPeople from '../SuggestedPeople/SuggestedPeople';
import style from './LeftSide.module.css'

const LeftSide = () => {
    return (
        <div id={style.left_side}>
            <Explore></Explore>
            <Download></Download>
            <SuggestedPeople></SuggestedPeople>
        </div>
    );
};

export default LeftSide;