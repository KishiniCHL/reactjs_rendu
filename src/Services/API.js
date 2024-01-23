import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const produitsAPI = createApi({
  tagTypes: ['produits'], // on déclare le tag
  reducerPath: 'produitsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/products`,
      providesTags: ['produits'],
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{ type: 'produits', id }],
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
    

    // createArticle: builder.mutation({
    //   query: (data) => ({
    //     url: '/produits',
    //     method: "POST",
    //     body: data
    //   }),
    //   invalidatesTags: ['produits'], //on invalide le tag pour Articles
    // })
  }),
})

export const { useGetAllProductsQuery, useGetProductQuery, useGetCommentsQuery, useCreateCommentMutation } = produitsAPI;
