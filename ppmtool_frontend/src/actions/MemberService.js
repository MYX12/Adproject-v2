import axios from 'axios'

class MemberService{
    retriveAllMembers(id)
    {
        return axios.get(`http://localhost:8080/api/member/${id}`)
    }
}

export default new MemberService()