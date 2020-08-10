import axios from 'axios'

const API_URL = 'http://localhost:5001'

export const GetUsers = () => {
    return axios.get(`${API_URL}/users`)
}

export const AddUser = (user) => {
    return axios.post(`${API_URL}/users/add`, user)
}


export const GetExercises = () => {
    return axios.get(`${API_URL}/exercises`)
}

export const GetExercise = (id) => {
    return axios.get(`${API_URL}/exercises/${id}`)
}

export const AddExercise = (exercise) => {
    return axios.post(`${API_URL}/exercises/add`, exercise)
}

export const DeleteExercise = (id) => {
    return axios.delete(`${API_URL}/exercises/${id}`)
}

export const UpdateExercise = (id, exercise) => {
    return axios.post(`${API_URL}/exercises/update/${id}`, exercise)
}