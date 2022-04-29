import { createSlice } from "@reduxjs/toolkit";

interface authSlice {
    email: string,
    password: string,
    token: string
}

const initialState = {
    email: "",
    password: "",
    token: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser(state, action:any) {
            state.email = action.payload.user.email;
            state.password = action.payload.user.password;
            state.token = action.payload.token;
        }
    }
})

export const authActions = authSlice.actions

export default authSlice