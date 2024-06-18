import UserLink from "@/model/UserLink";

interface User {
    user_id: string
    user_email: string
    links: UserLink[]
}

export default User