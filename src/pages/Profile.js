import React from 'react'
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";

import EditProfile from '../components/EditProfile';
import ViewProfile from '../components/ViewProfile';

function Profile() {
    const { path, url } = useRouteMatch();
    
    return (
        <>
        <h1>Profile</h1>
        
        <ul>
            <li>
                <Link to={`${url}/viewprofile`}>View Profile</Link>
            </li>
            <li>
                <Link to={`${url}/editprofile`}>Edit Profile</Link>
            </li>
        </ul>
        
        <Switch>
            <Route path={`${path}/viewprofile`} component={ViewProfile} />
            <Route path={`${path}/editprofile`} component={EditProfile} />
        </Switch>
        </>
    )
}

export default Profile
