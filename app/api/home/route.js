import { color } from "motion";
import { NextResponse } from "next/server";

const corsHeaders = {
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_API_END_POINT, // or a specific origin
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

export async function GET(request) {
    return NextResponse.json(JSON.stringify([
        {
            block_id: 1,
            block_type: 'hero',
            text: 'E-COURSE PLATFORM',
            title: {
                line_1: 'Learning and',
                line_2: 'teaching online,',
                line_3: 'made easy.',
            },
            description: 'Practice your English and learn new things with the platform.',
            link: '/about',
            link_text: 'About platform',
            points: [
                {
                    id: 1,
                    label: 'Popular words',
                    count: 600,
                    icon: 'flash',
                },
                {
                    id: 2,
                    label: 'Mini-games',
                    count: 20,
                    icon: 'controller',
                }
            ],
            images: [
                {
                    id: 1,
                    src: '/home/banner_element.svg',
                    mobSrc: '/home/banner_element.svg',
                    alt: 'element' 
                },
                {
                    id: 2,
                    src: '/home/banner_charector.svg',
                    mobSrc: '/home/banner_charector.svg',
                    alt: 'charector'
                },
                {
                    id: 3,
                    src: '/home/banner_plant.svg',
                    mobSrc: '/home/banner_plant_mob.svg',
                    alt: 'plant' 
                }
            ]
        },
        {
            block_id: 2,
            block_type: 'courses',
            title: 'Learn a language in a playful way',
            description: 'Make learning words more fun with mini-games.',
            image: '/home/charector_2.svg',
            alt: 'charector 2',
            options: [
               {
                id: 1,
                type: 'sprint',
                label: 'Sprint',
                image: '/home/shoes.svg',
                alt: 'shoes',
                color: '#F2D4DC',
               },
               {
                id: 2,
                type: 'call',
                label: 'Audio call',
                image: '/home/speaker.svg',
                alt:'speaker',
                color: '#C3DCE3',
               }
            ]
        },
        {
            block_id: 3,
            block_type: 'vocabulary',
            title: 'Increase your vocabulary',
            description: 'Traditional and new effective approaches to word study',
            link: '/vocabulary',
            link_text: 'Textbook',
            image: '/home/charector_3.svg',
            mobImage: '/home/charector_3_mob.svg',
            alt: 'charector 3',
        },
        {
            block_id: 4,
            block_type: 'statistics',
            title: 'Watch your progress every day',
            description: 'Save statistics on your achievements, words learned, and mistakes',
            link: '/statistics',
            link_text: 'Statistics',
            image: '/home/charector_4.svg',
            alt: 'charector 4'
        }
    ]), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        }
    })
}

export async function OPTIONS() {
    return new NextResponse(null, {
      status: 204,
      headers: corsHeaders,
    })
}