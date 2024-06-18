"use client"

import Link from "next/link";
import UserCardFormLabel from "@/components/UI/user/UserCardFormLabel";
import User from "@/model/User";
import FriendCard from "@/components/UI/user/FriendCard";

const UserCard = (user:User)=>{
    return (
        <div className='flex flex-col p-6 m-6 border-4 border-white rounded-2xl min-w-xl min-h-96'>
            <Link href='/'> --Back--</Link>
            <div className="flex flex-row gap-10 py-2">
                <UserCardFormLabel label="Username" value={user.user_id}/>
                <UserCardFormLabel label="Email" value={user.user_email}/>
            </div>
            <div className="py-8">
                <div className="text-2xl">Friends</div>
                <div className="flex flex-wrap gap-2 ">
                    {user.links.map((link) => <FriendCard user_id={link.user_id} relationship={link.relationship}/>)}
                </div>
            </div>
        </div>
    )

}

export default UserCard