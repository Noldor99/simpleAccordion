import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
 

export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ITodos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export const placeholderApi = createApi({
  reducerPath: 'placeholder/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  refetchOnFocus: false,
  endpoints: build => ({
    getPosts:build.query<IPosts[], void>({
      query: () => ({
        url: `/posts?_limit=10`,
        method: 'GET'
      })
    }),
    getTodos:build.query<ITodos[], void>({
      query: () => ({
        url: `/todos?_limit=10`,
        method: 'GET'
      })
    }),
    getUsers :build.query<IUsers[], void>({
      query: () => ({
        url: `/users?_limit=10`,
        method: 'GET'
      })
    }),
  })
})

export const {useGetPostsQuery, 
              useGetUsersQuery, 
              useGetTodosQuery} = placeholderApi