import '../style/global.css';

export const metadata = {
  title: "Toaday's weather",
  description: '오늘의 날씨를 알려드립니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
