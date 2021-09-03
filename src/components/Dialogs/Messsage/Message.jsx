import s from './../Dialogs.module.css';
import React from 'react';


const Message = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let message = newMessageElement.current.value;
        alert(message);
    }

    return (
        <div>
            <div className={s.dialog}>{props.message}</div>
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}


export default Message;