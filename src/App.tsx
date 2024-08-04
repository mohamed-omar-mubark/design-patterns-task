import React from 'react';

// components
import Header from './components/Header';
import Iterator from './components/range-task/Iterator';
import Generator from './components/range-task/Generator';
import Toast from './components/toast-task/ToastSection';

// contexts
import { ToastProvider } from './contexts/ToastContext';

const App: React.FC = () => {
  return (
    <ToastProvider>
      <div className="container py-3">
        <Header />

        <div className='flex flex-column sm:flex-row gap-3'>
          <Iterator />
          <Generator />
        </div>

        <Toast />
      </div>
    </ToastProvider>
  );
}

export default App;
