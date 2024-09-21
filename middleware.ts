import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export { default } from 'next-auth/middleware'
import { getToken } from 'next-auth/jwt'
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.SECRET })
    const url = request.nextUrl
    if (token && (url.pathname.startsWith('/admin/sign-in') || url.pathname.startsWith('/sign-up')) || url.pathname.startsWith('/verify')) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url))

    }
    if (!token && url.pathname.startsWith('/admin/dashboard')) {
        return NextResponse.redirect(new URL('/admin/sign-in', request.url))

    }
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/admin/sign-in', '/sign-up', '/', '/admin/dashboard/:path*', '/verify/:path*']
}