import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "../../constantes/url";


const baseQuery = fetchBaseQuery({
  baseUrl: `${SERVER_URL(true)}`,
  prepareHeaders: (headers) => {
    // Отримання токену з LocalStorage
    const token = localStorage.getItem('token');
    
    // Якщо токен існує, додаємо його до заголовків
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    
    return headers;
  },
})

// якшо перший раз запит провалився повтори його ще 2 рази
const baseQueryWithRetry = retry(baseQuery, {maxRetries: 3})

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true, 
  endpoints: () => ({})
})