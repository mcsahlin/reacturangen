import { ICustomer } from '../models/ICustomer';
import { createContext } from 'react';

interface ICustomerContext extends ICustomer {}
export const defaultContextValue = {};
export const CustomerContext = createContext(defaultContextValue);
