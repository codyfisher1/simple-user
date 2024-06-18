"use client"

import Link from "next/link";
import UserLink from "@/model/UserLink";

const FriendCard = (user_link:UserLink)=>{

    return (
        <div className='flex flex-row p-4 gap-6 border-4 border-white rounded-md min-w-sm'>
            <div className="flex-col">
                <div className="text-xl">
                    {user_link.user_id}
                </div>
                <div className="text-sm">
                    {user_link.relationship}
                </div>

            </div>
            <Link href={{
                pathname: "/user",
                query: {
                    "user_id": user_link.user_id
                }
            }}>
                --GoTo--
            </Link>
        </div>
    )

}

export default FriendCard