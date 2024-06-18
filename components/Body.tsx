'use client'

import React from "react";
import User from "@/model/User";
import ListCard from "@/components/UI/ListCard";

const getUserList = async ()=>{
    const response = await fetch('/api/users',{
        method:"GET",
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
    })

    const { data } = await response.json()
    if (response.ok){
        return { data: data.map((userData:User)=>(userData))}
    } else {
        return Promise.reject(new Error('Failed to retrieve user list'))
    }

}

const Body = () =>{
    const [userList, setUserList] = React.useState([])

    React.useEffect(()=>{
        getUserList()
            .then(res=>setUserList(res?.data))
    },[])

    return (
        <div className="flex flex-col">
            {
                userList.map((user: User)=>(<ListCard user={user}/>))
            }
        </div>
    )
}

export default Body;