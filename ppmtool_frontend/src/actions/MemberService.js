import axios from 'axios'

class MemberService{
    retriveAllMembers(id)
    {
        return axios.get(`http://localhost:8080/api/member/${id}`)
    }
    retriveAllUsers()
    {
        return axios.get(`http://localhost:8080/api/member/all`)
    }
    retriveUserByName(name)
    {
        return axios.get(`http://localhost:8080/api/member/user/${name}`)
    }
    addNewMembers(id,username)
    {
        return axios.post(`http://localhost:8080/api/member/${id}/${username}`)
    }
    removeMembers(username)
    {
        return axios.post(`http://localhost:8080/api/member/${username}/remove`)
    }
}

export default new MemberService()