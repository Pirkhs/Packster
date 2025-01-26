import axios from 'axios';
axios.defaults.withCredentials = true;

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

export function signupUser(user){
    return packsterAPI.post(`/signup`, user)
}

export function loginUser(user){
    return packsterAPI.post(`/login`, user)
}

export function requireAuth(){
    return packsterAPI.get(`/auth`)
}

export function logoutUser(){
    return packsterAPI.get('/logout')
}