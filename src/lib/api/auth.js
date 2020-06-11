import axios from 'axios'

export const login = ({email, password}) => axios.post('/api/auth/login', {email, password})
export const checkLogin = () => axios.get("/api/auth/checkLogin")
export const logout = () => axios.post('/api/auth/logout')