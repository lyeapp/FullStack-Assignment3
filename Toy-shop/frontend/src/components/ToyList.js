import React from 'react';
import ToyItem from './ToyItem';

const ToyList = ({ toys }) => {
  return (
    <div>
      {toys.map(toy => (
        <ToyItem key={toy._id} toy={toy} />
      ))}
    </div>
  );
};

export default ToyList;

