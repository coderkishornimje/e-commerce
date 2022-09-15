import {createReducer} from '@reduxjs/toolkit';
import { reviews } from '../data/products';

const initialState={
  count:0,

}
export const customReducer=createReducer(initialState,{

  increment:(state,action)=>{
   state.count=state.count+1;
  },
  decrement:(state,action)=>{
    state.count=state.count-1;
   },
   
})