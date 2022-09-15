import {configureStore}  from '@reduxjs/toolkit';
import {customReducer} from '../Redux/reducers';

const store=configureStore({
  reducer:{
    custom:customReducer,
   
  }
});

export default store;