import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { subdomain, platform } = await req.json();

    if(!subdomain || !platform){
        return NextResponse.json({error: 'subdomain and platform are required'}, {status: 400}) 
    }
    const url = `https://${subdomain}.${platform}`
    try {
        const res = await fetch(url, {method: 'HEAD'})
        const status = res.status === 404 ? 'Available' : 'Taken'
        return NextResponse.json({ status });

    } catch (error) {
        return NextResponse.json({status: 'available'})
    }
}
