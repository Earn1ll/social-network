import React from 'react';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'))


/*reRenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    reRenderEntireTree(state);
});*/
//  reRenderEntireTree();

