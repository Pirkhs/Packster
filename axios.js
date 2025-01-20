import axios from 'axios';

const BASE_URL = "http://localhost:3000/api/packster/"

const packsterAPI = axios.create({
    baseURL: BASE_URL
})

export function getAllCards(){
    return packsterAPI.get(`/cards`)
}

export function getCardById(id) {
    return packsterAPI.get(`/cards/${id}`)
}

export function postUser(user){
    return packsterAPI.post(`/users`, user)
}

export function getUserByUsername(username){
    return packsterAPI.get(`/users/${username}`)
}