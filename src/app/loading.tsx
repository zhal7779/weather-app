import Image from 'next/image';

export default function Loading() {
  return (
    <>
      <Image
        src="/loading-spinner.gif"
        alt="loading"
        width={100}
        height={100}
      />
      ;
    </>
  );
}
