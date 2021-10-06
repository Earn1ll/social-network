import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = (props) => {



    return (

            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>

                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={ () => <Dialogs store={props.store}  /> }/>
                    <Route path={'/profile'} render={ () => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}/> }/>
                    <Route path={'/news'} render={ () => <News /> }/>
                    <Route path={'/music'} render={ () => <Music/> }/>
                    <Route path={'/settings'} render={ () => <Settings /> }/>

                </div>
            </div>

    );
}


export default App;

