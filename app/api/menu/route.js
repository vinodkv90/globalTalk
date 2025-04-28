import { NextResponse } from "next/server";

const corsHeaders = {
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_API_END_POINT, // or a specific origin
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

export async function GET(request) {
    return NextResponse.json(JSON.stringify([
        {
            id: 1,
            label: 'Home',
            link: '/',
            children: []
        },
        {
            id: 2,
            label: 'Textbook',
            link: '/textbook',
            children: []
        },
        {
            id: 3,
            label: 'Statistics',
            link: '/statistics', 
            children: []
        },
        {
            id: 4,
            label: 'Games',
            link: '/games',
            children: [
                {
                    id: 1,
                    label: 'Audio call',
                    link: '/games/audio-call',
                },
                {
                    id: 2,
                    label: 'Sprint',
                    link: '/games/sprint',
                },
            ] 
        }
    ]), {
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