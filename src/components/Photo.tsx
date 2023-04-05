interface PropsType {
  url: string;
  description: string;
}

const Photo = ({ url, description }: PropsType) => {
  return <img src={url} alt="{description}" height={180} width={230} />;
};

export default Photo;
