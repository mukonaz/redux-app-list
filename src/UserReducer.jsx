import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    users: [],
    currentUser: null,
     };

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

        registerUser: (state, action) => {
            state.users.push(action.payload);
         },
         loginUser: (state, action) => {
        const user = state.users.find(user => user.email === action.payload.email && user.password === action.payload.password);
        if (user) {
        state.currentUser = user;
        }
        },
        logoutUser: (state) => {
        state.currentUser = null;
        },
        addUser: (state, action) => {
            state.push(action.payload);
        },
        deleteUser: (state, action) => {
            return state.filter(user => user.id !== action.payload.id);
        },
        updateUser: (state, action) => {
            const { id, name, quantity, comments, photo, category } = action.payload;
            const existingUser = state.find(user => user.id === id);
            if (existingUser) {
                existingUser.name = name;
                existingUser.quantity = quantity;
                existingUser.comments = comments;
                existingUser.photo = photo;
                existingUser.category = category;
            }
        },
    },
});

export const { registerUser, loginUser, logoutUser ,addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     users: [],
//     currentUser: null,
// };

// const userSlice = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {
//         registerUser: (state, action) => {
//             state.users.push(action.payload);
//         },
//         loginUser: (state, action) => {
//             const user = state.users.find(user => user.email === action.payload.email && user.password === action.payload.password);
//             if (user) {
//                 state.currentUser = user;
//             }
//         },
//         logoutUser: (state) => {
//             state.currentUser = null;
//         },
//     },
// });

// export const { registerUser, loginUser, logoutUser } = userSlice.actions;
// export default userSlice.reducer;
