import React from 'react';

interface ToastProps {
  type: 'default' | 'success' | 'info' | 'warning' | 'error';
  message: string;
}

export const Toast: React.FC<ToastProps> = ({ type, message }) => {
  const backgroundColor = type === 'success' ? 'bg-green-500' : type === 'info' ? 'bg-blue-500' : type === 'warning' ? 'bg-orange-500' : type === 'error' ? 'bg-red-500' : 'bg-gray-500';

  return (
    <div className={`toast-item ${backgroundColor} text-white p-3 mb-2 border-round-md`}>
      {message}
    </div>
  );
};
