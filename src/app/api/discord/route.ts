import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { email } = await req.json();

    if (!email) {
        return NextResponse.json({ message: "Nie wszystkie pola są wypełnione" });
    }

    await axios.post(process.env.DISCORD_WEBHOOK_URL as string, {
        "username": "guguGaga Newsletter",
        "embeds": [
            {
                "color": 15258703,
                "fields": [
                    {
                        "name": "Email",
                        "value": email,
                        "inline": true
                    },
                    {
                        "name": "Data wysłania",
                        "value": new Date().toLocaleString(),
                        "inline": true
                    },
                    {
                        "name": "Wiadomość",
                        "value": "Jakis frajer sie znowu nabrał na newslettera"
                    }
                ],
            }
        ]
    })
    return NextResponse.json({ message: "Wiadomość została wysłana" });
}