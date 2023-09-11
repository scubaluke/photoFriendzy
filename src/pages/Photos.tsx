import { AxiosError } from 'axios';
import useSWR from 'swr';

import { fetcher } from '@/app/fetcher';
import { ImageThumbNail } from '@/app/ImageThumbNail';
import { Loader } from '@/components/Loader';
import styles from '@/app/page.module.css';

interface UriResponse {
  uris: Array<string>;
}
interface ErrorResponse {
  message: string;
}

export default function Photos() {
  const limit = 100;
  const { data, isValidating, error } = useSWR<
    UriResponse,
    AxiosError<ErrorResponse, unknown>
  >(`/api/image/uris?limit=${limit}`, fetcher);

  let images;
  if (data && data.uris) {
    images = data.uris.map((uri, i) => (
      <ImageThumbNail key={i} srcUrl={`https://api.twilio.com${uri}`} />
    ));
  }

  if (isValidating) {
    return <Loader />;
  }

  if (error) {
    return <div>{error.response?.data.message}</div>;
  }

  return (
    <>
      <main className={styles.main}>{images}</main>
    </>
  );
}
