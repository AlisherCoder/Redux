import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
   reducerPath: "mainApi",
   baseQuery: fetchBaseQuery({ baseUrl: "https://6763a6c017ec5852cae97bf8.mockapi.io" }),
   endpoints: () => ({}),
   tagTypes: ["USER"],
});

export const {} = mainApi;
