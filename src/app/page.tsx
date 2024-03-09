"use client";
import { Provider } from 'react-redux';
import store from '../store';
import Name from '../components/name'; 

const Page = () => (
  <Provider store={store}>
    <Name />
  </Provider>
);

export default Page;