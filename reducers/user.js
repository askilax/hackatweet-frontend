import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: { token: null, firstName: '', lastName: '' },
    reducers: {
        setUserData: (state, action) => {
            state.token = action.payload.token;
            state.firstName = action.payload.firstName;
            state.username = action.payload.username;
        },
    },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;