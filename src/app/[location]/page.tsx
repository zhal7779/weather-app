import HomeButton from '../components/homeButton';

type Props = {
  params: {
    location: string;
  };
};
export default function detail({ params }: Props) {
  return (
    <>
      <h1>{params.location}</h1>
      <HomeButton />
    </>
  );
}
