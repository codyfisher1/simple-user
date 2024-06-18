'use server'

import { NextResponse } from "next/server";
import UsersData from "@/data/UsersData";


const getUserNode = (user_id:string)=>{
    const userNodes = UsersData().nodes
    return userNodes.find(node=>node.user_id===user_id)
}

export const POST = async (req: Request) => {
    const {user_id} = await req.json()
    let api_response

    const userNode = getUserNode(user_id)
    console.log(userNode)
    if (userNode) {
        api_response = NextResponse.json({data: userNode})
    } else {
        api_response = NextResponse.json({error: 'unable to find user data'}, {status: 500})
    }

    return api_response
}