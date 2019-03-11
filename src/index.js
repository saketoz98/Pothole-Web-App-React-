import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import {firebase} from './firebaseConfig';
import createHistory from 'history/createBrowserHistory';
import * as actions from './actions/index';

const history = createHistory();
const app = (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
);

let hasRendered = false;

const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(app, document.getElementById('root'));
        hasRendered = true;
    }
}


firebase.auth().onAuthStateChanged(user=>{
    if(user){
        console.log("Login");
        store.dispatch(actions.login(user.uid));
        renderApp();
        if(history.location.pathname ==='/'){
            history.push('/complaints');
        }
    }else{
        console.log("logout");
        store.dispatch(actions.logout());

        renderApp();

        history.push('/');
    }
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
