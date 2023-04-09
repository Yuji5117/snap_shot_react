import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { UNSPLASH_API_KEY } from '../config';

import {
  PhotoModel,
  SearchKeyword,
  UnsplashPhoto,
  UnsplashResponse,
} from '../types/types';
import { getPhotos } from '../api/getPhotos';

export const useFetchPhotos = () => {
  const [photos, setPhotos] = useState<PhotoModel[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<SearchKeyword>({
    type: 'DEFAULT',
    content: 'Mountain',
  });

  useEffect(() => {
    const searchPhotosByKeyword = async (): Promise<PhotoModel[]> => {
      const response: AxiosResponse<UnsplashResponse> = await getPhotos(
        searchKeyword.content,
        UNSPLASH_API_KEY,
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
