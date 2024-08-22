import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        setUsers: (state, action) => {
            return action.payload;
        },
        addUser: (state, action) => {
            state.push(action.payload);
        },
        deleteUser: (state, action) => {
            return state.filter(user => user.id !== action.payload.id);
        },
        // Add other reducers like editUser if needed
    },
});

export const { setUsers, addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
