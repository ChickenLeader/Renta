import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    userData: null,
    userCurrentLocation: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload
        },
        setUserInfo: (state, action) => {
            state.userData = action.payload
        },
        setUserCurrentLocation: (state, action) => {
            state.userCurrentLocation = action.payload
        },
        logout: (state) => {
            state.token = null
            state.userData = null
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, setUserInfo, logout, setUserCurrentLocation } = authSlice.actions

export default authSlice.reducer