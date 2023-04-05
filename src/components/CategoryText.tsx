import { MouseEvent } from 'react';
import styled from 'styled-components';
import { DefalutKeyword } from '../types/types';

interface PropsType {
  defalutKeyword: DefalutKeyword;
  onChangeDefalutKeyword: (
    e: MouseEvent<HTMLButtonElement>,
    defalutKeyword: DefalutKeyword,
  ) => void;
}

const Category = ({ defalutKeyword, onChangeDefalutKeyword }: PropsType) => {
  return (
    <>
      <Button onClick={(e) => onChangeDefalutKeyword(e, defalutKeyword)}>
        {defalutKeyword}
      </Button>
    </>
  );
};

export default Category;

const Button = styled.button`
  /* color: white; */
  font-size: 16px;
`;
