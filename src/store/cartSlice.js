import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
      state.isOpen = true
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.cartId === action.payload)

      if (index >= 0) {
        state.items.splice(index, 1)
      }
    },
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addItem, removeItem, openCart, closeCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
