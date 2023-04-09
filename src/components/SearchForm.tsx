import { ChangeEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { SearchKeyword } from '../types/types';
import { BiSearch } from 'react-icons/bi';

interface PropsType {
  findAllBySearchKeyword: (
    e: MouseEvent<HTMLButtonElement>,
    searchKeyword: SearchKeyword,
  ) => void;
}

type SearchButtonProps = {
  buttonColor: '#051c33' | '#FAFAFA';
};

const SearchForm = ({ findAllBySearchKeyword }: PropsType) => {
  const [keyword, setKeyword] = useState<string>('');

  const onChengeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const buttonColor = keyword ? '#051c33' : '#FAFAFA';

  return (
    <Form>
      <Input
        placeholder="Search..."
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChengeKeyword(e)}
      />
      <SearchButton
        onClick={(e: MouseEvent<HTMLButtonElement>) =>
          findAllBySearchKeyword(e, {
            type: 'INPUT_TEXT',
            content: keyword,
          })
        }
        buttonColor={buttonColor}
        disabled={!keyword}
      >
        <BiSearch size="25px" />
      </SearchButton>
    </Form>
  );
};

export default SearchForm;

const Form = styled.form`
  height: 45px;
`;

const Input = styled.input`
  height: 100%;
  width: 410px;
  padding-right: 20px;
  padding-left: 20px;
  font-size: 16px;
  background-color: #edeff0;
  border-top: 3px solid #d7dbdf;
  border-left: 3px solid #d7dbdf;
  border-bottom: 3px solid #d7dbdf;
  border-right: none;
  border-radius: 5px 0 0 5px;
  vertical-align: top;

  outline: none;
`;

const SearchButton = styled.button<SearchButtonProps>`
  height: 100%;
  width: 50px;
  color: #fff;
  background-color: ${({ buttonColor }) => buttonColor};
  border: 3px solid ${({ buttonColor }) => buttonColor};
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;
