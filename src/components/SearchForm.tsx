import { MouseEvent, useRef } from 'react';
import styled from 'styled-components';
import { SearchKeyword } from '../types/types';

interface PropsType {
  onChangeSearchKeyword: (
    e: MouseEvent<HTMLButtonElement>,
    searchKeyword: SearchKeyword,
  ) => void;
}

const SearchForm = ({ onChangeSearchKeyword }: PropsType) => {
  const keywordRef = useRef(null);

  return (
    <Form>
      <Input placeholder="Search..." type="text" ref={keywordRef} />
      <SearchButton
        onClick={(e: MouseEvent<HTMLButtonElement>) =>
          onChangeSearchKeyword(e, {
            type: 'INPUT_TEXT',
            content: keywordRef.current.value,
          })
        }
      >
        検索
      </SearchButton>
    </Form>
  );
};

export default SearchForm;

const Form = styled.form``;

const Input = styled.input`
  height: 45px;
  width: 410px;
  padding-right: 20px;
  padding-left: 20px;
  font-size: 16px;
  background-color: #edeff0;
  border-top: 3px solid #d7dbdf;
  border-left: 3px solid #d7dbdf;
  border-bottom: 3px solid #d7dbdf;
  border-radius: 5px 0 0 5px;
`;

const SearchButton = styled.button`
  height: 45px;
  width: 50px;
  cursor: pointer;
`;
