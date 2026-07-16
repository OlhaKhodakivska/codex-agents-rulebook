import { LoginForm } from './components/organisms/LoginForm/LoginForm';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <main className={styles.app}>
      <LoginForm />
    </main>
  );
};

export default App;
