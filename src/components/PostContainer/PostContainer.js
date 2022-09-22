import React , {useState , useEffect} from 'react';
import Post from '../Post/Post';
import style from './PostContainer.module.css';

const PostContainer = () => {
    const [ posts , setPosts ] = useState([]);

    useEffect( () => {
        fetch("post.json")
        .then( res => res.json() )
        .then( data => setPosts(data) )
    } , [] );

    return (
        <div id={style.post_container}>
            {
                posts.map( post => <Post key={post.id} data={post}></Post> )
            }
        </div>
    );
};

export default PostContainer;