import { useEffect, useState } from 'react';

import axios, { AxiosError, AxiosResponse } from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import CategoryText from './components/CategoryText';
import SearchForm from './components/SearchForm';
import { categories } from './store/categories';
import {
  CategoryType,
  PhotoModel,
  UnsplashPhoto,
  UnsplashResponse,
} from './types/types';
import Photo from './components/Photo';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

function App() {
  const [photos, setPhotos] = useState<PhotoModel[]>([]);

  useEffect(() => {
    const searchPhotosByKeyword = async (): Promise<PhotoModel[]> => {
      const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
      const response: AxiosResponse<UnsplashResponse> = await axios.get(
        `https://api.unsplash.com/search/photos?query=mountain&per_page=24&client_id=${apiKey}`,
      );

      const photosResponse = response.data.results.map(
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
      .then((photos) => {
        setPhotos(photos);
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log('エラー：', e.message);
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>SnapShot</Title>
        <SearchContainer>
          <SearchForm />
        </SearchContainer>
        <CategoryContainer>
          {categories.map((category: CategoryType) => (
            <Item key={category.id}>
              <CategoryText name={category.name} />
            </Item>
          ))}
        </CategoryContainer>
        <Subtitle>Mountain Pictures</Subtitle>
        <ImageContainer>
          {/* <Photo /> */}
          {photos.map((photo: PhotoModel) => (
            <div key={photo.id}>
              <Photo url={photo.url} description={photo.description} />
            </div>
          ))}
        </ImageContainer>
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  padding-top: 30px;
  font-size: 4em;
  color: #051c33;
  text-align: center;
`;

const SearchContainer = styled.div`
  padding-top: 30px;
  text-align: center;
`;

const CategoryContainer = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

const Item = styled.div`
  height: 30px;
  width: 100px;
  background-color: #051c33;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Subtitle = styled.h2`
  padding-top: 50px;
  font-size: 2em;
  color: #051c33;
  text-align: center;
`;

const ImageContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
`;
