import React from 'react'
import { Route, Switch, Link } from "react-router-dom";

function Profile() {
    return (
        <>
        <h1>Profile</h1>
        
        <ul>
            <li>
                <Link>View Profile</Link>
            </li>
            <li>
                <Link>Edit Profile</Link>
            </li>
        </ul>
        
        <Switch>
            <Route path='/viewprofile' />
            <Route path='/editprofile' />
        </Switch>
        </>
    )
}

export default Profile
