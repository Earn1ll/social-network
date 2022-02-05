import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from 'react';
import {Field, Form, reduxForm} from "redux-form";


let AddNewPostForm = (props) => {
    return <Form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newPostText"} component={"textarea"}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </Form>
}
let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likes={p.likes}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.content}>

            <div>
                <h3>My posts</h3>
            </div>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}



export default MyPosts;