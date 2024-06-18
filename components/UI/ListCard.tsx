'use client'

import Link from "next/link";
import User from "@/model/User";
import ListCardFormLabel from "@/components/UI/ListCardFormLabel";


const ListCard = ({user}: {user:User})=>{

    return (
        <div className='flex flex-row p-6 m-6 border-4 border-white rounded-2xl max-w-xl items-center'>
            <div className='flex-grow'>
                <ListCardFormLabel user_email={user.user_email} user_id={user.user_id}/>
            </div>
            <Link href={{
                pathname: "/user",
                query: {
                    "user_id": user.user_id
                }
            }}>
                --Details--
            </Link>
        </div>
    )
}

export default ListCard