import { NextResponse } from "next/server";
import UsersData from "@/data/UsersData";


export const GET = ((req:Request) => {
    let api_response

    const userNodes = UsersData().nodes
    if (userNodes){
        api_response = NextResponse.json({ data: userNodes })
    } else {
        api_response = NextResponse.json({error: 'unable to get user data'},{ status: 500 })
    }

    return api_response
})