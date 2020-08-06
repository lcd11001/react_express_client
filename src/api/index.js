import axios from 'axios'

const API_URL = 'http://localhost:5001'

export const AddUser = (user) => {
    return axios.post(`${API_URL}/users/add`, user)
}