import { NextResponse } from 'next/server';
import { pipeline } from '@xenova/transformers';
import path from 'path'

// process.env.HF_HOME = path.resolve('C:/Users/alban/.cache/huggingface');

let generator: any;
async function loadModel() {
    if (!generator){
        generator = await pipeline('text-generation', 'Xenova/distilgpt2');
    }
    console.log('loadModal ran');
    return generator;
}

export async function POST(req: Request){
    const instructions: string = 'You are a creative domain name generator. Based on the user\’s description, suggest short, unique, and brandable domain names. Avoid generic results, check for readability, and prioritize modern, memorable styles. Return results as a list of domain name options.'
    const { description } = await req.json();

    if (!description){
        return NextResponse.json({error: 'input required'}, {status: 400})
    }
    try {        
        const prompt: string = `${instructions} for: ${description}`;
        const gen = await loadModel();
        const response = await gen(prompt, {
            max_new_tokens: 40,
            temperature: 0.8,
            top_k: 50
        });
        const data = await response.json();
        console.log(data)
        return NextResponse.json({ data, status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to generate names'}, { status:500 })
        
    }

}