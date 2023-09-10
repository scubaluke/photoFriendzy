import Image from 'next/image';
import styles from '../app/page.module.css';
import Photos from './Photos';

export default function Home() {
  return (
    <main className={styles.main}>
      HOME
      <Photos />
    </main>
  );
}
