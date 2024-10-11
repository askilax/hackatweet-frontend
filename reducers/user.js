import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: { token: null, firstName: '', userName: '' },
    reducers: {
        setUserData: (state, action) => {
            state.token = action.payload.token;
            state.firstName = action.payload.firstName;
            state.userName = action.payload.userName;
        },
    },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;