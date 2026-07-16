import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = 'button',
  variant = 'primary',
  ...buttonProps
}) => {
  const buttonClassName = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClassName} type={type} {...buttonProps}>
      {children}
    </button>
  );
};
