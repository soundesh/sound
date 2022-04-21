import { createSlice } from "@reduxjs/toolkit";

export const ProfileReducer=createSlice({
    name:"profile",
    initialState:{value:[],getting:[]},
    reducers:{
        AddProfile:(state,action)=>{
            state.value.push(action.payload)
        },
        Editbtn:(state,action)=>{
            state.getting.push(action.payload)
        }
    }
})

export const {AddProfile} =ProfileReducer.actions