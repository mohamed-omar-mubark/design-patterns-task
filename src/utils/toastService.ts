import { toastManager } from "./toastManager";

type ToastType = "default" | "success" | "info" | "warning" | "error";

export const toast = (type: ToastType, message: string) => {
  toastManager.notify({ type, message });
};

export const clearToasts = () => {
  toastManager.clear();
};
