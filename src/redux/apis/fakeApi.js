import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakeAPI = createApi({
  reducerPath: "fakeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getTodoById: builder.query({
      query: (id) => `todos/${id}`,
    }),
    // mutation example
    // addTodo: builder.mutation({
    //   query: (body) => {
    //     return {
    //       url: 'todos',
    //       method: 'post',
    //       body
    //     };
    //   }
    // }),
  }),
});

export const { useGetTodoByIdQuery } = fakeAPI;
export default fakeAPI;
