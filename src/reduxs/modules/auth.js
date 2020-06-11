import { createAction, handleActions }  from 'redux-actions'
import {pender} from 'redux-pender'
import * as AuthAPI from '../../lib/api/auth'
import { Map } from 'immutable' 

const LOGIN = "auth/LOGIN"
const LOGOUT = "auth/LOGOUT"

export const login = createAction(LOGIN, AuthAPI.login)
export const logout = createAction(LOGOUT, AuthAPI.logout)

const initialState = Map({
    login : Map({
        form: Map({
            email: "",
            password: "",
        })
    }),
    result : Map({})
})

export default handleActions({
    ...pender({
        type: LOGIN,
        onSuccess: (state, action) => state.set('result', Map(action.payload.data))
    }),
}, initialState)