import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast' ;

import axiosInstance from '../../config/axiosInstance'

const initialState = {
    data:JSON.parse(localStorage.getItem('data')) || undefined,
    token:localStorage.getItem('token') || "" ,
    isLoggedIn:localStorage.getItem('isLoggedIn') || false,
}


export const login =createAsyncThunk('/user/login',async(data)=>{
    try {
        const response = axiosInstance.post('/user/login',data);
        toast.promise(response,{
            loading: 'Submitting form',
            success: 'Successfully signed in',
            error: 'Something went wrong, try again',
        });

        return await response ;
    } catch (error) {
        console.log("printing error :",error);
    }
})

export const signup = createAsyncThunk('/user/register',async(data)=>{
    try {
        const response = axiosInstance.post('/user/register',data);
        toast.promise(response,{
            loading:"Submitting form",
            success:'Successfully registered',
            error:'Something went wrong, try again'
        })

        return await response ;
    } catch (error) {
        console.log('Printing error : ',error) ;
    }
})

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        logout:(state)=>{
            localStorage.clear();
            state.isLoggedIn = false;
            state.token = '';
            state.data = '';
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(login.fulfilled,(state,action)=>{
            console.log(action,state);
            if(!action.payload) return ;
            state.isLoggedIn = (action.payload?.data?.token != undefined);
            state.data = action.payload?.data?.userData;
            state.token = action.payload?.data?.token;

            localStorage.setItem("isLoggedIn", (action.payload?.data?.token != undefined));
            localStorage.setItem("data", JSON.stringify(action.payload?.data?.userData));// "{id: 1, name: "abc"}"
            localStorage.setItem("token", action.payload?.data?.token);
        })
    }
})

export const { logout } = authSlice.actions ;
export default authSlice.reducer ;
