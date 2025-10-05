import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
    tagTypes: ['posts' , 'users', 'comments'],
    endpoints: (builder) => ({
        //posts
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: ['posts']
        }),

        addPost: builder.mutation({
            query: (newPost) => ({
                url: '/posts',
                method: "POST",
                body: newPost
            }),
            invalidatesTags: ['posts']
        }),

        updatePost: builder.mutation({
            query: ({id , ...rest}) => ({
                url: `/posts/${id}`,
                method: "PUT",
                body: rest
            }),
            invalidatesTags: ['posts']
        }),

        deletePost: builder.mutation({
            query: (id) =>({
                url: `/posts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['posts']
        }),
        //users
        getUsers: builder.query({
            query: () => '/users',
            providesTags: ['users']
        }),
        //comments
        getComments: builder.query({
            query: (postId) => `/comments?${postId}`,
            providesTags: ['comments']
        }),



    })
})

export const {
    useGetPostsQuery,
    useGetUsersQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
    useGetCommentsQuery
} = api