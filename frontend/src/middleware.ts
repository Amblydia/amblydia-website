import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('jwt');
  
  const currentPath = request.nextUrl.pathname;
  
  return NextResponse.next()
}