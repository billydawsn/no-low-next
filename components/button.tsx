import React from "react";
import styles from "./button.module.css";

import Icon from "./icon";

interface ButtonProps {
  url: string;
  iconName: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ url, iconName, children }) => {
  return (
    <a href={url} className={styles.button}>
      {iconName && <Icon name={iconName} />}
      {children}
    </a>
  );
};

export default Button;
