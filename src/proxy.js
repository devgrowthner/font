import { NextResponse } from 'next/server';

export function proxy(request) {
  if (request.nextUrl.hostname !== 'www.zynextechnologies.com.au') {
    return NextResponse.next();
  }

  const canonicalUrl = new URL(request.nextUrl);
  canonicalUrl.hostname = 'zynextechnologies.com.au';

  return NextResponse.redirect(canonicalUrl, 308);
}