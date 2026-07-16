import type { ChangeEventHandler, InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  error?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  error,
  id,
  onChange,
  placeholder,
  value,
  ...inputProps
}) => {
  const inputClassName = [styles.input, error ? styles.error : undefined, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.wrapper}>
      <input
        aria-describedby={error && id ? `${id}-error` : undefined}
        aria-invalid={Boolean(error)}
        className={inputClassName}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        {...inputProps}
      />
      {error ? (
        <p className={styles.errorMessage} id={id ? `${id}-error` : undefined}>
          {error}
        </p>
      ) : null}
    </div>
  );
};
