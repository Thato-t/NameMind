import { NextResponse } from 'next/server';

export async function POST(req: Request){
    const instructions: string = 'You are a creative domain name generator. Based on the user\’s description, suggest short, unique, and brandable domain names. Avoid generic results, check for readability, and prioritize modern, memorable styles. Return results as a list of domain name options. Put the names and their explanations inside an array'
    const { description } = await req.json();

    if (!description){
        return NextResponse.json({error: 'input required'}, {status: 400})
    }
    const prompt: string = `${instructions} for ${description}` 
    try {        
        console.log('Model running ...');
        const response = await fetch(
            "https://router.huggingface.co/v1/chat/completions",
            {
                headers: {
                    Authorization: `Bearer ${process.env.HF_TOKEN}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    messages: [
                        {
                            role: "user",
                            content: prompt,
                        },
                    ],
                    model: "zai-org/GLM-4.5:nebius",
                }),
            }
        );
        if (!response.ok){
            return NextResponse.json(
                { error: `Request failed: ${response.status}` },
                { status: response.status }
            )
        }
        console.log(response);
        const rawRes = await response.text();
        const jsonStart = rawRes.indexOf('[');  
        const jsonEnd = rawRes.indexOf(']') + 1;        
        const jsonString = rawRes.slice(jsonStart, jsonEnd);
    
        let domainArr;
        try{
            domainArr = JSON.parse(jsonString);
        }catch(err){
            console.error('Failed to parse JSON:', err);
        }
        console.log(domainArr);
        return NextResponse.json({ domainArr }, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to generate names'}, { status:500 })
        
    }

}