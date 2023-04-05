import { MouseEvent } from 'react';
import styled from 'styled-components';
import { DefaultKeyword } from '../types/types';

interface PropsType {
  defaultKeyword: DefaultKeyword;
  onChangeDefaultKeyword: (
    e: MouseEvent<HTMLButtonElement>,
    defaultKeyword: DefaultKeyword,
  ) => void;
}

const Category = ({ defaultKeyword, onChangeDefaultKeyword }: PropsType) => {
  return (
    <>
      <Button onClick={(e) => onChangeDefaultKeyword(e, defaultKeyword)}>
        {defaultKeyword}
      </Button>
    </>
  );
};

export default Category;

const Button = styled.button`
  /* color: white; */
  font-size: 16px;
`;
