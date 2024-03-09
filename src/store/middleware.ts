import { Middleware } from 'redux';
import { actions } from './actions';
import { userDataResponse } from '@/model/userDataResponse';

const API_BASE_URL = 'https://api.agify.io';
const API_GENDER_URL = 'https://api.genderize.io';
const API_NATIONALIZE_URL = 'https://api.nationalize.io';

const apiMiddleware: Middleware = ({ dispatch }) => next => (action: any) => {
  if (action.type === actions.FETCH_AGE_DATA) {
    const name = action.payload;
    fetch(`${API_BASE_URL}?name=${name}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data. Please try again.');
        }
        return response.json();
      })
      .then((data: userDataResponse) => dispatch({ type: `${actions.FETCH_AGE_DATA}_SUCCESS`, payload: { name: data.name, age: data.age } }))
      .catch(error => dispatch({ type: `${actions.FETCH_AGE_DATA}_FAILED`, payload: error }));

  } else if (action.type === actions.FETCH_GENDER_DATA) {
    const name = action.payload;
    fetch(`${API_GENDER_URL}?name=${name}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data. Please try again.');
        }
        return response.json();
      })
      .then((data: userDataResponse) => dispatch({ type: `${actions.FETCH_GENDER_DATA}_SUCCESS`, payload: data.gender }))
      .catch(error => dispatch({ type: `${actions.FETCH_GENDER_DATA}_FAILED`, payload: error }));
      
  } else if (action.type === actions.FETCH_COUNTRY_DATA) {
    const name = action.payload;
    fetch(`${API_NATIONALIZE_URL}?name=${name}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data. Please try again.');
        }
        return response.json();
      })
      .then((data: userDataResponse) => {
        const country = data?.country[0]?.country_id || 'Unknown';
        dispatch({ type: `${actions.FETCH_COUNTRY_DATA}_SUCCESS`, payload: country });
      })
      .catch(error => dispatch({ type: `${actions.FETCH_COUNTRY_DATA}_FAILED`, payload: error }));
  }

  return next(action);
};

export default apiMiddleware;
