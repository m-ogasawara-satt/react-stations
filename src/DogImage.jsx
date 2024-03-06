import React from 'react';

export const DogImage = props => {
  return (
    <div className="image">
      <img src={props.imageUrl} alt="Dog" />
      {/* updateUrl 関数を呼び出すために props.updateUrl を onClick ハンドラーとして渡す */}
      <button onClick={props.updateUrl}>更新</button>
    </div>
  );
};

export default DogImage;
