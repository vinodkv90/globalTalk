import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    const { username, password } = body;
    if(username === 'admin' && password === 'admin123') {
        const response = NextResponse.json(JSON.stringify({
            status: 200,
            message: 'Login successful',
            data: {
                jwt: '1234567890',
                name: 'Vinod',
            }
        }));

        response.cookies.set('jwt', '1234567890', {
            httpOnly: true,
            secure: true,
            sameSite: 'strict', 
            maxAge: 60 * 60 * 24 * 7,
            // path: '/'
        })

        return response;
    } else {
        return NextResponse.json(JSON.stringify({
            status: 401,
            message: 'Invalid credentials',
            data: {}
        })); 
    }
}