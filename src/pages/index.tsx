import styles from '../app/page.module.css';
import Photos from './Photos';

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.header}> Luke and Bre 9.23.23</h2>
      <Photos />
    </main>
  );
}
