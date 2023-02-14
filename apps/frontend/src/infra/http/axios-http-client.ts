import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://mykxq9t7yi.execute-api.us-east-1.amazonaws.com/prod/v1',
  headers: {
    'Content-type': 'application/json',
  },
});
