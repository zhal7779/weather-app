import Link from 'next/link';
import './global.css';
import { getCurrentWeather } from '@/utills/getCurrentWether';
import { getTime } from '@/utills/getTime';
import RevalidateButton from '@/components/revalidateButton';

export default async function Home() {
  const data = await getCurrentWeather('seoul');
  const time = await getTime(data.location.tz_id);

  return (
    <>
      <h1>오늘의 날씨</h1>
      <h2>{time.dateTime}</h2>
      <ul>
        <li>
          <Link href="/seoul">서울</Link>
          <span>{data.current.condition.text}</span>
        </li>
        <li>
          <Link href="/tokyo">도쿄</Link>
        </li>
        <li>
          <Link href="/newyork">뉴욕</Link>
        </li>
        <li>
          <Link href="/london">런던</Link>
        </li>
      </ul>
      <RevalidateButton tag={'time'} />
    </>
  );
}
