import { ChangeEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { SearchKeyword } from '../types/types';

interface PropsType {
  findAllBySearchKeyword: (
    e: MouseEvent<HTMLButtonElement>,
    searchKeyword: SearchKeyword,
  ) => void;
}

const SearchForm = ({ findAllBySearchKeyword }: PropsType) => {
  const [keyword, setKeyword] = useState<string>('');

  const onChengeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

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
        disabled={!keyword}
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
