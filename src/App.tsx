import { MouseEvent } from 'react';

import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import DefaultKeyword from './components/DefaultKeyword';
import SearchForm from './components/SearchForm';
import { categories } from './store/categories';
import { CategoryType, PhotoModel, SearchKeyword } from './types/types';
import Photo from './components/Photo';
import { useFetchPhotos } from './hooks/useFetchPhotos';
import { formatCapitalLetterToUpperCase } from './utils/formatCapitalLetterToUpperCase';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

function App() {
  const { photos, searchKeyword, setSearchKeyword } = useFetchPhotos();

  const findAllBySearchKeyword = (
    e: MouseEvent<HTMLButtonElement>,
    searchKeyword: SearchKeyword,
  ) => {
    e.preventDefault();
    if (searchKeyword.content === null) return;
    setSearchKeyword(searchKeyword);
  };

  const makePhotoTitle = (searchKeyword: SearchKeyword): string => {
    const keywordTypes = {
      DEFAULT: 'Pictures',
      INPUT_TEXT: 'Images',
    };

    const { content, type } = searchKeyword;

    return `${content} ${keywordTypes[type]}`;
  };

  const photoTitle = formatCapitalLetterToUpperCase(
    makePhotoTitle(searchKeyword),
  );

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>SnapShot</Title>
        <SearchContainer>
          <SearchForm findAllBySearchKeyword={findAllBySearchKeyword} />
        </SearchContainer>
        <CategoryContainer>
          {categories.map((category: CategoryType) => (
            <Item key={category.id}>
              <DefaultKeyword
                searchKeyword={category.word}
                findAllBySearchKeyword={findAllBySearchKeyword}
              />
            </Item>
          ))}
        </CategoryContainer>
        <PhotoTitle>{photoTitle}</PhotoTitle>
        <PhotoContainer>
          {photos.map((photo: PhotoModel) => (
            <PhotoItem key={photo.id}>
              <Photo url={photo.url} description={photo.description} />
            </PhotoItem>
          ))}
        </PhotoContainer>
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhotoTitle = styled.h2`
  padding-top: 50px;
  font-size: 2em;
  color: #051c33;
  text-align: center;
`;

const PhotoContainer = styled.div`
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px 20px;
`;

const PhotoItem = styled.div`
  height: 180px;
  width: 230px;
  overflow: hidden;
`;
