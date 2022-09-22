import React from 'react';
import logo from '../../images/logo.svg';
import search_icon from '../../images/search_icon.svg';
import home_icon from '../../images/home_icon.svg';
import friends_icon from '../../images/friends_icon.svg';
import bell_icon from '../../images/bell_icon.svg';
import chat_icon from '../../images/chat_icon.svg';
import profile_picture_icon from '../../images/profile_picture_icon.svg';
import profile_setting_icons from '../../images/profile_setting_icons.svg';
import style from './Header.module.css';

const Header = () => {
    return (
        <div id={style.header}>
            <div></div>
            <div id={style.middle}>
                <img src={logo} alt="" />
                <div id={style.search_box_container}>
                    <img id={style.search_icon} src={search_icon} alt="" />
                    <input id={style.search_box} placeholder="Search"></input>
                </div>
                <div id={style.content_option}>
                    <img className={style.option_icon} src={home_icon} alt="" />
                    <img className={style.option_icon} src={friends_icon} alt="" />
                    <img className={style.option_icon} src={bell_icon} alt="" />
                    <img className={style.option_icon} src={chat_icon} alt="" />
                    <div id={style.user}>
                        <img src={profile_picture_icon} alt="" />
                        <p id={style.name}>Adnan Chowdhury</p>
                        <img src={profile_setting_icons} alt="" />
                    </div>
                </div>
            </div>
            <div></div>
            {/* 
             */}
        </div>
    );
};

export default Header;