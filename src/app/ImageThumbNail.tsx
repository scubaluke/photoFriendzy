import Image from 'next/image';

export function ImageThumbNail({ srcUrl }: { srcUrl: string }) {
  return (
    <Image src={srcUrl} width={500} height={500} alt='Picture of the author' />
  );
}
