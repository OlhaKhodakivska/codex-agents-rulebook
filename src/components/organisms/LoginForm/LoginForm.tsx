import { useState, type FormEvent } from 'react';

import { Button } from '../../atoms/Button/Button';
import { FormField } from '../../molecules/FormField/FormField';
import styles from './LoginForm.module.css';

interface LoginFormState {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const [formValues, setFormValues] = useState<LoginFormState>({
    email: '',
    password: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h1 className={styles.title}>Anmelden</h1>
        <p className={styles.description}>Melde dich mit deinen Zugangsdaten an.</p>
      </div>

      <div className={styles.fields}>
        <FormField
          autoComplete="email"
          id="email"
          label="E-Mail"
          onChange={(event) =>
            setFormValues((currentValues) => ({
              ...currentValues,
              email: event.target.value,
            }))
          }
          placeholder="name@example.com"
          type="email"
          value={formValues.email}
        />
        <FormField
          autoComplete="current-password"
          id="password"
          label="Passwort"
          onChange={(event) =>
            setFormValues((currentValues) => ({
              ...currentValues,
              password: event.target.value,
            }))
          }
          placeholder="Dein Passwort"
          type="password"
          value={formValues.password}
        />
      </div>

      <Button type="submit">Einloggen</Button>
    </form>
  );
};
