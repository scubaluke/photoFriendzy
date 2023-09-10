import { AxiosError } from 'axios';
import useSWR from 'swr';

import { fetcher } from '@/app/fetcher';
import { ImageThumbNail } from '@/app/ImageThumbNail';
import styles from '@/app/page.module.css';

interface UriResponse {
  uris: Array<string>;
}
interface ErrorResponse {
  message: string;
}

export default function Photos() {
  const limit = 50;
  const { data, error: photoError } = useSWR<
    UriResponse,
    AxiosError<ErrorResponse, unknown>
  >(`/api/image/uris?limit=${limit}`, fetcher);

  let images;
  if (data && data.uris) {
    images = data.uris.map((uri, i) => (
      <ImageThumbNail key={i} srcUrl={`https://api.twilio.com${uri}`} />
    ));
  }

  return (
    <>
      {photoError && <div>{photoError.response?.data.message}</div>}
      <main className={styles.main}>{images}</main>
    </>
  );
}
