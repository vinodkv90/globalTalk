import { NextResponse } from "next/server";

const corsHeaders = {
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_API_END_POINT, // or a specific origin
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

export async function GET(request) {
    return NextResponse.json(JSON.stringify({
        id: 1,
        links: [
            {
                id: 1,
                url: '/',
                title: 'Home',
            },
            {
                id: 2,
                url: '/textbook',
                title: 'Textbook',
            },
            {
                id: 3,
                url: '/statistics',
                title: 'Statistics',
            },
            {
                id: 4,
                url: '/sprint',
                title: 'Sprint',
            },
            {
                id: 5,
                url: '/audio-call',
                title: 'Audio-call',
            },
        ],
        team: [
            {
                id: 1,
                name: 'Alex',
            },
            {
                id: 2,
                name: 'Gabriel',
            },
            {
                id: 3,
                name: 'Marcus',
            }
        ],
        iconList: [
            {
                id: 1,
                icon: 'github',
                url: 'https://github.com'
            },
            {
                id: 2,
                icon: 'linkedin',
                url: 'https://linkedin.com',
            },
            {
                id: 3,
                icon: 'youtube',
                url: 'https://youtube.com',
            },
        ],
        copyright: 'GlobalTalk. Project for GlobalTalk.',
    }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        }
    });
}

export async function OPTIONS() {
    return new NextResponse(null, {
      status: 204,
      headers: corsHeaders,
    })
}