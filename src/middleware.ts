import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname; // Get the current path
    const isPublicPath = path === '/login' || path === '/signup'; // Define public paths
    const token = request.cookies.get('token')?.value || ''; // Get the token from cookies

    // Allow access to the home page `/` for everyone
    if (path === '/') {
        return NextResponse.next();
    }

    // Redirect logged-in users trying to access public pages to `/profile`
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/profile', request.nextUrl));
    }

    // Redirect non-logged-in users trying to access protected pages to `/login`
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    // Allow the request to proceed if no conditions are met
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/profile/:id*', // Protect the profile page and its sub-paths
        '/login',        // Protect the login page
        '/signup',       // Protect the signup page
    ],
};
