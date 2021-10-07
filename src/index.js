import React from 'react';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";



 let reRenderEntireTree = (state) => {
        ReactDOM.render(
            <BrowserRouter>
                    <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
            </BrowserRouter>,
            document.getElementById('root')        );
    }

;
reRenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    reRenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
