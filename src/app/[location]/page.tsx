import HomeButton from '@/components/homeButton';
import { getForecast } from '@/utills/getForecast';

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
  const data = await getForecast(params.location);
  return (
    <>
      <h1>{searchParams.name}의 일주일 날씨</h1>
      <ul>
        {data.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date} / {day.day.avgtemp_c}도
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  );
}
