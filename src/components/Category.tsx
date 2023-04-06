import { MouseEvent } from 'react';
import styled from 'styled-components';
import { SearchKeyword } from '../types/types';

interface PropsType {
  searchKeyword: SearchKeyword;
  onChangeSearchKeyword: (
    e: MouseEvent<HTMLButtonElement>,
    searchKeyword: SearchKeyword,
  ) => void;
}

const Category = ({ searchKeyword, onChangeSearchKeyword }: PropsType) => {
  return (
    <>
      <Button onClick={(e) => onChangeSearchKeyword(e, searchKeyword)}>
        {searchKeyword.content}
      </Button>
    </>
  );
};

export default Category;

const Button = styled.button`
  /* color: white; */
  font-size: 16px;
`;
