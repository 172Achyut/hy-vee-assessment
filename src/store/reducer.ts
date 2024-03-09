import { createReducer } from '@reduxjs/toolkit';
import { actions } from './actions';
import { ErrorObject } from '@/model/errorObject';

interface DataState {
  name: string | null;
  age: number | string | null;
  gender: string | null;
  country: string | null;
  error: ErrorObject | null;
}

const initialState: DataState = {
  name: null,
  age: null,
  gender: null,
  country: null,
  error: null,
};

const dataReducer = createReducer(initialState, builder => {
  builder
    .addCase(`${actions.FETCH_AGE_DATA}_SUCCESS`, (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.error = null;
    })
    .addCase(`${actions.FETCH_AGE_DATA}_FAILED`, (state, action) => {
      state.age = "";
      state.name = "";
      state.error = action.payload;
    })
    .addCase(`${actions.FETCH_GENDER_DATA}_SUCCESS`, (state, action) => {
      state.gender = action.payload;
      state.error = null;
    })
    .addCase(`${actions.FETCH_GENDER_DATA}_FAILED`, (state, action) => {
      state.gender = "";
      state.error = action.payload;
    })
    .addCase(`${actions.FETCH_COUNTRY_DATA}_SUCCESS`, (state, action) => {
      state.country = action.payload;
      state.error = null;
    })
    .addCase(`${actions.FETCH_COUNTRY_DATA}_FAILED`, (state, action) => {
      state.country = "";
      state.error = action.payload;
    });
});

export default dataReducer;
