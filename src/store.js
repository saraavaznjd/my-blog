import {configureStore} from '@reduxjs/toolkit' 
import { api } from './BlogByRTK/services/api'
import authReducer from './BlogByRTK/auth/authSlice'

export const store = configureStore({
    reducer: {
        [api.reducerPath] : api.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware)
    
})