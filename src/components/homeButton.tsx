'use client';

import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Style from '../style/detail.module.css';
export default function HomeButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };
  return (
    <button onClick={handleClick} className={Style.home_btn}>
      <FontAwesomeIcon icon={faHouse} />
    </button>
  );
}
