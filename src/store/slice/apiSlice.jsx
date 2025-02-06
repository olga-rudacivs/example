import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Создаем API с помощью createApi
const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }), // Базовый URL
  endpoints: (builder) => ({
    getRandomPokemon: builder.query({
      query: () => `pokemon/${Math.floor(Math.random() * 1000)}`, // Запрос рандомного покемона
    }),
  }),
});

// Экспортируем автоматически созданные хуки
export const { useGetRandomPokemonQuery } = apiSlice;

export default apiSlice;
