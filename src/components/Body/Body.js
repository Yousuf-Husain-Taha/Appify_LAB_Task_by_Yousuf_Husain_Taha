import React from 'react';
import style from './Body.module.css';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import MiddleSide from '../MiddleSide/MiddleSide';

const Body = () => {
    return (
        <div id={style.body}>
            <div></div>
            <div>
                <LeftSide></LeftSide>
            </div>
            <div>
                <MiddleSide></MiddleSide>
            </div>
            <div>
                <RightSide></RightSide>
            </div>
            <div></div>
        </div>
    );
};

export default Body;