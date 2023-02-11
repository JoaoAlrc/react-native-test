import axios from 'axios';
import {mobile_domain} from '@constants/envars';

const customAxios = async (url: string, useToken = false) => {
  let config: any = {
    baseURL: `${mobile_domain}${url}`,
  };

  if (useToken) {
    config.headers = {
      Authorization: 'Bearer Wookie2019',
    };
  }

  return axios.create({
    ...config,
  });
};

export const axiosMovies = async () => {
  return await customAxios('', true);
};
