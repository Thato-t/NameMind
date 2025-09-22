import { NextResponse } from 'next/server';
import { signIn, signUp } from '../../../lib/db/queries';
import { supabaseAdmin } from '../../../lib/supabase/server';

export async function POST(req: Request){
    const { name, username, email, password } = await req.json();
    if (!name && !username && !email && password){
        console.log('All input are required');
        return NextResponse.json({ message: 'All inputs are required'}, { status: 400 });
    }
    try {
    } catch (error) {
        console.error('error found', error);
        return NextResponse.json({ message: error}, { status: 500 })
    }

}

export async function GET(req: Request){
    const { email, password } = await req.json();
    if (!email && password){
        console.log('All input are required');
        return NextResponse.json({ message: 'All inputs are required'}, { status: 400 });
    }
    try {
    } catch (error) {
        console.error('error found', error);
        return NextResponse.json({ message: error}, { status: 500 })
    }
}