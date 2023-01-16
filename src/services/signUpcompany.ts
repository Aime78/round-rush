import axios from 'axios';
import { apiURLCompanies } from '../constants/apiURLs';
import { UserDataInterface } from '../types/userDataInterface';

export const signUpcompany = async (companyData: UserDataInterface) => {
  try {
    const response = axios.post(`${apiURLCompanies}/companies`, companyData);
    return response;
  } catch (error) {
    return error;
  }
};
