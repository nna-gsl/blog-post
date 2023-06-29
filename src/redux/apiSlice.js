import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const projectToken = process.env.REACT_APP_PROJECT_TOKEN;

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://${projectToken}.mockapi.io/blog-post`,
        prepareHeaders: (header) => {
            header.set('Accept', 'application/json')
            header.set('Accept-Type', 'application/json')
            return header
        },
    }),
    tagTypes: ["UPLOAD_BLOG"],
    endpoints: (builder) => ({
        getPost: builder.query({
            query: () => {
                return {
                    url: '/',
                    method: 'GET'
                }
            },
            providesTags: ['BLOG_POST'],
            transformResponse: (response) => {
                return response
            }
        }),
        createPost: builder.mutation(
            {
                query: (params) => {
                    return {
                        url: '/',
                        method: 'POST',
                        body: params
                    }
                },
                invalidatesTags:['BLOG_POST'],
                transformResponse: (response) => {
                    return response
                }
            }
        ),
        deletePost: builder.mutation({
            query: (params) => {
                return {
                    method:'DELETE',
                    url: `/${params}`,
                }
            },
            transformResponse: (result) => {
                return result
            },
            invalidatesTags: ['BLOG_POST']
        })
    })
})

export const { useCreatePostMutation , useGetPostQuery, useDeletePostMutation } = apiSlice;