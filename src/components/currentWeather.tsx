import Style from '../style/home.module.css';
type Props = {
  data: {
    condition: string;
    temp: number;
    maxTemp: number;
    minTemp: number;
  };
};

const CurrentWeather = ({ data }: Props) => {
  return (
    <>
      <span>{data.condition}</span>
      <span className={Style.currentTemp}>{data.temp}℃</span>
      <div className={Style.temp}>
        <p>최저: {data.minTemp}℃</p>
        <p>최고: {data.maxTemp}℃</p>
      </div>
    </>
  );
};

export default CurrentWeather;
