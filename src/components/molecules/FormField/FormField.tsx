import type { InputProps } from '../../atoms/Input/Input';

import { Input } from '../../atoms/Input/Input';
import styles from './FormField.module.css';

export interface FormFieldProps extends InputProps {
  label: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  ...inputProps
}) => {
  return (
    <div className={styles.formField}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <Input id={id} {...inputProps} />
    </div>
  );
};
