import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";




const MyPosts = (props) => {


    let postsElements =
        props.posts.map( p =>  <Post message={p.message} likes={p.likes}/>);

    let newPostElement = React.createRef();

    let addPost = () => {

        props.dispatch(addPostActionCreator());

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        //let action = {type:'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.content}>

            <div>
               <h3>My posts</h3>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}
export default MyPosts;