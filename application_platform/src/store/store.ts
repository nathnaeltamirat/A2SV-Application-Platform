import {configureStore} from '@reduxjs/toolkit';
import applicantReducer from '../features/applicant/applicantSlice'
const store = configureStore({
    reducer:{
        applicant:applicantReducer
    }
})

store.subscribe(()=>{
    console.log('get state', store.getState())
})

export default store;
export type RootState = ReturnType<typeof store.getState>;