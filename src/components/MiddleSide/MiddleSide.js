import React from 'react';
import NoPosts from '../NoPosts/NoPosts';
import PostContainer from '../PostContainer/PostContainer';
import PostOption from '../PostOption/PostOption';
import PostSelector from '../PostSelector/PostSelector';
import StoryContainer from '../StoryContainer/StoryContainer';
import style from './MiddleSide.module.css';

const MiddleSide = () => {
    return (
        <div id={style.middleside}>
            <StoryContainer></StoryContainer>
            <PostOption></PostOption>
            <PostSelector></PostSelector>
            <PostContainer></PostContainer>
            <NoPosts></NoPosts>
        </div>
    );
};

export default MiddleSide;