// Description.jsx

import React from 'react';

const Description = ({ dogUrl, updateUrl }) => {
  return (
    <div>
      <p>犬の画像を紹介するサイトです。</p>
      <img src={dogUrl} alt="Dog" />
      <button onClick={updateUrl}>更新する</button>
    </div>
  );
}

export default Description;
