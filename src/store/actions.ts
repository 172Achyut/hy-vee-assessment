import { createAction } from '@reduxjs/toolkit';

export const actions = {
  FETCH_AGE_DATA: "FETCH_AGE_DATA",
  FETCH_GENDER_DATA: "FETCH_GENDER_DATA",
  FETCH_COUNTRY_DATA: "FETCH_COUNTRY_DATA",
}

export const fetchAgeData = createAction<string>(
  actions.FETCH_AGE_DATA
);

export const fetchCountryData = createAction<string>(
  actions.FETCH_GENDER_DATA
);
  
export const fetchGenderData = createAction<string>(
  actions.FETCH_COUNTRY_DATA
);