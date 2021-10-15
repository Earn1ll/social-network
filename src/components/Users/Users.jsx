import React from "react";
import s from './users.module.css';

let Users = (props) => {
    if(props.users.length === 0) {

    props.setUsers([{
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
        }
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() =>{props.unfollow(u.id)}}>Unfollow</button>
                            :<button onClick={() =>{props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>

            </div>)
        }
    </div>
}



export default Users;