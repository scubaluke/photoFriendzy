import styles from '../app/page.module.css';
import Photos from './Photos';

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.header}> Luke and Bre 9.23.23</h2>
      <h3 className={styles.header}>
        Thank you for being part of our special day ❤️
      </h3>
      <h3 className={styles.header}>
        Share your photos by texting them to{' '}
        <a href='sms:+12516992323'>251 699 2323</a>
      </h3>
      <Photos />
    </main>
  );
}
