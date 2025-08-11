import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { subdomain } = await req.json();
    
    if(!subdomain){
        return NextResponse.json({error: 'subdomain and platform are required'}, {status: 400}) 
    }
    const url = `https://${subdomain}`
    try {
        const res = await fetch(url, {method: 'HEAD'})
        const status = res.status === 404 ? 'Available' : 'Taken'
        return NextResponse.json({ status }, {status: 200});

    } catch (error) {
        console.error('Error found', error)
        return NextResponse.json({status: 'available'}, {status: 500})
    }
}
