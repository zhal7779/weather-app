import Link from 'next/link';
import { getCurrentWeather } from '@/utills/getCurrentWether';
import { getTime } from '@/utills/getTime';
import RevalidateButton from '@/components/revalidateButton';
import Style from '../style/home.module.css';

export default async function Home() {
  const data = await getCurrentWeather('seoul');
  const time = await getTime(data.location.tz_id);

  return (
    <>
      <header className={Style.header}>오늘의 날씨 ⛅</header>
      <main>
        <p className={Style.text}>시간 : {time.dateTime}</p>
        <ul className={Style.list}>
          <li>
            <Link href="/seoul?name=서울">서울</Link>
            <span>{data.current.condition.text}</span>
          </li>
          <li>
            <Link href="/tokyo?name=도쿄">도쿄</Link>
          </li>
          <li>
            <Link href="/NYC?name=뉴욕">뉴욕</Link>
          </li>
          <li>
            <Link href="/london?name=런던">런던</Link>
          </li>
        </ul>
        <RevalidateButton tag={'time'} />
      </main>
    </>
  );
}
