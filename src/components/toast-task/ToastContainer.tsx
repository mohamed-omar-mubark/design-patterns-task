import React from 'react';

// components
import { Toast } from './Toast';

// contexts
import { useToast } from '../../contexts/ToastContext';

export const ToastContainer: React.FC = () => {
  const { toasts } = useToast();

  return (
    <div className="p-3 fixed bottom-0 right-0">
      {toasts.map((toast) => (
        <Toast key={toast.id} type={toast.type} message={toast.message} />
      ))}
    </div>
  );
};
