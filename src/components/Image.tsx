import sampleImage from '../assets/images/sample.jpg';

const Image = () => {
  return (
    <>
      <div>
        <img src={sampleImage} alt="" height={300} />
      </div>
      <div>
        <img src={sampleImage} alt="" height={300} />
      </div>
      <div>
        <img src={sampleImage} alt="" height={300} />
      </div>
      <div>
        <img src={sampleImage} alt="" height={300} />
      </div>
    </>
  );
};

export default Image;
