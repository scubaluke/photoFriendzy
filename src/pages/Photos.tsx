import { AxiosError } from 'axios';
import useSWR from 'swr';

import { fetcher } from '@/app/fetcher';
import { ImageThumbNail } from '@/app/ImageThumbNail';
import styles from '@/app/page.module.css';

interface YourDataType {
  uris: Array<string>;
}
export default function Photos() {
  const { data } = useSWR<YourDataType, AxiosError>('/api/page', fetcher);
  const images = data?.uris.map((uri, i) => (
    <ImageThumbNail key={i} srcUrl={`https://api.twilio.com${uri}`} />
  ));
  return <main className={styles.main}>{images}</main>;
}
