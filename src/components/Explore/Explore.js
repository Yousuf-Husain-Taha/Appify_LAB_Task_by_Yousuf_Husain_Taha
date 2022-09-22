import React from 'react';
import style from './Explore.module.css'
import saved_post_icon from '../../images/saved_posts_icon.svg'
import people_icon from'../../images/people_icon.svg'
import groups_icon from '../../images/group_icon.svg'
import pages_icon from '../../images/pages_icon.svg'
import events_icon from '../../images/events_icon.svg'

const Explore = () => {
    return (
        <div id={style.explore}>
            <p id={style.explore_title}>Explore</p>
            <div className={style.explore_option}>
                <img src={saved_post_icon} alt='' />
                <p>Saved Posts</p>
            </div>
            <div className={style.explore_option}>
                <img src={people_icon} alt='' />
                <p>People</p>
            </div>
            <div className={style.explore_option}>
                <img src={groups_icon} alt='' />
                <p>Groups</p>
            </div>
            <div className={style.explore_option}>
                <img src={pages_icon} alt='' />
                <p>Pages</p>
            </div>
            <div className={style.explore_option}>
                <img src={events_icon} alt='' />
                <p>Events</p>
            </div>
        </div>
    );
};

export default Explore;