import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ message: "Nie wszystkie pola są wypełnione" });
    }

    await axios.post(process.env.DISCORD_WEBHOOK_URL as string, {
        "username": "guguGaga",
        "avatar_url": "discordBot.png",
        "title": "Nowa wiadomość",
        "description": new Date().toLocaleString(),
        "embeds": [
            {
                "color": 15258703,
                "fields": [
                    {
                        "name": "Imię",
                        "value": name,
                        "inline": true
                    },
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
                        value: message
                    }
                ],
            }
        ]
    })
    return NextResponse.json({ message: "Wiadomość została wysłana" });
}