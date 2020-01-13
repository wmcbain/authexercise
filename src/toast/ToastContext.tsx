import { createContext } from 'react';
import { ToastOptions } from './Toast';

export interface ToastContextValue {
  currentOptions: ToastOptions;
  showToast: (options: ToastOptions) => void;
  dismissToast: () => void;
}

const ToastContext = createContext<ToastContextValue>({
  currentOptions: null,
  showToast: (_: ToastOptions) => {
    console.error('ToastContext not implemented!');
  },
  dismissToast: () => {
    console.error('ToastContext not implemented!');
  },
});

export default ToastContext;
