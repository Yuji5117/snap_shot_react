import { AxiosResponse } from 'axios';
import { axiosInstance } from '../lib';
import { UnsplashResponse } from '../types/types';

export const getPhotos = async (query: string, apiKey: string) => {
  const res: AxiosResponse<UnsplashResponse> = await axiosInstance(
    `/search/photos?query=${query}&per_page=24&client_id=${apiKey}`,
  );

  return res;
};
