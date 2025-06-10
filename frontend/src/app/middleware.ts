// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store'
      });
      
      if (!response.ok) throw new Error('Auth failed');
      
      const data = await response.json();
      if (data.user?.email?.toLowerCase() !== 'admin@gmail.com') {
        return NextResponse.redirect(new URL('/404', request.url));
      }
      
      // Add user role to headers for client-side use
      const headers = new Headers(request.headers);
      headers.set('x-user-role', 'admin');
      
      return NextResponse.next({ request: { headers } });
    } catch {
      // Removed unused error parameter
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('token');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*']
};