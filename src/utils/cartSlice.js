
import { createSlice,current } from "@reduxjs/toolkit"

// Initial state of cart i.e.,  what should the slice initially store
// What are the actions that are supposed to be performed on the data in this slice

const cartSlice = createSlice({
    name: "cart",
    initialState: {
       items: [],
    },
    reducers: {
        // actions : reducer functions
        addItem : (state,action) => {
            state.items.push(action.payload);
            console.log(current(state));
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0;
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
