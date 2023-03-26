import styled from 'styled-components';

const CategoryItem = () => {
  return (
    <>
      <Item>
        <Text>Mountain</Text>
      </Item>
      <Item>
        <Text>Beaches</Text>
      </Item>
      <Item>
        <Text>Birds</Text>
      </Item>
      <Item>
        <Text>Food</Text>
      </Item>
    </>
  );
};

export default CategoryItem;

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

const Text = styled.p`
  color: white;
  font-size: 16px;
`;
