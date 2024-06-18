'use client'

import React from "react";

import { useSearchParams } from 'next/navigation'
import User from "@/model/User";
import UserCard from "@/components/UI/user/UserCard";


const getUser = async (search_id: string) => {

    const response = await fetch('/api/user', {
        method: "POST",
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
            user_id: search_id
        })
    })

    const {data} = await response.json()
    if (response.ok) {
        return {data: data as User}
    } else {
        return Promise.reject(new Error('Failed to retrieve user list'))
    }

}

const UserPage = () =>{
    const searchParams = useSearchParams()
    const [user, setUser] = React.useState<User>()

    React.useEffect(()=>{
        let search_id = searchParams.get('user_id') || ''
        getUser(search_id)
            .then(res=>setUser(res?.data))
    },[searchParams])

    return (
        <UserCard user_name={user?.user_name || ""} user_id={user?.user_id || ""} user_email={user?.user_email|| ""} links={user?.links||[]}/>
    )
}

export default UserPage
