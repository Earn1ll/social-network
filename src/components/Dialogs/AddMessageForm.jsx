import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {required,maxLenghtCreator} from "../../utils/validators/validators";


const maxLength50 = maxLenghtCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>

                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       placeholder='Enter your message' name="newMessageBody" />
            </div>
            <div>
                <button>Send</button>

            </div>
        </form>
    )
}
export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);
