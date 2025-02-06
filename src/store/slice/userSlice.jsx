

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     users: [],
//     currentUser: null,
// };

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         addUser: (state, action) => {
//             const newUser = { ...action.payload, balance: 0, pokemons: [] }; // Добавляем покемонов и баланс
//             state.users.push(newUser);
//         },
//         login(state, action) {
//             const user = state.users.find(user => user.username === action.payload.username);
//             if (user) {
//                 state.currentUser = user;
//             }
//         },
//         logoutUser(state) {
//             state.currentUser = null;
//         },
//         deposit: (state, action) => {
//             if (state.currentUser) {
//                 state.currentUser.balance += action.payload; // Увеличиваем баланс текущего пользователя
//             }
//         },
//         withdraw: (state, action) => {
//             if (state.currentUser) {
//                 state.currentUser.balance -= action.payload; // Уменьшаем баланс текущего пользователя
//             }
//         },
//         setBalance: (state, action) => {
//             if (state.currentUser) {
//                 state.currentUser.balance = action.payload;
//             }
//         },
//         addPokemon: (state, action) => {
//             if (state.currentUser) {
//                 state.currentUser.pokemons.push(action.payload); // Добавляем покемона к текущему пользователю
//             }
//         },
//     },
// });

// // Экспортируем действия
// export const { addUser, login, logoutUser, deposit, withdraw, setBalance, addPokemon } = userSlice.actions;
// export default userSlice.reducer;

