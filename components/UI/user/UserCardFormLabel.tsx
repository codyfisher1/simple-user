'use client'

const UserCardFormLabel = ({label,value}:{label:string, value:string })=> {
    return (
        <div className='flex flex-col'>
            <div className="text-3xl">{label}</div>
            <div className="text-xl">{value}</div>
        </div>
    )
}

export default UserCardFormLabel