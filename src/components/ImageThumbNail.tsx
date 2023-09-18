import Image from 'next/image';
import Link from 'next/link';

import styles from '@/app/page.module.css';

export function ImageThumbNail({
  srcUrl,
  alt = `Photo from Luke and Bre's wedding!`,
}: {
  srcUrl: string;
  alt: string;
}) {
  return (
    <Link
      href={{
        pathname: '/photo',
        query: {
          srcUrl,
          alt,
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
