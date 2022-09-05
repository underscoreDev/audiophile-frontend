import { toast, Flip } from "react-toastify";
import React from "react";

interface ToastTypeProps {
  type: "info" | "success" | "warning" | "error" | "default";
  message: React.ReactNode;
}

export const showToast = ({ message, type }: ToastTypeProps) =>
  toast(message, {
    theme: "dark",
    type: type,
    position: "top-center",
    autoClose: 3000,
    transition: Flip,
    hideProgressBar: true,
  });
