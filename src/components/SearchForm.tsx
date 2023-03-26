import styled from 'styled-components';

const SearchForm = () => {
  return (
    <Form>
      <Input placeholder="Search..." type="text" />
      <SearchSubmitIcon type="submit" value="検索" />
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

const SearchSubmitIcon = styled.input`
  height: 45px;
  width: 50px;
  cursor: pointer;
`;
