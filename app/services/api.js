import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://code-commando.com',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/api/v1/products',
    }),
    getCategories: builder.query({
      query: () => "/api/v1/category"
    })
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = api;
