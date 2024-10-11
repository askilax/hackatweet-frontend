import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:user,
    initialState:{firstName: '',userName: '', token: ''},
    reducers:{
        setUserData:(state,action) =>{
            state.firstName = action.payload.firstName;
            state.userName = action.payload.userName;
            state.token = action.payload.token
        },
    },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;