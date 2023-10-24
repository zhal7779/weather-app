import HomeButton from '@/components/homeButton';
import { getForecast } from '@/utills/getForecast';

type Props = {
  params: {
    location: string;
  };
};
export default async function Detail({ params }: Props) {
  const location = params.location === 'seoul' ? '서울' : '';
  const data = await getForecast(params.location);

  return (
    <>
      <h1>{location}의 일주일 날씨</h1>
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
