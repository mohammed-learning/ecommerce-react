import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "cart",
    initialState: {
        cartItems : []
    },

    reducers: {
        addItemToCart(state, action){
            const exsitItem = state.cartItems.find(item => item.id === action.payload.id)
            if (exsitItem){
                exsitItem.quantity += 1
            }
            else{
                const quantity = 1
                state.cartItems.push({...action.payload, quantity})
            }
            
        },

        removeItemFromCart(state, action){
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        },

        clearCart(state, action){
            state.cartItems = []
        }
    }
})
export const {addItemToCart, removeItemFromCart, clearCart} = CartSlice.actions
export default CartSlice.reducer