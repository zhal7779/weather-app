import Link from 'next/link';
import { getTime } from '@/utills/getTime';
import RevalidateButton from '@/components/revalidateButton';
import Style from '../style/home.module.css';
import CurrentWeather from '@/components/currentWeather';
import { getForecast } from '@/utills/getForecast';

const getWeather = async (location: string, day: number) => {
  const res = await getForecast(location, day);

  return {
    condition: res.current.condition.text,
    temp: res.current.temp_c,
    maxTemp: res.forecast.forecastday[0].day.maxtemp_c,
    minTemp: res.forecast.forecastday[0].day.mintemp_c,
  };
};

export default async function Home() {
  const seoulData = await getWeather('seoul', 1);
  const tokyoData = await getWeather('tokyo', 1);
  const nycData = await getWeather('NYC', 1);
  const londonData = await getWeather('london', 1);

  const timeData = await getTime('Asia/Seoul');
  const time = timeData.dateTime.slice(0, -8);

  return (
    <div className={Style.wrapper}>
      <header className={Style.header}>오늘의 날씨 ⛅</header>
      <main className={Style.main}>
        <section className={Style.update_section}>
          <p className={Style.text}>업데이트 시간 : {time}</p>
          <RevalidateButton tag={'time'} />
        </section>
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
      </main>
    </div>
  );
}
