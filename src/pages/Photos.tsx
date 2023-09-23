import { AxiosError } from 'axios';
import useSWR from 'swr';

import { ErrorResponse } from '@/app/interfaces.ts';
import { fetcher } from '@/app/fetcher';
import { ImageThumbNail } from '@/components/ImageThumbNail';
import { Loader } from '@/components/Loader';
import styles from '@/app/page.module.css';

interface Image {
  url: string;
  from: string;
  message: string;
  sid: string;
  accountSid: string;
}
interface ImagesResponse {
  images: Array<Image>;
  message: string;
  from: string;
}

export default function Photos() {
  const limit = 10000;
  const { data, isValidating, error } = useSWR<
    ImagesResponse,
    AxiosError<ErrorResponse, unknown>
  >(`/api/images?limit=${limit}`, fetcher);

  let images;
  if (data) {
    images = data.images.map(({ url, message }, i) => (
      <ImageThumbNail
        key={i}
        alt={message}
        srcUrl={`https://api.twilio.com${url}`}
      />
    ));
  }

  if (isValidating) {
    return <Loader loading={isValidating} />;
  }

  if (error) {
    return <div>{error.response?.data.message}</div>;
  }

  return (
    <>
      <main className={styles.imageContainer}>{images}</main>
    </>
  );
}
