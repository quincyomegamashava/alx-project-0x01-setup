import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  kind?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, kind = "primary" }) => {
  const base = "px-4 py-2 rounded-md text-sm font-medium transition";
  const styles =
    kind === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {label}
    </button>
  );
};

export default Button;
