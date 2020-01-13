import React, { FC, useState, useContext } from 'react';
import ToastContext from './ToastContext';
import { ToastOptions } from './Toast';

const ToastProvider: FC<{}> = props => {
  const { children } = props;
  const [currentOptions, setCurrentOptions] = useState<ToastOptions | null>(
    null,
  );

  const showToast = (options?: ToastOptions) => {
    setCurrentOptions(options);
  };

  const dismissToast = () => {
    setCurrentOptions(null);
  };

  return (
    <ToastContext.Provider
      value={{
        currentOptions,
        showToast,
        dismissToast,
      }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

export default ToastProvider;
