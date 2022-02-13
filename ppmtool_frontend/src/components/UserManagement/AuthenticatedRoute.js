import React,{Component} from 'react'
import AuthenticationService from './AuthenticationService'
import {Route, Redirect} from 'react-router-dom'

class AuthenticatedRouter extends Component{
    render()

{
    if(AuthenticationService.isUserLoggedin())
    {
       return <Route {...this.props}></Route>
    }
    else{
       return <Redirect to='/login'/>
    }
}}

export default AuthenticatedRouter