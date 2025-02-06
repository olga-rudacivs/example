

//  import { createSlice } from '@reduxjs/toolkit';


// // Начальное состояние с usersPokemons
// const initialState = {
//   userPokemons: [], // Словарь для хранения покемонов пользователей
//   //currentUser: null, // Текущий аутентифицированный пользователь
// };

// const userPokemonsSlice = createSlice({
//   name: 'userPokemons',
//   initialState,
//   reducers: {
//       // setCurrentUser(state, action) {
//       //     state.currentUser = action.payload; // Устанавливаем текущего пользователя
//       // },
//       addPokemon: (state, action) => {
//           if (state.currentUser) {
              
//               state.userPokemons.push(action.payload); // Добавляем покемона текущему пользователю
//           }
//       },
      
//     }
// });


// // Экспортируем действия и редюсер
// export const { setCurrentUser, addPokemon, removePokemon, clearPokemons } = userPokemonsSlice.actions;
// export default userPokemonsSlice.reducer;

