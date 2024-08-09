type ToastType = "default" | "success" | "info" | "warning" | "error";

interface ToastMessage {
  type: ToastType;
  message: string;
}

type Subscriber = (toast: ToastMessage | null) => void;

class ToastManager {
  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: Subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }

  notify(toast: ToastMessage) {
    this.subscribers.forEach((subscriber) => subscriber(toast));
  }

  clear() {
    this.subscribers.forEach((subscriber) => subscriber(null));
  }
}

export const toastManager = new ToastManager();
