const Add_Post = 'ADD-POST';
const Update_New_Post_Text = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case Add_Post:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likes: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case Update_New_Post_Text:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: Add_Post
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return { type: Update_New_Post_Text, newText: text }
}

export default profileReducer;