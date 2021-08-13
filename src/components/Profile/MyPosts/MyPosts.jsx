import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi,how are you?', likes: 12},
        {id: 2, message: 'It\'s my first post', likes: 24}
    ]
    let postsElements = posts.map(p =>  <Post message={p.message} likes={p.likes}/>);

    return (<div className={s.content}>

            <div>
               <h3>My posts</h3>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}
export default MyPosts;