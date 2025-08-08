import {configureStore} from '@reduxjs/toolkit';
import applicantReducer from '../features/applicant/applicantSlice'
import { profileApi } from '@/features/setting/profileApi';
import { userApi } from '@/features/users/userApi';


const store = configureStore({
  reducer: {
    applicant: applicantReducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware).concat(userApi.middleware),

});

store.subscribe(()=>{
    console.log('get state', store.getState())
})

export default store;
export type RootState = ReturnType<typeof store.getState>;


