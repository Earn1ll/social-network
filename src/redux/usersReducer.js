const Follow = 'Follow';
const Unfollow = 'Unfollow';
const Set_Users = 'Set_Users';

let initialState = {
    users: [
<<<<<<< HEAD
       /* {
=======
        {
>>>>>>> 1802cba (add UsersPage (bll and ui))
            id: 1,
            followed: true,
            photoUrl:'https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png',
            status: 'I am a superFrontendDeveloper! :))',
            location: {city: 'Brest', country: 'Belarus'}
        },
        {
            id: 2,
            followed: false,
            photoUrl:'https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png',
            fullName: 'Vasiliy',
            status: 'Working hard!',
            location: {city: 'Cheboksary', country: 'Russia'}
        },
        {
            id: 3,
            followed: true,
            photoUrl:'https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png',
            fullName: 'Alexey',
            status: 'Hello people!',
            location: {city: 'Minsk', country: 'Belarus'}
        },

<<<<<<< HEAD
   */ ]
=======
    ]
>>>>>>> 1802cba (add UsersPage (bll and ui))

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case Follow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case Unfollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })

            }
        case Set_Users: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: Follow,
        userId
    }
}
export const unfollowAC = (userId) => {
    return {
        type: Unfollow,
        userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: Set_Users,
        users
    }
}

export default usersReducer;