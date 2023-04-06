import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { API_URL, UNSPLASH_API_KEY } from '../config';

import {
  PhotoModel,
  SearchKeyword,
  UnsplashPhoto,
  UnsplashResponse,
} from '../types/types';

export const useFetchPhotos = () => {
  const [photos, setPhotos] = useState<PhotoModel[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<SearchKeyword>({
    type: 'DEFAULT',
    content: 'Mountain',
  });

  useEffect(() => {
    const searchPhotosByKeyword = async (): Promise<PhotoModel[]> => {
      const response: AxiosResponse<UnsplashResponse> = await axios.get(
        `${API_URL}search/photos?query=${searchKeyword.content}&per_page=24&client_id=${UNSPLASH_API_KEY}`,
      );

      const photosResponse: PhotoModel[] = response.data.results.map(
        (result: UnsplashPhoto) => {
          return {
            id: result.id,
            url: result.urls.regular,
            description: result.alt_description,
          };
        },
      );

      return photosResponse;
    };

    searchPhotosByKeyword()
      .then((photos: PhotoModel[]) => {
        setPhotos(photos);
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log('エラー：', e.message);
      });
  }, [searchKeyword]);

  return { photos, searchKeyword, setSearchKeyword };
};
