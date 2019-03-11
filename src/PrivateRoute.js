import React from 'react';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';
import Navbar from './components/Layout/Navbar';

const PrivateRoute = ({
    isAuthenticated,
    component : Component,
    ...rest
})=>(
    <Route {...rest} component={(props)=>(
        isAuthenticated ? (
            <div>
                <Navbar>
                    <Component {...props}/>
                </Navbar>
            </div>
        ):(
            <Redirect to='/'/>
        )
    )} />
);

const mapStateToProps = (state)=>({
    isAuthenticated : !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
