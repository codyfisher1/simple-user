'use client'

const ListCardFormLabel = ({user_id,user_email}:{user_id:string, user_email:string })=> {
    return (
        <div className='flex flex-col'>
            <div className="text-xl">{user_id}</div>
            <div className="text-sm">{user_email}</div>
        </div>
    )
}

export default ListCardFormLabel