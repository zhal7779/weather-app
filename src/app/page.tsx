import Link from 'next/link';
import { getCurrentWeather } from '@/utills/getCurrentWether';
import { getTime } from '@/utills/getTime';
import RevalidateButton from '@/components/revalidateButton';
import Style from '../style/home.module.css';
import CurrentWeather from '@/components/currentWeather';

export default async function Home() {
  const seoulData = await getCurrentWeather('seoul');
  const tokyoData = await getCurrentWeather('tokyo');
  const nycData = await getCurrentWeather('NYC');
  const londonData = await getCurrentWeather('london');
  const time = await getTime(seoulData.location.tz_id);
  return (
    <>
      <header className={Style.header}>오늘의 날씨 ⛅</header>
      <main>
        <p className={Style.text}>현재 시간 : {time.dateTime}</p>
        <ul className={Style.list}>
          <li>
            <Link href="/seoul?name=서울">서울</Link>
            <CurrentWeather data={seoulData} />
          </li>
          <li>
            <Link href="/tokyo?name=도쿄">도쿄</Link>
            <CurrentWeather data={tokyoData} />
          </li>
          <li>
            <Link href="/NYC?name=뉴욕">뉴욕</Link>
            <CurrentWeather data={nycData} />
          </li>
          <li>
            <Link href="/london?name=런던">런던</Link>
            <CurrentWeather data={londonData} />
          </li>
        </ul>
        <RevalidateButton tag={'time'} />
      </main>
    </>
  );
}
