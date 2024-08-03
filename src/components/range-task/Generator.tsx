import React from 'react';
import { rangeWithGenerator } from '../../utils/range';

const Generator: React.FC = () => {
  // Range with generator
  const values = [...rangeWithGenerator(1, 10, 1)];

  return (
    <div className="generator w-full">
      <div className="head p-3 mb-3 border-round-md bg-gray-100">
        <span className='font-semibold text-gray-700'>Range with Generator</span>
      </div>

      <ul className='flex justify-content-around flex-wrap gap-3 sm:gap-0'>
        {values.map((value, index) => (
          <li key={index} className='p-3 border-round-md bg-gray-100'>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Generator;
