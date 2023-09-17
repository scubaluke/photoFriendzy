import Image from 'next/image';
import Link from 'next/link';

import styles from '@/app/page.module.css';

export function ImageThumbNail({
  srcUrl,
  alt = `Photo from Luke and Bre's wedding!`,
  from,
  sid,
  accountSid,
}: {
  srcUrl: string;
  alt: string;
  from: string;
  sid: string;
  accountSid: string;
}) {
  return (
    <Link
      href={{
        pathname: '/photo',
        query: {
          srcUrl,
          alt,
          from,
          sid,
          accountSid,
        },
      }}
    >
      <Image
        src={srcUrl}
        width={500}
        height={500}
        alt={alt}
        layout='responsive'
        placeholder='blur'
        blurDataURL={srcUrl}
        quality={10}
        className={styles.customImage}
      />
    </Link>
  );
}
