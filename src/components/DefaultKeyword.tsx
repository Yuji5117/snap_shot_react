import { MouseEvent } from 'react';
import styled from 'styled-components';
import { SearchKeyword } from '../types/types';

interface PropsType {
  searchKeyword: SearchKeyword;
  findAllBySearchKeyword: (
    e: MouseEvent<HTMLButtonElement>,
    searchKeyword: SearchKeyword,
  ) => void;
}

const DefaultKeyword = ({
  searchKeyword,
  findAllBySearchKeyword,
}: PropsType) => {
  return (
    <>
      <Button onClick={(e) => findAllBySearchKeyword(e, searchKeyword)}>
        {searchKeyword.content}
      </Button>
    </>
  );
};

export default DefaultKeyword;

const Button = styled.button`
  background-color: #051c33;
  color: #fff;
  width: 100px;
  height: 25px;
  font-size: 16px;
  border-radius: 3px;
  border: none;

  cursor: pointer;
`;
