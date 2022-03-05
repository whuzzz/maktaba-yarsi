import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

type NextApiRequestWithNextUrl = NextApiRequest & {
  nextUrl: object;
};

export default function middleware(req: NextApiRequestWithNextUrl) {
  if (!req.nextUrl.search) {
    return NextResponse.redirect('/');
  }

  return NextResponse.next();
}
