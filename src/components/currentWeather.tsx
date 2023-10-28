'use client';
import React from 'react';

type Props = {
  data: {
    current: {
      condition: { text: string };
      temp_c: number;
    };
  };
};

const CurrentWeather = ({ data }: Props) => {
  return (
    <>
      <span>{data.current.condition.text}</span>
      <span>{data.current.temp_c}℃</span>
    </>
  );
};

export default CurrentWeather;
