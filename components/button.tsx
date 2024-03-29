import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  url: string;
  iconName: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ url, iconName, children }) => {
  return (
    <a href={url} className={styles.button}>
      {iconName && <i className={"bi bi-" + iconName} />}
      {children}
    </a>
  );
};

export default Button;
