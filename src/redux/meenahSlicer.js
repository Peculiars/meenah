import { createSlice } from "@reduxjs/toolkit";

const initialState={
    productData:[],
    userinfo: []
};

export const meenahSlice = createSlice({
    name: "meenah",
    initialState,
    reducers:{
        incrementQuantity:(state, action)=>{
            const product = state.productData.find((item)=>item.id === action.payload)
            product.quantity ++;
        },
        decrementQuantity:(state, action)=>{
            const product = state.productData.find((item)=>item.id === action.payload)
            if(product.quantity === 1){
                product.quantity = 1
            }else{
                product.quantity --
            }
        },
        addToCart:(state, action)=>{
            const product = state.productData.find((item)=>item.id === action.payload.id)
            if(product){
                product.quantity += action.payload.quantity
            }else{
                state.productData.push(action.payload)
            }
        },
        deleteItem:(state, action)=>{
            state.productData = state.productData.filter((item)=>item.id !== action.payload)
        },
        resetCart:(state)=>{
            state.productData=[]
        },
        addUser: (state, action)=>{
            state.userinfo = action.payload
        }
    
    }
})

export const { addToCart, incrementQuantity, decrementQuantity, deleteItem, resetCart, addUser} = meenahSlice.actions;
export default meenahSlice.reducer;