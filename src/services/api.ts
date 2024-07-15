import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RestaurantType } from '../pages/Home';
import { MenuItemsType } from '../pages/Perfil';
import { MenuType } from '../pages/Perfil';

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantType[], void>({
      query: () => '/restaurantes'
    }),
    getMenu: builder.query<MenuItemsType[], string>({
      query: (id) => `/restaurantes/${id}`,
      transformResponse: (response: RestaurantType) => {
        return response.cardapio;
      }
    }),
    getRestaurantId: builder.query<MenuType, string>({
      query: (id) => `/restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
});

export const {
  useGetRestaurantsQuery,
  useGetMenuQuery,
  useGetRestaurantIdQuery,
  usePurchaseMutation
} = api;

export default api;
