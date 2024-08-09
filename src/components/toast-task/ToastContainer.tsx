import React, { useEffect, useState } from 'react';
import { toastManager } from '../../utils/toastManager';

interface ToastMessage {
  type: 'default' | 'success' | 'info' | 'warning' | 'error';
  message: string;
}

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleToast = (toast: ToastMessage | null) => {
      if (toast) {
        setToasts((prev) => [...prev, toast]);
      } else {
        // Clear all toasts if toast is null
        setToasts([]);
      }
    };

    toastManager.subscribe(handleToast);

    return () => {
      toastManager.unsubscribe(handleToast);
    };
  }, []);

  return (
    <div className="toast-container p-3 fixed bottom-0 right-0">
      {toasts.map((toast, index) => (
        <div key={index} className={`toast-item bg-${toast.type === 'default' ? 'gray-500' : toast.type === 'success' ? 'green-500' : toast.type === 'info' ? 'blue-500' : toast.type === 'warning' ? 'orange-500' : 'primary'} text-white p-3 mb-2 border-round-md`}>
          {toast.message}
        </div>
      ))}
    </div>
  );
};