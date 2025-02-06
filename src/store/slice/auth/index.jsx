
// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid'; // Импортируем nanoid для генерации уникальных ID

// const initialState = {
//     users: [], // Массив для хранения пользователей
//    currentUser: null,
// };

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         // setCurrentUser(state, action) {
//         //     state.currentUser = action.payload; // Устанавливаем текущего пользователя
           
//         // },

//         login(state, action) {
//             const { username, password } = action.payload;
//             const user = state.users.find(user => user.username === username && user.password === password );
//             if (user) {
               
//                 state.currentUser = user; 
                
//                 // Устанавливаем текущего пользователя
//             }
//         },
//         register(state, action) {
//             const newUser = {
//                 id: nanoid(), // Генерируем уникальный ID для нового пользователя
//                 ...action.payload,
//                 pokemons: [], // Изначально пустой массив покемонов
//                 balance: 0,   // Изначально баланс равен 0
//             };
//             state.users.push(newUser); // Сохраняем нового пользователя
//             state.currentUser = newUser; // Устанавливаем текущего пользователя
//         },
//         logout(state) {
//             state.currentUser = null; // Удаляем текущего пользователя
//         },
//     },
// });

// // Экспорт действий
// export const { login, register, logout, setCurrentUser } = authSlice.actions;
// export default authSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid'; // Импортируем nanoid для генерации уникальных ID

const initialState = {
    users: [], // Массив для хранения пользователей
    currentUser: null, // Текущий аутентифицированный пользователь
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser(state, action) {
            const newUser = {
                id: nanoid(), // Генерируем уникальный ID для нового пользователя
                ...action.payload,
                balance: 0,  // Изначально баланс равен 0
                pokemons: [], // Изначально пустой массив покемонов
            };
              // Логирование для отладки
              console.log('Before adding user:', state.users); 

              if (!state.users) {
                  console.error('Users array is undefined'); // Логирование ошибки
                  state.users = []; // Инициализация, если она не была
              }
  
            state.users.push(newUser); // Сохраняем нового пользователя
            state.currentUser = newUser;
            
        },
        login(state, action) {
            const { username, password } = action.payload;
            const user = state.users.find(user => user.username === username && user.password === password);
            // if (user) {
            //     state.currentUser = user; // Устанавливаем текущего пользователя
            // }
            if (user) {
                state.currentUser = user; // Устанавливаем текущего пользователя
            } else {
                console.error("Неверные учетные данные при попытке входа.");
            }
        },
        logout(state) {
            state.currentUser = null; // Удаляем текущего пользователя
        },
        deposit: (state, action) => {
                  // Шаг 5: Редюсер для пополнения баланса
                  state.currentUser.balance += action.payload; // Увеличивает баланс на переданное значение
                },
                withdraw: (state, action) => {
                  // Шаг 6: Редюсер для снятия с баланса
                  state.currentUser.balance -= action.payload; // Уменьшает баланс на переданное значение
                },
                setBalance: (state, action) => {
                  // Шаг 7: Редюсер для установки нового баланса
                  state.currentUser.balance = action.payload; // Устанавливает новый баланс
                },
        
        addPokemon(state, action) {
            if (state.currentUser) {
                state.currentUser.pokemons.push(action.payload); // Добавляем покемона к текущему пользователю
            }
        },
        clearPokemons(state) {
            if (state.currentUser) {
                state.currentUser.pokemons = []; // Очищаем покемонов текущего пользователя
            }
        },
    },
});

// Экспортируем действия и редюсер
export const { 
    addUser, 
    login, 
    logout, 
    setBalance, 
    deposit, 
    withdraw, 
    addPokemon, 
    removePokemon, 
    clearPokemons 
} = authSlice.actions;

export default authSlice.reducer;
