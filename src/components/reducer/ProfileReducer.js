import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice=createSlice({
    name:"profile",
    initialState:{value:[],getting:'false'},
    reducers:{
        AddProfile:(state,action)=>{
            state.value.push(action.payload)
        },
        Editbtn:(state,action)=>{
            state.getting=action.payload
        }
    }
})

export const {AddProfile} = ProfileSlice.actions

export const {Editbtn} = ProfileSlice.actions
export default ProfileSlice.reducer