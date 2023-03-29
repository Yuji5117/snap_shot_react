import styled from 'styled-components';

const CategoryText = ({ name }: { name: string }) => {
  return (
    <>
      <Text>{name}</Text>
    </>
  );
};

export default CategoryText;

const Text = styled.p`
  color: white;
  font-size: 16px;
`;
