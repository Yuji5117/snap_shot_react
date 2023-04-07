import styled from 'styled-components';

interface PropsType {
  url: string;
  description: string;
}

const Photo = ({ url, description }: PropsType) => {
  return <Image src={url} alt={description} />;
};

export default Photo;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;

  transition: transform 0.6s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
