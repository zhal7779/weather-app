'use client';

import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function HomeButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };
  return (
    <button onClick={handleClick}>
      <FontAwesomeIcon icon={faHouse} />
    </button>
  );
}
