'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

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

  return (
    <button onClick={handleClick}>
      <FontAwesomeIcon icon={faRotateRight} />
    </button>
  );
}
