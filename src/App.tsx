import React from 'react';

// components
import Header from './components/Header';
import Iterator from './components/range-task/Iterator';
import Generator from './components/range-task/Generator';

const App: React.FC = () => {
  return (
    <div className="container py-3">
      <Header />
      
      <div className='flex flex-column sm:flex-row gap-3'>
        <Iterator />
        <Generator />
      </div>
    </div>
  );
}

export default App;
