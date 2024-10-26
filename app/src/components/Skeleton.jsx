import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const Skeleton1 = () => {
  return (
    <div className="space-y-2 p-4 bg-gray-900 rounded-md">
      <Skeleton height={20} width={'90%'} />
      <Skeleton height={20} width={'85%'} />
      <Skeleton height={20} width={'80%'} />
      <Skeleton height={20} width={'95%'} />
      <Skeleton height={20} width={'88%'} />
      <Skeleton height={20} width={'92%'} />
    </div>
  );
};

export default Skeleton1;