import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const produitsAPI = createApi({
  tagTypes: ['produits'], // on déclare le tag
  reducerPath: 'produitsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr/' }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => `/products`,
      providesTags: ['produits'],
    }),
    getComments: builder.query({
      query: (id) => `products/${id}/comments`,
      providesTags: ['commentaires'],
    }),
    createComment: builder.mutation({
      query: ({ id, username, comment }) => ({
        url: `/products/${id}/comments`,
        method: "POST",
        body: {
          username,
          comment
        }
      })
    }),
  }),
})

export const {useGetProductQuery, useGetCommentsQuery, useCreateCommentMutation } = produitsAPI;
