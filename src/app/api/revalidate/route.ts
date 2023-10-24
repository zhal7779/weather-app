import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get('tag');
  if (!tag) throw new Error('태그는 필수 입니다.');

  //tag가 달려있는 fetch 요청을 재검증 해준다.
  revalidateTag(tag);

  return NextResponse.json({ message: '재검증에 성공했습니다', tag });
}
