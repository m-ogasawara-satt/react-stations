// @ts-check+

export const DogImage = props => {
  return (
    <div className="image">
      <img src={props.imageUrl} alt="Dog" />
    </div>
  );
};

export default DogImage;
