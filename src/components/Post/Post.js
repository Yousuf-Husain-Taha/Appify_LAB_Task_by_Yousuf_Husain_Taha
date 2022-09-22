import React, { useState } from 'react';
import default_profile_picture from '../../images/default_profile_picture.svg';
import profile_picture_icon from '../../images/profile_picture_icon.svg';
import kleep_icon from '../../images/kleep_icon.svg';
import face_icon from '../../images/face_icon.svg';
import gif_icon from '../../images/gif_icon.svg';
import telegram_icon from '../../images/telegram_icon.svg';
import thumbs_up from '../../images/thumbs_up.svg';
import comment from '../../images/comment.svg';
import share from '../../images/share.svg';
import post_option_icon from '../../images/post_option_icon.svg';
import Reaction from '../../components/Reaction/Reaction';
import Comment from '../Comment/Comment';
import PostSettings from '../PostSettings/PostSettings';
import like from '../../images/like.svg';
import love from '../../images/love.svg';
import care from '../../images/care.svg';
import haha from '../../images/haha.svg';
import wow from '../../images/wow.svg';
import sad from '../../images/sad.svg';
import angry from '../../images/angry.svg';
import ReactOption from '../ReactOption/ReactOption';
import style from './Post.module.css';

const Post = ({data}) => {
    const [ post_setting, setPost_setting ] = useState(data.post_setting);
    const [ poll , setPoll ] = useState(data.poll);
    const [ comment_view , setComment_view ] = useState(data.comment_view);
    const [ react_option , setReact_option ] = useState(false);
    const [ userrect , setUserRect ] = useState("none");
    var react_counter_text = "";

    const addReact = rct => {
        setUserRect(rct);
    }

    const close_react_option =() => {
        setReact_option(false);
    }

    var PP = ""
    if( data.profile_picture === "" ){
        PP=default_profile_picture;
    }else{
        PP=data.profile_picture;
    }

    const pic_len = data.post.images.length;
    const pic_rem = pic_len-4;

    let sortable = [];
    for (var react in data.reacts) {
        sortable.push([react, data.reacts[react]]);
    }
    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });

    const total_react_count = data.reacts.like + data.reacts.love + data.reacts.care + data.reacts.haha + data.reacts.wow + data.reacts.sad + data.reacts.angry;

    if( total_react_count > 0 && userrect !=="none" ){
        react_counter_text = "You and " + total_react_count + " Other";
    }else if( total_react_count > 0 && userrect ==="none" ){
        react_counter_text = total_react_count + "";
    }else if( total_react_count === 0 && userrect !=="none" ){
        react_counter_text = "You";
    }

    const comments = data.comments;

    return (
        <div id={style.post}>
            <div id={style.info}>
                <img id={style.postman_profile_picture} src={PP} alt="Profile_Picture" />
                <div id={style.info_text}>
                    <p id={style.activity}><span id={style.postman_name}>  {data.name} </span>{data.activity}</p>
                    <p id={style.time}>{data.time}</p>
                </div>
            </div>
            <div id={style.post_body}>
                <p id={style.post_text}>{data.post.text}</p>
                {
                    poll ? <div id={style.poll_container}>
                        <div className={style.poll} >
                            <input type="radio" />
                            <div className={style.poll_text}>
                                <p>Added by you</p>
                                <h4>Football</h4>
                            </div>
                        </div>
                        <div className={style.poll} >
                            <input type="radio" />
                            <div className={style.poll_text}>
                                <p>Added by you</p>
                                <h4>Cricket</h4>
                            </div>
                        </div>
                        <div className={style.poll} >
                            <input type="radio" />
                            <div className={style.poll_text}>
                                <p>Added by you</p>
                                <h4>Badminton</h4>
                            </div>
                        </div>
                    </div> : null
                }
                <div id={style.post_image}>
                    {
                        pic_len === 1 ? <img id={style.w_100} src={data.post.images[0]} alt="" /> : null
                    }
                    {
                        pic_len === 2 ? <div id={style.two_pic}>
                            <img id={style.w_50} src={data.post.images[0]} alt="" /> <img id={style.w_50} src={data.post.images[1]} alt="" /></div> : null
                    }
                    {
                        pic_len === 3 ? <div>
                            <img id={style.w_100} src={data.post.images[0]} alt="" />
                            <div id={style.two_pic}><img id={style.w_50} src={data.post.images[1]} alt="" /> <img id={style.w_50} src={data.post.images[2]} alt="" /></div>
                        </div> : null
                    }
                    {
                        pic_len === 4 ? <div id={style.four_pic}>
                            <div id={style.two_pic}><img id={style.w_50} src={data.post.images[0]} alt="" /> <img id={style.w_50} src={data.post.images[1]} alt="" /></div>
                            <div id={style.two_pic}><img id={style.w_50} src={data.post.images[2]} alt="" /> <img id={style.w_50} src={data.post.images[3]} alt="" /></div>
                        </div> : null
                    }
                    {
                        pic_len > 4 ? <div id={style.four_pic}>
                            <div id={style.two_pic}><img id={style.w_50} src={data.post.images[0]} alt="" /> <img id={style.w_50} src={data.post.images[1]} alt="" /></div>
                            <div id={style.three_pic}>
                                <img id={style.w_33} src={data.post.images[2]} alt="" />
                                <img id={style.w_33} src={data.post.images[3]} alt="" />
                                <p id={style.pic_rem} style={ { backgroundImage: `url(${data.post.images[4]})`, backgroundSize: 'cover', } }>+{pic_rem}</p>
                            </div>
                        </div> : null
                    }
                </div>
            </div>
            <div id={style.counter}>
                <div id={style.reacts_counter}>
                    {
                        sortable.reverse().slice(0,3).map( ic => <Reaction ic={ic} key={ic[1]} ></Reaction> )
                    }
                    <p>{react_counter_text}</p>
                </div>
                <p id={style.comments}><span id={style.comments_counter}>{data.comments.length}</span> comments</p>
            </div>
            <div id={style.react_option_container}>
                {
                    react_option ? <ReactOption addReact={addReact} close_react_option={close_react_option} userrect={userrect}></ReactOption> : null
                }
            </div>
            <div id={style.option}>
                <button onClick={ () => setReact_option(!react_option) } className={style.option_button}>
                    {
                        userrect === 'none' ?  <div className={style.react_button}>
                                                    <img src={thumbs_up} alt="" />
                                                    <p id={style.option_text}>Like</p>
                                               </div> : null
                    }
                    {
                        userrect === 'like' ?  <div className={style.react_button}>
                                                    <img src={like} alt="" />
                                                    <p id={style.option_text} style={{color: "#3D73BA", fontWeight: 600}}>Like</p>
                                               </div> : null
                    }
                    {
                        userrect === 'love' ?  <div className={style.react_button}>
                                                    <img src={love} alt="" />
                                                    <p id={style.option_text} style={{color: "#E72C4A", fontWeight: 600}}>Love</p>
                                               </div> : null
                    }
                    {
                        userrect === 'care' ?  <div className={style.react_button}>
                                                    <img src={care} alt="" />
                                                    <p id={style.option_text} style={{color: "#F9B849", fontWeight: 600}}>Care</p>
                                               </div> : null
                    }
                    {
                        userrect === 'haha' ?  <div className={style.react_button}>
                                                    <img src={haha} alt="" />
                                                    <p id={style.option_text} style={{color: "#F9B849", fontWeight: 600}}>Haha</p>
                                               </div> : null
                    }
                    {
                        userrect === 'wow' ?  <div className={style.react_button}>
                                                    <img src={wow} alt="" />
                                                    <p id={style.option_text} style={{color: "#F9B849", fontWeight: 600}}>Wow</p>
                                               </div> : null
                    }
                    {
                        userrect === 'sad' ?  <div className={style.react_button}>
                                                    <img src={sad} alt="" />
                                                    <p id={style.option_text} style={{color: "#F9B849", fontWeight: 600}}>Sad</p>
                                               </div> : null
                    }
                    {
                        userrect === 'angry' ?  <div className={style.react_button}>
                                                    <img src={angry} alt="" />
                                                    <p id={style.option_text} style={{color: "#E35926", fontWeight: 600}}>Angry</p>
                                               </div> : null
                    }
                </button>
                <button className={style.option_button}>
                    <img src={comment} alt="" />
                    <p id={style.option_text}>Comment</p>
                </button>
                <button className={style.option_button}>
                    <img src={share} alt="" />
                    <p id={style.option_text}>Share</p>
                </button>
            </div>
            <div id={style.comment_viewer}>
                {
                    comment_view ? null : <p onClick={ () => setComment_view(true) }>View more comments</p>
                }
            </div>
            <div id={style.commenter}>
                <img id={style.commenter_pic} src={profile_picture_icon} alt="" />
                <div id={style.commenter_option}>
                    <img className={style.commenter_option_icon} src={face_icon} alt="" />
                    <img className={style.commenter_option_icon} src={kleep_icon} alt="" />
                    <img className={style.commenter_option_icon} src={gif_icon} alt="" />
                    <div id={style.comment_box}>
                        <input id={style.input_comment} type='text' placeholder="Write a Comment..." />
                        <img id={style.telegram_icon} src={telegram_icon} alt="" />
                    </div>
                </div>
            </div>
            {
                comment_view ? <div id={style.comments_container}>{comments.map( cmnt => <Comment key={comments.indexOf(cmnt)} comment={cmnt}></Comment> )}</div> : null
            }
            <img onClick={ () => setPost_setting( !post_setting ) } id={style.post_option_icon} src={post_option_icon} alt="" />
            {
                post_setting ? <PostSettings></PostSettings> : null
            }
            
        </div>
    );
};

export default Post;