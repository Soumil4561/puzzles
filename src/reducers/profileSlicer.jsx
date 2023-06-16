import { createSlice } from '@reduxjs/toolkit'
import { useCookies } from 'react-cookie'

export const profileSlicer = createSlice({
    name: 'profile',
    initialState: {
        userID: null,
        username: 'Not Logged In',
        email: 'Not Logged In',
        loggedIn: false,
        profilePhoto: null
    },
    reducers: {
        login: (state, action) => {
            state.userID = action.payload.userID
            state.username = action.payload.username
            state.email = action.payload.email
            state.loggedIn = true
            state.profilePhoto = action.payload.profilePhoto
        },
        logout: (state) => {
            state.userID = null
            state.username = 'Not Logged In'
            state.email = 'Not Logged In'
            state.loggedIn = false
            state.profilePhoto = null
        },
        updateProfilePhoto: (state, action) => {
            state.profilePhoto = action.payload.profilePhoto
        },
        updateProfileName: (state, action) => {
            state.username = action.payload.username
        }
    }
})

export const { login, logout, updateProfilePhoto } = profileSlicer.actions;

export default profileSlicer.reducer;