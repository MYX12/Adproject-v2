class AuthenticationService{
    registerSuccessfulLogin(userName,password){
        sessionStorage.setItem('authenticatedUser',userName);
    }
    logout()
    {
        sessionStorage.removeItem('authenticatedUser');
    }
    isUserLoggedin()
    {
        let user= sessionStorage.getItem('authenticatedUser');
        if(user==null) return false
        return true
    }
    getLoggedInUserName()
    {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null)return ''
        return user
    }
}

export default new AuthenticationService()