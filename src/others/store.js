import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../others/userslice'
export default configureStore({
    reducer :{
        user:userReducer,
        
    }
})
