
// import { createSlice } from '@reduxjs/toolkit';

// // Шаг 3: Определение начального состояния
// const initialState = {
//   balance: 0, // Баланс пользователя изначально равен 0
//   currentUser: null,
// };

// // Шаг 4: Создание слайса
// const userMoneySlice = createSlice({
//   name: 'userMoney', // Название слайса
//   initialState, // Начальное состояние
//   reducers: {
//     setCurrentUser(state, action) {
//       state.currentUser = action.payload; // Устанавливаем текущего пользователя
//       state.balance = action.payload.balance || 0; // Устанавливаем баланс, беря значение из пользователя или 0
//   },
//     deposit: (state, action) => {
//       // Шаг 5: Редюсер для пополнения баланса
//       state.balance += action.payload; // Увеличивает баланс на переданное значение
//     },
//     withdraw: (state, action) => {
//       // Шаг 6: Редюсер для снятия с баланса
//       state.balance -= action.payload; // Уменьшает баланс на переданное значение
//     },
//     setBalance: (state, action) => {
//       // Шаг 7: Редюсер для установки нового баланса
//       state.balance = action.payload; // Устанавливает новый баланс
//     },
//   },
// });

// // Шаг 8: Экспорт действий и редюсера
// export const { deposit, withdraw, setBalance, setCurrentUser } = userMoneySlice.actions;
// export default userMoneySlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   balance: 0,
// };

// const userMoneySlice = createSlice({
//   name: 'userMoney',
//   initialState,
//   reducers: {
//     setBalance: (state, action) => {
//       state.balance = action.payload;
//     },
//     deposit: (state, action) => {
//       state.balance += action.payload;
//     },
//     withdraw: (state, action) => {
//       state.balance -= action.payload;
//     },
//   },
// });

// // Экспортируем действия и редюсер
// export const { deposit, withdraw, setBalance } = userMoneySlice.actions;
// export default userMoneySlice.reducer;
