import Link from 'next/link';
import './global.css';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const getCurrentWeather = async () => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Seoul&aqi=no`
  );

  if (!res.ok) {
    if (!res.ok) throw new Error('날씨 정보를 가져올 수 없습니다.');
  }
  return res.json();
};

export default async function Home() {
  const data = await getCurrentWeather();
  console.log(data.location);

  return (
    <>
      <h1>main</h1>
      <ul>
        <li>
          <Link href="/seoul">서울</Link>
        </li>
        <li>
          <Link href="/newyork">뉴욕</Link>
        </li>
        <li>
          <Link href="/london">런던</Link>
        </li>
      </ul>
    </>
  );
}
