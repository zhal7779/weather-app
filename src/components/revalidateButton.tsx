'use client';

type Props = {
  tag: string;
};

export default function RevalidateButton({ tag }: Props) {
  const handleClick = async () => {
    const res = await fetch('/api/revalidate?tag=' + tag, {
      method: 'POST',
    });

    const result = await res.json();
    console.log(result);

    window.location.reload();
  };

  return <button onClick={handleClick}>업데이트</button>;
}
