import React from 'react';

// components
import Header from './components/Header';
import Iterator from './components/range-task/Iterator';
import Generator from './components/range-task/Generator';
import Toast from './components/toast-task/ToastSection';
import Decorator from './components/decorator-task/Decorator';

const App: React.FC = () => {
  return (
      <div className="container py-3">
        <Header />

        <div className='flex flex-column sm:flex-row gap-3'>
          <Iterator />
          <Generator />
        </div>

        <Toast />

        <div className='decorator-task-section mt-4 border-1 border-gray-200 border-round-md'>
          <div className="head flex flex-column gap-2 p-3 border-round-md bg-gray-100">
            <span className='font-semibold text-gray-700'>Primary Background Decorator</span>
            <p className="m-0 text-sm font-medium text-gray-500">Decorator design pattern task.</p>
          </div>

          <div className="p-3">
            <Decorator content="This is a component with 'bg-primary' class added using PrimaryBg decorator." />
          </div>
        </div>
      </div>
  );
}

export default App;
