import { toast, Flip } from "react-toastify";

interface ToastTypeProps {
  type: "info" | "success" | "warning" | "error" | "default";
  message: string;
}

export const showToast = ({ message, type }: ToastTypeProps) => {
  return toast(message, {
    theme: "dark",
    type: type,
    position: "top-center",
    autoClose: 3000,
    transition: Flip,
    hideProgressBar: true,
  });
};
