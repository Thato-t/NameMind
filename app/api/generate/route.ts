import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request){
    const { description } = await req.json();
    console.log(description)
    if (!description){
        return NextResponse.json({error: 'input required'}, {status: 400})
    }
    try {        
        const response = await client.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'You are a creative assistant that generate catchy, available domain name ideas.'
                },
                {
                    role: 'user',
                    content: `Generate 5 domain name ideas for ${description}`
                }
            ]
        });
        console.log(response.choices[0].message?.content);
        return NextResponse.json(
            JSON.stringify({ names: response.choices[0].message?.content}),
            { status: 200}
        )
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to generate names'}, { status:500 })
        
    }

}