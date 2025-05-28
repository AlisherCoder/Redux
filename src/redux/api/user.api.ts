import { mainApi } from ".";

const extendedApi = mainApi.injectEndpoints({
   endpoints: (build) => ({
      getUsers: build.query({
         query: (params) => ({
            method: "GET",
            url: "/user",
            params,
         }),
         providesTags: ["USER"],
      }),

      postUser: build.mutation({
         query: (body) => ({
            method: "POST",
            url: "/user",
            body,
         }),
         invalidatesTags: ["USER"],
      }),

      deleteUser: build.mutation({
         query: (id) => ({
            method: "DELETE",
            url: `/user/${id}`,
         }),
         invalidatesTags: ["USER"],
      }),
   }),

   overrideExisting: false,
});

export const { useGetUsersQuery, usePostUserMutation, useDeleteUserMutation } = extendedApi;
