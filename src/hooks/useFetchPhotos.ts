import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import {
  DefalutKeyword,
  PhotoModel,
  UnsplashPhoto,
  UnsplashResponse,
} from '../types/types';

export const useFetchPhotos = () => {
  const [photos, setPhotos] = useState<PhotoModel[]>([]);
  const [defalutKeyword, setDefalutKeyword] =
    useState<DefalutKeyword>('Mountain');

  useEffect(() => {
    const searchPhotosByKeyword = async (): Promise<PhotoModel[]> => {
      const apiKey: string = import.meta.env.VITE_UNSPLASH_API_KEY;
      const response: AxiosResponse<UnsplashResponse> = await axios.get(
        `https://api.unsplash.com/search/photos?query=${defalutKeyword}&per_page=24&client_id=${apiKey}`,
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
  }, [defalutKeyword]);

  return { photos, defalutKeyword, setDefalutKeyword };
};
