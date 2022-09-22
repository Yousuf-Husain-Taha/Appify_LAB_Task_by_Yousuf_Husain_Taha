import React from 'react';
import profile_picture from '../../images/profile_picture_icon.svg'
import style from './StoryContainer.module.css';

const StoryContainer = () => {

    const stories = [
                        {
                            id:1,
                            name: "Adnan Chowdhury",
                            pic: "https://img.freepik.com/premium-photo/sunlight-is-trees-connected-boats-is-clear-water-near-forest-beautiful-majestic-mountain_146671-14225.jpg?w=2000"
                        },{
                            id:2,
                            name: "Flo Pharao",
                            pic: "https://cdn.pixabay.com/photo/2013/10/02/15/51/tree-189852__340.jpg"
                        },{
                            id:3,
                            name: "Mac Dusa",
                            pic: "https://thumbs.dreamstime.com/b/morning-sun-tree-mountain-peak-chula-vista-background-near-otay-lake-california-70101227.jpg"
                        },{
                            id:4,
                            name: "Sadek Hossain",
                            pic: "https://images.pexels.com/photos/634026/pexels-photo-634026.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        },{
                            id:5,
                            name: "Kamran Ahmed",
                            pic: "https://images.pexels.com/photos/6070278/pexels-photo-6070278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        }
                    ];
    

    return (
        <div id={style.container}>
            <div className={style.wrapper}>
                {
                    stories.map( item => {return(
                        <div className={style.item}>
                            <div id={style.profile_picture}><img src={profile_picture} alt="" /></div>
                            <div id={style.story}><img src={item.pic} alt="" /></div>
                            <div id={style.profile_name}><p>{item.name}</p></div>
                        </div>
                    );} )
                }
            </div>
        </div>
    );
};

export default StoryContainer;