import { createAction } from 'redux-actions';
import { apiPost } from "../api";
import { urlCustomers } from '../api/urls';
import { INSERT_CUSTOMER } from './../constants/index';

export const insertCustomer = createAction(INSERT_CUSTOMER,
  (customer) => apiPost(urlCustomers, customer)());