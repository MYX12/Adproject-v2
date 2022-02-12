import axios from "axios"

class RecommendService {
    executeRecommendationService(name)
    {
        return axios.get(`https://recommendv2.herokuapp.com/podcast?title=${name}`)
    }
}

export default new RecommendService()