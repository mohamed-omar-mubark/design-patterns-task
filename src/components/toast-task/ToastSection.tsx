import React from 'react';

// components
import { Button } from 'primereact/button';
import { ToastContainer } from './ToastContainer';

// contexts
import { useToast } from '../../contexts/ToastContext';

const Toast: React.FC = () => {
  const { addToast, dismissAll } = useToast();

  return (
    <div className="toast mt-6 border-1 border-gray-200 border-round-md">
      <div className="head flex flex-column gap-2 p-3 mb-3 border-round-md bg-gray-100">
        <span className='font-semibold text-gray-700'>Toast library</span>
        <p className="m-0 text-sm font-medium text-gray-500">Observer design pattern task.</p>
      </div>

      <div className="actions-buttons flex flex-wrap justify-content-start align-items-center gap-2 p-3">
        <Button label="Default" size="small" onClick={() => addToast('default', 'Hi, I am a default toast.')} />
        <Button icon="pi pi-check" label="Success" size="small" severity="success" onClick={() => addToast('success', 'Hi, I am a success toast.')} />
        <Button icon="pi pi-info-circle" label="Info" size="small" severity="info" onClick={() => addToast('info', 'Hi, I am a info toast.')} />
        <Button icon="pi pi-exclamation-triangle" label="Warning" size="small" severity="warning" onClick={() => addToast('warning', 'Hi, I am a warning toast.')} />
        <Button icon="pi pi-times" label="Error" size="small" severity="danger" onClick={() => addToast('error', 'Hi, I am a error toast.')} />
        <Button icon="pi pi-refresh" label="Dismiss All" size="small" severity="danger" onClick={() => dismissAll()} />
      </div>

      <ToastContainer />
    </div>
  );
}

export default Toast;