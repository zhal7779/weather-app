import HomeButton from '@/components/homeButton';
import { getForecast } from '@/utills/getForecast';
import Style from '../../style/detail.module.css';

type Props = {
  params: {
    location: string;
  };
  searchParams: {
    name: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `Toaday's weather - ${params.location}`,
    description: `${params.location}오늘의 날씨를 알려드립니다.`,
  };
}

export default async function Detail({ params, searchParams }: Props) {
  const data = await getForecast(params.location, 7);

  return (
    <>
      <h1>{searchParams.name}의 일주일 날씨</h1>
      <ul className={Style.list}>
        {data.forecast.forecastday.map((day) => (
          <li key={day.date}>
            <p>
              {day.date.slice(5, 7)}월 {day.date.slice(8, 10)}일
            </p>
            <p className={Style.temp}>{day.day.avgtemp_c} ℃</p>
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  );
}
