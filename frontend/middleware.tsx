import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    if (pathname.startsWith('/dashboard')) {
        const token = request.cookies.get('authToken')?.value
        const rawUser = request.cookies.get('user')?.value

        if (!token || !rawUser) {
            return NextResponse.redirect(new URL('/404', request.url))
        }

        try {
            const user = JSON.parse(decodeURIComponent(rawUser))
            if (user.email !== 'Admin@gmail.com') {
                return NextResponse.redirect(new URL('/404', request.url))
            }
        } catch {
            return NextResponse.redirect(new URL('/404', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard'],
}
