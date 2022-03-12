import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  if (!req.nextUrl.search) {
    const url = req.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
