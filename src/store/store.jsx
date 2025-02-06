import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth/index.jsx";
import apiSlice from "./slice/apiSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log("error loadState");
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log("error saveState");
    // Игнорирование ошибок записи
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    auth: authReducer,

    [apiSlice.reducerPath]: apiSlice.reducer, // Добавляем редюсер API
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Добавляем middleware API
  preloadedState, // Задаем предустановленное состояние
});
// Сохранение состояния при перед закрытием окна
window.addEventListener("beforeunload", () => {
  saveState(store.getState());
});

export default store;
